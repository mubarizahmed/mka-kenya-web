import React, {useState} from 'react'
import './departments.css';
import MKAlogo from '../../Assets/MKAlogo2.png';
import website from '../../Assets/website.png';
import mail from '../../Assets/mail.png';
import twitter from '../../Assets/twitter.png';
import location from '../../Assets/location.png';

const Departments = () => {

  const [selected, setSelected] = useState(null);

  const toggle= (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  }

  return (
    <div>
      <div className='departments'>
        <div>
          <h1 className='heading'>Departments</h1>
          <p>Majlis Khuddamul Ahmadiyya constitutes of various departments or <b>Shobas</b>. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati tenetur deleniti sequi, omnis saepe, officiis commodi quidem blanditiis maxime consequatur tempora molestias cumque aliquid id aperiam corrupti a ipsum soluta.</p>
        </div>
        
        <div className='accordion'>
          {data.map((item,i) =>(
              <div className= 'item' >
                <div className='title'  onClick={() => toggle(i)} >
                  <h2>{item.title}</h2>
                  <span className={selected === i ? 'rotated':''}>&#x203A;</span>
                </div>
                {selected === i ?(
                <div className='content'>
                  <div className='contact'>{item.contact}</div>
                  <div>{item.text}</div>
                </div>  
                  ) :null}
                
              </div>
          ))}
 
        </div>
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
    </div>
  )
}

const data= [
  {
    title: 'Maal',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam blanditiis illum eos, recusandae quaerat quidem reprehenderit necessitatibus culpa quam nostrum iusto! Itaque debitis distinctio adipisci quibusdam blanditiis praesentium minima accusantium!',
    contact: <><img src="https://media.istockphoto.com/photos/portrait-of-young-man-against-white-background-picture-id916534092?k=20&m=916534092&s=612x612&w=0&h=w2xMYlOwxapYt_-q_Uk4yVmWiJfhIFhep3j1CNS689U=" alt="pic1" width ='120px' />
            <p>+254772126546</p>
            <p>123@mkakenya.com</p></>,
  },
  {
    title: 'Aitmad',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam blanditiis illum eos, recusandae quaerat quidem reprehenderit necessitatibus culpa quam nostrum iusto! Itaque debitis distinctio adipisci quibusdam blanditiis praesentium minima accusantium!',
  },
  {
    title: 'Tabligh',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam blanditiis illum eos, recusandae quaerat quidem reprehenderit necessitatibus culpa quam nostrum iusto! Itaque debitis distinctio adipisci quibusdam blanditiis praesentium minima accusantium!',
  },
  {
    title: 'Sahit-e-Jismani',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam blanditiis illum eos, recusandae quaerat quidem reprehenderit necessitatibus culpa quam nostrum iusto! Itaque debitis distinctio adipisci quibusdam blanditiis praesentium minima accusantium!',
  },
  {
    title: 'Sanat-o-Tijarat',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam blanditiis illum eos, recusandae quaerat quidem reprehenderit necessitatibus culpa quam nostrum iusto! Itaque debitis distinctio adipisci quibusdam blanditiis praesentium minima accusantium!',
  },
  {
    title: 'Tahrik-e-Jadid',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam blanditiis illum eos, recusandae quaerat quidem reprehenderit necessitatibus culpa quam nostrum iusto! Itaque debitis distinctio adipisci quibusdam blanditiis praesentium minima accusantium!',
  },
  {
    title: 'Ishaat',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam blanditiis illum eos, recusandae quaerat quidem reprehenderit necessitatibus culpa quam nostrum iusto! Itaque debitis distinctio adipisci quibusdam blanditiis praesentium minima accusantium!',
  },
  {
    title: 'Nau-Mobaeen',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam blanditiis illum eos, recusandae quaerat quidem reprehenderit necessitatibus culpa quam nostrum iusto! Itaque debitis distinctio adipisci quibusdam blanditiis praesentium minima accusantium!',
  },
]

export default Departments