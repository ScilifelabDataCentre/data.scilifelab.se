# ![SciLifeLab Data Platform website](static/img/logos/sll_dp_outline.svg)

# SciLifeLab Data Platform website

This is the source code for the SciLifeLab Data Platform website:
[https://data.scilifelab.se/](https://data.scilifelab.se/).

- [Introduction](#introduction)
- [Development](#development)
  - [Step 1: Access the code](#step-1-access-the-code)
  - [Step 2a: Edit the files (online)](#step-2a-edit-the-files-online)
  - [Step 2b: Edit the files (locally)](#step-2b-edit-the-files-locally)
  - [Step 3: Make a pull request](#step-3-make-a-pull-request)
- [How to get help](#how-to-get-help)
- [Credits](#credits)

## Introduction

This website is maintained by the [SciLifeLab Data Centre](https://scilifelab.se/data/) ([GitHub organisation](https://github.com/ScilifelabDataCentre)).

The site is built using the [Hugo](https://gohugo.io/) static web site generator, [Bootstrap 5](https://getbootstrap.com/) for styling and [Bootstrap icons](https://icons.getbootstrap.com/).

## Cite this code

<a href="https://zenodo.org/doi/10.5281/zenodo.10628655"><img src="https://zenodo.org/badge/474059254.svg" alt="DOI"></a>

Click on 'Cite this repository' near the top right of this repository to see how to formally cite this repository.

## Development and contributions

All website content is written in [Markdown](https://guides.github.com/features/mastering-markdown/), YAML, or JSON which are all beginner-friendly formats so it should be relatively easy to contribute. Please visit the [CONTRIBUTING page](https://github.com/ScilifelabDataCentre/data.scilifelab.se/blob/develop/CONTRIBUTING.md) for instructions on how to contribute to specific sections of the website.

### Step 1: Access the code

The code is hosted on [GitHub](http://github.com/), so you'll need an account.

Next, visit the code repository: [https://github.com/ScilifelabDataCentre/data.scilifelab.se](https://github.com/ScilifelabDataCentre/data.scilifelab.se)

In the top right, you'll see a button that says _"Fork"_. Click this, then select your username.
This makes a copy of the repository under your personal account that you can edit.

### Step 2a: Edit the files (online)

> This is best if you only want to make one or two minor tweaks.
> If you want to make more substantial edits over a longer time frame, we recommend editing locally (_Step 2b_).

The easiest way to edit the website files is on the GitHub website.

On the web page of your _forked_ copy of the repository, look in the `content/` directory or the `data/` directory depending on which section you would like to contribute to (see [CONTRIBUTING page](https://github.com/ScilifelabDataCentre/data.scilifelab.se/blob/develop/CONTRIBUTING.md) for specific instructions).

Go to the markdown file or JSON file that you want to edit, then click the Pencil icon :pencil2: in the top right.
This opens a web-based editor where you can add and edit content.

When you're finished, scroll to the bottom and fill in / submit the _"Commit changes"_ form.

You're nearly done - you can now skip to _Step 3_.

### Step 2b: Edit the files (locally)

#### Git setup

If you prefer, you can edit the website files on your computer in your favourite text editor.
Just fork the repository to your machine:

```bash
git clone git@github.com:[YOUR-USERNAME]/data.scilifelab.se.git
cd data.scilifelab.se
```

To make it easier to pull in changes made by others, you can add the main repository as a remote:

```bash
git remote add upstream https://github.com/ScilifelabDataCentre/data.scilifelab.se.git
```

Then you can fetch changes at any time from this remote:

```bash
git pull upstream develop
```

When you have finished editing, commit and push to your fork:

```bash
git add .
git commit -m "My changes"
git push
```

#### Testing locally

To view your changes as they will appear in the final website, you need to install Hugo.
You can find instructions on the Hugo website: [https://gohugo.io/](https://gohugo.io/)

If you're using Mac OSX, it's recommended to use [Homebrew](https://brew.sh/) -
if homebrew is already set up, installing Hugo is just a case of:

```bash
brew install hugo
```

Once Hugo is installed, simply run the following command in the repository root directory:

```console
$ hugo serve
Start building sites …
hugo v0.92.0+extended darwin/amd64 BuildDate=unknown

                   | EN
-------------------+-----
  Pages            | 77
  Paginator pages  |  0
  Non-page files   |  0
  Static files     | 54
  Processed images |  0
  Aliases          |  0
  Sitemaps         |  1
  Cleaned          |  0

Built in 83 ms
Watching for changes in /Users/arnold/Documents/data.scilifelab.se/{archetypes,content,data,layouts,static}
Watching for config changes in /Users/arnold/Documents/data.scilifelab.se/config.yaml
Environment: "development"
Serving pages from memory
Running in Fast Render Mode. For full rebuilds on change: hugo server --disableFastRender
Web Server is available at http://localhost:1313/ (bind address 127.0.0.1)
Press Ctrl+C to stop
```

Use the URL printed at the bottom of this message (here, it's `http://localhost:1313/`) to view the site.
Every time you save a file, the page will automatically refresh in the browser.

#### Docker

If you would prefer not to use Hugo, you can use the provided Dockerfile to build and run a container.

### Step 3: Make a pull request

Once you're finished with your edits and they are committed and pushed to your forked repository, it's time to open a pull request.

You can find full documentation on the [GitHub help website](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests), however in short:

- Visit the main repository: [https://github.com/ScilifelabDataCentre/data.scilifelab.se](https://github.com/ScilifelabDataCentre/data.scilifelab.se)
- Click the button that reads _"New Pull Request"_
- Click the text link near the top that says _"compare across forks"_
- In the right-hand _"head repository"_ drop down, select your username / fork.
- If you're happy with the list of commits shown, and the diff in the _"Files Changed"_ tab, fill in a title and description and click _"Create pull request"_

Once created, a member of the website team will review your changes.
Once approved, they will be merged and deployed.

## How to get help

If in doubt, you can ask for help by emailing [datacentre@scilifelab.se](mailto:datacentre@scilifelab.se).

## Credits

The website was built by [SciLifeLab Data Centre](https://www.scilifelab.se/data/) with the help of some additional SciLifeLab volunteers.
