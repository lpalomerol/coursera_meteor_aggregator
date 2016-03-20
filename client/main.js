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

Template.welcome.helpers({
  username: function(){
    if(Meteor.user()){
      return Meteor.user().username;
    } else {
      return "anonymous user";
    }
  }
});

// helper function that returns all available websites
Template.website_list.helpers({
  websites : function() {
    return Websites.find({},{sort:{votes: -1}});
  }
});

Template.website_item.helpers({
  formatDate: function(date){
    var curr_date = date.getDate();
    var curr_month = date.getMonth() + 1; //Months are zero based
    var curr_year = date.getFullYear();
    return (curr_date + "-" + curr_month + "-" + curr_year);  
  }
});

// ///
// template events
// ///

Template.website_item.events({
  "click .js-upvote" : function(event) {
    var websiteId = this._id;
    
    Websites.voteUp(websiteId);

    return false;// prevent the button from reloading the page
  },
  "click .js-downvote" : function(event) {

    var websiteId = this._id;
    
    Websites.voteDown(websiteId); 

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