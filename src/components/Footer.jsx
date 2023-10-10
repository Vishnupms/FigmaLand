import React from 'react';
import './footer.css'
import loc from '../assets/loc.png'
import soc from '../assets/soc.png'
import ph from '../assets/ph.png'


const Footer = () => {
  return (
    <div className="footer">
      <div className="contain">
       <div className='coulmns'>

        <div className="col">
          <h1>Pages</h1>
          <ul>
            <li>About</li>
            <li>Mission</li>
            <li>Services</li>
            <li>Social</li>
            <li>Get in touch</li>
          </ul>
        </div>
        <div className="col">
          <h1>Tomothy</h1>
          <ul>
            <li>About</li>
            <li>Mission</li>
            <li>Services</li>
            <li>Social</li>
            <li>Get in touch</li>
          </ul>
        </div>
        <div className="col">
          <h1>Jane Black</h1>
          <ul>
            <li>Webmail</li>
            <li>Redeem code</li>
            <li>WHOIS lookup</li>
            <li>Site map</li>
            <li>Web templates</li>
           
          </ul>
        </div>
        <div className="col" style={{width:"100px"}}>
         
         </div>
        <div className="col social">
        
          <ul>
            <li>
              <img src={loc} width="32" style={{ width: '32px' }} />
             
            </li>
            <li>
              <img src={ph} width="32" style={{ width: '32px' }} />
            </li>
            <li>
              <img src={soc} width="32" style={{ width: '79px' }} />
            </li>
          </ul>
        </div>
        <div className="clearfix"></div>
       </div>
      </div>
    </div>
  );
};

export default Footer;
