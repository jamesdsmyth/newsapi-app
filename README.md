Hello!

## Run production version
To run the build version locally on a server we will be using [serve](https://www.npmjs.com/package/serve) whoch allows deployment of static sites. The build folder will already be created but if you want to create again do the first step -
1. `npm run build`
2. `npm install -g serve`
3. `serve -s build`

Here is the documentation for [this](https://facebook.github.io/create-react-app/docs/deployment)

## Run development version
To run the development version locally -
1. `npm install`
2. `npm run start`
3. This should open up the app on [http://localhost:3000](http://localhost:3000)

## Run all tests
To run the tests for this app, just run - 
`npm run test`

## Requirements
- Need to be a Single Page Application - the app was built using React, React Router and state management using Redux
- Need to be PWA - the app is responsive, works offline with cached files/images, design is 'app like'. It wil show a warning message when the users internet is not connected but still serve up older content due to how the reducer has been put together.
 - Access offline to a previously visited content - the service workers take care of this and can be seen on the build version
- Have a proper Manifest in place - See manfest.json
- Cache all the static content - the service workers take care of this and can be seen on the build version
- Test all the things - I have added tests and currently all pass

## Other features
- Offline message appears if the app goes offline. This is a prompt to the user at the top of the page