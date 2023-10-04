---
title: Hosting a service on the SciLifeLab Data Platform
images: [/img/resource_thumbnails/hosting_DC.jpg]
toc: true
---

## Accessing SciLifeLab hosting services

Hosting for data-centric tools and databases that provide value to the wider life science research community in Sweden is now available via the SciLifeLab Data Platform’s technical environment. Multiple types of tools can be hosted, including those related to the exploration, annotation, analysis, visualisation, sharing, or aggregation of data. We welcome applications for hosting from researchers, research groups, research communities, and research infrastructures alike. For information on the requirements that tools and databases must meet in order to be hosted, please refer to the ‘Hosting requirements for tools and databases’ subsection below.

We are deeply committed to the provenance and ownership rights of researchers, research communities, and their affiliated institutions. As such, we do not expect credit for the provision of hosting services. The tools and databases will be made available at the national and, where appropriate, international level, and will be promoted on the web interface of the SciLifeLab Data Platform and elsewhere.

### Hosting requirements for tools and databases

- Hosted content should have value to the wider life science research community in Sweden; the hosting resources cannot be used for computation or storage that benefits only individual projects/research groups.
- Any code related to the hosted content should be published under [an open source licence](https://opensource.org/osd/). All data/outputs should be as open and FAIR as possible.
- Hosted content must be actively supported and maintained. Two or more points of contact must be assigned for communication with SciLifeLab Data Centre about any technical issues. There should also be a dedicated point of contact for user support.
- The project should be provided as a container image that adheres to Open Container Initiative (OCI) specifications, and hosted in a public repository (e.g. Dockerhub or [http://ghcr.io](http://ghcr.io)). The source code of the project along with the Dockerfile should also be hosted in a public git repository. The maintainer must provide documentation on how to set up the correct environment for the image(s). The maintainer is responsible for updating the image(s) with e.g. security updates.
- To help us to secure continued funding for the hosting service, the Data Centre will ask for summary statistics about usage of the hosted service, such as number of users, downloads, page visitors or what may be most relevant, and potentially geographical distribution of users and whether Scilifelab infrastructure units are being served.

### Additional requirements for software

- The software should preferably be possible to run using an arbitrary user. Containers using a root account will not be accepted.
- The maintainer should set up regular security scanning (e.g. Trivy) of their images. The maintainers are expected to fix any detected security issues and publish new images as soon as possible after detection.

### Responsibilities of SciLifeLab Data Centre

- Hosting is provided free of charge to users within our available resources, funded by the SciLifeLab & Wallenberg National Program for Data-Driven Life Science.
- Hosting is provided on the best effort basis; we will endeavour to resolve any issues as quickly as possible, but cannot specify a given timeline for resolution.
- Hosting is provided for a period of one year at a time. The period will be extended annually, given that resources are available and that the requirements for hosting are still met.
- We cannot provide development support (although we are happy to answer any questions related to meeting the hosting requirements and/or our hosting infrastructure).
- Where appropriate, we can provide a <domain>.data.scilifelab.se URL. Another URL can be used, but you must purchase/obtain it yourself.
- We cannot host sensitive data on this cluster.
- We may remove any services discovered to have security issues without prior notice until such issues are resolved. In the event that there is a database associated with the service, the backups will still be available.

### Application and evaluation process

To apply for hosting at the SciLifeLab Data Platform please [fill out this application form](/hosting_files/hosting_application_form.docx). The applications are evaluated by the SciLifeLab Data Centre management group on a rolling basis. You can expect to receive a response to your application within 3-4 weeks.
