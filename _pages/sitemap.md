---
layout: single
title: "Sitemap"
permalink: /sitemap/
author_profile: true
---

## Pages

- [Home]({{ '/' | relative_url }})
- [Selected work]({{ '/portfolio/' | relative_url }})
- [CV]({{ '/cv/' | relative_url }})

## Project case studies

{% assign cases = site.portfolio | sort: 'date' | reverse %}
{% for project in cases %}
- [{{ project.title }}]({{ project.url | relative_url }})
{% endfor %}
