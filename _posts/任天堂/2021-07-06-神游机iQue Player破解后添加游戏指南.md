---
layout: post
title: 神游机iQue Player破解后添加游戏指南
image: /assets/img/blog/2021-07-06/cover-2.jpg
accent_image: 
  background: url('/assets/img/blog/2021-07-06/bg-2.jpg') center/cover
  overlay: false
accent_color: '#ccc'
theme_color: '#ccc'
description: >
  转载自<https://iquebrew.github.io/en/Adding%20games.html><br>翻译：本本子
invert_sidebar: true
category: 任天堂
slug: 83c9cde8aad6d8010510b7e094264705020b5499240fd1da91942b2bd5d8f3b9
---

# 神游机iQue Player破解后添加游戏指南

* toc
{:toc}

### 准备条件

1. ticket.sys编辑器
2. 你想要添加的游戏的ticket（.dat），CMD（.cmd）或contentDesc（.cdesc）文件
3. 你想要添加的游戏的.z64文件
4. 在你的主机上已[安装HackIt补丁](../2021-07-06-神游机iQue-Player破解指南/)
5. 你主机的hackit.sys
6. iQueCrypt v1.2.1

### 流程步骤

1. 在ticket.sys编辑器中，打开hackit.sys。
2. 如果你想添加的游戏只有.cmd或.cdesc文件，则按照下面的步骤进行。否则就跳过该步骤，按照第三步操作。
  * 创建一个新的ticket（Edit → New ticket，或用快捷键Ctrl+N）
  * 在General标签下，点击“Replace ticket data”
  * 选择你想要添加的游戏的.cmd或.cdesc文件，并打开它
  * 现在进行第3步
  * 下面是一个补充性的要点，试图修复格式化，注意了！
  * 在Edit标签下，点击“Import ticket.dat”（快捷键Ctrl+I）
  * 找到你想要添加的游戏的.dat文件，并打开它
  * 现在进行第3步

3. 想一个你喜欢的CID，并将它填写入`CID:`框中
4. 保存修改后的hackit.sys文件（File → Save，快捷键Ctrl+S）
5. 打开命令行工具，并进入到iQueCrypt所在文件夹
6. 运行以下命令：
```
iquecrypt.exe encrypt -app <path to the .z64 of the game here> -key 00000000000000000000000000000000 -iv 00000000000000000000000000000000
```
(将上面命令行中的<path to the .z64 of the game here>替换为你想要添加的游戏的.z64文件路径)
7. 将`[enc]<game filename here>.z64`重命名为`<CID from earlier>.app`
8. 将hackit.sys和`<CID>.app`文件拷贝至Windows XP，并使用QueDiagExtend工具，将其写入你已破解的主机
9. 至此，你已成功将喜欢的N64游戏添加进了神游机iQue Player，享受你的游戏之旅吧！


