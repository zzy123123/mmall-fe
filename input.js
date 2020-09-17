/*
 * @Description: 
 * @Version: 1.0
 * @Author: zzy
 * @Date: 2020-09-08 09:21:52
 * @LastEditors: zzy
 * @LastEditTime: 2020-09-14 17:03:18
 */
const good = "hello";
import React from 'react';
import ReactDom from 'react-dom';
import HelloReact from "./HelloReact.jsx";

import './test.scss';
import _mm from './src/util/mm.js';
// async function sayHello(){
//     const result = await fetch(SERVICE_URL);
//     console.log(result);
// }

// sayHello();

// _mm.request({
//     url: 'http://localhost:8080//product/list.do?keyword=1',
//     success: function (res) {
//         console.log(res);
//     },
//     error: function (errMsg) {
//         console.log(errMsg);
//     },

// })

// console.log(_mm.getUrlParam('test'));

var html = '<div>{{data}}</div>';
var data = {
    data: 'test'
}
console.log(_mm.renderHtml(html, data));
ReactDom.render( < HelloReact / > , document.getElementById('good'));