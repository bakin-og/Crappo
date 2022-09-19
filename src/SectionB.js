import React from 'react';
import bitcon from './crappo images/bitcon.png'
import arowr from './crappo images/Arrow Right.png'
import ether from './crappo images/ethereum.png'
import arrowB from './crappo images/Arrow Right.png'
import litecoin from './crappo images/litecoin.png'
import arrowC from './crappo images/Arrow Right.png'

const SectionB = () => {
  return (
    <div className='secB'>
    <div className='trade'>
        <h3 className='fw-bold '>Trade Securely And Market The High Growth Cryptocurrencies.</h3>
        <div className='secB-grid'>
        <div className="bitcon">
        <img src={bitcon} alt="" className='con' />
        <h2 className='coin'>Bitcoin <span className='fw-light fs-6'>BTC</span></h2>
        <p className='digit'>Digital currency in which a record of transactions is maintained.</p>
        <button className='mining-A'>Start mining <img src={arowr} alt="" width={50} /></button>
    </div>
    <div className="etherr">
        <img src={ether} alt="" className='ether' />
        <h2 className='ethereum'>Ethereum <span className='fw-light fs-6'>ETH</span></h2>
        <p className='blockchain'>Blockchain technology to create and run decentralized <br /> digital applications</p>
        <button className='mining-B'>start mining<img src={arrowB} alt="" width={50} /></button>
    </div>
    <div className="litecoin">
        <img src={litecoin} alt="" className='lite' />
        <h2 className='liteh2'>Litecoin <span className='fw-light fs-6'>LTC</span></h2>
        <p className='crpyt'>Cryptocurrency that enables instant <br /> payments to anyone in <br /> the world.</p>
        <button className='mining-C'>start mining<img src={arrowC} alt="" width={50} /></button>
    </div>
    </div>
    <div className='space'></div>
    
    
    </div>
    </div>

  )
}

export default SectionB