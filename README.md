# Vita
Devine Bachelorproef voor het woonzorgcentrum Heilig Hart

## Omschrijving

### Core Project Statement

Een ReactJS platform dat het personeel van het woonzorgcentrum Heilig Hart assisteert in het samenbrengen en empoweren van de bewoners. Dit platform biedt verschillende handige tools aan zoals: bewoners matchen, activiteiten aanmaken en aanbieden per bewoner, ...

## Installation

This web app has front-end development that is meant to be used on **tablets** or **computers**.
This project consists of two parts, namely the 'client' (front-end) side and 'server' (back-end) side.

Start off by cloning this repo.

### ENV Files
You will first need to make two `.env` files inside these two folders.

1. `/client` folder  
This env file needs to contain an env variable called `REACT_APP_API_URL`.  
You can set this to the URI of the API (server) will be running at, defaults to http://localhost:3001 (NO TRAILING SLASH!)  
Example: `REACT_APP_API_URL="http://localhost:3001"`

2. `/server` folder  
This env file needs to contain an env variable called `MONGO_URI`.  
You can set this to the URI the database will be running at.  
Example: `MONGO_URI="mongodb+srv://user-name:password@clusterName.mongodb.net/clusterName?retryWrites=true&w=majority"`

**NOTE**: [the link for the database (MONGO_URI)](https://pastebin.com/CE8QqXdx) is password protected, and contains the URI to access the database. Teachers, I provided the password in the comments on LEHO. These env files are also available in the source code uploaded on LEHO.

### Starting project

We will have to start the server AND the client for this web app to work.  
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
The client should now download its dependencies, and then start. Make sure you provided the `REACT_APP_API_URL` link in the `.env` file before starting it up.

Your default browser should open up if everything went right, and you should be greeted with the default 'residents overview' homepage.

That's it! &#128513;
