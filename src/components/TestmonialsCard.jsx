import React from 'react'
import star from '../assets/icons/star.svg'
const TestmonialsCard = () => {
  return (
    <article className='rounded-[30px] bg-white'>
        <div className='flex flex-col gap-4 px-8 py-4'>
            <h4 className='text-[16px] font-bold text-primary'>Kathryn Murphy</h4>
            <p className='text-[14px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
            <div className="flex gap-3">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
            </div>
        </div>
    </article>
  )
}

export default TestmonialsCard