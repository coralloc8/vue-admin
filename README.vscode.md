###开发过程中 vscode 代码格式化配置如下：

```

{
  "javascript.format.insertSpaceAfterConstructor": true,
  "javascript.updateImportsOnFileMove.enabled": "always",
  // #让函数(名)和后面的括号之间加个空格
  "javascript.format.insertSpaceBeforeFunctionParenthesis": false,

  //function 和后面的括号之间加空格
  "javascript.format.insertSpaceAfterFunctionKeywordForAnonymousFunctions": false,

  "javascript.format.insertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis": false,

  "editor.lineNumbers": "on", //开启行数提示
  "eslint.options": {
    "extensions": [".js", ".vue"]
  },

  //开启自动显示建议
  "editor.quickSuggestions": {
    "other": true,
    "comments": true,
    "strings": true
  },
  "editor.cursorBlinking": "smooth",
  "editor.minimap.renderCharacters": false,
  "editor.tabSize": 2,
  // vscode 默认启用了根据文件类型自动设置 tabsize 的选项
  "editor.detectIndentation": false,
  // #每次保存的时候自动格式化
  "editor.formatOnSave": true,

  // 每次保存的时候将代码按 eslint 格式进行修复
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },

  "prettier.useTabs": true,
  // #去掉代码结尾的分号
  "prettier.semi": true,
  // #使用带引号替代双引号
  "prettier.singleQuote": true,

  "[vue]": {
    "editor.defaultFormatter": "octref.vetur"
  },

  //不使用 tabs
  "vetur.format.options.useTabs": false,
  "vetur.format.defaultFormatter.html": "js-beautify-html",
  "vetur.format.defaultFormatterOptions": {
    "js-beautify-html": {
      // auto force force-aligned force-expand-multiline
      // 对应四个值 auto 是不换行
      "wrap_attributes": "force-expand-multiline"
    },
    "prettyhtml": {
      "printWidth": 100,
      "singleQuote": false,
      "wrapAttributes": false,
      "sortAttributes": false
    },
    "prettier": {
      "semi": false,
      "singleQuote": true
    }
  },

  //根据文件后缀名定义 vue 文件类型
  "files.associations": {
    "*.vue": "vue"
  },

  // 让 vue 中的 js 按编辑器自带的 ts 格式进行格式化
  "vetur.format.defaultFormatter.js": "vscode-typescript",

  "[javascript]": {
    "editor.defaultFormatter": "vscode.typescript-language-features"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[html]": {
    "editor.defaultFormatter": "vscode.html-language-features"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "files.exclude": {
    // "\*\*/node_modules": true
  },

  // 格式化 stylus, 需安装 Manta's Stylus Supremacy 插件
  "stylusSupremacy.insertColons": false, // 是否插入冒号
  "stylusSupremacy.insertSemicolons": false, // 是否插入分好
  "stylusSupremacy.insertBraces": false, // 是否插入大括号
  "stylusSupremacy.insertNewLineAroundImports": false, // import 之后是否换行
  "stylusSupremacy.insertNewLineAroundBlocks": false,
  "java.semanticHighlighting.enabled": true
}

```
