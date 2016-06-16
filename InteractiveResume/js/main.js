var bio = {
    "name": "Priya Suriyamurthi",
    "role": "Web Developer",
    "contacts": {
        "mobile": "6824012998",
        "email": "Priya.suriyamurthi@gmail.com",
        "github": "https://github.com/PriyaSuriyamurthi",
        "linkedin": "https://www.linkedin.com/pub/priya-suriyamurthi/a7/870/4ba",
        "location": "Austin"
    },
    "biopic": "http://priyasuriyamurthi.github.io/images/Priya-200_x2.png",
    "welcomeMessage": "I'm passionate about web design and web development, and am currently working as a Application consultant. Feel free to check out my Github repositories and demo projects. You can also find me on Linkedin.",
    "skills": ["sportive", "energetic", "enthusiasm", "Hard-working"],
    "award": [{
        "title": "Most Valuable Player",
        "company": "Infosys Limited",
        "date": "January 2015"
    }, {
        "title": "Best Project",
        "company": "Infosys Limited",
        "date": "January 2012"
    }]
};

var skill = {
    "skilldata": ["Javascript", "HTML", "jQuery", "CSS", "Bootstrap", "github"]

};

var work = {
    "jobs": [{
        "employer": "CM First Group",
        "title": "Application Consultant",
        "dates": "Mar 2016 - Till date",
        "location": "Austin",
        "description": "Analysis, Coding, Testing, Maintanence"
    }, {
        "employer": "CVS Caremark",
        "title": "Technology Lead",
        "dates": "Jan 2015 - Jan 2016",
        "location": "Richardson",
        "description": "Analysis, Coding, Testing, Maintanence"
    }, {
        "employer": "Infosys Limited",
        "title": "Technology Analyst",
        "dates": "Sep 2008 - Jan 2016",
        "location": "Fort Worth",
        "description": "Analysis, Coding, Testing, Maintanence"
    }]
};

var projects = {
    "projects": [{
        "title": "Portfolio",
        "dates": "Jun 2016",
        "description": "Create a portfolio using HTML and CSS",
        "images": ["img/portfolio.png"],
        "demo": "http://priyasuriyamurthi.github.io/",
        "gitlink": "https://github.com/PriyaSuriyamurthi/priyasuriyamurthi.github.io"
    }, {
        "title": "Free Code Camp",
        "dates": "Dec 2015",
        "description": "HTML, CSS, Javascript and jQuery projects",
        "images": ["img/freecodecamp.png"],
        "demo": "https://www.freecodecamp.com/priyasuriyamurthi",
        "gitlink": "https://github.com/PriyaSuriyamurthi/priyasuriyamurthi.github.io"
    }]
};

var education = {
    "schools": [{
        "name": "Savithri Vidyasala",
        "location": "Trichy",
        "degree": "Higher Secondary",
        "majors": ["Biology", "Physics", "Chemistry", "Maths"],
        "dates": "2002-2004",
        "url": "http://www.svstrichy.edu.in/ "
    }, {
        "name": "Anna University",
        "location": "Trichy",
        "degree": "B.E",
        "majors": ["Electronics", "communication"],
        "dates": "2004-2008",
        "url": "https://www.annauniv.edu/"
    }],
    "onlineCourses": [{
        "title": "Web Developer ",
        "school": "FCC",
        "date": "2015-2016",
        "url": "http://www.freecodecamp.com"
    }, {
        "title": "Web Developer ",
        "school": "Udacity",
        "date": "2015-2016",
        "url": "http://www.udacity.com"
    }]
};

var HTMLprofileName = '<h2 class="header-featured">%data%</h2>';
var HTMLroleText = '<h3 class="header-featured">%data%</h3>';
var HTMLcontactLocation = '<h4 class="header-featured">%data%</h4><hr>';

var HTMLawardStart = '<div class="award-entry"></div>';
var HTMLawardEmployer = '<a href="#">%data%';
var HTMLawardTitle = ' - %data%</a>';
var HTMLawardDates = '<p>%data%</p>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data% </a>';
var HTMLworkTitle = '<p>- %data%</p>';
var HTMLworkDates = '<p>%data%</p>';
var HTMLworkLocation = '<p>%data%</p>';
var HTMLworkDescription = '<ul>%data%</ul>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<p>%data%</p>';
var HTMLprojectDescription = '<p>%data%</p>';
var HTMLprojectImage = ' <img class="img-responsive" src="%data%" alt="Profile Picture">';
var HTMLprojectDemo = '<a href="%data%" id="demo-link" target="_blank">Demo</a>';
var HTMLprojectGit = '<a href="%data%" id="demo-link" target="_blank">Github</a>';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<br><a href="#">%data%</a>';
var HTMLschoolDegree = '<p> -- %data%</p>';
var HTMLschoolDates = '<p>%data%</p>';
var HTMLschoolLocation = '<p>%data%</p>';
var HTMLschoolmajors = '<em>Majors: %data%</em>';
var HTMLschoolUrl = '<a href="%data%" target="_blank">%data%</a> <br>';

var HTMLonlineStart = '<div class="online-entry"></div>';
var HTMLonlineHead = '<h3 class="header-featured">Online Classes</h3>';
var HTMLonlineTitle = '<br><a href="#">%data%</a>';
var HTMLonlineSchool = '<p> - %data%</p>';
var HTMLonlineDates = '<p>%data%</p>';
var HTMLonlineURL = '<a href="%data%" target="_blank">%data%</a>';

var HTMLfooterTitle = "<h4>%data%</h4>";

var googleMap = '<div id="map"></div>';

$(document).ready(function() {
    $('.carousel').carousel({
        interval: false
    });

    bioInitialize();
    workInitialize();
    projectsInitialize();
    educationInitalize();
    //Append to get the map
    $("#mapDiv").append(googleMap);
    //Append to get the footer
    $(".footer-entry:last").append(HTMLfooterTitle.replace("%data%", "©" + bio.name));

});


function bioInitialize() {
    if (typeof work != "undefined") {
        if (jQuery.isEmptyObject(bio)) {
            $("body").css("display", "none");
        } else {
            bio.display = function() {

                $(".profile-pic").attr("src", bio.biopic);
                $(".profile-text").append(HTMLprofileName.replace("%data%", bio.name), HTMLroleText.replace("%data%", bio.role), HTMLcontactLocation.replace("%data%", bio.contacts.location));
                $("#welcome-text").append(bio.welcomeMessage);
                if (bio.skills.length > 0) {
                    for (var i = 0; i < bio.skills.length; i++) {
                        $("#skill-text").append("<li>" + bio.skills[i] + "</li>");
                    }
                }
                var contactMobile = $("#contact-phone").attr("href") + bio.contacts.mobile;
                $("#contact-phone").attr("href", contactMobile);
                var contactEmail = $("#contact-email").attr("href") + bio.contacts.email;
                $("#contact-email").attr("href", contactEmail);
                $("#contact-github").attr("href", bio.contacts.github);
                $("#contact-linked").attr("href", bio.contacts.linkedin);
                if (bio.award.length > 0) {
                    for (var i = 0; i < bio.award.length; i++) {
                        $("#awards-text").append(HTMLawardStart);
                        $(".award-entry:last").append(HTMLawardEmployer.replace("%data%", bio.award[i].company));
                        $(".award-entry:last").append(HTMLawardTitle.replace("%data%", bio.award[i].title));
                        $(".award-entry:last").append(HTMLawardDates.replace("%data%", bio.award[i].date));
                    }
                }
            };
            bio.display();
        }
    } else {
        $("body").css("display", "none");
    }

}

function workInitialize() {
    if (typeof work != "undefined") {
        if (jQuery.isEmptyObject(work)) {
            $("#experience").css("display", "none");

        } else {
            work.display = function() {
                var descripDetails;
                var workDescription;
                for (var i = 0; i < work.jobs.length; i++) {
                    $("#workExperience").append(HTMLworkStart);
                    $(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work.jobs[i].employer));
                    $(".work-entry:last").append(HTMLworkTitle.replace("%data%", work.jobs[i].title));
                    $(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[i].location));
                    $(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[i].dates));
                    descripDetails = work.jobs[i].description.split(",");
                    workDescription = " ";
                    for (var j = 0; j < descripDetails.length; j++) {
                        workDescription = workDescription + "<li>" + descripDetails[j] + "</li>";
                    }
                    $(".work-entry:last").append(HTMLworkDescription.replace("%data%", workDescription));
                }
            };
            work.workChart = function() {
                var dataval = [];
                var backgndColor = [];
                var color = ' ';
                if (skill.skilldata.length > 0) {
                    for (var len = skill.skilldata.length; len >= 0; len--) {
                        dataval.push(len * 2);
                        color = ' ';
                        color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
                        backgndColor.push(color);
                    }
                    var data = {
                        datasets: [{
                            data: dataval,
                            backgroundColor: backgndColor,
                            label: 'My dataset'
                        }],
                        labels: skill.skilldata
                    };
                    window.onload = function() {
                        var ctx = document.getElementById("skills-chart").getContext("2d");
                        window.myPolarArea = new Chart(ctx, {
                            data: data,
                            type: 'polarArea',
                            reposnsive: false,
                            hoverBackgroundColor: "#000000"
                        });
                    };
                }
            };
            work.display();
            work.workChart();

        }
    } else {
        $("#experience").css("display", "none");
    }
}

function projectsInitialize() {
    if (jQuery.isEmptyObject(projects) != "undefined") {
        if (jQuery.isEmptyObject(projects)) {
            $("projects").css("display", "none");
        } else {
            projects.display = function() {
                for (var i = 0; i < projects.projects.length; i++) {
                    $("#workProjects").append(HTMLprojectStart);
                    $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[i].title), HTMLprojectDates.replace("%data%", projects.projects[i].dates), HTMLprojectDescription.replace("%data%", projects.projects[i].description));
                    if (projects.projects[i].images.length > 0) {
                        for (var j = 0; j < projects.projects[i].images.length; j++) {
                            $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[i].images[j]));
                        }
                    }
                    $(".project-entry:last").append(HTMLprojectDemo.replace("%data%", projects.projects[i].demo), HTMLprojectGit.replace("%data%", projects.projects[i].gitlink));

                }
            };
            projects.display();
        }
    } else {
        $("projects").css("display", "none");
    }

}

function educationInitalize() {
    if (jQuery.isEmptyObject(education) != "undefined") {
        if (jQuery.isEmptyObject(education)) {
            $("educations").css("display", "none");
        } else {
            education.display = function() {
                for (var i = 0; i < education.schools.length; i++) {
                    $("#education").append(HTMLschoolStart);
                    $(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[i].name));
                    $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[i].location));
                    $(".education-entry:last").append(HTMLschoolDegree.replace("%data%", education.schools[i].degree));
                    if (education.schools[i].majors.length > 0) {
                        $(".education-entry:last").append(HTMLschoolmajors.replace("%data%", education.schools[i].majors.join(",")));
                    }
                    $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[i].dates));
                    $(".education-entry:last").append(HTMLschoolUrl.replace(/%data%/g, education.schools[i].url));
                }
                $(".education-entry:last").append(HTMLonlineHead);
                for (var i = 0; i < education.onlineCourses.length; i++) {
                    $("#education").append(HTMLonlineStart);
                    $(".online-entry:last").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title));
                    $(".online-entry:last").append(HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school));
                    $(".online-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[i].date));
                    $(".online-entry:last").append(HTMLonlineURL.replace(/%data%/g, education.onlineCourses[i].url));
                }
            };

            education.chartDisplay = function() {
                var educationdates = [];
                var educationtitle = [];
                var educationindex;
                if (education.schools.length > 0) {
                    for (var i = 0; i < education.schools.length; i++) {
                        educationindex = 0;
                        educationindex = education.schools[i].dates.indexOf("-");
                        educationdates.push(education.schools[i].dates.substring(++educationindex));
                        educationtitle.push(education.schools[i].degree);
                    }
                }
                if (education.onlineCourses.length > 0) {
                    for (var i = 0; i < education.onlineCourses.length; i++) {
                        educationindex = 0;
                        educationindex = education.onlineCourses[i].date.indexOf("-");
                        educationdates.push(education.onlineCourses[i].date.substring(++educationindex));
                        educationtitle.push((education.onlineCourses[i].title).concat(education.onlineCourses[i].school));
                    }
                }

                if ((educationdates.length > 0) && (educationtitle.length > 0)) {
                    var data1 = {
                        labels: educationtitle,
                        datasets: [{
                            label: "Education & online",
                            backgroundColor: "rgba(255,99,132,0.2)",
                            borderColor: "rgba(255,99,132,1)",
                            borderWidth: 1,
                            hoverBackgroundColor: "rgba(255,99,132,0.4)",
                            hoverBorderColor: "rgba(255,99,132,1)",
                            data: educationdates
                        }]

                    };

                    // Call functions
                    var ctx1 = document.getElementById("education-chart").getContext("2d");
                    new Chart(ctx1, {
                        type: 'horizontalBar',
                        data: data1,
                        reponsive: false
                    });
                }
            };
            education.display();
            education.chartDisplay();


        }
    } else {
        $("educations").css("display", "none");
    }
}
var map;

function initializeMap() {

    var locations;

    var mapOptions = {
        disableDefaultUI: true,
        zoom: 8

    };




    map = new google.maps.Map(document.querySelector('#map'), mapOptions);


    /*
    locationFinder() returns an array of every location string from the JSONs
    written for bio, education, and work.
    */
    function locationFinder() {

        // initializes an empty array
        var locations = [];

        // adds the single location property from bio to the locations array
        locations.push(bio.contacts.location);

        // iterates through school locations and appends each location to
        // the locations array. Note that forEach is used for array iteration
        // as described in the Udacity FEND Style Guide:
        // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
        education.schools.forEach(function(school) {
            locations.push(school.location);
        });

        // iterates through work locations and appends each location to
        // the locations array. Note that forEach is used for array iteration
        // as described in the Udacity FEND Style Guide:
        // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
        work.jobs.forEach(function(job) {
            locations.push(job.location);
        });

        return locations;
    }

    /*
    createMapMarker(placeData) reads Google Places search results to create map pins.
    placeData is the object returned from search results containing information
    about a single location.
    */
    function createMapMarker(placeData) {

        // The next lines save location data from the search result object to local variables
        var lat = placeData.geometry.location.lat(); // latitude from the place service
        var lon = placeData.geometry.location.lng(); // longitude from the place service
        var name = placeData.formatted_address; // name of the place from the place service
        var bounds = window.mapBounds; // current boundaries of the map window

        // marker is an object with additional data about the pin for a single location
        var marker = new google.maps.Marker({
            map: map,
            position: placeData.geometry.location,
            title: name,
            animation: google.maps.Animation.DROP,
            icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
        });

        // infoWindows are the little helper windows that open when you click
        // or hover over a pin on a map. They usually contain more information
        // about a location.
        var infoWindow = new google.maps.InfoWindow({
            content: name
        });

        // hmmmm, I wonder what this is about...
        google.maps.event.addListener(marker, 'click', function() {
            infoWindow.open(map, marker);
        });

        // this is where the pin actually gets added to the map.
        // bounds.extend() takes in a map location object
        bounds.extend(new google.maps.LatLng(lat, lon));
        // fit the map to the new marker
        map.fitBounds(bounds);
        // center the map
        map.setCenter(bounds.getCenter());
    }

    /*
    callback(results, status) makes sure the search returned results for a location.
    If so, it creates a new map marker for that location.
    */
    function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            createMapMarker(results[0]);
        }
    }

    /*
    pinPoster(locations) takes in the array of locations created by locationFinder()
    and fires off Google place searches for each location
    */
    function pinPoster(locations) {

        // creates a Google place search service object. PlacesService does the work of
        // actually searching for location data.
        var service = new google.maps.places.PlacesService(map);

        // Iterates through the array of locations, creates a search object for each location
        locations.forEach(function(place) {
            // the search request object
            var request = {
                query: place
            };

            // Actually searches the Google Maps API for location data and runs the callback
            // function with the search results after each search.
            service.textSearch(request, callback);
        });
    }

    // Sets the boundaries of the map based on pin locations
    window.mapBounds = new google.maps.LatLngBounds();

    // locations is an array of location strings returned from locationFinder()
    locations = locationFinder();

    // pinPoster(locations) creates pins on the map for each location in
    // the locations array
    pinPoster(locations);

}

/*
Uncomment the code below when you're ready to implement a Google Map!
*/

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
    //Make sure the map bounds get updated on page resize
    map.fitBounds(mapBounds);
});