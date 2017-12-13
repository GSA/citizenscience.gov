---
id: 15492
title: 'The OpenPV Project: Crowdsourcing Solar Energy Data'
date: 2015-08-11T21:29:01+00:00
author: Kendrick Daniel
layout: posts
guid: https://crowdsourcing-toolkit.sites.usa.gov/?p=15492
permalink: /2015/08/11/openpv-solar-energy-data/
hide_title:
  - 'No'
header_layout:
  - Default
centercatnav:
  - 'No'
remove_thumb:
  - 'No'
hide_auth_bio:
  - 'No'
post_featcontent:
  - 'No'
post_featpages:
  - 'No'
amazonS3_cache:
  - 'a:7:{s:97:"https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/1054/2015/06/casestudy-openpv-main.gif";i:7092;s:95:"https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/1054/2015/06/casestudy-openpv-01.gif";i:7072;s:103:"https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/1054/2015/06/casestudy-openpv-01-300x260.gif";i:7072;s:95:"https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/1054/2015/06/casestudy-openpv-02.gif";i:7082;s:103:"https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/1054/2015/06/casestudy-openpv-02-287x300.gif";i:7082;s:100:"https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/1054/2015/09/openpv-solar-energy-data.pdf";i:25042;s:101:"https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/1054/2015/06/casestudy-openpv-02-32x32.gif";i:7082;}'
image: https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/1054/2015/07/feature-openpv.jpg
categories:
  - All
  - Climate and Weather
  - Environment and Nature
tags:
  - classification or tagging
  - Climate and Weather
  - College or University
  - community group
  - Computer-based
  - computers and technology
  - data analysis
  - data entry
  - Decisionmaking
  - Department of Energy
  - discovery
  - education
  - Energy Analysis
  - families
  - Finding entities
  - for-profit
  - formal non-profit/NGO
  - General Public
  - geolocation
  - Government services
  - Local
  - measurement
  - National
  - Outreach
  - Regional
  - Rural
  - sample analysis
  - seniors
  - State
  - State or Local Government
  - suburban
  - Urban
---
## Case Study Overview

<div id="attachment_7092" style="width: 410px" class="wp-caption alignright">
  <img class="wp-image-7092 size-full" src="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/1054/2015/06/casestudy-openpv-main.gif" alt="A screenshot with a summary of systems for the State of Texas, captured from the Open PV Project website." width="400" height="261" />
  
  <p class="wp-caption-text">
    Summary of systems for the state of Texas, captured from <em>OpenPV</em> on June 17, 2015.
  </p>
</div>

Photovoltaics convert solar energy into direct current. You can understand the photovoltaic market in the United States by estimating the installed capacity (or maximum possible amount) of photovoltaic energy. It’s also important to understand how the prices of hardware and soft costs (including installation costs) related to photovoltaics change over time.

The _[Open PV Project](https://openpv.nrel.gov/about)_ is a joint effort by government, industry and the public to compile a comprehensive database of photovoltaic installation data. Data for the project are voluntarily contributed from a variety of sources, including solar incentive programs, utilities, installers and the general public. The database is a Web-based resource that people can use to explore and understand current and past trends in the U.S. photovoltaics industry. Maintained by the contributors, the data are constantly changing, offering an evolving, up-to-date snapshot of the U.S. solar power market.

<a href="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/1054/2015/09/openpv-solar-energy-data.pdf" target="_blank">Download this case study (PDF, 88KB)</a>
  
Website:_ [Open PV Project](https://openpv.nrel.gov/about)_

## Project Description

<div id="attachment_7072" style="width: 310px" class="wp-caption alignleft">
  <img class="wp-image-7072 size-medium" src="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/1054/2015/06/casestudy-openpv-01-300x260.gif" alt="Screenshot showing data of contributors for California from the Open PV Project website." width="300" height="260" />
  
  <p class="wp-caption-text">
    Summary of contributors for the state of California, captured from <em>OpenPV</em> on June 17, 2015.
  </p>
</div>

Data for the _[OpenPV Project](https://openpv.nrel.gov/about)_ come from two types of providers. The first type, which accounts for most of the data, comprises solar incentives programs, utilities and installers. They provide data in large volumes and have their own data validation processes.

The second type is the average photovoltaics consumer in the United States. Consumers usually furnish data from a single system and have no formal validation method.

## Challenges

Data standardization is a challenge for the _OpenPV Project. _Volunteers can give any data they have. Some data fields are required, such as system size, but users come up with many other data fields. One challenge was to create a data structure that could handle any submitted data but could also validate data for some general required parameters. The _OpenPV Project_ has an automated process that handles data validation within a user interface. The system processes the data that volunteers upload and infers the columns that represent the required data, presenting them to the user in an intuitive interface. The user can then correct the data before submission.

<div id="attachment_7082" style="width: 297px" class="wp-caption alignright">
  <img class="wp-image-7082 size-medium" src="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/1054/2015/06/casestudy-openpv-02-287x300.gif" alt="screenshot with California information" width="287" height="300" srcset="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/1054/2015/06/casestudy-openpv-02-287x300.gif 287w, https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/1054/2015/06/casestudy-openpv-02-32x32.gif 32w" sizes="(max-width: 287px) 100vw, 287px" />
  
  <p class="wp-caption-text">
    Filtered data download for PV systems for the state of California, captured from <em>OpenPV</em> on June 17, 2015.
  </p>
</div>

Dealing with data duplication is an additional challenge. If a photovoltaics consumer enters the data for a residential system and then the installer or the incentives program also enters the data, the system is counted twice. The _OpenPV Project_ compares data submitted by users to find matches and thereby avoid duplication of data.

A final challenge is to make sure that people know about the _OpenPV_ Project and have incentives to use it. The project meets the challenge in two ways. First, it includes useful and informative summary visualizations to draw people to the site, make sure that others reference it, and help proponents of solar energy keep their communities well represented in the database. Second, project staff get the word out in research papers and conference publications that are related to the project or that use its data.

## Benefits and Outcomes

Since 2011, the _OpenPV_ _Project_ has acquired data from over 400,000 installations of photovoltaic systems. The data are used to gauge the level of adoption of photovoltaics nationwide and to estimate the associated costs across the United States. The project also serves as the repository of these data, which can be downloaded with a high granularity of precision.

## Tips

The _OpenPV Project _case study illustrates the following steps in the Federal Citizen Science and Crowdsourcing Toolkit:

  * **[Scope Out Your Problem](//crowdsourcing-toolkit.sites.usa.gov/step-1-scope-out-your-problem) — Engage Your Stakeholders and Participants
  
** Find a way to engage potential volunteers. If you offer some type of data download or visualization of summary statistics, people will find the site useful and point others to it.

  * **[Manage Your Data](//crowdsourcing-toolkit.sites.usa.gov/step-4-manage-your-data) — Acquire Your Data
  
** It’s hard to get people to enter data into an empty system. By finding sources of data, even partial data, you can seed the system and draw users in to see the data you already have. If they like what they see, then they will be more likely to support your project.

  * **[Manage Your Data](//crowdsourcing-toolkit.sites.usa.gov/step-4-manage-your-data) — Analyze Your Data
  
** Ensure that people reference your project: Don’t just summarize, inspire users. If your website shows your data in a way that is new or a very useful and intuitive, people will use your graphics to reference your project or the data it offers. This will draw attention to your project and build more support.

&nbsp;

[wpex more=&#8221;Learn More&#8221; less=&#8221;Read less&#8221;]

  * Website: _[Open PV Project](https://openpv.nrel.gov/about)_

[/wpex]

&nbsp;

## Contact Information

Dan Getman
  
Email: [dan.getman@nrel.gov](mailto:Dan.getman@nrel.gov)
  
</br>

Last updated: <span class="last-modified-timestamp">Aug 11, 2015</span>