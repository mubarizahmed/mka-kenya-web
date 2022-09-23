import React from 'react'
import './about.css';
import MKAlogo from '../../Assets/MKAlogo2.png';
import picture1 from '../../Assets/picture1.jpeg';
import website from '../../Assets/website.png';
import mail from '../../Assets/mail.png';
import twitter from '../../Assets/twitter.png';
import location from '../../Assets/location.png';

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
        <div className='img-container'>
          <img src={picture1} alt="PICTURE1" width='80%' />
          <p className='img-caption'>Khuddam holding a Khuddam Flag, a rare group photo with Khalifat–ul Masih II, Mirza Basheer-ud-Din Mahmood Ahmad</p>
        </div>
      </div>
      
      <div className="about-bottom">
        <h1 className='about-h1'>MKA structure</h1>
        <p className='about-text'>For Ahmadi children from 7 to 15 years, a separate organization called Majlis Atfalul Ahmadiyya is formed, working under the supervision of Majlis Khuddamul Ahmadiyya. Each member is called “Tifl”. The Sadr Majlis Khuddamul Ahmadiyya is the chief superintendent of both organizations, performing duties as per the constitution and instructions of Hazrat Khalifatul Masih. In order to implement the programs of the Majlis smoothly and to function better, the entire work of the organization has been divided into various departments.</p>
      </div>
      
      
      <div className="about-bottom-cards">
          <div className="about-card">
            <h2>Atfal (Noor Group)</h2>
            <p className="about-text">Aged between</p>
            <p className="about-ages">7-10</p>
            <p className="about-text">Years</p>
          </div>
          <div className="about-card">
            <h2>Atfal (Bashir Group)</h2>
            <p className="about-text">Aged between</p>
            <p className="about-ages">10-14</p>
            <p className="about-text">Years</p>
          </div>
          <div className="about-card">
            <h2>Khuddam</h2>
            <p className="about-text">Aged between</p>
            <p className="about-ages">15-40</p>
            <p className="about-text">Years</p>
          </div>
      </div>

      <div className='pledge-container'>
        <h1>Our Pledge</h1>
        <h2>َأَشْهَدُ أنْ لَّا إِلٰهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيْكَ لَهُ وَأشْهَدُ أنَّ مُحَمَّدًا عَبْدُهُ وَرَسُوْلُهُ</h2>
        <p>I bear witness that there is none worthy of worship except Allah. </p>
        <p>He is One and has no partner, and I bear witness that Muhammad صلى الله عليه وسلم is His servant and Messenger.</p>
        <p>I solemnly pledge that I shall always be ready to sacrifice my life, wealth, time and honour for the sake of my faith, country and nation.</p>
        <p>Likewise, I shall be ready to offer any sacrifice for guarding the institution of Khilafat-e-Ahmadiyya.</p>
        <p>Moreover, I shall deem it essential to abide by any “Maroof” decision made by Khalifatul Masih</p>
        <h2>Inshallah</h2>
      </div>

      
      <footer>
        <div className="footer-1">
          <div className='footer-1-text'>About Us
            <p className='text-justify'>
            Majlis Khuddamul Ahmadiyya (MKA), literally meaning ‘Association of Servants of the True Islam’...
            </p>
            <button  className="km-button">Know more</button>
          </div>
          <div className='footer-1-text'>Main Menu
          <ul className='liststyle1'>
              <li className='bottom-border'>Home</li>
              <li className='bottom-border'>About </li>
              <li className='bottom-border'>Departments</li>
              <li className='bottom-border'>Publication</li>
              <li className='bottom-border'>Ijtemas</li>
              <li className='bottom-border'>Donate</li>
            </ul>
          </div>
          <div className='footer-1-text'>Contact Us
            <ul className='liststyle2'>
              <li className='list-items'> <img src={website} alt='website' width='20px' className='icon'></img> mkakenya.com</li>
              <li className='list-items'> <img src={mail} alt='website' width='20px' className='icon'></img> mkakenya@gmail.com</li>
              <li className='list-items'> <img src={twitter} alt='website' width='20px' className='icon'></img> @mkakenya</li>
              <li className='list-items'> <img src={location} alt='website' width='20px' className='icon'></img> Ahmadiyya Muslim Mission, Muranga road, Nairobi, Kenya.</li>
            </ul>
          </div>
          <div className='footer-1-text'>
            <img src={MKAlogo} alt="logo-MKA" className="logo"/>
          </div>
        </div>
        <div className="footer-2">
          <div className='footer-2-text'>© Copyright 2022 Majlis Khuddamul Ahmadiyya Kenya</div>
          <div className='footer-2-text'>
            <div className='footer-2-terms right-border'>Privacy Notice</div>
            <div className='footer-2-terms right-border'>Use of Cookies</div>
            <div className='footer-2-terms'>Terms of use</div>
          </div>
        </div>
      </footer>
      
    </>
  )
}

export default About