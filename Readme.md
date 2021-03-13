# Story connect
Story connect is an app that allows you to store images and audio files to keepsake memories in order to pass them down through generations. 

User is able to:
1. Input title and summary of story
2. Upload audio and image files
3. Play the audio in the app and look through the images
## Setup Instructions
1. Run ```npm install```
2. Setup your environment (Expo, React Native, and Node). Follow these [steps](https://courses.cs.northwestern.edu/394/intro-react-native-deploy.php)
3. Deploy the web app to a public host. Follow these [steps](https://courses.cs.northwestern.edu/394/intro-react-native-deploy.php)
4. [Add a Realtime Database to your firebase project, register your app with the project](https://courses.cs.northwestern.edu/394/intro-react-native-firebase.php). 
After registering your app, copy the firebase config shown on screen into **firebase.js**. 

## Run Instructions
Run ```expo start``` on your terminal to launches the metro-bundler. Press ``Run in web browser`` to launch app in the web.
## Known bugs
1. The audio scrubber echos. 
2. The favorites button is non-functional.
3. Audio files must be .MP3 and image files must be .JPG.
## Developers
This project/repo was built as a part of the Comp_Sci 394 course at Northwestern University by Isaac Miller, Richard Lam, Carolyn Perniciaro, and Nelson Okunlola.
