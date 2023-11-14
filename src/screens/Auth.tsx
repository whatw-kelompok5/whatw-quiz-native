import React, { useState, useEffect } from 'react';
import Login from './Login';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import { GoogleAuthProvider, onAuthStateChanged, signInWithCredential } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Profile from './Profile';

WebBrowser.maybeCompleteAuthSession();

export default function Auth() {
  const [userInfo, setUserInfo] = useState();
  const [request, response, promptAsync] = Google.useAuthRequest({
    iosClientId: '37484440686-0fvrtt0qehpnh3pvkh28viqflain2gla.apps.googleusercontent.com',
    androidClientId: '37484440686-cmhjalqa6607jeblh1fa3bndnjk1l867.apps.googleusercontent.com',
  });

  useEffect(() => {
    if (response?.type == 'success') {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential);
    }
  }, [response]);

  useEffect(() => {
      const unsub = onAuthStateChanged(auth, async (user) => {
        if(user) {
            console.log(JSON.stringify(user, null, 2));
            setUserInfo(user);
        }else {
            console.log('else')
        }
      })
      
      return () => unsub()
  }, [])
  return userInfo ? <Profile /> : <Login promptAsync={promptAsync} />;
}
