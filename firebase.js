import firebase from 'firebase/app';


if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

export const auth = firebase.auth();
