module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "brace-style": [
      2,
      "1tbs",
      {
        allowSingleLine: false
      }
    ],
    semi: [2, "always"],
    // 控制逗号在行尾出现还是在行首出现
    "comma-style": [2, "last"],
    // 双峰驼命名格式
    "camelcase": 2,
    // 使用 === 替代 ==
    "eqeqeq": [2, "allow-null"],
    "no-const-assign": 2,//禁止修改const声明的变量
    "no-constant-condition": 2,//禁止在条件中使用常量表达式 if(true) if(1)
    "no-debugger": 2,//禁止使用debugger
    "no-else-return": 2,//如果if语句里面有return,后面不能跟else语句
    "no-empty": 2,//块语句中的内容不能为空
    "no-empty-label": 2,//禁止使用空label
    "no-eq-null": 2,//禁止对null使用==或!=运算符
    "no-extra-parens": 2,//禁止非必要的括号
    "no-extra-semi": 2,//禁止多余的冒号
    "no-func-assign": 2,//禁止重复的函数声明
  "no-implicit-coercion": 1,//禁止隐式转换
  "no-irregular-whitespace": 2,//不能有不规则的空格
  "no-mixed-requires": [0, false],//声明时不能混用声明类型
  "no-mixed-spaces-and-tabs": [2, false],//禁止混用tab和空格
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)"
      ],
      env: {
        jest: true
      }
    }
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src/'],
        ],
      }
    }
  }
};
