# liri-node-app

liri is a node js app that searches songs, movies and concerts

  * `spotify-this-song`

  * `movie-this`

  * `concert-this`

  * `do-what-it-says`

## Getting Started

- Clone down repo to local computer.
- Get the the directory that the app is cloned into.
- Install all dependencies by going to the terminal and typing `npm install`
- Setup a .env file on your local desktop that contains the spotify api keys that you will need.
- Run command 'node liri.js' followed by one of the commands listed.
    - `spotify-this-song`
    - `movie-this`
    - `concert-this`

## What Each Command Does


1. `node liri.js spotify-this-song <song name>`

  * Shows the following information about the song in terminal/bash window.
    * Artist(s)
    * The song's name
    * A preview link of the song from Spotify
    * The album that the song is from

  * If no song is provided, then the program will default to
    * "The Sign" by Ace of Base

2. `node liri.js movie-this <movie name>`

  * Shows the following information in terminal/bash.

    * Title of the movie.
    * Year the movie came out.
    * IMDB Rating of the movie.
    * Rotten Tomatoes Rating of the movie.
    * Country where the movie was produced.
    * Language of the movie.
    * Plot of the movie.
    * Actors in the movie.

  * Or if no movie is passed through, it will default to "Mr. Nobody"

3. `node liri.js concert-this`

  * This will search the Bands in Town Artist Events API and render the following information about each event to the terminal
    * Name of the venue
    * Venue location
    * Date of teh Event (using moment to formate it as "MM/DD/YYY")

4. `node liri.js do-what-it-says`

  * Takes the text from random.txt and runs the song through spotify-this-song, the movie through movie-this and the artist through concert-this commands

## Tech used
- check the package.json file

## Screenshot
![Alt text](screenshot.png?raw=true "Screen Shot")
