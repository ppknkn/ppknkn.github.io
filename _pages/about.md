---
permalink: /
title: "Robotics, built from the ground up."
author_profile: true
portfolio_style: true
redirect_from:
  - /about/
  - /about.html
---
<div class="work-home">
<p class="work-eyebrow">Shi Che · 车石 / Shanghai Jiao Tong University</p>
<p class="work-lead">I build mechanisms, integrate control, and turn research workflows into working tools.</p>
<div class="work-intro-layout">
  <div class="work-intro-copy"><p class="work-intro">I am a mechanical engineering undergraduate at Shanghai Jiao Tong University, minoring in Computer Science & Technology. My interests connect robot locomotion and manipulation with mechanical design and embodied interaction.</p>
<p><a class="work-primary" href="{{ '/portfolio/' | relative_url }}">Explore my work ↗</a> <a class="work-secondary" href="{{ '/cv/' | relative_url }}">CV & background</a></p></div>
  <figure class="work-portrait" aria-label="Personal photograph">
    <div class="work-portrait__viewport">
      <img src="{{ '/images/personal/portrait-final.png' | relative_url }}" width="1448" height="1086" alt="Shi Che in front of a mountain landscape, smiling and giving two thumbs up." decoding="async" fetchpriority="high">
    </div>
  </figure>
</div>
<div class="work-section-head"><h2>Selected work</h2><a href="{{ '/portfolio/' | relative_url }}">All six projects ↗</a></div>
<div class="work-grid">{% for project in site.data.projects limit:2 %}{% include project-card.html project=project %}{% endfor %}</div>
<div class="work-now"><span class="work-eyebrow">Currently developing</span><h2>Physical platforms for interaction and service robotics</h2><p>My recent work includes internal assembly and design adjustments for Novacore’s expressive-face platform, as well as overall wheel-legged chassis design for a tennis ball-service robot with Lumistar.</p><a href="{{ '/portfolio/#ongoing' | relative_url }}">See ongoing work ↗</a></div>
<h2>Education</h2>
<p><strong>Shanghai Jiao Tong University</strong><br>B.Eng. in Mechanical Engineering · 2023–2028 (expected)<br>Minor in Computer Science & Technology</p>
<p>For my full background, see the <a href="{{ '/cv/' | relative_url }}">CV page</a>. To discuss research or engineering work, reach me at <a href="mailto:carstone@sjtu.edu.cn">carstone@sjtu.edu.cn</a>.</p>
</div>
