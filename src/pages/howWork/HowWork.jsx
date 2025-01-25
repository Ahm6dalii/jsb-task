import food1 from '../../assets/food/1.svg'
import food2 from '../../assets/food/2.svg'
import food3 from '../../assets/food/3.svg'
import food4 from '../../assets/food/4.svg'
const HowWork = () => {
    const gallary=[
        {
            img:food1,
            alt:"food1"
        },
        {
            img:food2,
            alt:"food2"
        },
        {
            img:food3,
            alt:"food3"
        },
        {
            img:food4,
            alt:"food4"
        },
    ]
  return (
    <section>
            <div className='grid grid-cols-1 md:grid-cols-3 min-h-screen relative'>
                    <div className=" bg-img  text-primary font-Poppins text-[18px]  ">
                        <p className='md:max-w-[270px] ms-auto mt-22 px-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <div className='flex gap-8 md:absolute my-8 px-4 md:m-0 md:ps-28 md:pe-48 md:pt-26 lg:pt-12 lg:pe-64'>
                            {gallary.map(({img,alt},key)=>(
                                <div key={key}>
                                    <img src={img} alt={alt} className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="p-8 sm:ps-28 bg-primary col-span-2 flex flex-col items-start   justify-between">
                        <h2 className='tracking-wider uppercase  font-sen font-[800] max-w-[250px] leading-15 sm:max-w-[450px] text-[50px] md:text-[90px] text-end text-white sm:leading-[100px]'>How we
                        Work</h2>
                        <button className="block mx-auto sm:m-0  btn btn-primary">CONNACT US</button>
                    </div>
            </div>
    </section>
  )
}

export default HowWork