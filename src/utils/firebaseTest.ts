import auth from '@react-native-firebase/auth';

export function firebaseSanityCheck() {
  const user = auth().currentUser;
  console.log('Firebase ready. Current user:', user);
}