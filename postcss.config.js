module.exports = {
  plugins: [
    require('postcss-flexbugs-fixes'),
    require('postcss-import'),
    require('postcss-preset-env'),
    require('postcss-pxtorem')({
      rootValue: 100,
      unitPrecision: 5,
      minPixelValue: 2, // 设置要替换的最小像素值
      propWhiteList: ['*'], // Enables converting of all properties – default is just font sizes.
      selectorBlackList: ['.ig-'], // 忽略的选择器   .ig-  表示 .ig- 开头的都不会转换
    }),
  ],
};
