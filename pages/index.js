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

//       <main>
//         <h1 className={styles.title}>
//           Welcome to <a href="https://nextjs.org">Next.js!</a>
//         </h1>

//         <p className={styles.description}>
//           Get started by editing <code>pages/index.js</code>
//         </p>

//         <div className={styles.grid}>
//           <a href="https://nextjs.org/docs" className={styles.card}>
//             <h3>Documentation &rarr;</h3>
//             <p>Find in-depth information about Next.js features and API.</p>
//           </a>

//           <a href="https://nextjs.org/learn" className={styles.card}>
//             <h3>Learn &rarr;</h3>
//             <p>Learn about Next.js in an interactive course with quizzes!</p>
//           </a>

//           <a
//             href="https://github.com/vercel/next.js/tree/master/examples"
//             className={styles.card}
//           >
//             <h3>Examples &rarr;</h3>
//             <p>Discover and deploy boilerplate example Next.js projects.</p>
//           </a>

//           <a
//             href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             className={styles.card}
//           >
//             <h3>Deploy &rarr;</h3>
//             <p>
//               Instantly deploy your Next.js site to a public URL with Vercel.
//             </p>
//           </a>
//         </div>
//       </main>

//       <footer>
//         <a
//           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Powered by{' '}
//           <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
//         </a>
//       </footer>

//       <style jsx>{`
//         main {
//           padding: 5rem 0;
//           flex: 1;
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           align-items: center;
//         }
//         footer {
//           width: 100%;
//           height: 100px;
//           border-top: 1px solid #eaeaea;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//         }
//         footer img {
//           margin-left: 0.5rem;
//         }
//         footer a {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           text-decoration: none;
//           color: inherit;
//         }
//         code {
//           background: #fafafa;
//           border-radius: 5px;
//           padding: 0.75rem;
//           font-size: 1.1rem;
//           font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
//             DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
//         }
//       `}</style>

//       <style jsx global>{`
//         html,
//         body {
//           padding: 0;
//           margin: 0;
//           font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
//             Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
//             sans-serif;
//         }
//         * {
//           box-sizing: border-box;
//         }
//       `}</style>

