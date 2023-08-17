import React,{useEffect} from 'react';
import './main.css'

//import icons
import{HiOutlineLocationMarker} from 'react-icons/hi'
import{HiOutlineClipboardCheck} from 'react-icons/hi'
import img from '../../../Assets/img(1).jpg'
import kashmir from '../../../Assets/kasmir 2.jpg'
import dubai from '../../../Assets/dubai.jpg'
import america from '../../../Assets/america.jpg'
import railwaystation from '../../../Assets/railway station.jpg'
import russia from '../../../Assets/russia.jpg'
import switzerland from '../../../Assets/switzerland 2.jpg'
import southafrica from '../../../Assets/south africa.jpg'
import ireland from '../../../Assets/ireland.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'


//Let me paste the array named data
const data =[
    {
        id:1,
        imgSrc: img,
        destTitle:'Taj Mahal',
        location: 'India',
        grade:'CULTURAL RELAX',
        fees: '$300',
        description:'The epitome of romance,Taj Mahal is one of the best travel destinations in the world. This is known for its luxurious stays and adventurous activities.'

    },


     {
        id:2,
        imgSrc: kashmir,
        dastTitle:'Kashmir',
        location: 'India',
        grade:'CULTURAL RELAX',
        fees: '$500',
        description:'The epitome of romance,Taj Mahal is one of the best travel destinations in the world. This is known for its luxurious stays and adventurous activities.'

    },


    {
        id:3,
        imgSrc: dubai,
        dastTitle:'Dubai',
        location: 'Dubai',
        grade:'CULTURAL RELAX',
        fees: '$900',
        description:'The epitome of romance,Taj Mahal is one of the best travel destinations in the world. This is known for its luxurious stays and adventurous activities.'

    },


    {
        id:4,
        imgSrc: america,
        dastTitle:'New York',
        location: 'America',
        grade:'CULTURAL RELAX',
        fees: '$700',
        description:'The epitome of romance,Taj Mahal is one of the best travel destinations in the world. This is known for its luxurious stays and adventurous activities.'

    },


    {
        id:5,
        imgSrc: railwaystation,
        dastTitle:'Londan',
        location: 'England',
        grade:'CULTURAL RELAX',
        fees: '$700',
        description:'The epitome of romance,Taj Mahal is one of the best travel destinations in the world. This is known for its luxurious stays and adventurous activities.'

    },


    {
        id:6,
        imgSrc: russia,
        dastTitle:'Russia',
        location: 'Russia',
        grade:'CULTURAL RELAX',
        fees: '$700',
        description:'The epitome of romance,Taj Mahal is one of the best travel destinations in the world. This is known for its luxurious stays and adventurous activities.'

    },


    {
        id:7,
        imgSrc: switzerland,
        dastTitle:'Switzerland',
        location: 'Switzerland',
        grade:'CULTURAL RELAX',
        fees: '$700',
        description:'The epitome of romance,Taj Mahal is one of the best travel destinations in the world. This is known for its luxurious stays and adventurous activities.'

    },


    {
        id:8,
        imgSrc: southafrica,
        dastTitle:'Taj Mahal',
        location: 'India',
        grade:'CULTURAL RELAX',
        fees: '$700',
        description:'The epitome of romance,Taj Mahal is one of the best travel destinations in the world. This is known for its luxurious stays and adventurous activities.'

    },


    {
        id:9,
        imgSrc: ireland,
        dastTitle:'Ireland',
        location: 'Ireland',
        grade:'CULTURAL RELAX',
        fees: '$700',
        description:'The epitome of romance,Taj Mahal is one of the best travel destinations in the world. This is known for its luxurious stays and adventurous activities.'

    } 

]

const Main = () => {
    //lets create a react hook to add a scroll animation....
    
    useEffect(()=>{
        Aos.init({duration:2000})
    }, [])



    return (
        <section className='main container section'>
       
        <div className="secTitle">
            <h3 data-aos="fade-right" className="title">
             Most visited destinations   
            </h3>
        </div>
       
      <div className="secContent grid">
        {/*here we are going to use high order array method(map) to do that we shall use a list of object in one array.I'm going to create an array named data and from that we shall .map() array to fetch each destination at once.*/ }
     
     {
        data.map(({id,imgSrc,destTitle,location,grade,fees,description})=>{
            return(
                
                <div key={id} data-aos="fade-up"  className="singleDestination">  
            <div className="imageDiv">
            <img src={imgSrc} alt={destTitle} />
           </div>
            <div className="cardInfo">
            <h4 className="destTitle">{destTitle}</h4>    
            <span className="continent flex">
            <HiOutlineLocationMarker className= 'icon'/>
            <span className="name">{location}</span>
            </span>
            
            <div className="fees flex">
                <div className="grade">
                    <span>{grade}<small>+1</small></span>
                </div>
                <div className="price">
                <h5>{fees}</h5>    
                </div>
            </div>
            <div className="desc">
                <p>{description}</p>
            </div>
            <button className='btn flex'>
            DETAILS <HiOutlineClipboardCheck className="icon"/>
            </button>
            </div>
            </div>
            )

        })
     }

      </div>
        </section>
    )
}
export default Main