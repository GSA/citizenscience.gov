---
layout: toolkit-case-study-base
permalink: /toolkit/case-study/
title: Case Studies
last-updated: January 2018
---


<div class="usa-section usa-grid">

	<h2>{{ page.title }}</h2>

{% for item in site.case-study %}
	{% assign third = forloop.index | modulo: 3 %} {% if third == 0 %}
		<div class="usa-width-one-third usa-end-row case-study-list">
				{% else %}
				<div class="usa-width-one-third case-study-list">
						{% endif %}
						<article>
								<a href="{{ item.url | prepend: site.baseurl }}">
									<img src="{{ item.image | prepend: site.baseurl }}">
								</a>
								<div class="infos">
										<h3 class="title">{{ item.title }}</h3>
										<p>
											<a href="{{ item.url | prepend: site.baseurl }}" class="details">read more</a>
										</p>
								</div>
						</article>
		</div>
{% endfor %}
</div>