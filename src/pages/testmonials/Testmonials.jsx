import React from 'react'
import TestmonialsCard from '../../components/TestmonialsCard'

const Testmonials = () => {
  return (
    <section className='bg-primary  relative min-h-screen  '>
        <div className='bg-img-test py-8  h-full w-full'>
        <div className='w-[75%] mx-auto'>
        <h2 className='text-center tracking-wider uppercase w-full uppercase  font-sen font-[800]  leading-15  text-[50px] sm:text-[60px] md:text-[70px] lg:text-[100px] xl:text-[120px]  text-white sm:leading-[100px]'>
        testymonials
        </h2>
            <div className="grid px-10 mt-12 grid-cols-1 md:grid-cols-2 gap-10">
                <TestmonialsCard/>
                <TestmonialsCard/>
                <TestmonialsCard/>
                <TestmonialsCard/>
            </div>
            <button className="block mx-auto mt-8  btn btn-primary">CONNACT US</button>

        </div>
        </div>
    </section>
  )
}

export default Testmonials