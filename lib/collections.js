Websites = new Mongo.Collection("websites");

Websites.push = function(url, title, description){
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
