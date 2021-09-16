const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'));

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  // 使用 airbnb 拓展插件规范相关库
  // prettier 已内置了许多相关插件
  extends: ['airbnb-typescript', 'prettier'],
  // 拓展和支持相关能力的插件库
  plugins: ['prettier', 'react', 'react-hooks', 'jsx-a11y', '@typescript-eslint'],
  env: {
    //指定代码的运行环境
    jest: true,
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    //指定要使用的es版本
    ecmaVersion: 6,
    //向后兼容
    createDefaultProgram: true,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      globalReturn: true,
    },
    project: './tsconfig.eslint.json',
    // project: {},
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      webpack: {
        config: './webpack/webpack.base.js',
      },
      typescript: {
        alwaysTryTypes: true,
        directory: './tsconfig.json',
      },
    },
    react: {
      version: 'detect',
    },
  },

  rules: {
    'jsx-no-lambda': 0,
    semi: [2, 'always'],
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/no-empty-interface': 0,
    'object-shorthand': [0, 'never'],
    //单引号
    quotes: 'off',
    '@typescript-eslint/quotes': 'off',
    '@typescript-eslint/no-var-requires': 0,
    'member-ordering': 0,
    'object-literal-sort-keys': 0,
    'no-shadowed-variable': 0,
    'no-consecutive-blank-lines': 0,
    'no-string-literal': 0,
    'jsx-no-multiline-js': 0,
    'jsx-boolean-value': 0,
    'arrow-parens': 0,
    'no-implicit-dependencies': 0,
    'no-submodule-imports': 0,
    'no-case-declarations': 1,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/indent': 'off',
    'jsx-alignment': 0,
    'jsx-wrap-multiline': 0,
    '@typescript-eslint/camelcase': 0,
    'prettier/prettier': ['error', prettierOptions],
    'arrow-body-style': [2, 'as-needed'],
    'class-methods-use-this': 0,
    'import/extensions': 'off',
    'no-param-reassign': 1,
    'jsx-a11y/aria-props': 2,
    'jsx-a11y/heading-has-content': 0,
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        // NOTE: If this error triggers, either disable it or add
        // your custom components, labels and attributes via these options
        // See https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-associated-control.md
        controlComponents: ['Input'],
      },
    ],
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/mouse-events-have-key-events': 2,
    'jsx-a11y/role-has-required-aria-props': 2,
    'jsx-a11y/role-supports-aria-props': 2,
    'max-len': 0,
    'newline-per-chained-call': 0,
    'no-confusing-arrow': 0,
    'no-console': 'off',
    'no-use-before-define': 0,
    'prefer-template': 2,
    'react-hooks/rules-of-hooks': 'error',
    'react/forbid-prop-types': 0,
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    //jsx 不允许显示js后缀
    'react/jsx-filename-extension': 'off',
    // 如果属性值为 true, 可以直接省略
    'react/jsx-boolean-value': 1,
    // 对于没有子元素的标签来说总是自己关闭标签
    'react/self-closing-comp': 1,
    // 当在 render() 里使用事件处理方法时，提前在构造函数里把 this 绑定上去
    'react/jsx-no-bind': 0,
    // React中函数的先后顺序
    'react/sort-comp': 'off',
    //  React组件名使用帕斯卡命名, 实例使用骆驼式命名
    'react/jsx-pascal-case': 1,
    // didmount不使用setState
    'react/no-did-mount-set-state': 0,
    // didupdate不使用setState
    'react/no-did-update-set-state': 1,
    // 禁止使用嵌套的三目运算
    'no-nested-ternary': 'off',
    // 解构赋值
    'react/destructuring-assignment': [0, 'always'],
    // 属性验证
    'react/prop-types': 'off',

    // 多余的依赖
    'import/no-extraneous-dependencies': 'off',
    // jsx关闭位置
    'react/jsx-closing-tag-location': 1,
    // 多行
    'react/jsx-wrap-multilines': 'off',
    // 一行一个表达式
    'react/jsx-one-expression-per-line': 'off',
    // will update不能使用setState
    'react/no-will-update-set-state': 1,
    // setState 使用state
    'react/no-access-state-in-setstate': 1,
    // button 需要类型
    'react/button-has-type': 1,
    // jsx 参考： https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules
    // JSX属性值强制使用双引号
    'jsx-quotes': 1,
    // 使用click必须有其他keybord事件
    'jsx-a11y/click-events-have-key-events': 'off',
    //
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    // alt
    'jsx-a11y/alt-text': 2,
    // 交互的需要role
    'jsx-a11y/no-static-element-interactions': 'off',
    // 锚无效
    'jsx-a11y/anchor-is-valid': 'warn',
    'jsx-a11y/anchor-has-content': 'warn',
    'react/jsx-no-target-blank': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-uses-vars': 2,
    'react/require-default-props': 0,
    'react/require-extension': 0,
    'require-yield': 0,
    'space-before-function-paren': 0,
    indent: 'off',
  },
  globals: {
    document: false,
    window: false,
    eruda: false,
    Stats: false,
  },
};
