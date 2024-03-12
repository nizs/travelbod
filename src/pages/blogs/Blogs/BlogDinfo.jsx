import React from 'react';
import { FaRegUserCircle, FaComments, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { TiSocialTumbler } from "react-icons/ti";
import Recentposts from './Recentposts';

const BlogDinfo = ({ details }) => {
    const { _id, title, category, author, comments, date, img, description, blogdimg } = details;

    return (
        <div className='grid md:grid-cols-3 gap-4 mx-4 py-16 md:mx-8'>
            <div className='md:col-span-3 lg:col-span-2'>
                {/* title, img & tour description */}
                <div>
                    <img className='' src={blogdimg} alt="blog_feature_img" />
                </div>
                <div className='flex items-center my-4'>
                    <FaRegUserCircle className='text-[#64ab45] me-2 text-[18px]' />
                    <span className='me-4 text-[#82828A] font-semibold'>{author}</span>
                    <FaComments className='text-[#64ab45] me-2 text-[18px]' />
                    <span className='text-[#82828A] font-semibold'>{comments} Comments</span>
                </div>
                <div className='mb-16'>
                    <h2 className='text-3xl font-bold my-4'>{title}</h2>
                    <p className='text-[#82828A] text-[17px]'>Sed ut perspiciatis unde omniste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam, eaque ip quae abillo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit.</p>
                </div>
                <div className='grid sm:grid-cols-1 lg:grid-cols-2 lg:grid-cols-2 gap-4 my-4'>
                    <div>
                        <div>
                            <h3 className='text-2xl font-bold'>Build camping easily.</h3>
                            <p className='text-[#82828A] text-[17px] my-2'>Less time collecting water means more time in class. Clean water and proper toilets at school means teenage girls don’t have to stay home for a week out of every month.</p>
                        </div>
                        <div>
                            <h3 className='text-2xl font-bold my-2'>Challenge</h3>
                            <p className='text-[#82828A] text-[17px]'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore quasi architecto beatae vitae dicta.</p>
                        </div>
                        <div className='hidden md:hidden lg:hidden xl:block'>
                            <h3 className='text-2xl font-bold my-2'>Explore</h3>
                            <p className='text-[#82828A] text-[17px]'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore quasi architecto beatae vitae dicta.</p>
                        </div>
                    </div>
                    <div className=''>
                        <img className='w-full' src={img} alt="tour_description_img" />
                    </div>
                </div>
                <div className='bg-[#f4fff4] text-[22px] p-8 my-8 font-semibold border-l-2 border-[#64ab45]'>
                    <p>Metus eu, nisi nibh et adipiscing natoque morbi integer scelerisque tincidunt mauris. Lectus molestie nisl rutrum cras dictum lectus molestie leoenim.</p>
                    <span>---</span>
                    <p>said Polito
                    </p>
                </div>
                <div>
                    <h3 className='text-2xl font-bold my-2'>Great opportunity for adventure & travels</h3>
                    <p className='text-[#82828A] text-[17px]'>Neque porro quisquam estey qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit sed quia non numquam eius modie tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam quis nostrum exercitationem ullam.</p>
                </div>
                <div className='my-4'>
                    <h3 className='text-2xl font-bold my-2'>Adventures and connections make for networking</h3>
                    <p className='text-[#82828A] text-[17px]'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                </div>

                {/* about admin */}
                <div className=''>
                    <div className='my-12 md:flex justify-between items-center'>
                        <div>
                            <span className='font-bold text-[18px]'>Tags:</span>
                            <span className='text-[14px] font-bold ml-4 bg-[#ecf7ec] px-4 py-2 hover:bg-[#64ab45] hover:text-white cursor-pointer'>Adventure</span>
                            <span className='text-[14px] font-bold ml-4 bg-[#ecf7ec] px-4 py-2 hover:bg-[#64ab45] hover:text-white cursor-pointer'>Natural</span>
                            <span className='text-[14px] font-bold ml-4 bg-[#ecf7ec] px-4 py-2 hover:bg-[#64ab45] hover:text-white cursor-pointer'>Policy</span>
                        </div>
                        <div className='mt-8 md:mt-0'>
                            <span className='inline-block bg-[#ecf7ec] p-3.5 rounded-full  mr-4 hover:bg-[#64ab45] hover:text-white cursor-pointer'>
                                <FaFacebookF className='text-[14px] ' />
                            </span>
                            <span className='inline-block bg-[#ecf7ec] p-3.5 rounded-full mr-4 hover:bg-[#64ab45] hover:text-white cursor-pointer'>
                                <FaTwitter className='text-[14px] ' />
                            </span>
                            <span className='inline-block bg-[#ecf7ec] p-3.5 rounded-full mr-4 hover:bg-[#64ab45] hover:text-white cursor-pointer'>
                                <FaLinkedinIn className='text-[14px] ' />
                            </span>
                            <span className='inline-block bg-[#ecf7ec] p-3.5 rounded-full hover:bg-[#64ab45] hover:text-white cursor-pointer'>
                                <TiSocialTumbler className='text-[14px] ' />
                            </span>
                        </div>
                    </div>
                    <div className='md:flex md:items-center bg-[#f4fff4]  p-8 rounded-xl'>
                        <div className='w-1/3 md:w-2/3 md:mr-6'>
                            <img src="https://avatars.githubusercontent.com/u/74610615?s=96&v=4" alt="admin_profile_picture" className='rounded-lg w-full' />
                        </div>
                        <div className='my-4'>
                            <h4 className='text-[20px] font-bold pb-[5px] border-b-2 inline-block border-[#64ab45]'>Admin</h4>
                            <p className='text-[#82828A] text-[17px] mt-4'>Our Admin here is a devloper primarily and willingly learning blog writting and an affiliate marketer.He's trying to update developing skills and wriitting blogs which is relevent with developing skills and spreading neccessary info. </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* page sidebar */}
            <div className='md:col-span-3 lg:col-span-1'>
                <Recentposts />
            </div>
        </div>
    );
};

export default BlogDinfo;