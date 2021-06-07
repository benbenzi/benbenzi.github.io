---
title: 加密测试
description: >
  加密测试
hide_description: true
sitemap: false
permalink: /docs/
---

<form
      action="#"
      method="post"
      onsubmit="window.open('https://tinyletter.com/{{ site.tinyletter }}', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true"
      >
      <div class="form-row">
        <div class="col col-sm-6">
          <label class="sr-only" for="tlemail">{{ site.data.strings.tinyletter.label | default:"Email" }}</label>
          <input class="form-control" type="email" name="email" id="tlemail" placeholder="{{ site.data.strings.tinyletter.placeholder | default:'mail@example.com' }}" />
        </div>
        <div class="col-auto">
          <input class="btn btn-primary" type="submit" value="{{ site.data.strings.tinyletter.button | default:'Subscribe' }}" />
        </div>
      </div>
      <input type="hidden" value="1" name="embed"/>
</form>    
