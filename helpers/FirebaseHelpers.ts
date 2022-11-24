import {FirebaseApp, initializeApp} from 'firebase/app'
import {Auth, getAuth,GoogleAuthProvider, signInWithPopup} from 'firebase/auth'

class FirebaseFunctions {
    private firebaseConfig = {
        apiKey: "AIzaSyD2lU5Z4o3G8L58x-McvssaB4nn44_7nas",
        authDomain: "bubbookz-d112c.firebaseapp.com",
        projectId: "bubbookz-d112c",
        storageBucket: "bubbookz-d112c.appspot.com",
        messagingSenderId: "658389243398",
        appId: "1:658389243398:web:b2306f675ea33abe331587",
        measurementId: "G-XNXMJWPG6R"
    };
    private provider:GoogleAuthProvider = new GoogleAuthProvider()
    private app:FirebaseApp = initializeApp(this.firebaseConfig);
    private auth:Auth = getAuth(this.app);

    async LoginWithGoogle(){
      try {
        const res = await signInWithPopup(this.auth,this.provider)
        const cred = GoogleAuthProvider.credentialFromResult(res)
        const token = cred.accessToken
        return {
          status:"authenticated",
          user:res.user
        }
      } catch (error) {
        return {
          status:"failed",
          error,
          message:"sorry could not authenticate"
        }
      }
    }
    
}

export default new FirebaseFunctions()