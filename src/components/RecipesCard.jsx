import React from 'react'

const RecipesCard = ({id,img,desc}) => {
  return (
    <figure className='max-h-[300x] rounded-xl overflow-hidden border border-gray-200'>
        <div className='max-h-[150px] rounded-xl overflow-hidden'>
            <img src={img} alt="" className='w-full h-full rounded-xl object-cover' />
        </div>
        <figcaption className='px-3 py-4'>
                <h4 className='mb-2 line-clamp-1 text-[16px] text-primary font-bold'>{desc}</h4>
                <p className="text-[14px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                </p>
        </figcaption>
    </figure>
  )
}

export default RecipesCard