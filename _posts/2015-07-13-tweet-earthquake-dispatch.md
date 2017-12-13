---
id: 9482
title: 'Tweet Earthquake Dispatch: Crowdsourcing Earthquake Detection'
date: 2015-07-13T14:06:03+00:00
author: Kendrick Daniel
layout: posts
guid: https://crowdsourcing-toolkit.sites.usa.gov/?p=9482
permalink: /2015/07/13/tweet-earthquake-dispatch/
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
  - 'a:6:{s:92:"https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/1054/2015/06/casestudy-ted-02.gif";i:7052;s:100:"https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/1054/2015/06/casestudy-ted-02-300x246.gif";i:7052;s:92:"https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/1054/2015/06/casestudy-ted-01.gif";i:7042;s:100:"https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/1054/2015/06/casestudy-ted-01-300x225.gif";i:7042;s:101:"https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/1054/2015/09/tweet-earthquake-dispatch.pdf";i:25092;s:100:"https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/1054/2015/06/casestudy-ted-01-400x300.gif";i:7042;}'
image: https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/1054/2015/07/feature-ted-.jpg
categories:
  - All
  - Crowdmapping
tags:
  - Action
  - earth science
  - General Public
  - geolocation
  - In the field
  - International
  - monitoring
  - Observation
  - Outreach
  - physics
  - Rural
  - social sciences
  - suburban
  - teens
  - U.S. Department of the Interior
  - U.S. Geological Survey
  - Urban
---
<figure class="case-study-image"></figure> <figure class="case-study-image"></figure> 

## Case Study Overview

<div id="attachment_7062" style="width: 357px" class="wp-caption alignright">
  <img class="wp-image-7062" src="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/672/2015/06/casestudy-ted-main.gif" alt="A diagram of how all the tweets are collected using the Twitter streaming API, merged with other earthquake data in the database, and then used to send a 'Tweet Earthquake Dispatch' tweet." width="347" height="271" />
  
  <p class="wp-caption-text">
    Diagram showing how tweets are collected using the Twitter streaming API, merged with other earthquake data in the database, and then used to send a <em>TED</em> tweet. Credit: U.S. Geological Survey.
  </p>
</div>

Within seconds of an earthquake, many people report what they felt through social networks such as Twitter. By contrast, scientific alerts can take up to 20 minutes, depending on the size and location of the earthquake.

_[Tweet Earthquake Dispatch](http://earthquake.usgs.gov/earthquakes/ted/)_ uses social networks to support earthquake response and report information about related hazards. Through the _TED_ system, the U.S. Geological Survey’s [National Earthquake Information Center](http://earthquake.usgs.gov/contactus/golden/neic.php) analyzes data from social networks to detect earthquakes within seconds of their occurrence. It also uses _TED_ to assess citizen reports of earthquakes alongside corresponding scientific reports and to tailor its own social networking about earthquakes to the corresponding level of public interest.** **

<a href="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/1054/2015/09/tweet-earthquake-dispatch.pdf" target="_blank">Download this case study (PDF, 79KB)</a>
  
Website:_ [Tweet Earthquake Dispatch](http://earthquake.usgs.gov/earthquakes/ted/)_

## Project Description

<div id="attachment_7052" style="width: 310px" class="wp-caption alignleft">
  <img class="wp-image-7052 size-medium" src="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/1054/2015/06/casestudy-ted-02-300x246.gif" alt="A snapshot of the tweets that TED system sends out to followers." width="300" height="246" />
  
  <p class="wp-caption-text">
    Snapshot of the tweets that the <em>TED</em> system sends out to followers.
  </p>
</div>

_TED_ harvests real-time tweets through a continuous connection to Twitter. The system applies a query parameter to reduce the stream to tweets that contain the keyword earthquake in several languages.

The system also applies other data-cleaning techniques. It merges tweets, ordering them, accounting for duplicates and filling any data gaps. Data from aggregators — users who redistribute secondhand earthquake information — are removed from the dataset.

For each tweet filtered by keyword, _TED_ archives the creation time and text, the Twitter user location, the Twitter tweet ID, and the time the tweet appeared in the _TED_ database. The system also uses the Yahoo Maps API Geocoding Service to estimate the latitude and longitude of the sender’s location, if provided.

Around the clock, _TED _also ingests seismically derived earthquake information from the USGS’s near-real-time internal global earthquake stream. _TED_ archives the earthquake time, region, magnitude and hypocenter (latitude, longitude and depth). It also records the source of the scientifically derived earthquake information.

For earthquakes that have been verified using seismic instruments, _TED_ subsequently sends out a tweet to followers with basic information about the earthquake.

## Challenges

<div id="attachment_7042" style="width: 310px" class="wp-caption alignright">
  <img class="wp-image-7042 size-medium" src="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/1054/2015/06/casestudy-ted-01-300x225.gif" alt="A screenshot of the TED operational monitoring display, showing real-time tweets along with line charts, bar charts, and a map with color-coded pins." width="300" height="225" srcset="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/1054/2015/06/casestudy-ted-01-300x225.gif 300w, https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/1054/2015/06/casestudy-ted-01-400x300.gif 400w" sizes="(max-width: 300px) 100vw, 300px" />
  
  <p class="wp-caption-text">
    The <em>TED</em> operational monitoring display, showing real-time tweets that contain the keywords that <em>TED</em> uses to determine that an earthquake has occurred somewhere. Credit: U.S. Geological Survey.
  </p>
</div>

_TED_ supports the mission of the USGS National Earthquake Information Center by providing rapid information about the occurrence of an earthquake. This information augments but does not replace the instrumental data collected by the USGS. _TED_ provides no quantitative information about earthquake epicenter and magnitude, for example, and the geographic location it gives is not always reliable. Without verified quantitative data, the National Earthquake Information Center can neither issue public alerts nor trigger direct response measures.

## Benefits and Outcomes

The main advantage of mining citizen reports through Twitter is speed.  Rapid tweet-based earthquake detection can potentially fill the gap between the time when an earthquake occurs and the time when seismically derived information becomes available.

_TED_ detects two to three earthquakes a day, on average. Especially in regions with few seismometers, _TED_ reports often come in before traditional seismic networks detect an earthquake, giving seismologists early warning. _TED_ sometimes detects earthquakes entirely missed by USGS&#8217;s automatic processing system, thereby increasing the number of felt events known to the agency. In addition, the tweet text and attached images sometimes offer a rapid qualitative assessment of an earthquake&#8217;s impact.

## Tips

The _Tweet Earthquake Dispatch_ case study illustrates the following step in the Federal Citizen Science and Crowdsourcing Toolkit:

  * **[Scope Out Your Problem](//crowdsourcing-toolkit.sites.usa.gov/step-1-scope-out-your-problem) — Know Where Your Project Fits
  
** This project complements _[Did You Feel It?](http://earthquake.usgs.gov/earthquakes/dyfi/),_ delivering faster information about an earthquake occurrence and its general area. By contrast, _Did You Feel It?_ produces quantitative maps showing the distribution of shaking.

&nbsp;

[wpex more=&#8221;Learn more&#8221; less=&#8221;Read less&#8221;]

  * Website:_ [Tweet Earthquake Dispatch](http://earthquake.usgs.gov/earthquakes/ted/)_

[/wpex]

&nbsp;

## Contact Information

Paul Earle
  
Email: <pearle@usgs.gov>
  
</br>

Last updated: <span class="last-modified-timestamp">Jul 13, 2015</span>