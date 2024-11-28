/*
 * @Description: eslint配置
 * @Author: Boson
 * @Date: 2024-11-28 11:28:57
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    // 来启用推荐的规则 默认勾选的规则
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    // 新增，必须放在最后面, 如果eslint和prettier发生冲突了，则会关闭掉与prettier有冲突的规则，优先使用prettier认为对的规则
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
  ],
  overrides: [],
  // ESLint 默认使用Espree作为其解析器，你可以在配置文件中指定一个不同的解析器
  parser: '@typescript-eslint/parser',
  // 解析器选项配置
  parserOptions: {
    // ECMAScript 版本
    ecmaVersion: 'latest',
    // 指定为ECMAScript 模块
    sourceType: 'module',
    // 开启jsx模板支持
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    '@typescript-eslint',
    // eslint会使用prettier的规则对代码进行格式化, 注册prettier插件
    'prettier',
  ],
  rules: {
    // 函数调用时 函数名与()之间不能有空格 - 开启
    'no-spaced-func': 2,
    // 禁用var定义变量
    'no-var': 2,
    // 新增加的验证代码有没有console(不影响调式）http://eslint.cn/docs/rules/no-console
    'no-console': 0,
    // 新增加的验证代码有没有debugger(不影响调式）
    'no-debugger': 1,
    // 在创建对象字面量时不允许键重复
    'no-dupe-keys': 2,
    // 此规则是否允许直接在对象实例上调用某些方法: obj.hasOwnProperty(key)
    'no-prototype-builtins': 0,
    // 不允许存在未使用的变量
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    // 允许使用[]访问对象属性值
    'dot-notation': [0, { allowKeywords: false }],

    // 使用prettier来替换eslint的规则, 对于不符合prettier规范的写法，则提示错误
    'prettier/prettier': 2,
    // 函数定义时括号前面要有空格-never 禁止在参数的 http://eslint.cn/docs/rules/space-before-function-paren
    'space-before-function-paren': [
      'error',
      { anonymous: 'always', named: 'never', asyncArrow: 'always' },
    ],
    // 注释前后需要空格
    'spaced-comment': 2,
    '@typescript-eslint/no-explicit-any': ['off'],
  },
};
