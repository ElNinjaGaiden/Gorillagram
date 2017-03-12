# Gorillagram

Gorillagram is a test application/laboratory built by [Gorilla Logic, Inc](https://gorillalogic.com) used to learn and explore the capabilites of React Native implementing *real life* requirements instead of the boring thousands of *TO-DO* examples out there.

The goal is to learn React Native *the good way* doing things that could be close to what you will be doing on your first/next React Native project.

Some of the things this application covers are:
* Redux
* Navigation (with Redux)
* Pulling data as well as posting data to a backend server
* Applying cutomizations per platform
* Geolocation and maps
* Working with the photo gallery and the camera
* Supporting different languages into the app

## What are we building?
We are going to be using [Cloudinary](http://cloudinary.com/) as CDN in order to build a *kind of* Instagram app. The app will let the user to upload images as well a searching images by tag.

> Cloudinary offers a very rich API to achieve different tranformations and effects when fetching images  
> I would recomend to check their documentation in case you want to get creative

![Gorillagram](http://res.cloudinary.com/gorilla-logic-demo/image/upload/gorilagram_dlmls3.gif)

## Assumptions and recomendations
* You are working on a Mac if you want to try the app on both platforms: iOS and Android
* You have `node` and `npm` installed on your machine
* You belong to an Apple Developers Team if you want to run the app on a real iOS device
* You have installed Android SDK Build Tools and you have set a `ANDROID_HOME` environment variable on your machine
* You have the `react-native` CLI installed

## Install and run
Clone or download this repository on your local machine, then:
```
npm install
react-native run-ios
or
react-native run-android
```
