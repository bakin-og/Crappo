import React from 'react';
import bitcoinn from './crappo images/feature-1-img.png'
import feature2 from './crappo images/feature-2-img.png'
import feat3 from './crappo images/feature-3-img.png'
import line from './crappo images/Form.png'
import vector1 from './crappo images/vecback.png'

const SectionC = () => {
  return (
    <div>
        <div className='secC text-light m-3 p-2'>
        <h4 className='text-center sents fs-3 m-4'>Market Sentiments, Portfolios And Run The  Infrastructure Of Your Choice</h4>
        <div className='investdiv'>
          <div className='divinA'>
        <h3 className='mt-5'>Invest Smart</h3>
        <p className='mt-3 smalorem '><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores aliquid nesciunt quam cupiditate pariatur sit voluptates eligendi autem ullam! Quasi.
          </small></p>
          <button className='more'>learn more</button>
          </div>
        <div>
        <img className='mt-4 fet1' src={bitcoinn} alt="" width={280}/>
        </div>
        </div>
        
        <div className='statA'>
          <div className='divinB'>
        <h3 className='stats fw-bold'>Detailed Statistics</h3>
        <p><small className='mt-3 smalorem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem impedit ullam porro eaque sunt delectus provident, vel est dolorum! Expedita mollitia quos cupiditate nemo iusto!</small></p>
        <button className='more '>learn more</button>
        </div>
          <div>
        <img className='mt-4 fet2 ' src={feature2} alt="" width={280} />
        </div>
        </div>

        <div className='statB'>
          <div className='divinC'>
        <h3 className='grow fw-bold'>Grow Your Profits And Track Your <br /> Investments</h3>
        <p className='smalorem mt-3'><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem numquam veniam repellat hic dolore doloribus!</small></p>
        <button className='more'>learn more</button>
        </div>
        <div>
        <img className='fet3 mt-4' src={feat3} alt="" width={280} />
        </div>
        </div>
        
        
        <div className='startmin '>
            <img className='vec1' src={vector1} alt="" width={50} />
            <h3 className='fw-bold'>Start Mining Now</h3>
            <p className='smalorem'><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, adipisci maxime? Voluptates tempora illo alias, voluptatum qui atque minus ratione.</small></p>
            <h5 className='mt-4'>enter message</h5>
            <img src={line} alt="" className='linec' />
            <button className='sub mt-2'>Subscribe</button>
        </div>
        </div>
        
    </div>
  )
}

export default SectionC