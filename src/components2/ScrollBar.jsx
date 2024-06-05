import Slider from "react-slick";
import aircrackImg from "./assets/aircrack-ng.png";
import beef from "./assets/beef.png";
import burpsuite from "./assets/burpsuite.png";
import foca from "./assets/foca.png";
import hashcat from "./assets/hashcat.png";
import metasploit from "./assets/metasploit.png";
import nessus from "./assets/nessus.png";
import nmap from "./assets/nmap.png";
import sqlmap from "./assets/sqlmap.png";
import wireshark from "./assets/wireshark.png";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const ScrollBar = ()=>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              },
            },
          ],
       
      };
      const cards = [
        { id: 1, imageUrl: aircrackImg, altText: 'aircrack' },
        { id: 2, imageUrl: beef, altText: 'beef' },
        { id: 3, imageUrl: burpsuite, altText: 'burpsuite' },
        { id: 4, imageUrl: foca, altText: 'foca' },
        { id: 5, imageUrl: hashcat, altText: 'hashcat' },
        { id: 6, imageUrl: metasploit, altText: 'metasploit' },
        { id: 7, imageUrl: nessus, altText: 'nessus' },
        { id: 8, imageUrl: nmap, altText: 'nmap' },
        { id: 9, imageUrl: sqlmap, altText: 'sqlmap' },
        { id: 10, imageUrl: wireshark, altText: 'wireshark' }
      ];
   
    return (
      
        <div 
            className="slider-container">
      <style>
        
      
         {` .slick-slide {
            width: auto !important; 
`}
        
      </style>
        <Slider {...settings}>
        {cards.map((image) => (
          <div key={image.id} className="mx-4 p-0 slider-item">
            
            <img src={image.imageUrl} width="200px" alt={image.altText} />
           
          </div>
        ))}
      </Slider>
          

        </div>
       
    )
    
}
export default ScrollBar;