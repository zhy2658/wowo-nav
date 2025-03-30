"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavBar = void 0;
var NavBar_vue_1 = require("@/components/NavBar.vue");
exports.NavBar = NavBar_vue_1.default;
// 定义插件安装方法
var install = function (app) {
    app.component('NavBar', NavBar_vue_1.default); // 全局注册组件
};
// 默认导出插件
exports.default = {
    install: install
};
