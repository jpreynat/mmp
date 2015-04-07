Beers = new Mongo.Collection('beers');
Breweries = new Mongo.Collection('breweries');
BreweriesGeocode = new Mongo.Collection('breweriesgeocode');
Categories = new Mongo.Collection('categories');
Pubs = new Mongo.Collection('pubs');
Styles = new Mongo.Collection('styles');

Meteor.startup(function () {
// code to run on server at startup
});

Meteor.publish('breweries', function () {
	return Breweries.find({}, { sort: [[ 'name', 'asc' ]], fields: { id: 1, name: 1 }});
});

Meteor.publish('beers', function () {
	return Beers.find({}, { fields: { id: 1, name: 1 } });
})

Meteor.publish('pubs', function () {
	return Pubs.find({});
})