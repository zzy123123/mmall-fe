/*
 * @Description: 
 * @Version: 1.0
 * @Author: zzy
 * @Date: 2020-09-16 16:17:12
 * @LastEditors: zzy
 * @LastEditTime: 2020-09-16 17:30:10
 */
'use strict';
require('./index.css');

import _mm from '../../../util/mm.js';

//通用页面头部
var header = {
    init: function () {
        this.bindEvent();
    },
    onLoad: function () {
        var keyword = _mm.getUrlParam('keyword');
        if (keyword) {
            $('#search-input').val(keyword);
        };
    },
    bindEvent: function () {
        
        $('#search-btn').click(function () {
            this
        });
    }
};

header.init();
