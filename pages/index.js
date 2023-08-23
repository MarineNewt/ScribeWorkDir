import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className={styles.grid}>
          <div className={styles.div1}>         
            <h1 className={styles.title}>TSC pages</h1> </div>
          <div className={styles.div2}> 2 </div>
          <div className={styles.div3}> 3 </div>
          <div className={styles.div4}>
            <h2 className={styles.SecHeader}>Quick Links</h2>
            <p>paycom webmail</p>
          </div>
          <div className={styles.div5}> 
            <h2 className={styles.SecHeader}>Quick Emails</h2> 
          </div>
          <div className={styles.div6}>
            <h2 className={styles.SecHeader}>Surgery Forms</h2> 
            •<a className={styles.SecLink} href="/allfiles/Resume.pdf" alt="alt text" target="_blank" rel="noopener noreferrer"> Surgery PO instructions </a><br></br>
            •<a className={styles.SecLink} href="/allfiles/Resume.pdf" alt="alt text" target="_blank" rel="noopener noreferrer"> Surgery Preparation Instructions </a>
          </div>
          <div className={styles.div7}>
            <h2 className={styles.SecHeader}>Procedure Forms</h2> 
          </div>
          <div className={styles.div8}>
            <h2 className={styles.SecHeader}>Laser Forms</h2> 
          </div>
          <div className={styles.div9}>
            <h2 className={styles.SecHeader}>Misc Forms</h2> 
          </div>
        </div>

      <style jsx>{`
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
