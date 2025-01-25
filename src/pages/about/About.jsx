import React from 'react'
import chief from '../../assets/chief.svg'
const About = () => {
  return (
    <section >
        <div className=' min-h-screen grid grid-cols-1 md:grid-cols-3'>
            <div className=" py-8 bg-primary col-span-2 flex flex-col items-center justify-between">
                <h2 className='tracking-wider text-start uppercase  font-sen font-[800] max-w-[250px] leading-15 sm:max-w-[450px] text-[50px] sm:text-[90px] text-end text-white sm:leading-[100px]'>
                About
                us
                </h2>
                <p className='my-8 text-white max-w-[400px]'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <div className='text-start  sm:w-[400px]'>

                <button className="     btn btn-primary">CONNACT US</button>
                </div>

            </div>
            <div className="flex items-center justify-center">
                <div className='m-0 sm:-ms-10 lg:-ms-40 xl:-ms-58 w-[200px] py-5 md:w-[400px]  lg:w-[500px]'>
                    <img className='w-full h-full object-cover' src={chief} alt="chief" />
                </div>
            </div>

        </div>
    </section>
  )
}

export default About