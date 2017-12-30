'use strict';

let babel = require('babel-core');
let env = require('babel-preset-env');
let stage2 = require('babel-preset-stage-2');
let react = require('babel-preset-react');

/**
 * 编译阶段插件
 * @param  {string} content     文件内容
 * @param  {File}   file        fis 的 File 对象 [fis3/lib/file.js]
 * @param  {object} settings    插件配置属性
 * @return {string}             处理后的文件内容
 */
module.exports = function (content, file, conf) {
   // 添加 useBabel 配置项，如果 useBabel 为 false 则不进行编译
    if (file.useBabel === false) {
        return content;
    }

    conf = fis.util.extend({
        presets: [
            env,
            stage2,
            react
        ]
    }, conf);

    // 添加 jsx 的 html 语言能力处理
    if (fis.compile.partial && file.ext === '.jsx') {
        content = fis.compile.partial(content, file, {
            ext: '.html',
            isHtmlLike: true
        });
    }

    let result = babel.transform(content, conf);
    return result.code;
};
