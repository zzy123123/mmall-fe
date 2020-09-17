/*
 * @Description: 
 * @Version: 1.0
 * @Author: zzy
 * @Date: 2020-09-08 16:00:44
 * @LastEditors: zzy
 * @LastEditTime: 2020-09-14 17:28:28
 */
'use strict';

var Hogan = require('hogan.js');
var conf = {
    serverhost: ''
};
var _mm = {
    //网络请求
    request: function (param) {
        var _this = this;
        $.ajax({
            type: param.method || 'get',
            url: param.url || '',
            dataType: param.type || 'json',
            data: param.data || '',
            success: function (res) {
                //请求成功
                if (0 === res.status) {
                    typeof param.success === 'function' && param.success(res.data, res.msg);
                }
                //没有登陆状态，需要强制登录
                else if (10 === res.status) {
                    _this.doLogin();
                }
                //请求数据错误
                else if (1 === res.status) {
                    typeof param.error === 'function' && param.error(res.data, res.msg);
                }
            },
            error: function (err) {
                typeof param.error === 'function' && param.error(res.data, res.msg);
            }
        });
    },
    //获取服务器地址
    getServerUrl: function (path) {
        return conf.serverhost + path;
    },
    //获取url参数
    getUrlParam: function (name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
        var result = window.location.search.substr(1).match(reg);
        return result ? decodeURIComponent(result[2]) : null;
    },
    //渲染html模板
    renderHtml: function (htmlTemplate, data) {
        var template = Hogan.compile(htmlTemplate),
            result = template.render(data);
        return result;
    },
    //成功提示
    successTips: function (msg) {
        alert(msg || '操作成功');
    },
    //错误提示
    errorTips: function (msg) {
        alert(msg || '操作失败');
    },
    //字段的验证，支持非空判断，手机、邮箱的判断
    validate: function (value, type) {
        //非空验证
        var value = $.trim(value);
        if ('require' === type) {
            return !!value;
        }
        //手机号验证
        if ('phone' === type) {
            return /^1\d{10}$/.test(value);
        }
        //邮箱格式验证
        if ('email' === type) {
            return /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/.test(value);
        }
    },
    //统一登录处理
    doLogin: function () {
        window.location.href = './login.html?redirect=' + encodeURIComponent(window.location.href);
    },
    goHome: function () {
        window.location.href = './index.html';
    }
};

module.exports = _mm;