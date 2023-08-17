import React,{useEffect} from 'react';
import './footer.css'
import video2 from '../../Assets/video(2).mp4'
import {FiSend} from 'react-icons/fi'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {FiChevronRight} from 'react-icons/fi'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
}, [])

    return (
        <section className='footer'>
            <div className= "videoDiv">
                <video src={video2} loop autoPlay muted type="video/mp4"></video>
                 </div>
               <div className="secContent container">
                <div className="contentDiv flex">
                 <div data-aos="fade-up" className="text">
                    <small>KEEP IN TOUCH</small>
                    <h2>travel with us</h2>
                 </div>
                 <div className="inputDiv flex">
                    <input data-aos="fade-up" type="text" placeholder='Enter Email Address'/>
                    <button data-aos="fade-up" className='btn flex' type='submit'>
                    SEND <FiSend className='icon'/>
                    </button>
                 </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                      <div className="logoDiv">
                        <a herf="#" className='logo flex'>
                           <MdOutlineTravelExplore className='icon'/>
                            Travel.
                        </a>
                        </div>
                        <div data-aos="fade-up" className="footerParagraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores eveniet aperiam nihil saepe aspernatur quam quasi, placeat magni ipsam ipsa ab ratione eaque, obcaecati nulla deserunt dolorum qui incidunt temporibus.
                        </div>
                          
                        <div data-aos="fade-up" className="footerSocials">
                            <AiOutlineTwitter className ='icons'/>
                            <AiFillYoutube className ='icons'/>
                            <AiFillInstagram className ='icons'/>
                            

                            </div>  

                    </div>

                    <div className="footerLinks grid">
                        {/*gropu one*/}
                        <div data-aos="fade-up"  data-aos-duration="3000" className="linkGroup">
                          <span className='groupTitle'>OUR AGENCY</span>
                           
                            <li className="footerList">
                             <FiChevronRight className ='icon'/>
                             Services   
                            </li>

                            <li className="footerList">
                             <FiChevronRight className ='icon'/> 
                             Insurance  
                            </li>

                            <li className="footerList">
                             <FiChevronRight className ='icon'/>
                             Agency  
                            </li>

                            <li className="footerList">
                             <FiChevronRight className ='icon'/> 
                             Tourism   
                            </li>

                            <li className="footerList">
                             <FiChevronRight className ='icon'/>
                             payment   
                            </li>

                        </div>

                           {/*group two*/}
                           <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
                          <span className='groupTitle'>PARTNERS</span>
                           
                            <li className="footerList">
                             <FiChevronRight className ='icon'/>
                             TripAdvisior 
                            </li>

                            <li className="footerList">
                             <FiChevronRight className ='icon'/> 
                              Bookings 
                            </li>

                            <li className="footerList">
                             <FiChevronRight className ='icon'/>
                             Rentcars
                            </li>

                            <li className="footerList">
                             <FiChevronRight className ='icon'/> 
                              HostelWorld  
                            </li>

                            <li className="footerList">
                             <FiChevronRight className ='icon'/>
                             Trivago  
                            </li>

                        </div>

                           {/*gropu three*/}
                           <div data-aos="fade-up"  data-aos-duration="5000" className="linkGroup">
                          <span className='groupTitle'>LAST MINUTE</span>
                           
                            <li className="footerList">
                             <FiChevronRight className ='icon'/>
                             London  
                            </li>

                            <li className="footerList">
                             <FiChevronRight className ='icon'/> 
                             California  
                            </li>

                            <li className="footerList">
                             <FiChevronRight className ='icon'/>
                             Indonesia 
                            </li>

                            <li className="footerList">
                             <FiChevronRight className ='icon'/> 
                             Europe 
                            </li>

                            <li className="footerList">
                             <FiChevronRight className ='icon'/>
                             India   
                            </li>

                        </div>
                      <div className="footerDiv flex">
                        <small>BEST TRAVEL WEBSITE THEME</small>
                        <small>COPYRIGHTS RESERVED  -KRISHNATECH 2023</small>
                      </div>

                    </div>
                </div>
               </div>
        </section>
    )
}
export default Footer