# STUDY-JS-Module-Tools
Study notes for JS module tools.

---

## TOC
#### A. [Early Script Loader](https://github.com/nizniz187/STUDY-JS-Module-Tools#a-early-script-loader)
#### B. [ES6 Modules API](https://github.com/nizniz187/STUDY-JS-Module-Tools#b-es6-modules-api)
#### C. [CommonJS](https://github.com/nizniz187/STUDY-JS-Module-Tools#c-commonjs)
#### D. [NPM & Yarn](https://github.com/nizniz187/STUDY-JS-Module-Tools#d-npm--yarn)
#### E. [Webpack](https://github.com/nizniz187/STUDY-JS-Module-Tools#e-webpack)

---

## A. Early Script Loader
1. 解決問題：全域變數衝突、模組依賴性。
1. `<script></script>` 載入方式為非同步，所以通常都會傾聽 `document.ready` 事件來作 JS 模組載入。
1. YUI

> **Reference**
> - [NPM & Module | JS 生態系及週邊工具整理](https://ithelp.ithome.com.tw/articles/10191478)
> - [前端模組化早期歷史( YUI + scope) | JS 生態系及週邊工具整理](https://ithelp.ithome.com.tw/articles/10191198)

---

## B. ES6 Modules API
1. ES6 模組儲存在檔案中；模組與檔案為一對一的關係。
1. 模組檔案載入為非同步。
1. 使用 `export` / `import` 打包與引用模組。
1. 若要在嵌入式 JS 標籤中使用 `import` 語法，則標籤須設定 type：`<script type="module"></script>`。如此設定會使該 `<script>` 為 defer，因此指定的 .js 會以非同步方式下載，並在 DOM 樹生成與其他非 defer 的 .js 執行完後才（依序）執行。
1. 支援 ES6 Modules API 的瀏覽器會忽略 `<script nomodule></script>`。因此，當這麼撰寫時：
    
    ```
    <script type="module" src="js/util.js"></script>
    <script nomodule src="js/util_fallback.js"></script>
    ```
    支援 ES6 模組的瀏覽器會使用 util.js，而不支援的瀏覽器會使用 util_fallback.js。
1. [Browsers: scripts versus modules](http://exploringjs.com/es6/ch_modules.html#_browsers-scripts-versus-modules)
1. `Import` 模組引入語法得是靜態的、位於模組最上層的，因此若要動態 / 條件式引入模組，須另行使用 module loader API（非 ES6 標準，仍在開發中）。

> **Reference**
> - **[script 標籤與模組](https://openhome.cc/Gossip/ECMAScript/ScriptModule.html)**
> - [Modules | Exploring ES6](http://exploringjs.com/es6/index.html#toc_ch_modules)
> - [Support Table for JavaScript modules via script tag | caniuse](https://caniuse.com/#feat=es6-module)

---

## C. CommonJS
1. ES6 Modules API 標準支援度還不夠高，因此為了兼容舊版瀏覽器，模組載入需使用 CommonJS。
1. 僅宣告模組的語法：Function `require` & Object `export`，實際支援需靠 JS runtime 或 transpiler。
1. Node.js 為最早支援的 runtime。
1. 設計模組化標準需考慮：
    - 模組的 CRUD 機制
    - 模組載入同步性
1. CommonJS 早期為 Server 應用，模組為同步載入；後來推廣到瀏覽器端，出現了模組非同步載入的需求，因此出現了另一種規範 AMD。但 AMD 與其前端 runtime RequireJS 在開發上比不上 CommonJS 派的前端模組，因此漸趨沒落。

> **Reference**
> - **[你有聽過 CommonJS 嗎？ | JS 生態系及週邊工具整理](https://ithelp.ithome.com.tw/articles/10191478)**
> - **[AMD 與 CommonJS 的發展 | JS 生態系及週邊工具整理](https://ithelp.ithome.com.tw/articles/10191574)**

---

## D. NPM & Yarn
1. 創建 project：
    - `npm init`：輸入專案資訊，生成 `package.json`。
    - `npm init -y`：跳過預設專案資訊，生成空白的 `package.json`。
1. 安裝函式庫：
    1. 網路搜尋發布在 npm 上的函式庫。
    1. `npm install [library_name]`
    1. 安裝完成後：
        1. 生成 `node_modules` 資料夾，所有安裝的函式庫與關連套件都放在這裡。
        1. 生成 / 更新 `package-lock.json`，記錄詳細的相依套件版本。
        1. 更新 `package.json` 內的函式庫相依性。未來直接 `npm install` 即可依照該相依性記錄來自動安裝函式庫。
1. Yarn：Facebook 內部為了解決 npm 問題而開發出的套件管理工具，後來開源出來。
    - 仍使用 npm 資料庫。
    - 支援平行下載，下載套件時速度較快。
    - 使用自己的 lock 檔 `yarn.lock`。格式比較易讀，但功能類似。
    - UI 比較友善、漂亮。

> **Reference**
> - **[npm init 與 npm install | JS 生態系及週邊工具整理](https://ithelp.ithome.com.tw/articles/10191682)**
> - [NPM Install 到底做了些什麼？| JS 生態系及週邊工具整理](https://ithelp.ithome.com.tw/articles/10191783)
> - **[package-lock.json 有什麼用？| JS 生態系及週邊工具整理](https://ithelp.ithome.com.tw/articles/10191888)**
> - [Vue-Cli 所創建的 package.json + Webpack 設定大解析 | JS 生態系及週邊工具整理](https://ithelp.ithome.com.tw/articles/10192120)

---

## E. Webpack | TK
1. Webpack 出現：實作瀏覽器版本 CommonJS 模組的同時，也支援 npm 上的套件。自此 JS 瀏覽器端也開始走向與 Server 端 Node.js 相同的模組管理方式：CommonJS / NPM。
1. 全能的前端模組打包工具 (module bundler)，功能包括：
    - （自動）轉譯 / 打包
    - minify
    - sass/scss compile
    - include linter
    - 支援 require / export 模組化語法
> **Reference**
> - [webpack](https://webpack.js.org/)
> - [AMD 與 CommonJS 的發展 | JS 生態系及週邊工具整理](https://ithelp.ithome.com.tw/articles/10191574)
> - **[Webpack 零設定，入門教學 | JS 生態系及週邊工具整理](https://ithelp.ithome.com.tw/articles/10192578)**
> - [Webpack - module、bundle 和安裝 | JS 生態系及週邊工具整理](https://ithelp.ithome.com.tw/articles/10192845)
> - **[Basic Setup | webpack Guides](https://webpack.js.org/guides/getting-started)**
> - [設定 babel-loader 來編譯 ES6, ES7, ES8, ES-Next 的程式碼！ | JS 生態系及週邊工具整理](https://ithelp.ithome.com.tw/articles/10194549)
