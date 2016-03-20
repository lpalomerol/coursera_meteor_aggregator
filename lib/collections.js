Websites = new Mongo.Collection("websites");

Websites.push = function(url, title, description){
  Websites.insert({
    title:title,
    url:url,
    description:description,
    createdOn:new Date()
  });

}
