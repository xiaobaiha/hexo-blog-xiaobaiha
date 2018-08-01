---
title: 使用antd报less的错误
date: 2018-06-29 21:20:08
tags: 前端
---

# 问题描述

在使用 antd 组件库时，按照官方文档建立`config-override.js`,使用`react-app-rewired`进行 build 或者 start 时，会报

```
./node_modules/antd/lib/menu/style/index.less
Module build failed:

// https://github.com/ant-design/ant-motion/issues/44
.bezierEasingMixin();
^
Inline JavaScript is not enabled. Is it set in your options?
      in D:\Git\career_guide_front\node_modules\antd\lib\style\color\bezierEasing.less (line 108, column 0)
```

的错误。

# 解决方案

主要进行 2 处修改，首先这个问题在 antd 的 issue 中有提及，官方说在 3.6.4 版本中已经修复，所以首先检查 antd 的版本。实际解决中，改变版本未解决 less 报错的问题，所以按照之前的方案对 config-override.js 进行修改

## 检查 antd 版本

打开 package.json 文件，在 dependencies 下找到 antd 版本，若小于 3.6.4，建议修改成 3.6.4 然后使用 npm 或者 yarn 对 antd 重新进行安装。

## 对 config-override.js 进行修改

打开 config-override.js，添加配置

```
config = rewireLess.withLoaderOptions({
    modifyVars: { "@primary-color": "#1DA57A" },
    javascriptEnabled: true,
  })(config, env);
```
