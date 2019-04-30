# STUDY-JS-Module-Tools
Study notes for JS module tools.

## A. Early Script Loader
1. 解決問題：全域變數衝突、模組依賴性。
1. `<script></script>` 載入方式為非同步，所以通常都會傾聽 `document.ready` 事件來作 JS 模組載入。
1. YUI

> **Reference**
> - [NPM & Module | JS 生態系及週邊工具整理](https://ithelp.ithome.com.tw/articles/10191478)
> - [前端模組化早期歷史( YUI + scope) | JS 生態系及週邊工具整理](https://ithelp.ithome.com.tw/articles/10191198)

## B. ES6 Modules API | TK

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

## D. NPM | TK

> **Reference**
> - [npm init 與 npm install | JS 生態系及週邊工具整理](https://ithelp.ithome.com.tw/articles/10191682)
> - [NPM Install 到底做了些什麼？node_modules 檔案結構 + 特性入門 | JS 生態系及週邊工具整理](https://ithelp.ithome.com.tw/articles/10191783)

## E. Webpack | TK
1. Webpack 出現：實作瀏覽器版本 CommonJS 模組的同時，也支援 npm 上的套件。自此 JS 瀏覽器端也開始走向與 Server 端 Node.js 相同的模組管理方式：CommonJS / NPM。

> **Reference**
> - **[AMD 與 CommonJS 的發展 | JS 生態系及週邊工具整理](https://ithelp.ithome.com.tw/articles/10191574)**
