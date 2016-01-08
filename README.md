##说明
**由于目前浏览器不支持ES6，所以现在JSX都要转换为原生JS在让浏览器**
目前的转换方式有2种：

###1、浏览器端转换JSX
* 1、BabelTransformer using Babel, which is the default transformer.
需要使用browser.js，引用JSX时需要指明它的script的type为text/babel

* 2、JSXTransformer using JSXTransformer.js
需要使用JSXTransformer.js，引用JSX时需要指明它的script的type为text/jsx

###2、线下转换JSX
* 先安装Babel
```js
npm install --global babel-cli
npm install --save-dev babel-preset-react
```
* 然后转换src下的jsx文件到dist目录下
babel --presets react src --watch --out-dir dist

* 最后在HTML里引用dist下转换好的js文件即可


###本项目使用gulp-react、gulp-livereload配合chrome插件快速开发
