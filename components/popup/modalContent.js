// import * as React from 'react';
import modalStyles from '../../styles/popup/modal.module.css'
import { useForm } from 'react-hook-form';
import {addCafeData, addPosts,getCafeData,getPosts} from '../../firebase/firebase'
import Router,{useRouter} from 'next/router'
import React,{ useState } from 'react';
import { imageUpload } from "../../api/upload";
import Image from 'next/image';

// import Image from 'next/image';

export default function modalContent(props){
    const [image, setImage] = useState(null);
    const [createObject, setCreateObject] = useState(null);
    const uploadToClient = (event) => {
        if (event.target.files && event.target.files[0]) {
        const file = event.target.files[0];
    //    console.log("動いている")
        setImage(file);
        // console.log(image)
        // imageUpload(file);
        setCreateObject(URL.createObjectURL(file));
    //     console.log(createObject)
    //     console.log(image)
        }
      };

    const router = useRouter()
    const {register,handleSubmit,reset}=useForm();
    const uploadToServer = async (data) => {
        props.propsopenModal(false);
        imageUpload(image);//写真を追加する
        console.log(data);
        data = {
            name:data.name,
            store:data.store,
            atmosphere:data.atmosphere,
            explanation:data.explanation,
            price:Number(data.price),
            store:data.store,
            image:image.name,
        }
        console.log(data)
        
        await addCafeData(data);//データを追加する
        await getCafeData();
        router.reload(); 
        reset();
    }
    

    return(
        <>
            <form className={modalStyles.form} onSubmit={handleSubmit(uploadToServer)}>
                <div className={modalStyles.formLayout}>
                <label htmlFor="name">カフェ名　</label>
                <input name="name " id="name" type="text" className={modalStyles.textLayout} {...register('name')}/>
                </div>

                <div className={modalStyles.formLayout}>
                <label htmlFor="store">店舗名　　</label>
                <input name="store" id="store" type="text" className={modalStyles.textLayout} {...register('store')}/>
                </div>

                <div className={modalStyles.formLayout}>
                <label htmlFor="atmosphere">雰囲気　　</label>
                <input name="atmosphere" id="atmosphere" type="text" className={modalStyles.textLayout} {...register('atmosphere')}/>
                </div>
                

                <div className={modalStyles.formLayout}>
                <label htmlFor="price">価格帯　　</label>
                <input name="price" id="price" type="number" className={modalStyles.textLayout} {...register('price')}/>
                </div>

                <div className={modalStyles.formLayout}>
                <label htmlFor="explanation">説明　　　</label>
                <input name="explanation" id="explanation" type="text" className={modalStyles.textLayout} {...register('explanation')}/>
                </div>

                <div className={modalStyles.formLayout}>
                <label htmlFor="file-input">写真　　　</label>
                <input id="file-input" className="hidden" type="file" accept="image/*" name="myImage" onChange={uploadToClient} />
                <div className={modalStyles.ex}>
                    {createObject && <Image src={createObject} width={50} height={50} ></Image>}
                </div>
                </div>


                <button type="submit" onClick={handleSubmit(uploadToServer)} className={modalStyles.button}>決定</button>

            </form>
        </>
    )
}