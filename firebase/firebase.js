// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage , ref,getDownloadURL} from "firebase/storage";
import { getFirestore, collection, getDocs,query,where,addDoc,onSnapshot,docs,getDoc,setDoc,doc} from 'firebase/firestore';
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
  measurementId: "G-WSC5VN3QY5",
  storageBucket:"cafelog24.appspot.com"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db =  getFirestore(app);
// const analytics = getAnalytics(app);

// const storage=getStorage(app);

export async function getCafeData() {//promiseオブジェクトを返す //1つのcafe
  const cafesData= [];
  const col = collection(db,'cafelists');
  // const collection2 = collection(col,"starbucks","all")
  // const data = await getDocs(collection2)
  // data.docs.map(doc => {
  //   console.log(doc.id)
  // })

    const querySnapshot = await getDocs(col)
    console.log("動いているか")
    await Promise.all(querySnapshot.docs.map(async (doc) => {
    const cafeName = doc.id
    console.log(cafeName)
    const subcol = collection(col,cafeName,'all')
    const subquerySnapshot = await getDocs(subcol)
    subquerySnapshot.docs.map((subdoc) =>{
      const cafeStore = subdoc.id 
      const cafeData = subdoc.data()
      cafesData.push({name:cafeName,store:cafeStore,...cafeData}) 
    })
        // console.log(cafesData)
      })
      )
    // console.log(cafesData)
  return cafesData

  }
  
export async function addCafeData(cafeData){
  const name = cafeData.name;
  const store = cafeData.store;
  console.log("確認済み")
  console.log(cafeData)
  console.log(name)
  console.log(store)
  try {
    const colref = collection(db,"cafelists")
    setDoc(doc(colref,name),{
      name:name,
    })
    const ref =collection(db,"cafelists",name,"all")
    setDoc(doc(ref,store),{
      store:store,
      price:cafeData.price,
      atmosphere:cafeData.atmosphere,
      explanation:cafeData.explanation,
      image:cafeData.image,
    }
    )
    // const subcol= collection(col,name,"all");
    // await subcol()
    // const secondCol =collection(doc,"all");
  //   const secondDoc = await setDoc((secondCol,store),
  //    { 
  //     content:postData.content,
  //     data:postData.date,
  //     title:postData.title,
  // }
  //   );
  //   secondDoc();

    //    {
    //   atmosphere:cafeData.atmosphere,
    //   explanation:cafeData.explanation,
    //   image:cafeData.image,
    //   price:cafeData.price
    // });
    // console.log("Document written with ID: ", docRef.id);
    // docRef()
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function getImagePaths(cafeData){
const storage = getStorage();
const imagesRef = ref(storage, 'images' );
const fileName = cafeData.image
// const fileName = "cafesample.jpg"
const spaceRef =  ref(imagesRef, fileName);
const url=await getDownloadURL(spaceRef)
// console.log(url)
return url
}