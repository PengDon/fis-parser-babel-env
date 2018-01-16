
> 安装
```
cnpm i -g fis-parser-babel-env
```
> FIS3用法

```
fis.match('*.es6', {
    parser: fis.plugin('babel-env'),
    rExt: 'js'
});
```
