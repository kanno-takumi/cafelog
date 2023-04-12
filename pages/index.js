import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Cafecard from '../components/cafecard/cafecard';
import Layout from '../components/layout';
import Link from 'next/link';
import React,{ useState } from 'react';
import { getCafeData , getImagePaths} from '../firebase/firebase';
import ModalFunc from '../components/popup/modalFunc'

export async function getServerSideProps() {
  const preAllCafeData = await getCafeData();
  const allCafeData = [];
  await  Promise.all(preAllCafeData.map(async (cafeData) =>{
    const url =await getImagePaths(cafeData)
    allCafeData.push({...cafeData,imageurl:url})
  } ))
  // console.log(allCafeData)
  return{
    props:{allCafeData}
  }
}

export default function Home({allCafeData}) {
  const title = "カフェ一覧"
  return (
    <Layout title={title}>
      <Head>
        <title></title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* {console.log("aaaaa")} */}
        {/* {console.log(allCafeData)} */}
        {allCafeData.map((cafeData)=>(
        
          <>
          <Cafecard cafeData={cafeData} />
          </>
        )
        )}
       
      </main>
      
      {/* <Link href={`/`}>登録</Link><br/> */}
      <ModalFunc />
    </Layout>
  )
}