import React from 'react'

function Welcome(){

    return(
        <div className='flex justify-center items-center'>
          <div >
          <img
            src="bgw.jpg"
            className='h-full w-full'
            alt=""
          />
          </div>
          <div className='absolute text-center w-1/2'>
          <div className='text-5xl text-white font-bold pb-5'>Let's democratize AI together</div>
          <span className='text-2xl text-white'>Unleash the potential of AI in research. Discover insights, fuel innovation, and shape a transformative future with our cutting-edge tools and technologies</span>
          <div className='flex items-center justify-center mt-5'>
          <a href="https://dreamqr.art/">
            <button className="flex text-xl bg-[#3a289f] font-bold p-3 px-9  m-6 border-2 text-xl rounded-lg justify-center items-center">
              <span>Try Dream-QR</span>
              
            </button>
          </a>
          <a href="https://dreamqr.art/">
            <button className="flex text-xl bg-[#7964F6] font-bold p-3 px-9  m-6 border-2 text-xl rounded-lg justify-center items-center">
              <span>Try Chat-Browser</span>
              
            </button>
          </a>
          </div>
          </div>
        </div>
    )
};
export default Welcome