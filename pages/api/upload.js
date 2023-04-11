
 
 
//single image file upload
// export const cafeImage = async (image=null) => {
//     let uploadResult = '';
//     console.log("aaaaaaa");
    
//         console.log(image.name)
//         if(image.name){
//         const storageRef =ref(storage);
//         // const ext =await image.name.split('.').pop();
//         const hashName =Math.random().toString(36).slice(-8);
//         const fullPath ='/images/' + hashName + '.name';
//         const uploadRef =ref('/images/${fullPath.name}')

 
//         console.log(image.name);
//         console.log(uploadRef)
//         // 'file' comes from the Blob or File API
//         await uploadBytes(uploadRef, image).then(async function(result) {
//             console.log(result);
//             console.log('Uploaded a blob or file!');
 
//             await getDownloadURL(uploadRef).then(function(url){
//                 uploadResult = url;
//             });
//         });
//     }
//     // return uploadResult;
// }
import { getStorage, ref, uploadBytes } from "firebase/storage";

export const imageUpload =(file) =>{
const storage = getStorage();
const storageRef = ref(storage, 'images/'+file.name);

// 'file' comes from the Blob or File API
uploadBytes(storageRef, file).then((snapshot) => {
  console.log('Uploaded a blob or file!');
});
}