/*
* development specific configs;
*/

const log = require('debug')('*');
const merge = require('webpack-merge');
const webpack = require('webpack');


let development = {
  devtool: 'cheap-module-source-map',
  output: {
    filename: '[name].js',
  },
  plugins: [],
  stats: 'verbose',
};

const helper = require('webpack-devserver-helper'); // eslint-disable-line 
let mockCfg;

if (CFG.__MOCK__) {
  mockCfg = helper.parseMockConfig(CFG.__MOCK__);
  const CopyPlugin = require('copy-webpack-plugin');
  // copy even not devServer;
  development.plugins.push(new CopyPlugin([{
    from: mockCfg.folder,
    to: mockCfg.folder,
  }]));
}

// webpack-dev-server specific configs;
if (IsDevServer) {
  development = merge(development, {
    plugins: [
      // for easy identifying recompiling;
      function StampPlugin() {
        this.plugin('done', () => {
          log(`\n[${new Date().toLocaleString()}] ______Start a new compilation______\n`);
        });
      },
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
    ],
    devServer: {
      hot: true,
      disableHostCheck: true,
      contentBase: CFG.__OUT_DIR__,
      historyApiFallback: {
        verbose: true,
        index: `${CFG.__PUBLIC_PATH__}index.html`,
      },
      before: function setup(app) {
        // allow post
        app.post(`${CFG.__API_PATH__}:path`, (req, res, next) => {
          req.method = 'GET';
          next();
        });
      },
      open: true,
      openPage: CFG.__PUBLIC_PATH__ && CFG.__PUBLIC_PATH__.substr(1),
    },

  });

  if (mockCfg) {
    const mapPath = helper.staticMock(mockCfg, CFG.__PUBLIC_PATH__);
    development.devServer.historyApiFallback.rewrites = [{
      from: new RegExp(`^${CFG.__API_PATH__ || ''}([^.]+)`),
      to(ctx) {
        return mapPath(ctx.match[1]);
      },
    }];
  }


  if (CFG.__PROXIES__) {
    development.devServer.proxy = helper.parseProxies(CFG.__PROXIES__);
    Debug('CFG.__PROXIES__', development.devServer.proxy);
  }
}
module.exports = development;


if (CFG.__SERVER__) {
  const server = require('child_process').spawn(CFG.__SERVER__[0], CFG.__SERVER__[1], {
    env: {
      // local bin first;
      PATH: `${__dirname}:${process.env.PATH}`,
    },
  });

  server.stdout.on('data', (data) => {
    log(`server stdout: ${data}`);
  });

  server.stderr.on('data', (data) => {
    log(`server stderr: ${data}`);
  });

  server.on('close', (code) => {
    log(`server exited with code ${code}`);
  });
}
