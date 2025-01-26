import imgBread from '../../assets/bg/bread.svg'
import vk from '../../assets/icons/vk.svg'
import tw from '../../assets/icons/twitter.svg'
import  ins from '../../assets/icons/instagram.svg'
import fc from '../../assets/icons/facebook.svg'
const Home = () => {
  return (
    <setion >
            <div className=''>
                <div className="grid grid-cols-1 md:grid-cols-3 min-h-screen relative">
                    <div className='absolute z-99  sm:start-[25%]  h-screen flex flex-col justify-between'>
                        <h3 className='font-sen leading-8 p-3 text-[28px] max-w-[12ch] font-semibold text-white'>Peachy Pup Bakery</h3>
                        <p className='p-3 ms-[9em] sm:ms-28 md:ms-1 lg:ms-28 font-medium text-[18px] text-white'>Telephone: <span>+7 700 000 00 00</span></p>
                    </div>
                <div className="col-span-3 relative md:col-span-2  h-screen bg-[#c98a40] flex md:items-end items-center justify-center flex-col ">
                    

                    <div className=" md:mb-18 md:pe-10 px-3 sm:px-0 ">
                    <h1 className='font-sen font-[800] text-[30px] sm:text-[50px] uppercase text-nowrap text-white'>Tasty pastries</h1>
                    <p className='max-w-[50ch] leading-5 mt-2  sm:me-10 text-white mb-6'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                    </p>
                    <div className=' sm:w-[440px] '>
                    <button className='btn btn-primary me-auto'>SEE MORE</button>
                    </div>
                    </div>
                    <div className="bg-img flex justify-end items-center px-8 bg-white z-10 absolute w-[40%]  md:w-[33.4%] lg:w-[50%]   md:h-[201px] bottom-0 start-0">
                            <div className='socail flex flex-col gap-4'>
                            <img src={vk} alt="vk" />
                            <img src={fc} alt="facebook" />
                            <img src={ins} alt="instgram" />
                            <img src={tw} alt="twitter" />
                            </div>
                </div>
                </div>
                <div className="bg-img p-8 relative flex items-center justify-start md:ms-[-160px]">
                        <img className=' md:w-[500px]' src={imgBread} alt="" />
                </div>
             
                </div>
            </div>
    </setion>
  )
}

export default Home