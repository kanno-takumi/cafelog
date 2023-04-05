// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore, collection, getDocs,query,where,addDoc,onSnapshot,docs,getDoc} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4UrdEw7kwcgkKqnSbSrFMIirTqeIHVAw",
  authDomain: "cafelog24.firebaseapp.com",
  projectId: "cafelog24",
  storageBucket: "cafelog24.appspot.com",
  messagingSenderId: "906316060352",
  appId: "1:906316060352:web:b0acb40a5c6c875df17f25",
  measurementId: "G-WSC5VN3QY5"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db =  getFirestore(app);
// const analytics = getAnalytics(app);

// const storage=getStorage(app);

export async function getCafeData() {//promiseオブジェクトを返す //1つのcafe
  const cafesData= [];
  const col = collection(db,'cafelists');
    const querySnapshot = await getDocs(col)
    console.log("動いているか")
    await Promise.all(querySnapshot.docs.map(async (doc) => {
    const cafeName = doc.id
    const subcol = collection(col,cafeName,'all')
    const subquerySnapshot = await getDocs(subcol)
    subquerySnapshot.forEach((subdoc) =>{
      const cafeStore = subdoc.id 
      const cafeData = subdoc.data()
      cafesData.push({name:cafeName,store:cafeStore,...cafeData}) 
    })
        // console.log(cafesData)
      })
      )
    
    console.log(cafesData)

  return cafesData

  }
  
  // return postsArray

// export async function getArrangedData(){
//   const allCafeData = await getCafeData();
//   console.log("weeeeeeee")
//   console.log(allCafeData)
//   // console.log(cafesData)
//   return allCafeData
// }

export async function addCafeData(postData){
  try {
    const docRef = await addDoc(collection(db, "posts"), {
      content:postData.content,
      date: postData.date,
      title: postData.title
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
