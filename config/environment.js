// var environments = {
//   staging: {
//     FIREBASE_API_KEY: "AIzaSyDdU5KbIqIfCucw3jy-7VUHzVlRCqkso_s",
//     FIREBASE_AUTH_DOMAIN: "swamphacks2020-6e7b1.firebaseapp.com",
//     FIREBASE_DATABASE_URL: "https://swamphacks2020-6e7b1.firebaseio.com",
//     FIREBASE_PROJECT_ID: "swamphacks2020-6e7b1",
//     FIREBASE_STORAGE_BUCKET: "swamphacks2020-6e7b1.appspot.com",
//     FIREBASE_MESSAGING_SENDER_ID: "1067099472957",
//     GOOGLE_CLOUD_VISION_API_KEY: "AIzaSyCcEP_AjGLJr7RyWTF-A2WYMqxP_eFNxHY"
//   },
//   production: {
//     // Warning: This file still gets included in your native binary and is not a secure way to store secrets if you build for the app stores. Details: https://github.com/expo/expo/issues/83
//   }
// };
// 
// function getReleaseChannel() {
//   let releaseChannel = Expo.Constants.manifest.releaseChannel;
//   if (releaseChannel === undefined) {
//     return 'staging';
//   } else if (releaseChannel === 'staging') {
//     return 'staging';
//   } else {
//     return 'staging';
//   }
// }
// function getEnvironment(env) {
//   console.log('Release Channel: ', getReleaseChannel());
//   return environments[env];
// }
// var Environment = getEnvironment(getReleaseChannel());
// export default Environment;
// 