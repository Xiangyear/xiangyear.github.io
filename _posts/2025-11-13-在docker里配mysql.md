---
layout: post
title:  "docker"
date:   2025-11-13 8:11:00 +0800
categories: Computer Science
published:false
---











首先，这是一个docker官网:https://www.docker.com/

下载对应的installer然后安装

安装完后在Setting找到Resources，然后把Disk image location改成你喜欢的



到工程目录下

```shell
docker compose up -d
```

就可以使用容器了。

```shell
docker compose down
```

可以停止所有compose管理的容器，但不删除卷。末尾加-v会删除卷（也就是数据）

```shell
docker exec -it mysql-prod mysql -uroot -p
```

进你的MySQL 容器终端。mysql-prod是container_name，-uroot用root用户登录， -p提示输入密码。

这些在docker-compose.yml里去看
