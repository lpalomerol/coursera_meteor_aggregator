Websites = new Mongo.Collection("websites");

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
Comments.push = function(siteId, authorName, text){
  console.log(arguments);
  Comments.insert({
    siteId: siteId,
    author: authorName,
    comment: text,
    createdOn: new Date()
  });
}


