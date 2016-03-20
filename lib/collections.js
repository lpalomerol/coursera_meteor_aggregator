Websites = new Mongo.Collection("websites");

Websites.allow({
  insert: function(userId, doc){
    return (Meteor.user())?true:false;
  },
  update: function(userId, doc){
    return (Meteor.user())?true:false;
  }
});

Websites.push = function(title, url, description){
  Websites.insert({
    title:title,
    url:url,
    description:description,
    votes: 0,
    createdOn:new Date()
  });
}

Websites.voteUp = function(id){
  Websites.update({_id: id},{$inc: {votes:1}});  
}

Websites.voteDown = function(id){
  Websites.update({_id: id},{$inc: {votes:-1}});
}


Comments = new Mongo.Collection("comments");

Comments.allow({
  insert: function(userId, doc){
    if (Meteor.user()){               
      if (Meteor.user().username != doc.author){                                            
        return false;
      }
      else {                                                    
        return true;
      }
    } else {                            
      return false;
    }
  }
})

Comments.push = function(siteId, authorName, text){
  Comments.insert({
    siteId: siteId,
    author: authorName,
    comment: text,
    createdOn: new Date()
  });
}


