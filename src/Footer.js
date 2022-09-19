import React from 'react'
import logo from './crappo images/Logo.png'
import visa from './crappo images/visa.png'
import master from './crappo images/mastercard.png'
import bitcoin from './crappo images/bitcoin.png'
import whatsapp from './crappo images/youtube 1.png'
import twitter from './crappo images/twitter 1.png'
import linkd from './crappo images/linkedin 1.png'
import youtube from './crappo images/instagram 1.png'
import facebook from './crappo images/facebook-f 1.png'


const Footer = () => {
  return (
    <div className='help'>
        <div className='footer'>
            <div className='crp text-center text-light'>
        <div className='text-center footd  p-5 text-light'> <img src={logo} alt="" className='log1' /> <span className='crap'>CRAPPO</span>
        </div>
        <div className='footdiv1'>
            <div className='fs-6'>
            <ul>
                <li>Home</li>
                <li>Product</li>
                <li>About</li>
                <li>Features</li>
                <li>Contact</li>
            </ul>
            </div>

            <div className='footdiv2'>
                <ul>
                    <li>Resource Link</li>
                    <li>Download Whitepaper</li>
                    <li>Smart Token</li>
                    <li>Blockchain Explore</li>
                    <li>Crypto API</li>
                    <li>Explore</li>    
                </ul>
            </div>
            <div className='footrow'>
            <h6 className='fs-6 accept'> We accept the Following payment systems</h6>
            <div className='container mt-5'>
                <div className='row footrow'>
                     <div className='col-4'>
                        <img src={visa} alt="" width={90} />
                     </div>
                     <div className='col-4'>
                        <img src={master} alt="" width={90} />
                     </div>
                     <div className='col-4'>
                        <img src={bitcoin} alt="" width={90} /></div>   
                </div>
            </div>
            </div>

            <h6 className='mt-5 twenty-two'> &#169; 2022 CRAPPO. All rights reserved.</h6>
            <div className='container footcont'>
                <div className='row footlast'>
                    <div className="col-2">
                        <img src={youtube} alt="" />
                    </div>
                    <div className="col-2">
                        <img src={facebook} alt="" />
                    </div>
                    <div className="col-2">
                        <img src={whatsapp} alt="" />
                    </div>
                    <div className="col-2">
                        <img src={linkd} alt="" />
                    </div>
                    <div className="col-2">
                        <img src={twitter} alt="" />
                    </div>
                </div>
            </div>
            
            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer