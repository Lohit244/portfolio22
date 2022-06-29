/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";
import styles from "./BlogStyles.module.css"
export default function BlogContainer({ children, title }:{children: any, title:string}) {
  return (
    <div className={`${styles.BlogContainer} container mx-auto `}>
      <Head>
      <title>Lohitaksha | {title}</title>
      <meta name="description" content="Lohitaksha Malhotra's portfolio website" />
      <link rel="shortcut icon" href="/images/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
      <link rel="icon" type="image/png" sizes="192x192" href="/images/favicon-192x192.png"/>
      <link rel="icon" type="image/png" sizes="512x512" href="/images/favicon-512x512.png"/>
      </Head>
      {children}
    </div>
  );
}