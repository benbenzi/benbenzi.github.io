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
  转载自<https://iquebrew.github.io/en/START.html>
invert_sidebar: true
---

# 神游机iQue Player破解教指南

* toc
{:toc}

### 准备

本指南假设您熟悉Windows命令行CMD工具（或您选择的操作系统上的类似工具），可以访问运行Windows XP 32位的虚拟机或辅助PC，在Windows XP上安装了iQue@Home驱动程序，并熟悉使用USB数据线将iQue Player连接到Windows XP。此外，熟悉在Windows XP和主操作系统之间传输文件将有所帮助。最后，下载并安装 **HxD** (Windows) 等十六进制编辑器，并熟悉其使用。
注意：该过程的第 4 步需要在您的主操作系统上安装**Python 3**。 如果您的主操作系统尚未安装它，请访问 [python.org](https://www.python.org/ "Python官网") 下载并安装它。

### 大体流程

破解流程可以分为以下几个步骤：
1. 通过Stuckpixel的**ique_cbc_attack**程序，在主机上实现初始代码执行
2. 使用eSKape引导，来导出主机的密钥和相关信息，同时获取主机的 ticket.sys 文件
3. 检查主机的固件版本，并相应地选择和安装系统菜单引导补丁
4. 编辑对应你主机的ticket.sys文件，并覆盖到系统中

下面将详细介绍每个步骤，一次一个。在执行每个步骤前，请确认你已经正确执行了前一个步骤。
建议在通篇阅读本指南后，在进行实际操作。

#### 第1步: 初始代码执行

在此步骤中，我们将使用Stuckpixel的**ique_cbc_attack**程序，给《马力欧医生》打上补丁，以实现代码执行。
* 在执行该步骤之前，请确保主机中已有《马力欧医生》游戏，并至少打开过一次。
* 在此步骤中，你的《马力欧医生》游戏存档将被覆盖。如果该存档对你很重要，可以按照[本指南](javascript:void(0))（原作者没有写）进行备份。
* 该步骤某些部分的说明，是专门为Windows 10 64位准备的。如果你选择了其他操作系统，您可能需要更改一些东西，一遍顺利进行该流程。

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

#### Step 2: Dumping your console’s keys

1. Turn the console back on (without a USB cable inserted) to boot to the main iQue Menu.
2. Open Dr. Mario (马力欧医生) from the games list (‘游戏’ on the main menu). The game should boot to a black screen.
3. After a few seconds, press the power button on the console **once** to return to the iQue Menu. When the main menu loads, press the power button on the console **once** to turn the console off.
4. Connect your console back to your Windows XP PC with a USB cable and turn it on.
5. In **ique_diag**, enter `B` to initialise the connection, then enter `3 005d1870.sta` to dump the save file containing your console’s keys to Windows XP.
6. Copy **005d1870.sta** from the folder containing **ique_diag** on Windows XP to your main OS, and open it in a hex editor.
7. Copy the bytes from **0x600** to **0x700** to a new file. Save it as **V2.bin** or similar in a known location on your main OS.
8. In **ique_diag** on Windows XP, enter `3 ticket.sys` to dump your console’s ticket file.
9. Copy **ticket.sys** from the folder containing **ique_diag** on Windows XP to a known location your main OS.

#### Step 3: Installing Jbop’s HackIt Menu patcher

There are several ways to determine your console’s firmware version. For the purposes of this guide, it is assumed that you have not made a NAND backup.
There are exactly two SKSA versions that support USB. Both have the iQue@Home logo displayed in the top left of the main menu, in Chinese (神游在线). If the main menu of your console does not have this logo, it is not compatible with iQue@Home.

1. Rename hackit_patcher.sta to 005d1870.sta.
2. Copy 005d1870.sta to the folder containing ique_diag on Windows XP
3. In ique_diag, enter 4 005d1870.sta to write the System Menu patcher to your console.

#### Step 4: Editing your console’s ticket.sys file

1. On your main OS, open **ticket.sys_editor.py** (using Python).
2. Click *File*, *Open file*, then navigate to the **ticket.sys** file dumped from your console earlier, and click *Open*.
3. As an initial test, choose **塞尔达的传说** from the list on the left. Click the *Ticket data* tab, then press *Ticket ID:* to bring up the ticket ID editor. Uncheck the box next to *Is trial ticket:*, then close the ticket ID editor window.
4. Click *File*, *Save as*, then navigate to a known directory on your main OS, enter **hackit.sys** as the filename, then press *Save* to save the edited file.
5. Copy **hackit.sys** from your main OS to the folder containing **ique_diag** on Windows XP.
6. In **ique_diag**, enter `4 hackit.sys` to write the modified file to your console, then enter `Q` to close the connection to your console while keeping **ique_diag** open.
7. Turn off your console and disconnect it from your Windows XP PC.
8. Turn the console back on (without a USB cable inserted) to boot to the main iQue Menu.
9. Open Dr. Mario (马力欧医生) from the games list (‘游戏’ on the main menu). The game should boot to a black screen.
10. After a few seconds, press the power button on the console once to return to the iQue Menu. When the main menu loads, enter the games list (‘游戏’ on the main menu), and scroll down until you reach The Legend of Zelda: Ocarina of Time (塞尔达传说：时光之笛). Near the right-hand edge of the screen, the small box between the block indicator (114) and the icon displaying whether the game is on the console or PC should be red, indicating that the game is no longer a trial. This demonstrates that the patcher worked and the system menu’s signatures have successfully been patched.

At this point, your console has successfully been hacked. You are now free to use **ticket.sys_editor.py** and **iQueCrypt** to add software to your console.
