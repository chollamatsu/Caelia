## starts:
### Create Package.json file and add electron
1. ```npm init```
2. add script "start": "electron .",
### Install electron dependency
3. run ```npm install --save-dev electron``` # to install Electron as a development dependency
3.1 then it will add dependencies inside devDep key like
"devDependencies": {
    "electron": "^38.0.0"
  }
### Config vue for frontend
4. create dir name "renderer" -> more common and general use
4.1 ```npm install -g @vue/cli```   # only if Vue CLI isn’t installed
4.2 ```vue create .```              # run in the renderer folder
### Run bothe electron & Vue together
5. ```run npm install --save-dev concurrently``` at root folder (my-electron-app) #to run both Electron and Vue together
### Add scripts in package.json
6. add script 
6.1 "dev" runs both Vue dev server and Electron at the same time
6.2 "build" builds the Vue app for production, so Electron can load it
7. add code in main.js file
### test development set up
8. ```npm run dev```