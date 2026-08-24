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

## Number of users over time

The number of user accounts in Data Services from SciLifeLab Data Centre over time. Only services that involve the creation of user accounts are included.

<!-- Graph showing users over time -->

 <div class="plot_wrapper mb-3">
  <div class="table-responsive">{{< plotly json="https://raw.githubusercontent.com/ScilifelabDataCentre/data.scilifelab.se/refs/heads/Freya-2612/Liane/data/KPI_data/yearly_service_users_grouped_bar.json" height="600px" >}}</div>
</div>

## Number of visits/views over time

The number of views or visits over time for Data Services from SciLifeLab Data Centre. Numbers from SciLifeLab Data Repository reflects the number of times that data entries were viewed. For all other services, data reflects the number of unique visits to the websites.

<!-- Graph showing views over time-->

<div class="plot_wrapper mb-3">
<div class="table-responsive">{{< plotly json="https://raw.githubusercontent.com/ScilifelabDataCentre/data.scilifelab.se/refs/heads/Freya-2612/Liane/data/KPI_data/visits_by_service_stacked_bar.json" height="600px" >}}</div>
</div>

## Map of visits/views in the last 12 months

The number of views or visits for different countries for Data Services from SciLifeLab Data Centre over the last year. For SciLifeLab Data Repository, data is taken from the number of times that entries in the repository are viewed. For all other services, data reflects the number of unique visits to the websites.

<!-- Graph showing views over time-->

<div class="plot_wrapper mb-3">
<div class="table-responsive">{{< plotly json="https://raw.githubusercontent.com/ScilifelabDataCentre/data.scilifelab.se/refs/heads/Freya-2612/Liane/data/KPI_data/country_visits_map.json" height="600px" >}}</div>
</div>
