/// Accounts config

Accounts.ui.config({
  passwordSignupFields: "USERNAME_AND_EMAIL"
});

/////
// template helpers 
/////

Template.body.helpers({
  isLogged: function(){
    return Meteor.user();
  }
});

// helper function that returns all available websites
Template.website_list.helpers({
  websites : function() {
    return Websites.find({});
  }
});

Template.welcome.helpers({
  username: function(){
    if(Meteor.user()){
      return Meteor.user().username;
    } else {
      return "anonymous user";
    }
  }
});

// ///
// template events
// ///

Template.website_item.events({
  "click .js-upvote" : function(event) {
    // example of how you can access the id for the website in the database
    // (this is the data context for the template)
    var website_id = this._id;
    console.log("Up voting website with id " + website_id);
    // put the code in here to add a vote to a website!

    return false;// prevent the button from reloading the page
  },
  "click .js-downvote" : function(event) {

    // example of how you can access the id for the website in the database
    // (this is the data context for the template)
    var website_id = this._id;
    console.log("Down voting website with id " + website_id);

    // put the code in here to remove a vote from a website!

    return false;// prevent the button from reloading the page
  }
})

Template.website_form.events({
  "click .js-toggle-website-form" : function(event) {
    $("#website_form").toggle('slow');
  },
  "submit .js-save-website-form" : function(event) {
 
    Websites.push(event.target.url.value, 
                  event.target.title.value,
                  event.target.description.value);
    alert('New site [' + event.target.title.value + '] added');
    return false;// stop the form submit from reloading the page

  }
});