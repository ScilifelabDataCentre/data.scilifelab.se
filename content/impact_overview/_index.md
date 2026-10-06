---
title: Data Centre Impact overview
description: This page displays the overall impact of Data Services from SciLifeLab Data Centre
plotly: true
cascade:
  header_image: /img/illustrations/circos_cropped.png
menu:
  navbar:
    name: Data services impact
    identifier: Data services impact
    weight: 12
  bottom_support:
    name: Data services impact
    identifier: Data services impact
    weight: 12
back_to_top_button: true
---

## Number of users

The number of users in services from SciLifeLab Data Centre that involve the creation of user accounts.

<!-- Treemap of users -->

 <div class="plot_wrapper mb-3">
  <div class="table-responsive">{{< plotly json="https://raw.githubusercontent.com/ScilifelabDataCentre/data.scilifelab.se/refs/heads/Freya-2612/Liane/data/KPI_data/treemap_current_users.json" height="600px" >}}</div>
</div>

## Map of visits for featured services

Visits from different countries to three featured services; SciLifeLab Serve, Swedish Pathogens Portal, and SciLifeLab Data repositories. A 'visit' includes either a unique visit to at least one page, and/or a download from one of the pages (download is only tracked for SciLifeLab Data Repository).

Please note that the counts include countries with an alpha3 code, and not all of those territories are reflected in the map.

<!-- Graph showing views over time-->

<div class="plot_wrapper mb-3">
<div class="table-responsive">{{< plotly json="https://raw.githubusercontent.com/ScilifelabDataCentre/data.scilifelab.se/refs/heads/Freya-2612/Liane/data/KPI_data/country_visits_map_v2.json" height="600px" >}}</div>
</div>
