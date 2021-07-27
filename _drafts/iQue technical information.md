
# iQue reversing info

**marshallh notes** | **[mikeryan notes](http://lacklustre.net/n64/ique/)**

Last updated Sun May 06 16:34:00 CST 2018

![](hw_ique.png)

## Background

The iQue is an Nintendo 64 retooled into an ASIC (application-specific integrated circuit) as a foray into the Chinese video game market by iQue Corporation. Officially licensed from Nintendo, it's based on the original MIPS CPU and RCP design files -- and is not an emulator.

Users would plug their iQue's data cartridge into one of a number of kiosks around China (called Depots) and purchase tickets/points which were redeemed for games. 

A few months after release, the downloadable software service iQue@Home was launched, allowing consumers to redeem points cards for games and then download them onto their unit over the internet.

All cards shipped with four time-limited trials along with the full version of Dr. Mario 64.

### Development

Conditions leading up to its release were much different than in most other countries. The Chinese government wanted to retain control over the games released while also preventing simple importation of other countries' goods. This created an opening for whoever could develop an original game system and also pitch it as a tool to improve the education of children growing up.

An interesting relationship connects several companies that produced the iQue and others. At [Silicon Graphics](https://en.wikipedia.org/wiki/Silicon_Graphics) in the early nineties was one Senior VP [Wei Yen](https://en.wikipedia.org/wiki/Wei_Yen). Dr. Yen led development on OpenGL and was directly involved in the [creation of Project Reality](https://web.archive.org/web/19990220205512/http://www.mips.com:80/coolApps/s3p8.html) which was sold as the Nintendo 64. He moved on after SGI's work on the console was done, but in 2002 started a company with the intent of licensing none other than the N64 itself as the platform to deliver edutainment to the masses in China.

Dr. Yen's company BroadOn was contracted to develop the new underlying technology that would differentiate the iQue from a regular N64 - specifically the backend crypto, and the result was utilized by iQue Corporation in China to localize games.

Codenamed "BB Player", many new technologies were created to make iQue happen - it's one of the first successful digital content delivery platforms, with DRM that was well-designed enough to completely prevent all piracy for at least a decade in one of the most hostile target markets. The content delivery and protection scheme later served as the basis for the Wii Shop Channel, with which it shares many traits. In fact, BroadOn was later contracted by Nintendo to design the Starlet IO coprocessor in the Wii -- which even preliminary research shows is definitely similar in many ways to the iQue.

![](ique_logo.png)

## Operation

Software can be loaded onto the memory card via two methods.

*   Kiosk/depot in China
*   USB cable and custom software on Windows PC
The 64-megabyte NAND card would be removed and inserted to a Depot to load software, or left in the main unit as with iQue@Home. Carts cannot be switched between iQue units as all game tickets are console-specific.

Depots began to disappear after several years and were hard to find by 2012. However, it was still possible to redeem point cards with iQue@Home and buy games. 

Finally, the licensing server was shut down in December 2016 making it impossible to load new trials and purchase games. However, fragments of the network like the content server remain online, as the iQue Corporation is still in business as the sole distributor of Nintendo products within the country.

Localizations for the iQue Player continued until 2006 with the final game being Animal Crossing.

Units were produced from early 2003 onwards, though all units I've disassembled have 2003 datecodes. There are at least two significant versions of the system software. Early versions could only be provisioned from depots and would not function with iQue@Home, but could be upgraded by the depot. Most units in the wild now seem to be the later revision with full USB support. By having a second unit and hot-swapping the older NAND into a booted newer iQue, one can upgrade the SKSA (firmware) by writing a later SKSA, and gain USB functionality.

Upon powerup, the users is prompted to setup parental restrictions on gameplay. Because a real-time clock is inside, playtime can be restricted to certain hours of the day, a passcode, or a certain date range.

A basic menu shows a list of installed games or trials. Time-limited demos will show the amount of time consumed with time remaining - for example, Wave Race has a limit of 60 minutes while Ocarina of Time can be played for 600 minutes before expiring. Play time is cumulative, and cannot be reset. Interestingly, after a decade many units have failing batteries stopping the RTC from operating, which prevents both the parental restrictions and playtime from displaying properly. However, the time still accumulates, and with enough minutes built up the trial will eventually be permanently locked out.

Comparisons of NAND dumps before/after a trial lockout show no material differences, so it seems the trial minute counter is stored probably in the iQue's ASIC via some on-die EEPROM.

After choosing a game, the iQue shows a warning about spending too much time in front of the TV and encourages users to take frequent breaks.

Notably, the first time a game is run, the games which come directly from the content server as a .app are then re-crypted using the console's own privkey to be console-specific, and its filename is changed to .rec. If the .app was modified in any way, hash checks will fail and display a iQue memory card error. The length of time depends on the size of the game, which can range anywhere from 4Mbytes to 40Mbytes. More details down below.

* * *

## Technical details

### Game localization

To accomplish the mammoth task of painstakingly translating every single piece of text, image, and sound occurring by the thousands on each game, the iQue team was provided a slightly modernized N64 toolchain as well as the original source code and build tools for each game. BroadOn/Routefree ported the libultra-based N64 SDK to Linux with new wrappers allowing GDB support over USB.

Because they were working from original game source, the iQue localization team could afford to be very thorough in their efforts - Star Fox received a full audio dub, while F-ZeroX, Wave Race and Excitebike also received limited dubs. Many references to Nintendo were changed to iQue/Nintendo. Animal Forest has a Chinese Spring Festival instead of its Japanese counterpart.

The updated libultra used to re-build these games has new functions to access the modified hardware of the iQue, chiefly regarding savegames and real-time clock. However, to preserve compatibility, games still used the original graphics microcodes they were designed around.

### Filesystem - [dump of mike and I's files](http://lacklustre.net/n64/ique/ique_files_new_saves.zip)

Very basic [linked-list type log filesystem](http://www.iquebrew.org/index.php?title=NAND "NAND") that is designed around the rough edges of raw unmanaged NAND flash. The NAND has 512 + 16 byte sectors, and they are organized in 16Kbyte blocks, matching the NAND chip's physical blocksize of 16 Kbytes. If a different NAND is to be used, its blocksize must still be 16Kbytes which makes things a bit more difficult.

Adding up the extra spare bytes, each block's 16bytes are used for marking blocks as good or bad, and also contain hashes which vouch for the integrity of the flash block. Blocks may arrive bad from the factory, but standard practice with almost all NAND flash is to guarantee that block 0 will always be functional. Bad block mapping and wear leveling is handled in software. In this way it's very similar to the old xD and SmartMedia cards, and the Wii seems to use a very similar setup.

[How the Wii's NAND works](http://wiibrew.org/wiki/Boot2)

At the start of NAND is a 64KB encrypted [Secure Kernel](http://www.iquebrew.org/index.php?title=SKSA "SKSA") that is the same on all consoles, followed by [tickets](http://www.iquebrew.org/index.php?title=Ticket "Ticket")  and [CAM](http://www.iquebrew.org/index.php?title=Title_Data "Title_Data") data for the System App which is the iQue Menu. See below.

Dumping the flash can now be easily done with emoose's [iQueDiagExtend](https://github.com/emoose/iQueDiagExtend) hook which patches the diagnostics program included with the very last release of iQue@Home software, enabling easy NAND dumps. This program also supports reading and writing individual files directly to the  NAND, as well as overwriting the SKSA area with a newer version.

Listing of files on my card - there are other files that can be created not shown here

![](fs_listing.png)

#### Possible file extensions:

<table>
<tbody><tr><td width="100">.app</td><td>New, never-booted game, identical to a download from the CDS</td></tr>
<tr><td>.sta</td><td>Savegame data (plaintext unencrypted)</td></tr>
<tr><td>.rec</td><td>Re-crypted game binary created from an .app being run, console-specific</td></tr>
<tr><td>.sys</td><td>System file</td></tr>
<tr><td>.db</td><td>Savegame hash index?</td></tr>
<tr><td>.tmp</td><td>Temp file</td></tr>
</tbody></table>

#### Decoding the files

Look at the Wii's titlekey and ticket system, seems to be very similar here. emoose has written a very extensive [NAND image decoder](https://github.com/emoose/iQueTool) which will parse all the files and pick out useful information. 

All symmetric encryption on iQue is AES-128-CBC. ECC is used to further encrypt each game's title keys.

All keys are stored on NVRAM as described below.

### Non-volatile on-chip memory

On the ASIC, there are a few NVRAM regions that are referred to as "Virage" by the SDK. Virage is a company specializing in IP blocks (Intellectual property cores) for integration into a vendor's custom chips, in the same way the iQue integrates a USB IP block from Silicon Portals.

What was previously thought to be OTP actually seems to be just another region in the Virage block. The following regions are known:

<table>
<tbody><tr><td width="100">Virage0</td><td width="100">64 bytes</td><td>First CRL version and trial counter area</td></tr>
<tr><td>Virage1</td><td width="100">64 bytes</td><td>Second CRL version and trial counter area</td></tr>
<tr><td>Virage2</td><td width="100">256 bytes</td><td>Secure key/hash storage, contains all unique console information</td></tr>
</tbody></table>

There are a maximum of 26 supported trial games, each incrementing a 16-bit integer up to its limit. Zeroing these resets the trial games to an unplayed state. Because there are two blocks, the SK uses whichever block has the higher counter in it.

Preliminary tests show that Virage2 can be written, but so far not successfully. It's possible that the erase circuitry for this area is disabled, which would be true OTP where bits are only able to be programmed from a 1 to a 0, but not the other way. So far, 2 writes seems to be the ceiling before a unit is effectively bricked.

### Boot Process (Theorized)

*   R4300i boots from 0x1FC0 0000 or 0x1FCA 0000 (not sure). Bootrom is a bit less than 8Kbytes.
*   Bootrom decrypts the Secure Kernel (64KB) from NAND into a 64KB on-die SRAM mapped at 0x9FC0 0000 which is the standard NMI vector, hashed with SHA1 and checked against the valid hash stored in OTP. If it matches, it starts.
*   Secure Kernel (SK) loads ticket data for the SA (System App) in NAND, verifying it and then copying it into main DDR.
*   SA runs as a N64 binary, displaying the iQue Menu and handling USB transfers. Anything crypto-related such as the AES engine, OTP data including signature/CRL verification will be handled by the SA in usermode calling APIs handled by the SK that still resides in its own secure enclave. Each SA/game is given a permissions bitmask that unlocks a the fewest necessary SK API calls.

### Savegame Support

Originally, N64 has several means of storing save data in cartridges: EEPROM, SRAM, and FLASH.

iQue runs games that use these save types, but as before, the games were modified and recompiled to accomplish this saving in a different way. Instead of fully emulating the hardware used by these save chips, the iQue instead uses a RAM buffer to store persistent data and flush it back to NAND when the user presses Power to return to the main menu.
Of course, if power is lost abruptly all progress will be lost, which is why iQue nags the user if it's not shut down cleanly.

The buffer seems to generally be located in high RDRAM at 0x807C0000. As a result, all current iQue game dumps will never save properly on regular N64 hardware without patching.
The opposite is also true: vanilla unpatched N64 games will never save properly on iQue because the expected save devices do not exist.

### PC-side software

The client software consists of:

*   iQue@home main executable (iqahc.exe)
*   Localized resource DLL
*   Updater
*   Command-line diagnostics tool
*   USB driver

#### Main web client

The main program is a wrapper between the DLL which contains all the resources and an ActiveX Internet Explorer control showing HTML and Javascript from the resource DLL. You can load it up into a resource editor and witness the sloppy javascript if you really want.

_Listing of the games on the card. It's almost completely full. Zelda and Dr. Mario are full versions, the rest are time limited trials. The non-game is a game instruction manual._
![](ique_game_listing.png)

_Enjoy being creeped out while you choose from Club iQue login, card management, and store listing options_
![](sw_main.png)

_The first game listing page_
![](sw_list.png)

Besides being total garbage, it gives random scripting errors occasionally. You can also run some sort of diagnostics from it as well.

#### Driver DLL

Pretty much a one-line edit and recompile from the BulkUSB DDK sample (as you can see)

![](sw_driver.png)

The connecting chip in the iQue hardware is manufactured by Silicon Portals.
_"The Yap Phone is a USB handset manufactured by Silicon Portals and is sold by Net2Phone along with their IP telephony service under the brand "Yap Phone.""_

* * *

## Hardware

Custom NEC ASIC. Everything possible was consolidated into it. The CPU, RCP, PIF, etc are all in there, along with everything that is new. The R4300i is now clocked at 1.5x the speed it originally was, yielding a clock speed of 140.625 MHz. 
Because a lot of N64 titles use the CPU counter register to determine timings, some games would run way too fast if ported directly, so the iQue's custom libultra includes a patch to correct all reads of this register to increment at the expected slower value.

#### RAM

It's wired to a Samsung 16 Mbyte DDR memory chip. This seems to compare admirably to the Rambus RDRAM in the original -- various choppy scenes and lag in the original games are simply gone. This is not simply a result of recompiling the games, either.

On the N64, because there was an extra 9th data bit used for antialiasing coverage during rendering, the RDRAM working packet size was 72 bits. However, this new RAM yields 64 bits per clock. To emulate the extra bits, my theory is that the RAM controller simply burns another 64bits. This would allow full MI/RI emulation, but also halve the usable RAM size back to the standard 8Mbytes.

Thus, the iQue is basically a N64 with Expansion Pak built in.

As far as bandwidth, this would provide effectively 1536 Mbytes/sec, roughly 3x that of a regular N64 at 500MB/sec. Since RAM bandwidth is by far the chief reason for slowdown on N64, the iQue will be an ideal platform for possibly running brutally slow titles like Perfect Dark.

#### NAND

The 64MB (512Mbit) NAND chip is used as the cartridge ROM for each game. An additional hardware layer was developed to allow this NAND to transparently emulate the cartridge PI bus, decrypting AES on the fly. Audio ADPCM streaming is done from it like the original, with the game/CPU executing from RDRAM. When you yank the cartridge while a game's running, audio fails but the game runs until it needs something crucial from ROM.

Burst access is actually faster than a real N64 cartridge, but 32-bit word access is much slower because it still requires the hardware to decode a full AES block each time.

For some reason, the NAND lives on a small board called DOOKIE, maybe because it slides out of the rear end of the unit.

#### Clock Generation

Custom ICS420BG clock synthesis chip. There is one 14.318mhz quartz crystal (besides the watch crystal for the RTC). I figured out the PLL ratio as 57/17 to generate 48mhz. 96mhz is also generated. 192mhz is generated for clocking the DDR memory controller inside the ASIC which in turn drives the DDR differentially. A different clock may be substituted here, as with the original N64, clocks that are too far out of range will cause VI display corruption even though actual data integrity is preserved.

#### Power

The included power brick is a typical low-cost DC supply comprising just a transformer, rectifier and smoothing caps. However, the transformer is only wired for 220V so users in North America or Japan will need to find an alternate power brick. Output is 5VDC, 2A. Center tip positive. Empirical testing shows that better A/V output is produced around 6 volts (most transformer-based supplies produce a somewhat higher voltage than rated). Operation cuts out around 4.6 volts.

Incoming ~5V goes through a PTC and some passives to a LT1940 dual switching regulator for 2.5V (DDR) and 1.5V (ASIC core). 3.3V for the rest of the ancillary silicon is generated by a generic SOT-223 LDO.

Power usage is around 50% of the original N64, clocking in around 3.5 watts, where the regular N64 by itself runs about 7-8 watts.

#### Video

Digital RGB signals are broken out onto test points. This includes the 48.68mhz NTSC pixel clock, just like the regular N64. However, where there is an external NTSC video encoder on the old N64, it seems the composite video generation was integrated into the ASIC.

#### Sound

MS6610BS audio DAC, pin compatible with [TDA1545](http://vasiltech.narod.ru/files/TDA1545A.pdf). ~1.5mhz bit clock. Line-level output is amplified by a TDA1308 headphone amplifier and run into the A/V umbilical. Seems to use the same right-aligned quasi-I2S as the original N64, and can be inspected through test points.

#### Real-time Clock

An STMicro [M41T0](http://www.st.com/content/ccc/resource/technical/document/datasheet/19/24/95/e2/85/6a/47/30/CD00003139.pdf/files/CD00003139.pdf/jcr:content/translations/en.CD00003139.pdf), 32.768khz watch crystal and primary lithium cell provide time of day for enforcing play limitations. One of the stipulations of the Chinese government for the device's release was limiting play time, in order to "prevent dereliction of the youth". This RTC chip only contains the most barebones set of registers for reading and writing the time. As such, it's not possible to store any extra data in here such as trial limits, nor to set any alarms - only the clock is stored and incremented.

* * *

## USB Protocol

The Silicon Portals core currently transfers at USB 1.1 Full-Speed - typical transfer rates are under 300-400kbyte per second. As for the protocol itself (bytes transferred), it's very simple and also quite dumb, but it does the job.

[Mike's basic protocol analysis](http://lacklustre.net/n64/ique/ique_usb.txt)

[USB Analyzer capture](files/ique_usb_ops_partial_nanddump.tdc) of several commands and a partial NAND dump (Total Phase Data Center required to view)

Incidentally, the protocol used for shuffling data over the dumb USB pipe is exactly the same as the protocol invented by SGI to perform debugging on the very first Ultra 64 Indy development board almost a decade prior - RDB.

Software can re-program the USB descriptors at runtime to enumerate as anything required.

* * *

## Pictures

[![](ique_case_1_.jpg)](ique_case_1.jpg) [![](ique_case_2_.jpg)](ique_case_2.jpg) [![](ique_case_3_.jpg)](ique_case_3.jpg) 

[![](ique_case_4_.jpg)](ique_case_4.jpg) [![](ique_case_5_.jpg)](ique_case_5.jpg) [![](ique_case_6_.jpg)](ique_case_6.jpg) 

[![](ique_case_7_.jpg)](ique_case_7.jpg) [![](ique_pcb_1_.jpg)](ique_pcb_1.jpg) [![](ique_pcb_2_.jpg)](ique_pcb_2.jpg) 

* * *

# DDR RAM intercept hardware

<!-- ![](iqd-001.jpg) -->

## Theory of Operation

The plan is to wire an FPGA in parallel with the DDR system memory, clock the ram slower, and then allow the RAM to be physically disconnected while the iQue is running so that the FPGA can dump the contents of the RAM. It is unknown if any crypto was used, but it's unlikely as the X360 is the first known console to do so.

## First unsuccessful attempt

Back in 2013 I had an idea to create a board that would physically go in the middle between the RAM and the iQue board. The DDR footprint was mirrored to create a top and bottom connection as a passthrough, but ultimately I found it essentially impossible to solder everything in place. 

However, I was able to transplant the iQue's ram onto this new board and directly control it with FPGA just like any other RAM, to confirm I was reading and writing correctly.

![](iqd-001_assembled.jpg) 

![](iqd-001_assembled_bottom.jpg)
