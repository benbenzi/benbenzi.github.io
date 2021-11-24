---
layout: post
title: 神游机iQue Player破解指南
image: /assets/img/blog/2021-07-06/cover.jpg
accent_image: 
  background: url('/assets/img/blog/2021-07-06/bg.jpg') center/cover
  overlay: false
accent_color: '#ccc'
theme_color: '#ccc'
description: >
  转载自<https://iquebrew.github.io/en/START.html><br>翻译：本本子
invert_sidebar: true
category: nintendo
slug: 813d3df934ed3557b1e2686270ea7ca2efee76fcafb2e697e0bba91476c0381c
---

# 神游机iQue Player破解指南

* toc
{:toc}

### 准备条件

本指南假设你熟悉Windows命令行CMD工具（或你选择的操作系统上的类似工具），可以访问运行Windows XP 32位的虚拟机或辅助PC，在Windows XP上安装了iQue@Home驱动程序，并熟悉使用USB数据线将iQue Player连接到Windows XP。

此外，熟悉在Windows XP和主操作系统之间传输文件将有所帮助。最后，下载并安装 **HxD** (Windows) 等十六进制编辑器，并熟悉其使用。

注意：该过程的第 4 步需要在你的主操作系统上安装**Python 3**。 如果你的主操作系统尚未安装它，请访问 [python.org](https://www.python.org/ "Python官网") 下载并安装它。

### 流程步骤

破解流程可以分为以下几个步骤：

1. 通过Stuckpixel的**ique_cbc_attack**程序，在主机上实现初始代码执行
2. 使用eSKape引导，来导出主机的密钥和相关信息，同时获取主机的ticket.sys文件
3. 检查主机的固件版本，并相应地选择和安装系统菜单引导补丁
4. 编辑对应你主机的ticket.sys文件，并覆盖到系统中

下面将详细介绍每个步骤，一次一个。在执行每个步骤前，请确认你已经正确执行了前一个步骤。

建议在通篇阅读本指南后，在进行实际操作。

#### 第1步：初始代码执行

在此步骤中，我们将使用Stuckpixel的**ique_cbc_attack**程序，给《马力欧医生》打上补丁，以实现代码执行。

* 在执行该步骤之前，请确保主机中已有《马力欧医生》游戏，并至少打开过一次。
* 在此步骤中，你的《马力欧医生》游戏存档将被覆盖。如果该存档对你很重要，可以按照[本指南](javascript:void(0))（原作者没有写）进行备份。
* 该步骤某些部分的说明，是专门为Windows 10 64位准备的。如果你选择了其他操作系统，你可能需要更改一些东西，一遍顺利进行该流程。

1. 将iQue Player连接到Windows XP，打开并**ique_diag**。输入`B`初始化连接。
2. 输入`3 005d1870.rec`以提取《马力欧医生》的加密游戏文件到Windows XP。
3. 将**005d1870.rec**文件拷贝至**ique_cbc_attack**所在的文件夹中。
4. 在主系统中打开**命令行工具**，进入到**ique_cbc_attack**和**005d1870.rec**所在文件夹，并运行以下命令：
```
ique_cbc_attack -p 3C088001350818E03C09000135298ED0 -r 005d1870.rec -d 081F0000000000000000000000000000 -o 1000
```
你应该能看到这样的提示：
```
AES-CBC attack, by stuckpixel
successfully injected 1 blocks!
```
5. 在Windows XP上，将**005d1870.rec**文件从**ique_cbc_attack**所在文件夹，复制到**ique_diag**所在文件夹。
6. 在**ique_diag**中输入`4 005d1870.rec`，以将修改后的《马力欧医生》加密文件传输回你的主机。 
7. 在主系统中，将**v2_dump.sta**重命名为**005d1870.sta**。
8. 将**005d1870.sta**文件，从主系统拷贝至Windows XP系统的**ique_diag**文件夹。
9. 在**ique_diag**中输入`4 005d1870.sta`，以将密钥提取器的引导写入你的主机。
10. 在**ique_diag**中输入`Q`以断开和主机的连接，但同时保持**ique_diag**窗口开启。
11. 关闭你的主机，并将其与Windows XP断开连接。

#### 第2步：提取你的主机密钥

1. 重新打开主机（不插入USB电缆），以启动到iQue主菜单页面。
2. 启动游戏列表中的《马力欧医生》。游戏启动后应该是黑屏状态。
3. 稍等几秒后，按下**一次**电源，返回到iQue菜单页面。当主菜单加载的时候，按下**一次**电源关闭主机。
4. 使用USB线将主机连接到Windows XP，然后打开主机。
5. 在**ique_diag**中输入`B`以初始化连接，然后输入`3 005d1870.sta`以将包含主机密钥的存档文件保存至Windows XP。
6. 在Windows XP中，将**005d1870.sta**从**ique_diag**文件夹复制到你的主系统，并用16进制编辑器打开。
7. 将从**0x600**到**0x700**的字节内容，复制到一个新文件中。将其保存为V2.bin或类似名字，放到主系统上你喜欢的路径。
8. 在Windows XP的**ique_diag**中，输入`3 ticket.sys`以导出你主机的ticket文件。
9. 从Windows XP上包含**ique_diag**的文件夹中，将**ticket.sys**复制到主系统上你喜欢的路径。

#### 第3步：安装Jbop的HackIt系统菜单补丁

有几种方法可以确定控制台的固件版本。

就本指南而言，假设你尚未进行 NAND 备份。

支持USB的SKSA版本正好有两种。

这亮着都在主菜单的左上角，显示有“神游在线”的标志。如果你的主机主菜单没有此标志，则它与神游在线不兼容。

1. 将**hackit_patcher.sta**重命名为**005d1870.sta**。
2. 在Windows XP上，将**005d1870.sta**拷贝至**ique_diag**所在文件夹。
3. 在**ique_diag**中输入`4 005d1870.sta`以将系统菜单补丁写入至你的主机。

#### 第4步：编辑你主机的ticket.sys文件

1. 在你的主系统上，用Python运行**ticket.sys_editor.py**。
2. 单击*File*-*Open file*，然后找到刚才从你主机里导出的**ticket.sys**文件，并选择*Open*。
3. 作为初步测试，我们从左侧的列表中，选择**塞尔达的传说**。点击*Ticket data*选项，并按下*Ticket ID:*以进入Ticket ID编辑器。将选项框中的*Is trial ticket:*（是试玩版）取消掉，然后关闭Ticket ID编辑器。
4. 单击*File*-*Save as*，然后找一个你喜欢的路径，将**hackit.sys**作为文件名，并按下*Save*以保存编辑后的文件。
5. 把你主系统中的**hackit.sys**文件，复制到Windows XP系统中的**ique_diag**所在文件夹。
6. 在**ique_diag**中输入`4 hackit.sys`以将修改后的文件写入你的主机。然后输入`Q`以断开和主机的连接，但同时保持**ique_diag**窗口开启。
7. 关闭你的主机，并将其与Windows XP断开连接。
8. 重新打开主机（不插入USB电缆），以启动到iQue主菜单页面。
9. 启动游戏列表中的《马力欧医生》。游戏启动后应该是黑屏状态。
10. 稍等几秒后，按下**一次**电源，返回到iQue菜单页面。当主菜单加载完毕后，进入游戏列表，并下拉找到《塞尔达传说：时光之笛》。在屏幕右侧，显示游戏占用容量（114）和表示游戏所在位置的图标之间，有一个小方块。若该小方块是红色，则说明游戏已经从试玩版变成了正式版。这表明打补丁程序已经运行成功，系统菜单的签名已经成功打上了补丁。

至此，你已成功完成神游机iQue Player的破解。现在，你可以使用免费的**ticket.sys_editor.py**和**iQueCrypt**两个工具，将软件添加至你的主机了。

[神游机iQue Player破解后添加游戏指南](2021-07-06-神游机iQue Player破解后添加游戏指南.md)
{:.read-more}
