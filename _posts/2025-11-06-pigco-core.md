---
felayout: post
title:  "使用pigco-core在github上配置图床"
date:   2025-11-06 8:23:00 +0800
categories: Computer Science
---







这是一个使用pigco-core在github上配置图床的操作方法。以及typora相关的配置



首先，我们假定Node.js已经安装了。如果你没有安装，请参考：https://nodejs.org/zh-cn

## 验证node.js安装

```bash
node -v
npm -v
```

## 修改安装路径

```bash
npm config set prefix "D:\npm-global"
```

这样可以指定npm的全局目录路径。

请把这个路径放到系统环境变量中。

```bash
npm prefix -g
```

这样做会显示对应的目录路径。



## 安装pigco-core

```bash
npm install picgo -g
```

## 验证pigco-core安装

```bash
picgo -v
```

## 进入交互式配置

```bash
picgo set uploader
```

请选择github并完成相关配置

## 获取github token

生成 GitHub Token（上传权限）

1. 登录 [GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)](https://github.com/settings/tokens)

点 **Generate new token (classic)**

勾选权限：

- `repo`（全部勾上）
- `workflow`（可选）

生成后复制 token

## 测试上传

```bash
picgo upload D:\test.png
```

D:\test.png是你的测试用的图片。如果上传成功，会返回一个图片url



## Typora设置自动命令

```bash
picgo.cmd upload "%1"
```

然后就可以自动上传了