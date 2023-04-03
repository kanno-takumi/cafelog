import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Cafecard from '../components/cafecard/cafecard';
import Layout from '../components/layout';
import Link from 'next/link';
import React,{ useState } from 'react';
import { postImage } from "./api/upload";
import { getArrangedData } from '../firebase/firebase';

export async function getServerSideProps() {
  const allCafeData = await getArrangedData();
  return{
    props:{allCafeData}
  }
}

export default function Home({allCafeData}) {
  const [image, setImage] = useState(null);
  const [createObject, setCreateObject] = useState(null);
  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
    const file = event.target.files[0];
  
    setImage(file);
    setCreateObject(URL.createObjectURL(file));
    }
  };
  const uploadToServer = async () => {
    console.log("動作確認")
    const result = await postImage(image);
    console.log(result);
  };

  return (
    <Layout>
      <Head>
        <title></title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 >一覧</h1>
        {/* {console.log(allCafeData)} */}
        {console.log("aaaaa")}
        {/* {console.log(allCafeData)} */}
        {/* asyncでも表示されないし、無いとエラー出る→ブログ参考にしてみる */}
        {/* {allCafeData.map((name)=>(
           <Cafecard explanation={name} />
        )
        )} */}
       
      </main>
      
      {/* <Link href={`/`}>登録</Link><br/> */}
      
      <img className="flex justify-center items-center" src={createObject} />{/*写真表示の部分*/}
      <input id="file-input" className="hidden" type="file" accept="image/*" name="myImage" onChange={uploadToClient} />
      <button className="btn btn-primary" type="submit" onClick={uploadToServer}>
        Send to server
      </button>
    </Layout>
  )
}