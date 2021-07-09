---
layout: post
title: 测试折叠菜单
date: 1 Jun 2021
image: /assets/img/blog/2021-06-07/cover.jpg
description: >
  测试
permalink: /docs/
---

<link rel="stylesheet" href="/assets/styles/accordion.min.css">

<details class="ui styled accordion">
<summary class="accordion">
展开查看
</summary>
<a href="#" class="content">测试</a>
</details>
------
<div class="ui styled accordion">
  <div class="active title">
    <i class="dropdown icon"></i>
    级别 1
  </div>
  <div class="active content">
    <div class="accordion">
      <div class="active title">
          级别 1A
      </div>
      <div class="active content">
        <p>级别 1A 内容</p>
        <div class="accordion">
          <div class="title">
              <i class="dropdown icon"></i>
              级别 1A-A
          </div>
          <div class="content">
              级别 1A-A 内容
          </div>
          <div class="title">
              <i class="dropdown icon"></i>
              级别 1A-B
          </div>
          <div class="content">
              级别 1A-B 内容
          </div>
        </div>
      </div>
      <div class="title">
          <i class="dropdown icon"></i>
          级别 1B
      </div>
      <div class="content">
          级别 1B 内容
      </div>
      <div class="title">
          <i class="dropdown icon"></i>
          级别 1C
      </div>
      <div class="content">
          级别 1C 内容
      </div>
    </div>
  </div>
  <div class="title">
    <i class="dropdown icon"></i>
    级别 2
  </div>
  <div class="content">
    <p>Welcome to 级别 2</p>
    <div class="accordion">
      <div class="active title">
        <i class="dropdown icon"></i>
        级别 2A
      </div>
      <div class="active content">
        <p>级别 2A 内容</p>
        <div class="accordion">
          <div class="title">
              <i class="dropdown icon"></i>
              级别 2A-A
          </div>
          <div class="content">
              级别 2A-A 内容
          </div>
          <div class="title">
              <i class="dropdown icon"></i>
              级别 2A-B
          </div>
          <div class="content">
              级别 2A-B 内容
          </div>
        </div>
      </div>
      <div class="title">
          <i class="dropdown icon"></i>
          级别 2B
      </div>
      <div class="content">
          级别 2B 内容
      </div>
      <div class="title">
          <i class="dropdown icon"></i>
          级别 2C
      </div>
      <div class="content">
          级别 2C 内容
      </div>
    </div>
  </div>
</div>