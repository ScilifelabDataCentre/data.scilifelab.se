# Contributing to the SciLifeLab Data Platform website

Below are instructions on how to add or edit items in each of the SciLifeLab Data Platform website sections.

## Events & Training

The __Events & Training__ section contains a community-sourced collection of events and training opportunities relevant for data-driven life science research.

All the events displayed in the section Events & Training are stored in a `JSON` file [ddls_events.json](https://blobserver.dc.scilifelab.se/blob/ddls_events.json/info) in DC's `blobserver`. Each event/training is an object item in the `items` list, so to add a new event/training one should add a new object with required information (see below for the required fields). 

```JSON
{
  "target": [],
  "title": "",
  "type": "",
  "date_start": "",
  "time_start": "",
  "date_end": "",
  "time_end": "",
  "venue": "",
  "location": [],
  "category": [],
  "organisers": "",
  "event_url": "",
  "description": ""
}
```

You need write access in `blobserver` to add/update events json file, if you do not, send the event information (for above mentioned fields) to the data platform team and they will update it for you upon review. You can mail it to <data-platform@scilifelab.se> or fill in the form by clicking "Submit an event" button in [events](https://data.scilifelab.se/events/) page.

## Data highlights

__Data highlights__ is a section of the website highlighting new open datasets, tools, and research results based on open datasets and tools.

### Illustrations

Typically, for each data highlight we prepare two illustrations. One illustration is smaller and appears on overview page with all data highlights. The other illustration appears on the page of the highlight itself.

The smaller illustration needs to have the width that is twice the length (i.e., length `300 px` and width `600 px`). This way, it will easily fit the look of the page layouts.

Both illustrations should be placed in the `/static/highlights/` folder. The URL of the images placed here will then be `https://data.scilifelab.se/highlights/file_name.png`.

### Data highlight texts

The data highlights are generated from Markdown formatted files contained in the `/content/highlights/` folder. The file name used here will also be the URL of the data highlight (e.g., `test-highlight.md` will become `https://data.scilifelab.se/highlights/test-highlight/`).

### Content of the data highlight texts

Below is an example of a data highlight file content. You can copy this text into your markdown file and edit it to write your own data highlight.

```Markdown
---
title: Important new dataset shared
date: 2006-01-02
summary: A new dataset containing a large amount of valuable data has been openly shared.
banner: /highlights/example.png
banner_large: /highlights/example_large.png
banner_caption: "Illustration of X. The image was taken from Y."
tags: [Evolution & biodiversity, insects, dashboard]
authors: [Anders Celsius]
---

This is the text of the highlight. This is the first paragraph. Introduce why this is an important topic.

This is the second paragraph of the text of the highlight. Markdown formatting should be used in the text. For example, you can make a piece of text italic by placing an asterisk at the beginning and end, *like this*. You can make a piece of text bold by placing two asterisks at the beginning and end, **like this**. You can also add a link with square brackets following round round brackets, [like this](https://example.com/data/).

We typically describe exactly what data has been shared, how it can be re-used, and give links to where it can be downloaded.

#### Dataset

* [Shared dataset 1](https://example.com/data1/): description of shared dataset 1
* [Shared dataset 2](https://example.com/data2/): description of shared dataset 2
* [Shared dataset 3](https://example.com/data3/): description of shared dataset 3

```

On the top of the file, surrounded by `---`, basic information for this data highlight is provided. It contains the title; publication date (desired; Hugo needs to be run on that day or later for it to appear); summary text that appears on the main page of the Data highlights section; location of the illustration to be displayed on the homepage (`banner`); location of the illustration to be displayed on the page of the highlight (`banner_large`); caption text that will appear under the illustration on the page of the highlight; tags that are appropriate for this data highlight; name(s) of the person or persons who wrote this data highlight.

The title, date, summary, illustrations will appear where they are supposed to be. The tags will appear as links so that other highlights tagged with the same tag can be seen (tags are also used to select similar previosly published highlights that appear on the bottom of each highlight page), and author name(s) will appear as link(s) so that other highlights written byt the same author(s) can be seen.

## Platform news

The __Platform news__ section contains announcements about the SciLifeLab Data Platform and services hosted on the Platform.

Each news item displayed in the Platform news section is stored as a file inside the `/content/news/` folder. Each file should be named with the publication date of news item using the following format: `2006-01-02.md` which stands for January 2nd 2006. Each file should have extension `.md` but contain data in YAML format followed by text in Markdown format as shown below.

```Markdown
---
title: Important new dataset shared
date: 2006-01-02
---

This is the text of the news item. Write one or max two paragraphs here. Markdown formatting can be used in the text. For example, you can make a piece of text italic by placing an asterisk at the beginning and end, *like this*. You can make a piece of text bold by placing two asterisks at the beginning and end, **like this**. You can also add a link with square brackets following round round brackets, [like this](https://example.com/data/).

```

## Services

The items in the __Service catalogue__ are contained inside the `data/services.json` JSON file. The parameters that can be defined for each services are provided below. Select one or more values in case of the list parameters (for target audience and type). The logo of the service needs to be uploaded to the folder `/static/img/service_logos/` and given here (without the `/static` part in the URL). Indicate one or more ways in which the users can receive support (email, website, github repository).

```JSON
{
  "target": ["researchers", "facilities"],
  "type": ["database", "tool", "portal", "helpdesk"],
  "name": "Service title",
  "description": "Short description of the service",
  "url": "https://...",
  "logo_location": "/img/service_logos/...",
  "maintained_by": "One or more maintainers as text",
  "maintained_by_url": "https://...",
  "support_email": "..@..",
  "support_website": "https://...",
  "support_github": "https://github.com/..."
}
```
