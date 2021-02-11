# Vita
Devine Bachelorproef voor het woonzorgcentrum Heilig Hart

## Core project statement

A ReactJS platform that assists the staff of Heilig Hart residential care center in bringing together and empowering the residents. This platform offers several useful tools such as: matching residents, creating and offering activities per resident, ...

## Online deployments

### Client

The deployed client can currently be found at: https://vita-heilighart-devine.herokuapp.com/  
This client uses the server deployed on heroku as well. Just visit it and you can view the page.

### Server (API)

The deployed server can currently be found at: https://radiant-harbor-10229.herokuapp.com/  
This serves data (like an API) to the client. Example endpoints are:
```js
/app/residents/:residentId //to fetch resident(s)
/app/activities/:activityId //to fetch activities(s)
/app/interests/:interestId //to fetch interests(s)
```

## Local installation

This web app has front-end development that is meant to be used on **tablets** or **computers**.
This project consists of two parts, namely the 'client' (front-end) side and 'server' (back-end) side.

Start off by cloning this repo.

### ENV Files
You will first need to make two `.env` files inside these two folders.

1. `/client` **folder**  
This env file needs to contain an env variable called `REACT_APP_API_URI`.  
You can set this to the URI of the API (server) will be running at, is normally http://localhost:3001/ (INCLUDE TRAILING SLASH!)  
Example: `REACT_APP_API_URI="http://localhost:3001/"`

**NOTE**: If the API URI is NOT provided, the client will do fetches to the [deployed server](https://radiant-harbor-10229.herokuapp.com/) instead.

2. `/server` **folder**  
This env file needs to contain an env variable called `MONGO_URI`.  
You can set this to the URI the database will be running at.  
Example: `MONGO_URI="mongodb+srv://user-name:password@clusterName.mongodb.net/clusterName?retryWrites=true&w=majority"`

**NOTE**: [the link for the database (MONGO_URI)](https://pastebin.com/CE8QqXdx) is password protected, and contains the URI to access the database. Teachers, I provided the password in the comments on LEHO. These env files are also available in the source code uploaded on LEHO.

### Starting project

We will have to start the server AND the client seperately.  
After cloning this repo, follow the following steps.

#### Step 1: Start server

```
cd ./server
yarn && yarn start
```
The server should now download its dependencies, and then start. Make sure you provided the `MONGO_URI` link in the `.env` file before starting it up.

You will see a message saying "Login was succesful!" if it succesfuly connected to the database, and another message saying "Example app listening at ... (default: http://localhost:3001)" when the server is ready for listening to requests!

#### Step 2: Start client

```
cd ./client
yarn && yarn start
```
The client should now download its dependencies, and then start. Make sure you provided the `REACT_APP_API_URI` link in the `.env` file before starting it up, otherwise it will default and do requests to the [deployed server](https://radiant-harbor-10229.herokuapp.com/) instead.

Your default browser should open up if everything went right, and you should be greeted with the default 'residents overview' homepage.

That's it! &#128513;
