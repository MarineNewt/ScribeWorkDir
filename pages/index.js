import Head from 'next/head';
import Script from 'next/script'
import styles from '../styles/Home.module.css';
import react from 'react';
import Clock from 'react-live-clock';
import Weather from './../components/weather.js'
import { useEffect } from "react";


export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>TSC Pages</title>
        <link rel="icon" href="/favicon.ico" />
        <meta http-equiv="refresh" content="1800"></meta>
      </Head>
        <div className={styles.grid}>
          <div className={styles.div1}>         
            <h1 className={styles.title}>TSC Pages</h1> </div>
          <div className={styles.div2}> 
            <div className={styles.clocks}>
              <div >◉ <Clock className={styles.clock1} format={'MMMM Do'} ticking={false} timezone={"US/Pacific"} ></Clock> ◉</div>
              <div ><Clock className={styles.clock2} format={'h:mma'} ticking={true} timezone={"US/Pacific"} ></Clock></div>
            </div>
          </div>
          <div className={styles.div3}><div ><Weather></Weather></div></div>
          <div className={styles.div4}>
            <h2 className={styles.SecHeader}>Quick Links</h2>
            ➢ <a className={styles.SecLink} href="https://outlook.office.com/mail/" alt="alt text" target="_blank" rel="noopener noreferrer">Outlook Email </a><br></br>
            ➢ <a className={styles.SecLink} href="https://www.paycomonline.net/v4/ee/web.php/app/login" alt="alt text" target="_blank" rel="noopener noreferrer">Paycom Login </a><br></br>
            ➢ <a className={styles.SecLink} href="https://podisplus.com/security/login.aspx?ReturnUrl=%2fAdmin%2fDashboard.aspx" alt="alt text" target="_blank" rel="noopener noreferrer">Podis Login </a><br></br>
            ➢ <a className={styles.SecLink} href="https://compeyecaregroup-my.sharepoint.com/:x:/g/personal/csiebken_eanw_net/EYhyeB0kkr5Numun974n6YIBSu_umL72Aqmb1ibOWemuig?e=7KWYA0" alt="alt text" target="_blank" rel="noopener noreferrer"> Tech/Scribe Schedule</a><br></br>
          </div>
          <div className={styles.div5}> 
            <h2 className={styles.SecHeader}>Info Resources</h2> 
            ➢ <a className={styles.SecLink} href="/allfiles/Vocab List Plastics.doc" alt="alt text" target="_blank" rel="noopener noreferrer">Oculoplastics Terms</a><br></br>
            ➢ <a className={styles.SecLink} href="/allfiles/Plastics Tools.doc" alt="alt text" target="_blank" rel="noopener noreferrer">Oculoplastics Tools</a><br></br>
            ➢ <a className={styles.SecLink} href="/allfiles/TSC Surgeries.doc" alt="alt text" target="_blank" rel="noopener noreferrer">Surgery Info ★</a><br></br>
            ➢ <a className={styles.SecLink} href="/allfiles/Procedure Trays.rtf" alt="alt text" target="_blank" rel="noopener noreferrer">Procedure Trays </a><br></br>
            ➢ <a className={styles.SecLink} href="/allfiles/TSC Common Surgeries.docx" alt="alt text" target="_blank" rel="noopener noreferrer">Common Surgery Codes </a><br></br>
            ➢ <a className={styles.SecLink} href="/allfiles/How to do Biopsy Plastics.doc" alt="alt text" target="_blank" rel="noopener noreferrer">Biopsy Instructions</a><br></br>
            ➢ <a className={styles.SecLink} href="/allfiles/Blood Thinners.doc" alt="alt text" target="_blank" rel="noopener noreferrer">Blood Thinners</a><br></br>
          </div>
          <div className={styles.div6}>
            <h2 className={styles.SecHeader}>Surgery Forms</h2> 
            •<a className={styles.SecLink} href="/allfiles/surgery forms all.pdf" alt="alt text" target="_blank" rel="noopener noreferrer"> Surgery forms (all)</a><br></br>
            •<a className={styles.SecLink} href="/allfiles/1-2weeksbfsurgery.pdf" alt="alt text" target="_blank" rel="noopener noreferrer"> Prep- 1-2 weeks</a><br></br>
            •<a className={styles.SecLink} href="/allfiles/Instruction for day of surgery, prior to your arrival.pdf" alt="alt text" target="_blank" rel="noopener noreferrer"> Prep- Surgery Center</a><br></br>
            •<a className={styles.SecLink} href="/allfiles/anes_preopinfo.pdf" alt="alt text" target="_blank" rel="noopener noreferrer"> Prep- Anesthesia Billing</a><br></br>
            •<a className={styles.SecLink} href="/allfiles/TSC PO instructions Eyelid 4.2024.pdf" alt="alt text" target="_blank" rel="noopener noreferrer"> PO Eyelid Sx</a><br></br>
            •<a className={styles.SecLink} href="/allfiles/TSC PO instructions DC Brow  4.2024.docx" alt="alt text" target="_blank" rel="noopener noreferrer"> PO Brow Sx </a><br></br>
            •<a className={styles.SecLink} href="/allfiles/TSC PO instructions DCR 4.2024.docx" alt="alt text" target="_blank" rel="noopener noreferrer"> PO DCR Sx </a><br></br>
            •<a className={styles.SecLink} href="/allfiles/1WkPO.pdf" alt="alt text" target="_blank" rel="noopener noreferrer"> 1 Week Follow up</a><br></br>

          </div>
          <div className={styles.div7}>
            <h2 className={styles.SecHeader}>Procedure Forms</h2> 
            •<a className={styles.SecLink} href="/allfiles/TSC Procedures Instructions.pdf" alt="alt text" target="_blank" rel="noopener noreferrer"> Procedure forms (all)</a><br></br>
            •<a className={styles.SecLink} href="/allfiles/PIChalazionPO.pdf" alt="alt text" target="_blank" rel="noopener noreferrer"> Chalazion PO </a><br></br>
            •<a className={styles.SecLink} href="/allfiles/PILesionPO.pdf" alt="alt text" target="_blank" rel="noopener noreferrer"> Lesion PO </a><br></br>
            •<a className={styles.SecLink} href="/allfiles/Punctoplasty PO.pdf" alt="alt text" target="_blank" rel="noopener noreferrer"> Punctoplasty PO </a><br></br>
            •<a className={styles.SecLink} href="/allfiles/PILipiflowPO.pdf" alt="alt text" target="_blank" rel="noopener noreferrer"> Lipiflow PO </a><br></br>
            •<a className={styles.SecLink} href="/allfiles/Procedure Instructions.pdf" alt="alt text" target="_blank" rel="noopener noreferrer">  Filler after care </a><br></br>
          </div>
          <div className={styles.div8}>
            <h2 className={styles.SecHeader}>Laser Forms</h2> 
            •<a className={styles.SecLink} href="/allfiles/TSC PO instructions CO2 Prep & PO - EYELID ONLY 4.2024.docx" alt="alt text" target="_blank" rel="noopener noreferrer"> CO2 Eyelids </a><br></br>
            •<a className={styles.SecLink} href="/allfiles/TSC PO instructions CO2 Prep & PO - FULL FACE 4.2024.docx" alt="alt text" target="_blank" rel="noopener noreferrer"> CO2 Face </a><br></br>
          </div>
          <div className={styles.div9}>
            <h2 className={styles.SecHeader}>Misc Forms</h2> 
            •<a className={styles.SecLink} href="/allfiles/Tangent VF testform.pdf" alt="alt text" target="_blank" rel="noopener noreferrer"> Tangent VF Form </a><br></br>
            •<a className={styles.SecLink} href="/allfiles/TEPEZZA-Patient-Enrollment.pdf" alt="alt text" target="_blank" rel="noopener noreferrer"> Tepezza Enrollment Form</a><br></br>
            •<a className={styles.SecLink} href="/allfiles/HHQ.pdf" alt="alt text" target="_blank" rel="noopener noreferrer"> Health History Questionaire</a><br></br>
            •<a className={styles.SecLink} href="/allfiles/fax coversheet.pdf" alt="alt text" target="_blank" rel="noopener noreferrer"> Fax Coversheet</a><br></br>
            •<a className={styles.SecLink} href="/allfiles/CSF Policy.pdf" alt="alt text" target="_blank" rel="noopener noreferrer"> Cosmetic Financial Policy</a><br></br>
            •<a className={styles.SecLink} href="/allfiles/TSC Physician Order Form.pdf" alt="alt text" target="_blank" rel="noopener noreferrer"> Physician Orders </a><br></br>
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
