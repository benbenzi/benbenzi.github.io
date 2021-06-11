---
layout: plain
sitemap: false
---

# 更新日志
{:.no_toc}

* 该列表将自动更新
{:toc .large-only}

## v1.2.0
2021年6月10日
{:.heading.post-date}

### 新增

* 音乐播放器功能

    本次更新加入了音乐播放器功能。

    播放器本体采用了[APlayer]{:.heading.flip-title}的框架，以及[MetingJS]{:.heading.flip-title}协助完成。音源来自网易云。

    播放器的音乐默认关闭，需要自己手动播放。点击列表也可查看该歌单下全部歌曲。

* 文章阅读时间估算

    本次更新在文章的右上角，加入了文章阅读大致所需时间。

    由于“普通文章”和“实用文章”的阅读速度不一样，因此统一以150字/分钟的阅读速度计算。

### 优化

* 特殊页面整合

    对测试、加密、Miiverse等页面进行了归类，现在这些功能全部集中在左侧的【其他】栏目中。

* 优化：图片体积与加载速度

    原本大量采用了png原始大图，一张高达3-4MB，加载非常缓慢。

    本次优化后，将所有图片储存为jpg，质量70%。

    优化后图片库整体体积缩小到原来的1/4，且损耗仅约为3%，大幅优化页面和图片的访问速度。


[APlayer]: https://aplayer.js.org/
[MetingJS]: https://github.com/metowolf/MetingJS