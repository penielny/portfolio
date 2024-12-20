import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import penielLogo from './../assets/peniel.png'
import emailjs from 'emailjs-com';
import toast from 'react-hot-toast';
export default function Contacts() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { firstName, lastName, email, subject, message } = formData;
        if (!firstName || !lastName || !email || !subject || !message) {
            toast.error('Please fill in all the required fields.');
            return;
        }

        emailjs
            .send(
                'service_1aos93j',
                'template_ovbwrvq',
                formData,
                '8kL-p1NFpcONjnQrv'
            )
            .then((result) => {
                toast.success('Message sent successfully')
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: '',
                });
            })
            .catch((error) => {
                toast.error('Failed to send message. Please try again.')
                console.error('Error:', error);
            });
    };

    return (
        <div className="flex flex-1 flex-col md:flex-row overflow-y-auto md:overflow-hidden">
            <div className="border-r md:w-2/6 border-[#023047]  md:overflow-y-auto">
                <div className=' flex flex-col gap-5 p-10 rounded-lg'>
                    <h4 className=' text-2xl pb-6'>Send me a message</h4>
                    <form onSubmit={handleSubmit} method='POST' className='flex flex-col gap-5'>
                        <div className='flex flex-row items-center gap-3'>
                            <div className='flex flex-col w-1/2 space-y-3 leading-relaxed'>
                                <label className='text-sm text-gray-900 font-medium'>First name</label>
                                <input value={formData.firstName}
                                    onChange={handleChange} name="firstName" type='text' placeholder='First Name' className='border p-3 bg-transparent outline-none placeholder:text-black border-[#023047] rounded-md text-sm flex-1' />
                            </div>
                            <div className='flex flex-col w-1/2 space-y-3 leading-relaxed'>
                                <label className='text-sm text-gray-900 font-medium'>Last name</label>
                                <input value={formData.lastName}
                                    onChange={handleChange} name="lastName" type='text' placeholder='Last Name' className='border p-3 bg-transparent outline-none placeholder:text-black border-[#023047] rounded-md text-sm flex-1' />
                            </div>
                        </div>
                        <div className='flex flex-col w-full space-y-3 leading-relaxed'>
                            <label className='text-sm text-gray-900 font-medium'>E-mail</label>
                            <input value={formData.email}
                                onChange={handleChange} name="email" type='email' placeholder='email@domain.com' className='border p-3 bg-transparent outline-none placeholder:text-black border-[#023047] rounded-md text-sm flex-1' />
                        </div>
                        <div className='flex flex-col w-full space-y-3 leading-relaxed'>
                            <label className='text-sm text-gray-900 font-medium'>Phone number</label>
                            <input value={formData.phone}
                                onChange={handleChange} name="phone" type='tel' placeholder='+233 578 000 000' className='border p-3 bg-transparent outline-none placeholder:text-black border-[#023047] rounded-md text-sm flex-1' />
                        </div>
                        <div className='flex flex-col w-full space-y-3 leading-relaxed'>
                            <label className='text-sm text-gray-900 font-medium'>Subject</label>
                            <input value={formData.subject}
                                onChange={handleChange} name="subject" placeholder="Subject" type='text' className='border p-3 bg-transparent outline-none placeholder:text-black border-[#023047] rounded-md text-sm flex-1' />
                        </div>

                        <div className='flex flex-col w-full space-y-3 leading-relaxed'>
                            <label className='text-sm text-gray-900 font-medium'>Additional information</label>
                            <textarea name='message' value={formData.message}
                                onChange={handleChange} className='resize-none h-40 rounded-md bg-transparent border border-[#023047] outline-none'>

                            </textarea>
                        </div>
                        <button type="submit"
                            className='flex items-center flex-row justify-center bg-black text-white gap-2 px-5 py-3 rounded-lg'>
                            Send message
                        </button>
                    </form>
                </div>
            </div>
            <div className="border-r md:w-2/6 p-10 border-[#023047]  md:overflow-y-auto">
                <div className=' flex flex-col space-y-5'>
                    <h3 className="text-2xl pb-5">Contact Lines</h3>
                    <div className='flex flex-col space-y-2 border-b border-[#023047] pb-5'>
                        <h3 className='font-medium text-lg'>Email Peniel</h3>
                        {/* <p className='text-sm text-gray-600'>get support 24/7, with our ward winning support network of growth experts.</p> */}
                        <p className='text-sm text-gray-600'>Send me an email today and lets explore a future of endless possibilities </p>
                        <Link to="mailto:peniel@peed.dev" className='underline font-medium text-sm'>peniel@peed.dev</Link>
                    </div>
                    <div className='flex flex-col space-y-2 border-b border-[#023047] pb-5'>
                        <h3 className='font-medium text-lg'>Chat Peniel</h3>
                        <p className='text-sm text-gray-600'>Need an instant response? send me a direct message and lets keep the buzz going.</p>
                        <a target='_blank' href="https://wa.me/233200872973" className='underline font-medium text-sm'>Send a Whatsapp message</a>
                    </div>
                    <div className='flex flex-col space-y-2 border-b border-[#023047] pb-5'>
                        <h3 className='font-medium text-lg'>Call me</h3>
                        <p className='text-sm text-gray-600'>Need to reach me via phone call ?, lets do it!. </p>
                        <Link to="tel:+233530191122" className='underline font-medium text-sm'>+233 530 191 122</Link>
                        <Link to="tel:+233546547509" className='underline font-medium text-sm'>233 546 547 509</Link>
                    </div>
                    <div className='flex flex-col space-y-2  border-[#023047] pb-5'>
                        <h3 className='font-medium text-lg'>Accra , Ghana</h3>
                        <p className='text-sm text-gray-600'>Need to know where i'm located ? , Here is my physical address. Please give me a call before stepping.</p>
                        <div className='flex flex-row items-start space-x-3'>
                            <div className='pt-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>

                            </div>
                            <Link target='_blank' to="https://maps.app.goo.gl/PZ7gAhiARTAw3yH7A" className='flex flex-col'>
                                <div className='underline font-medium text-sm'>A Arhinful Ave,</div>
                                <div className='underline font-medium text-sm'>Sekondi - Takoradi, Western,</div>
                                <div className='underline font-medium text-sm'>Ghana.</div>
                            </Link>

                        </div>
                    </div>

                </div>
            </div>
            <div className="hidden md:w-2/6 border-l border-[#023047] overflow-hidden md:flex relative">
                <img className="h-full w-full object-cover" src={penielLogo} />
                <div className="absolute bottom-10 left-10 right-10 bg-[#219ebc] h-fit flex items-center justify-between p-1">
                    <p className="px-3 underline">Subscribe to my channel</p>
                    <a target='_blank' href="https://www.youtube.com/@devcon3977" className="bg-[#023047] p-4 flex items-center justify-center text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}
