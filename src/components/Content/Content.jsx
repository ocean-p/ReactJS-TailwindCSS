import React from 'react';
import {FaUser} from 'react-icons/fa';
import {BsCreditCardFill} from 'react-icons/bs';
import checkIconMobile from '../../assets/mobile/checkpoint.svg';

const Content = () => {
  return (
    <section>
      <div className='ml-[70px] mr-[54px] font-bold flex flex-col items-center
        bg-gradient-to-b from-white/40 to-transparent
        shadow-md rounded-[24px]
      '>
        <div className='mt-16 gap-8 flex items-start'>
          <FaUser size={'22px'} className='mt-[12px]'/>
          <p className='text-26'>
            10245
            <p className='text-13 font-semibold mb-[36px]'>
              Customers
            </p>
          </p>
        </div>
        <div className='flex items-start gap-8 mb-16'>
          <BsCreditCardFill size={'22px'} className='mt-[12px]'/>
          <p className='text-26'>
            12045
            <p className='text-13 font-semibold'>
              Cards Issued
            </p>
          </p>
        </div>
      </div>
      <div className='text-13 flex flex-col w-[100%] mt-[90px] font-semibold'>
        <p className='check-content'>
          <img src={checkIconMobile} alt="" />
          <p>Card reports send to your phone every weeks</p>
        </p>
        <p className='check-content'>
          <img src={checkIconMobile} alt="" />
          <p>No external fees</p>
        </p>
        <p className='check-content'>
          <img src={checkIconMobile} alt="" />
          <p>Set spending limits and restrictions</p>
        </p>
      </div>
    </section>
  )
}

export default Content