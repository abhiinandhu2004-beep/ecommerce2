import image1 from '../assets/img8.png'
import image2 from '../assets/img9.png'
import { Instagram, Youtube, Linkedin } from 'lucide-react'
import image3 from '../assets/footer.svg'

const Footer = () => {
    return (
        <>
         <div className='p-5'>
               <div className='flex flex-col w-full max-w-7xl mx-auto bg-[#010F17] h-101  items-center justify-center text-white rounded-2xl p-10 border border-[#DBF227]'>
                <p className='text-lg lg:text-4xl text-[#DBF227] poppins font-bold py-5'>Download Our Mobile App</p>
                <p className='poppins text-xs lg:text-lg text-white'> Get the top E-commerce app on your phone! We’ve got you covered with a super </p>
                <p className='poppins text-xs lg:text-lg text-white mb-8'> user-friendly experience and tons of events to check out. Dive in and explore!</p>

                <div className='flex gap-5'>
                    <img src={image1} className='w-43.75 h-13' />
                    <img src={image2} className='w-43.75 h-13' />
                </div>
            </div>
         </div>

            <footer className="bg-[#585f12] text-white mt-10">
                <div className="max-w-7xl mx-auto px-10 py-12">

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-10 items-start">

                        <div className="col-span-1">
                            <img src={image3} alt="" />
                        </div>

                        <div>
                            <p className="font-semibold mb-3">Company</p>
                            <ul className="space-y-2 text-sm text-white/80">
                                <li className="hover:text-white cursor-pointer">Products</li>
                                <li className="hover:text-white cursor-pointer">About</li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-semibold mb-3">Legal</p>
                            <ul className="space-y-2 text-sm text-white/80">
                                <li className="hover:text-white cursor-pointer">Privacy Policy</li>
                                <li className="hover:text-white cursor-pointer">
                                    Terms & Conditions
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-semibold mb-3">Link Up with Friends!</p>
                            <ul className="space-y-3 text-sm text-white/80">
                                <li className="flex items-center gap-2 cursor-pointer hover:text-white">
                                    <Instagram size={16} /> Instagram
                                </li>
                                <li className="flex items-center gap-2 cursor-pointer hover:text-white">
                                    <Youtube size={16} /> YouTube
                                </li>
                                <li className="flex items-center gap-2 cursor-pointer hover:text-white">
                                    <Linkedin size={16} /> LinkedIn
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-semibold mb-3">
                                Questions? Comments? Concerns?
                            </p>
                            <button className="bg-[#f4f4d0] text-black px-6 py-2 rounded-md text-sm font-medium hover:opacity-90">
                                Help
                            </button>
                        </div>
                    </div>

                    <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm text-white/70">
                        © 2025 Gold E commerce. All rights reserved.
                    </div>

                </div>
            </footer>

        </>
    )
}

export default Footer
