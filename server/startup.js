// start up function that creates entries in the Websites databases.
Meteor.startup(function () {
  // code to run on server at startup
  if (!Websites.findOne()){
    console.log("No websites yet. Creating starter data.");
    Websites.push("Goldsmiths Computing Department",
        "http://www.gold.ac.uk/computing/",
        "This is where this course was developed.");
    Websites.push("University of London",
        "http://www.londoninternational.ac.uk/courses/undergraduate/goldsmiths/bsc-creative-computing-bsc-diploma-work-entry-route",
        "University of London International Programme.");
    Websites.push("Coursera",
        "http://www.coursera.org",
        "Universal access to the world’s best education.");
    Websites.push("Google",
        "http://www.google.com",
        "Popular search engine");
  }
});