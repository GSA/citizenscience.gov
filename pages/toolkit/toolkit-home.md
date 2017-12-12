---
layout: toolkit-base
permalink: /toolkit/
title: Federal Crowdsourcing and Citizen Science Toolkit
how-to-link: /toolkit/howto/
case-study-link: /toolkit/case-study/
resources-link: /toolkit/resource-library/
banner-heading: Find Federally Sponsored Projects
banner-text: The Federal Crowdsourcing and Citizen Science Catalog provides a government-wide listing of citizen science and crowdsourcing projects by agency. Projects submitted to the catalog are validated for agency involvement by federal employees.
banner-button-text: view the catalog
banner-button-link: https://ccsinventory.wilsoncenter.org/
---


<div class="usa-section usa-grid">

	<h2>{{ page.title }}</h2>

	<div class="project-container">
	    <article class="card usa-width-one-third">
	      <a href="{{ page.how-to-link | prepend: site.baseurl }}">
	      <div class="card-image" style="background-image: url({{ site.baseurl }}/assets/img/toolkit-images/how-to-home.gif); min-height: 200px">
	      </div>
	    </a>
	      <div class="card-banner">
	        <h3 class="card-description">How To: Step by Step</h3>
	        <p class="card-summary">This toolkit shows five basic process steps for planning, designing and carrying out a crowdsourcing or citizen science project. At each step, you’ll find a list of tips you can use to keep your project on track.</p>
	      </div>
	      <a class="card-read" href="{{ page.how-to-link | prepend: site.baseurl }}">
	        See the process steps
	        <span class="usa-sr-only">about {{ project.title }}</span>
	      </a>
	    </article>




	    <article class="card usa-width-one-third">
	      <a href="{{ page.case-study-link | prepend: site.baseurl }}">
	      <div class="card-image" style="background-image: url({{ site.baseurl }}/assets/img/toolkit-images/home-case-studies2.gif); min-height: 200px">
	      </div>
	    </a>
	      <div class="card-banner">
	        <h3 class="card-description">Case Study Overview</h3>
	        <p class="card-summary">Case studies in this toolkit serve as models and provide success stories and challenges to consider while planning a project. You can browse through agency case studies to get ideas for a project of your own.</p>
	      </div>
	      <a class="card-read" href="{{ page.case-study-link | prepend: site.baseurl }}">
	        Browse Case Studies
	        <span class="usa-sr-only">about {{ project.title }}</span>
	      </a>
	    </article>



	    <article class="card usa-width-one-third">
	      <a href="{{ page.resources-link | prepend: site.baseurl }}">
	      <div class="card-image" style="background-image: url({{ site.baseurl }}/assets/img/toolkit-images/home-resources2.gif); min-height: 200px">
	      </div>
	    </a>
	      <div class="card-banner">
	        <h3 class="card-description">Resource Library</h3>
	        <p class="card-summary">The resource library provides a list of all resources in this toolkit which you can browse through by category. You can also find resources within each of the process steps in the "How To" section of the toolkit.</p>
	      </div>
	      <a class="card-read" href="{{ page.resources-link | prepend: site.baseurl }}">
	        View Resources
	        <span class="usa-sr-only">about {{ project.title }}</span>
	      </a>
	    </article>
	</div>
</div>





<section class="usa-section banner tagline">
	<div class="usa-grid">
    <h2 style="text-align:center">Visit CitizenScience.gov to also learn about a catalog of projects and communities to join!</h2>
    </div>
</section>

<section class="usa-grid usa-section"> 
        <div class="usa-width-two-thirds">
	<h2 style="text-decoration: underline">Other Innovation Communities</h2>
		<ul>
			<li><a href="https://www.digitalgov.gov/communities/challenges-prizes/" target="blank">Challenges and Prizes</a></li>
			<li><a href="https://www.digitalgov.gov/communities/" target="blank">DigitalGov</a></li>
			<li><a href="https://www.data.gov/" target="blank">Data.gov</a></li>
			<li><a href="https://www.digitalgov.gov/communities/social-media/" target="blank">SocialMedia CoP</a></li>
		</ul>
    </div>
</section>

{% include contact.html %}

