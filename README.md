# Meet.ly
Midpoint meeting application.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.  Npm is used to install dependencies, which are stored in node_modules. The Node/Express server connects to a remote Mongo database. To run locally from your terminal:
1. Git clone and cd into root of directory of the project.
2. npm install
3. node server.js - to run the server. Or run nodemon from the root directory.
4. go to http://localhost:8888/#/ in your browser.

##Deployed version
App is deployed here: http://ec2-54-162-109-21.compute-1.amazonaws.com/
Recently there have been issues with Google's geolocator on our deployed version. We're on it!


## What does our app do?
Meet.ly is a centralized meetup application. A user can send out an invite with his preferences to a group of friends. The application takes into consideration all preferences and chooses a meetup location.

## Tech Stack
- Front End: AngluarJS
- Back End: NodeJS/Express
- Database: mySQL/Bookshelf/knex

## Front End Details
/client/index.html
/client/app/ ==> Contains application files (controllers, views, and services)


