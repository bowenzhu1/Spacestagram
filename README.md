# Spacestagram
Live demo: https://bowenz-spacestagram.herokuapp.com/

A website to scroll through images retrieved from NASA's Astronomy Picture of the Day (APOD) API with an interface inspired by Instagram, built using React and TypeScript.

## Features
- Pictures & descriptions from NASA
- Loading state
- Animated like button and other buttons (link and show description)

## Run Locally
The commands to run locally are included below, which includes cloning the repo, installing dependencies, and running the start script. The port used is localhost:3000.
```
git clone https://github.com/bowenzhu1/Spacestagram.git
npm install
npm start
```
Note: an [API key from NASA](https://api.nasa.gov/) and a .env file should be added to the root directory, with content:
```
REACT_APP_API_KEY=YOUR_API_KEY
```

## Future steps
- Add a backend + database to store likes, allow login, cache images, etc.
