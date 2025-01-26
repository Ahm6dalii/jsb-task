import email from '../../assets/icons/email.svg'
import phone from '../../assets/icons/phone.svg'
import { useFormik } from 'formik';
import * as yup from 'yup';

const Contact = () => {
    const SubmitData = async (data) => {
        console.log(data)
        const res = await fetch("http://upskilling-egypt.com:3000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const sss = await res.json()
        console.log(sss);

    }
    const validationSchema = yup.object({
        name: yup.string()
            .min(3, "Name must be at least 3 characters")
            .max(30, "Name must be less than 30 characters")
            .required("Name is required"),
        email: yup.string()
            .email("Invalid email address")
            .required("Email is required"),
            phone: yup.string()
            .matches(
              /^01[0125][0-9]{8}$/,
              "Phone number must be 11 digits, start with '01', and follow the Egyptian format"
            )
            .required("Phone number is required"),

    })
    const { handleSubmit, handleBlur, handleChange ,errors,touched } = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
        },
        onSubmit: SubmitData,
        validationSchema
    })


    return (
        <section className='py-8'>
            <div className='px-8 sm:px-1'>
                <h2 className='mb-12 text-center tracking-wider uppercase w-full  font-sen font-[800]  leading-15  text-[50px] sm:text-[60px] md:text-[70px] lg:text-[100px] xl:text-[120px]  text-primary sm:leading-[100px]'>
                    Contact
                </h2>
                <div className="sm:w-[60%] lg:w-[48%] mx-auto gap-20 grid grid-cols-1 md:grid-cols-2">
                    <div className="">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                            <input name='name' onChange={handleChange} onBlur={handleBlur} className={`${errors.name&&touched.name?'border-2 border-red-500':'' } ps-3 focus:outline-none  rounded-[61px] py-4 w-full  bg-[#FFD39F] placeholder:text-black placeholder:ps-5 placeholder:font-bold  placeholder:font-sen placeholder:text-[14px]`} placeholder='Full Name' type="text" />
                            {errors.name&&touched.name&& <div className='ps-4 pb-1 text-red-500'>{errors.name}</div>}
                            <input name='email' onChange={handleChange} onBlur={handleBlur} className={`${errors.email&&touched.email?'border-2 border-red-500':'' } ps-3 focus:outline-none rounded-[61px] py-4 w-full  bg-[#FFD39F] placeholder:text-black placeholder:ps-5 placeholder:font-bold placeholder:font-sen placeholder:text-[14px]`} placeholder='Email' type="email" />
                            {errors.email&&touched.email&& <div className='ps-4 pb-1 text-red-500'>{errors.email}</div>}
                            <input name="phone" onChange={handleChange} onBlur={handleBlur} className={`${errors.phone&&touched.phone?'border-2 border-red-500':'' } ps-3 focus:outline-none rounded-[61px] py-4 w-full  bg-[#FFD39F] placeholder:text-black placeholder:ps-5 placeholder:font-bold placeholder:font-sen placeholder:text-[14px]`} placeholder='Phone Number' type="tel" />
                            {errors.phone&&touched.phone&& <div className='ps-4 pb-1 text-red-500'>{errors.phone}</div>}
                            <button className=" btn  btn-ouline block mx-auto">SEND</button>
                        </form>
                    </div>
                    <div className="flex flex-col gap-6 justify-center mb-10 ">
                        <div className='flex items-center gap-4'>
                            <img src={email} alt="Email" />
                            <p className='text-[14px]'>upskilling.eg1@gmail.com</p>
                        </div>
                        <div className='flex items-center gap-4'>
                            <img src={phone} alt="phone" />
                            <p className='text-[14px]'>+20 115 493 2137</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact