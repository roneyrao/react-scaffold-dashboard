import configParser from 'opinionated-config-parser';

const path = require('path');
const merge = require('webpack-merge');

global.Debug = require('debug')('build');

global.IsDevServer = path.basename(require.main.filename) === 'webpack-dev-server.js';

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'development';
}

global.IsProduct = process.env.NODE_ENV === 'production';

// read configs
const rawCfg = require('require-json5')(path.resolve(__dirname, './.cfg.json5')); // for eslint in editor

function postProcessCfg(cfg) {
  // fix missed fields;
  if (cfg.publicPath) {
    if (!cfg.publicPath.endsWith('/')) {
      cfg.publicPath += '/';
    }
  } else {
    cfg.publicPath = '';
  }

  if (!cfg.outDir) {
    cfg.out_dir = 'build';
  }
  cfg.outDir = path.resolve(__dirname, cfg.outDir);

  if (!cfg.srcDir) {
    cfg.src_dir = 'src';
  }
  cfg.srcDir = path.resolve(__dirname, cfg.srcDir);

  if (cfg.entry && !cfg.entry.startsWith('./')) {
    cfg.entry = `./${cfg.entry}`;
  }

  if (cfg.alias) {
    Object.entries(cfg.alias).forEach(([K, v]) => {
      cfg.alias[K] = path.resolve(cfg.srcDir, v);
    });
  }
}

const { cfg, stringifiedCfg, target } = configParser(rawCfg, process.env.TARGET, postProcessCfg);

global.CFG = cfg;
global.CFG_STRINGIFIED = stringifiedCfg;
global.CFG_TARGET = target;

const wpCfgCmm = require('./webpack/common.js');

const wpCfgEnv = IsProduct
  ? require('./webpack/production.js')
  : require('./webpack/development.js');

const wpCfg = merge.smart(wpCfgCmm, wpCfgEnv);

if (wpCfg.output.path === wpCfg.context) {
  throw new Error('output path collides with source path.');
}

if (!IsDevServer) {
  require('rimraf').sync(wpCfg.output.path);
}

module.exports = wpCfg;
