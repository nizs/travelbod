import { motion } from "framer-motion"
import { FaRegUserCircle, FaComments, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { TiSocialTumbler } from "react-icons/ti";

const Contact = () => {
    return (
        <div className=''>
            <div className='py-16 container mx-auto grid lg:grid-cols-2 gap-8 px-4'>
                <div className='flex flex-col justify-center px-2'>
                    <motion.h3
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: 0.2,
                            x: { type: "spring", stiffness: 60 },
                            opacity: { duration: 0.6 },
                            ease: "easeIn",
                            duration: 1
                        }}
                        className='text-1xl font-bold text-[#64ab45] bg-[#f4fff4] px-4 py-2 w-2/3 md:w-1/3 rounded'
                    >
                        Contact with us
                    </motion.h3>
                    <motion.h1
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: 0.3,
                            x: { type: "spring", stiffness: 60 },
                            opacity: { duration: 0.6 },
                            ease: "easeIn",
                            duration: 1
                        }}
                        className="my-8 text-3xl md:text-5xl font-bold"
                    >
                        Have questions? Feel free to write us
                    </motion.h1>
                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: 0.4,
                            x: { type: "spring", stiffness: 60 },
                            opacity: { duration: 0.6 },
                            ease: "easeIn",
                            duration: 1
                        }}
                        className="text-[#82828A]"
                    >
                        Man braid hell of edison bulb four brunch subway tile authentic, chillwave put a bird on church-key ramps heirloom. Set perspiciatis unde omnis estenatus voluptatem aperiae.
                    </motion.p>
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: 0.5,
                            x: { type: "spring", stiffness: 60 },
                            opacity: { duration: 0.6 },
                            ease: "easeIn",
                            duration: 1
                        }}
                        className='flex items-center  mt-8'>
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
                    </motion.div>
                </div>
                <div>
                    <form className="card-body px-2">
                        <div className='grid md:grid-cols-1 md:grid-cols-2 gap-4'>
                            <div>
                                <div className="form-control mb-4">
                                    <input type="text" placeholder="Your Name" className="input bg-[#f4fff4] py-6" />
                                </div>
                                <div className="form-control">
                                    <input type="text" placeholder="Phone Number" className="input bg-[#f4fff4] py-6" />
                                </div>
                            </div>

                            <div>
                                <div className="form-control mb-4">
                                    <input type="text" name='fname' placeholder="Email Address" className="input bg-[#f4fff4] py-6" required />
                                </div>
                                <div className="form-control">
                                    <input type="text" name='lname' placeholder="Subject" className="input bg-[#f4fff4] py-6" required />
                                </div>
                            </div>
                        </div>

                        <div className="form-control mt-4">
                            <textarea name='email' placeholder="Write a Message" className="input bg-[#f4fff4] py-6 h-40" />
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary md:w-1/2 bg-[#64ab45] border-0 text-white hover:bg-[#82d75d] text-[18px]">Send a Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;