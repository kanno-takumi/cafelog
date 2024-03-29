import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css'

const siteTitle='Cafelog'

export default function Layout({children,title}){
    return (
        <div className={styles.container}>{/**layout.module.css */}
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta 
                     name="description"
                     content="Learn how to build a personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content={'https://og-image.vercel.app/${encodeURI(siteTitle,)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg'}
                    />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" /> 
            </Head>

                <main>
                <h3 className={styles.toptitle}>{title}</h3>
                    {children}
                    </main>
                
            <footer className={styles.footer}>
               
                <a href="https://takumi-nextjs-blog.vercel.app/" >blogへ移動</a>
            </footer>
        </div>
    )
}