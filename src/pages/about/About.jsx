import React from 'react'
import './about.css';

const About = () => {
  return (
    <><div className='about-top'>What is Majlis Khuddamul Ahmadiyya?</div>
      <div className='about-middle'>
        <p className='about-box'>Majlis Khuddamul Ahmadiyya (MKA), literally meaning ‘Association of Servants of the True Islam’ and also known as the Ahmadiyya Muslim Youth Association (AMYA), was founded in 1938 by Hazrat Mirza Bashiruddin Mahmud Ahmad (ra) and is the youth section of the Ahmadiyya Muslim Community.Having its own executive cabinet, with representation from all over the Kenya, MKA is led by the National Sadr (President).</p>
        <h1 className='about-h1'>Objective</h1>
        <p className='about-text'>One of our principal objectives is the moral and spiritual training of youth through a mixture of religious, secular education, sports activities, and service to humanity. We are dedicated to ensuring that our members develop and excel in qualities such as piety, honesty, and fair dealing so that they can better contribute to society and our country Kenya.</p>
        <h1 className='about-h1'>History</h1>
        <p className='about-text'>Majlis Khuddamul Ahmadiyya is a spiritual organization of young men. Majlis Khuddam-ul-Ahmadiyya (MKA) was founded in 1938 by Khalifat-ul Masih II, Mirza Basheer-ud-Din Mahmood Ahmad, the second Caliph of the Ahmadiyya Muslim Community. According to the auxiliary’s founder, the name Khuddam-ul-Ahmadiyya literally means that its members are Servants of Ahmadiyya.</p>
        <p className='abou-text'>Khalifat-ul Masih II, Mirza Basheer-ud-Din Mahmood Ahmad established the tenets of Majlis Khuddam-ul-Ahmadiyya to rest on the principles of service and sacrifice and to inculcate a commitment to one’s faith, one’s country, and to the world around them, tenets that still resonate through its international membership.The importance of Majlis Khuddam-ul-Ahmadiyya was so great that in 1940 membership was made compulsory for every young man between the ages of 16 and 40, and as a result, branches of Khuddam-ul-Ahmadiyya were established in all parts of the world.Every member of this organization is called Khadim (servant).</p>
        <image src="https://khuddam.org.au/sites/default/files/inline-images/hazrat-mirza-basheeruddinra.jpeg" alt="PICTURE" />
      </div>
      
      <div className="about-bottom">
        <h1 className='about-h1'>MKA structure</h1>
        <p className='about-text'>For Ahmadi children from 7 to 15 years, a separate organization called Majlis Atfalul Ahmadiyya is formed, working under the supervision of Majlis Khuddamul Ahmadiyya. Each member is called “Tifl”. The Sadr Majlis Khuddamul Ahmadiyya is the chief superintendent of both organizations, performing duties as per the constitution and instructions of Hazrat Khalifatul Masih. In order to implement the programs of the Majlis smoothly and to function better, the entire work of the organization has been divided into various departments.</p>
      </div>
      
      
      <div className="about-bottom-cards">
          <div className="about-card">
            <h2>Noor Group</h2>
            <p className="about-text">Aged between 0-7</p>
          </div>
          <div className="about-card">
            <h2>Bashir Group</h2>
            <p className="about-text">Aged between 8-14</p>
          </div>
          <div className="about-card">
            <h2>Khuddam Group</h2>
            <p className="about-text">Aged between 15-40</p>
          </div>
      </div>
      
      
    </>
  )
}

export default About