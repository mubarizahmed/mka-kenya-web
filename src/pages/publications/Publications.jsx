import {React,useEffect, useState} from 'react'
import './publications.css'
// import alhudaa from '../../Assets/Al-hudaa.png';
import MKAlogo from '../../Assets/MKAlogo2.png';
import website from '../../Assets/website.png';
import mail from '../../Assets/mail.png';
import twitter from '../../Assets/twitter.png';
import location from '../../Assets/location.png';
import {createClient} from 'contentful';
import { khadimData } from '../../components/khadimData';
import {faArrowRight, faArrowLeft, faArrowDown,faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Publications = () => {
    const [current, setCurrent]= useState(0);
    const length =khadimData.length;

    const [khadim, setKhadim] = useState([]);
    const [alhudaa, setAlhudaa] = useState([]);
    const [book, setBook] = useState([]);

    const client = createClient({
        space:'zi6ckvx6l9c9',
        accessToken: 'WjEkqWaTmBd4UlIZiW6sOoi3XaZDMCmNZsRWJ4_mvU0',
        host: 'preview.contentful.com',

      });


      useEffect(() => {
        const getInfo = async () => {
          try {
            await client.getEntries({ content_type: "book" , order: 'fields.id'}).then((entries) => {
              console.log(entries);
            //   setBook(entries.items);
            });
            // await client
            //   .getEntries({ content_type: "khadim", order:"fields.id" })
            //   .then((response) => {
            //     console.log(response);
            //     // setKhadim(entries.items);
            //   });
            // await client
            //   .getEntries({ content_type: "alHudaa", order:"fields.id"  })
            //   .then((entries) => {
            //     console.log(response);
            //     // setAlhudaa(entries.items);
            //   });
          } catch (error) {
            console.log('error fetching entries');
          }
        };
        getInfo();
      }, []);

    const nextSlide =() => {

        setCurrent(current ===length-1 ? 0:current + 1);
    };

    const prevSlide =() => {
        setCurrent(current === 0 ? length-1:current - 1);
    };
    console.log(current);

    if (!Array.isArray(khadimData) || khadimData.length <=0) {
        return null;
    }


  return (
    <div>
        <div className='khadim'>
            <div className='container'>
                <div className='container2'>
                    <div>
                        <FontAwesomeIcon icon={faArrowLeft} className='arrow' onClick={prevSlide} />
                
                    </div>
                    <div className='row'>
                        {khadimData.map((slide,index) => {
                            return (
                                <>
                                <div className={index === current ? 'slide':'slide on'}>
                                    {index === current && (
                                        <div className='col'>
                                    
                                            <div className='issue'>
                                                <h2>{slide.issue}</h2>
                                            </div>
                                            <div className='khadim-cover'>
                                                <img src={slide.image} alt="khadim" height='500px' />
                                            </div>
                                    
                                        </div>)}
                                </div>
                                </>
                                
                            )
                            })}
                    
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faArrowRight} className='arrow' onClick={nextSlide}/>
                    </div>
                    </div>
                    <div className='buttons'>
                    {khadimData.map((slide,index) => {
                            return (
                                <>
                                <span className={ index === current ? 'btn active':'btn'}></span>

                                </>
                            )
                    })}
                        
                </div>
            </div>
            <div className='khadim-text'> 
                <h1>KHADIM</h1> 
                <section>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi eius ipsa, consequuntur necessitatibus voluptates fugit minus facilis quisquam deleniti maiores.</section>
            </div>
        </div>
        <div className='alhudaa'>
            <div className='container3'>
                <div className='alhudaa-content'>
                        <h2 className='h2'>AL-HUDAA</h2>
                        <section >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit provident odit enim est esse unde cumque quo nam corporis pariatur?</section>
                </div>
                <div className='row2'>
                    <div className='col2'>
                        <div className='button'>
                            Download .pdf
                        </div>
                        <div className='alhudaa-cover'>
                            <img src={alhudaa} alt="alhudaa"  width='400px'/>
                        </div>
                        <div className='alhudaa-issue'>
                            <p>SEPTEMBER</p>
                            <p>issue</p>
                            <p>2022</p>
                        </div>
                    </div>
                    <div className='col2'>
                        
                        <div className='alhudaa-cover'>
                            <img src={alhudaa} alt="alhudaa"  width='400px'/>
                        </div>
                        <div className='alhudaa-issue'>
                            <p>August</p>
                            <p>issue</p>
                            <p>2022</p>
                        </div>
                    </div>
                    <div className='col2'>
                        
                        <div className='alhudaa-cover'>
                            <img src={alhudaa} alt="alhudaa"  width='400px'/>
                        </div>
                        <div className='alhudaa-issue'>
                            <p>July</p>
                            <p>issue</p>
                            <p>2022</p>
                        </div>
                    </div>
                    <div className='col2'>
                        
                        <div className='alhudaa-cover'>
                            <img src={alhudaa} alt="alhudaa"  width='400px'/>
                        </div>
                        <div className='alhudaa-issue'>
                            <p>June</p>
                            <p>issue</p>
                            <p>2022</p>
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
        <div className='books'>
            <h1>Books For Khuddam</h1>
            <div className='media-scroller'>
            <div className='media-element'>
                <img src="https://khuddam.org.uk/wp-content/uploads/2022/08/mockupfront-new.png" alt="beacon of truth" width ='300px'/>
                <div className='description'>
                    <h2>Beacon for the Youth</h2>
                    <section>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione minus id cum culpa quas veniam sapiente tempora autem qui fugit cumque quam quidem possimus nostrum mollitia, doloremque soluta? Asperiores, praesentium!</section>
                </div>
            </div> 
            <div className='media-element'>
                <img src="https://khuddam.org.uk/wp-content/uploads/2022/08/mockupfront-new.png" alt="beacon of truth" width ='300px'/>
                <div className='description'>
                    <h2>Beacon for the Youth</h2>
                    <section>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione minus id cum culpa quas veniam sapiente tempora autem qui fugit cumque quam quidem possimus nostrum mollitia, doloremque soluta? Asperiores, praesentium!</section>
                </div>
            </div> 
            <div className='media-element'>
                <img src="https://khuddam.org.uk/wp-content/uploads/2022/08/mockupfront-new.png" alt="beacon of truth" width ='300px'/>
                <div className='description'>
                    <h2>Beacon for the Youth</h2>
                    <section>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione minus id cum culpa quas veniam sapiente tempora autem qui fugit cumque quam quidem possimus nostrum mollitia, doloremque soluta? Asperiores, praesentium!</section>
                </div>
            </div> 
            <div className='media-element'>
                <img src="https://khuddam.org.uk/wp-content/uploads/2022/08/mockupfront-new.png" alt="beacon of truth" width ='300px'/>
                <div className='description'>
                    <h2>Beacon for the Youth</h2>
                    <section>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione minus id cum culpa quas veniam sapiente tempora autem qui fugit cumque quam quidem possimus nostrum mollitia, doloremque soluta? Asperiores, praesentium!</section>
                </div>
            </div> 
                
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

export default Publications