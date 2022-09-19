import React from 'react'
import arrow from './crappo images/Arrow Right.png'
import bitcoin from './crappo images/hero-img.png'
import chart from './crappo images/bar_chart_FILL0_wght400_GRAD0_opsz48 (1).png'
import network from './crappo images/network_cell_FILL0_wght400_GRAD0_opsz48.png'
import people from './crappo images/Person.png'
import why from './crappo images/why-img.png'
import line from './crappo images/Form.png'


const SectionA = () => {
  return (
    <div className='text-light secA'>
        <div className='span-A1 fw-bold'>
            <span className='span-A2'> <small> 70% SAVE </small></span>
            <span className='friday'><small> for the best black friday deals </small></span>
        </div>
        <div className=''>
            <div className='SecA1'>
            <h1 className='fastest'>Fastest $ Secure Platform To <br /> Invest In Crypto</h1>
            <h6 className='buynsell'>Buy and sell cryptocurrencies by trusted 10M wallets, in over 100M transactions</h6>
            <div className='try'>
            <h4> <small> Try for free <span className='arrow'><img src={arrow} alt="" width={40} /></span> </small></h4>
            </div>
            </div>

            <div className=''>
              <img src={bitcoin} alt="" className='btc'  />
            </div>

            <div className='container curlist text-center'>
                  <div className='row rowA'>
                  <div className='col-6'><img src={chart} alt="" className='bar' />
                  </div>
                  <div className='col-6 thirty'>$30B 
                  <h6 className='exchange'> <small> Digital Currency Exchange </small></h6>
                  </div>
                  
                  </div>
                  <div className='row rowB'>
                  <div className='col-6'><img src={network} alt="" className='network' /></div>
                  <div className='col-6 ninety'>190+
                  <h6> <small className='country'>Countries Around The World</small></h6>
                  </div>
                  
                  </div>
                  <div className='row rowC'>
                  <div className='col-6'><img src={people} alt="" className='people' /></div>
                  <div className='col-6 ten'>$10M
                  <h6><small className='trusted'>Trusted Wallet Investors</small></h6>
                  </div>
                  
                  </div> 
                  </div>

                  <div className='chap'>
                  <div className='chaps'>
                  <h1 className='choose-chappo'>Why you should choose CHAPPO</h1>
                  <h6 className='chooseh6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem laudantium eaque architecto aperiam, ipsa, perferendis assumenda, enim reiciendis quos rerum repellendus excepturi quisquam esse vel!</h6>
                  <button className='learn'>learn more</button>
                  </div>
                  <div><img src={why} alt="" className='why' />
                  <div className='howmuch'>
                  <div className=' aaa text-center fw-bold mt-5'><h3>How much can you Earn with us?</h3></div>
                  <h6 className='mt-4 text-center lorema'> <small> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum accusantium aut doloribus quo, a iusto.</small></h6>
                  </div>
                  </div>
                  </div>

                  <div className="form text-start">
                  <form action="#">
                  <h5>Enter your harsh rate
                  <img src={line} alt="" className='linee' />
                  </h5>
                  <div class="dropdown mt-4">
                  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"> 
                  TH/s
                  </button>
                  <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">H/s</a></li>
                  <li><a class="dropdown-item" href="#">KH/s</a></li>
                  <li><a class="dropdown-item" href="#">MH/s</a></li>
                  <li><a class="dropdown-item" href="#">GH/s</a></li>
                  </ul>
                  <img src={line} alt="" className='lineb' />
                  <button className='calculate'>Calculate</button>
                  <h6 className='estimated text-primary'>ESTIMATED 24 HOUR REVENUE:</h6>
                  <h6 className='no'>0.055 130 59</h6>
                  <h6 className='eth'>ETH <span className='text-primary'>($1275)</span></h6>
                  <p className='revenue'>Revenue will change based <br /> on mining difficulties and Ethereum price.</p>
                  </div>
                  </form>
                  </div>
                  


                  </div>
        
    </div>
  )
}

export default SectionA