import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import CoverSection from '../Shares/CoverSection/CoverSection';
import contactUsImg from '../../assets/contact/banner.jpg';

const ContactUs = () => {

    return (
        <div>

            <CoverSection img={contactUsImg} title={'CONTACT US'} details={'Would You Like to Try a Dish??'} />

            <SectionTitle
                subHeading={"Visit Us"}
                heading={"Our Location"} />

            <div className='pb-10'>
                <div className='md:flex  justify-evenly  '>
                    <div className='border '>
                        <div className="flex flex-col items-center p-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 dark:text-violet-600">
                                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                            </svg>
                            <h3 className="my-3 text-3xl font-semibold">Phone</h3>
                            <div className="space-y-1 leading-tight">
                                <p>+38 (012) 34 56 789</p>
                            </div>
                        </div>
                    </div>
                    <div className='border '>
                        <div className="flex flex-col items-center p-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 dark:text-violet-600">
                                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                            </svg>
                            <h3 className="my-3 text-3xl font-semibold">Phone</h3>
                            <div className="space-y-1 leading-tight">
                                <p>+38 (012) 34 56 789</p>
                            </div>
                        </div>
                    </div>
                    <div className='border '>
                        <div className="flex flex-col items-center p-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 dark:text-violet-600">
                                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                            </svg>
                            <h3 className="my-3 text-3xl font-semibold">Phone</h3>
                            <div className="space-y-1 leading-tight">
                                <p>+38 (012) 34 56 789</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <SectionTitle subHeading={'Send Us a Message'} heading={'Contact Form'} />

            <div>
                
            </div>

        </div>
    );
};

export default ContactUs;