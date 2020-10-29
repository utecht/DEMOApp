# Common commands needed

### Run the metro server for debugging purposes

`npm start`

### Build and deploy to an android device plugged into your computer

`npx react-native run-android  --variant=release`

### Build the production version for an ios simulator or device plugged into your computer

`npx react-native run-ios  --configuration=Release`

### Deploying to ios app store
`cd ios
open UAMSApp.xcworkspace`

Update the version number in the project, select generic ARM device from device list and archive, then upload using organizer.

### Deploying to google play store
Update the version number in `android/app/build.gradle`.

`cd android
./gradlew bundleRelease`

Upload `android/app/build/outputs/bundle/release/app.aab` to the play store.


# Notes

SVGs currently need to be converted to JSX and use the react native svg element. See the main logo in App.js for an example.
https://react-svgr.com/playground/?native=true
