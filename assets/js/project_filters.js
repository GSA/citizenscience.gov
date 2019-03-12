var projectTags = [];
var catalogFilter = {};

// Helper function to return only unique elements in an array
function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

// Return an object with the filter settings; which checkboxes are checked
function updateCatalogFilter() {
  // Reset the filter
  catalogFilter = {
    statuses: [],
    agencies: [],
    fieldsOfScience: []
  }

  // Get an array of checked checkboxes
  var checkedCheckboxes = $("input[type='checkbox']:checked");

  // Reset the filter, based on the checkboxes
  $.each(checkedCheckboxes, function(j, checkedCheckbox) {
    var checkboxType = $(checkedCheckbox).attr("data-checkbox-type");
    var checkboxValue = checkedCheckbox.value;

    if(checkboxType === "status") {
      catalogFilter.statuses.push(checkboxValue.toLowerCase());
    }
    if(checkboxType === "agency") {
      catalogFilter.agencies.push(checkboxValue.toLowerCase());
    }
    if(checkboxType === "field-of-science") {
      catalogFilter.fieldsOfScience.push(checkboxValue);
    }
  });
  return catalogFilter;
}

// Helper function return matching elements between 2 arrays
function matchArrays(array1, array2) {
  var results = array1.filter(value => -1 !== array2.indexOf(value));
  if (results.length > 0) {
    return results;
  } else {
    return false;
  }
}

// Called when a checkbox is clicked
// Hides all Projects and shows only the Projects that meet the Filter criteria
function reRenderResults() {
  // Get the latest filter Settings
  var catalogFilter = updateCatalogFilter();
  // Hide all the projects
  $(".catalog-project-list").hide();

  // Loop through all Projects
  // and display the Projects
  // that positively satisfy the Filter criterion
  $.each($(".catalog-project-list"), function(i, projectElement) {
    var project = $(projectElement);
    var status = project.attr("data-project-status");
    var agencies = project.attr("data-project-agency");
    var topics = project.attr("data-project-topic");

    // Agency Tags for this Project - as an Array
    var agencyTags = [];
    // Field of Science for this Project - as an Array
    var fieldOfScienceTags = [];

    // parse the comma-delimited Agencies string
    $.each(agencies.split(","), function(i, agency) {
      agency = agency.trim().toLowerCase();
      agencyTags.push(agency);
    });

    // parse the comma-delimited Topics string (which are Fields of Science)
    $.each(topics.split(","), function(i, topic) {
      topic = topic.trim();
      fieldOfScienceTags.push(topic);
    });

    // for Active/Complete Checkboxes.
    // Match the selected Status in the Filter against the Projects elements rendered
    var foundStatus = catalogFilter.statuses.includes(status);
    if(foundStatus) {
      // Match the selected Agencies in the Filter against the Projects elements rendered
      var foundAgency = matchArrays(catalogFilter.agencies, agencyTags);
      if(foundAgency) {
        // Match the selected Fields of Science in the Filter against the Projects elements rendered
        var foundFieldOfScience = matchArrays(catalogFilter.fieldsOfScience, fieldOfScienceTags);
        if(foundFieldOfScience) {
          project.show()
        }
      }
    }
  });
}

// Write new checkboxes for each fieldOfScience
function createFieldOfScienceCheckboxes() {
  // Define the fieldsOfScience
  var fieldsOfScience = [];

  // Gather each Project's Tags into an Array
  $.each($(".catalog-project-list"), function(i, projectElement) {
    var project = $(projectElement);
    var tags = project.attr("data-project-topic");
    $.each(tags.split(","), function(i, tag) {
      tag = tag.trim();
      fieldsOfScience.push(tag);
    });
  });

  // De-dupe and sort the Array
  var uniqueSortedFieldsOfScience = fieldsOfScience.filter(onlyUnique).sort();

  // Create a checkbox for each unique Field of Science
  $.each(uniqueSortedFieldsOfScience, function(i, fieldOfScience) {
    var li = $("<li>");
    var checkbox = $('<input id="checkbox-' + i + '" type="checkbox" value="' + fieldOfScience + '" data-checkbox-type="field-of-science" checked>');
    var label = $('<label for="checkbox-' + i + '">');
    label.text(fieldOfScience);
    li.append(checkbox);
    li.append(label);
    $("#fields-of-science-checkboxes").append(li);
  });
}

// Runs on Page Load
$(function() {
  createFieldOfScienceCheckboxes();

  // Add behavior to Search Container checkboxes.
  // Re-render the filtered results when a checkbox is clicked
  var checkboxes = $(".search-container input[type='checkbox']");
  checkboxes.on("click", function() {
    reRenderResults();
  });
});
