module.exports = {
  // parser: require('postcss-scss'),
  plugins: [
    require('postcss-reporter'),
    require('postcss-custom-media'),
    require('postcss-custom-properties'),
    require('saladcss-bem')({
      shortcuts: {
        component: 'c',
        descendent: 'd',
        modifier: 'm',
        when: 'w',
      },
    }),
    // require('precss'),
    require('postcss-cssnext'),
    process.env.NODE_ENV === 'production' ? require('cssnano')({ autoprefixer: false }) : null,
  ],
  sourceMap: true,
};
