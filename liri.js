require("dotenv").config();

var keys = require('./keys.js');
var request = require('request');
var Spotify = require('node-spotify-api');
var moment = require('moment');
var spotify = new Spotify(keys.spotify);
var fs = require('fs');
var nodeArgv = process.argv;
var command = process.argv[2];

var x = "";

// Set song or movie name as one string

for (var i=3; i<nodeArgv.length; i++){
    if(i>3 && i<nodeArgv.length){
        x = x + "+" + nodeArgv[i];
    } else {
        x = x + nodeArgv[i];
    }
}


switch(command){
  
    case "spotify-this-song":
      if(x){
        spotifySong(x);
      } else{
        spotifySong("Kashmir");
      }
    break;

    case "movie-this":
      if(x){
          omdbData(x);
      }else{
          omdbData("Predator");
      }
    break;

    case "concert-this":
      if(x){
        bandData(x);
      }else{
        bandData("Sting");
      }
    break;

    case "do-what-it-says":
    doThing();
    break;

    default:
      console.log("Please enter a command: spotify-this-song, movie-this or concert-this");
    break;
  }

  function spotifySong(song){
    spotify.search({ type: 'track', query: song, limit: 2 }, function(error, data){
     
      if(error){
        console.log('Error occurred.');
      } else {
        for(var i = 0; i < data.tracks.items.length; i++){
            var songData = data.tracks.items[i];
            //artist
            console.log("Artist: " + songData.artists[0].name);
            //song name
            console.log("Song: " + songData.name);
            //spotify preview link
            console.log("Preview URL: " + songData.preview_url);
            //album name
            console.log("Album: " + songData.album.name);
            console.log("-----------------------");
          }
         
      }
      
    });
  }
  
function  omdbData(movie){
var omdbURL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

request(omdbURL, function (error, response, body) {

  var body = JSON.parse(body);

  console.log('Title: ' + body.Title);
  console.log('Year: ' + body.Year);
  console.log('Rated: ' + body.Rated);
  console.log('Rotten Tomatoes Rating: ' + body.Ratings[1].Value);
  console.log('Country: ' + body.Country)
  console.log('Language: ' + body.Language)
  console.log('Plot: ' + body.Plot)
  console.log('Actors: ' + body.Actors)
});
}

function bandData(x){
  var bandInfo = "https://rest.bandsintown.com/artists/" + x + "/events?app_id=codingbootcamp";
  
  request(bandInfo, function (error, response, body) {
  
    var band = JSON.parse(body);
    console.log('Name of Venue: ' + band[0].venue.name);
    console.log('Location: ' + band[0].venue.city + ", " + band[0].venue.region);
    console.log('Date of Event: ' + moment(band[0].datetime).format("MM/DD/YYYY"))
  });
  }

function doThing(){
fs.readFile("random.txt", "utf8", function(error, data) {

  var txt = data.split(",");

  console.log(txt);

  spotifySong(txt[1]);
  console.log("-------------------");

  
});
}