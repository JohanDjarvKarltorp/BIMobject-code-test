# BIMobject-code-test
People are different, same with developers, and we love that. If you like CSS like nothing else, don’t spend time getting a test suite up and running. Spend time on what you know and what you’re good at. We suggest that you use http://omdbapi.com/, the open movie database. It has a simple API, where you can search for movies and display them.

Optional
- Make the website server side rendered (functional when JavaScript is turned off). :heavy_check_mark:

# Run
- Clone the repo `git clone git@github.com:JohanDjarvKarltorp/coordinates.git`
- Jump to directory `cd coordinates`
- Install npm modules `npm install`
- Start server `node index.js`
- Go to http://localhost:1337/

## Test
- To start eslint `npm test`
---

# Project structure
This is the file structure of the project.

## Index file
This is the file that starts everything up.

## Routers
A router keeps track of it's routes and is mounted in the index file. The router shall not contain any logic
besides responding with data.

## Src / Functions
The src directory is where most things happen. Here is all logic stored.
This is where things such as API calls and calculations stored.

## middleware
A middleware activates before the request meets the router. This can be used to log
to console or file.
