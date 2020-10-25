# Common commands needed

### Run the metro server for debugging purposes

`npm start`

### Build and deploy to an android device plugged into your computer

`npx react-native run-android  --variant=release`

### Build the production version for an ios simulator or device plugged into your computer

`npx react-native run-ios  --variant=release`


# Notes

SVGs currently need to be converted to JSX and use the react native svg element. See the main logo in App.js for an example.
https://react-svgr.com/playground/?native=true
