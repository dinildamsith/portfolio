// import images from '../../assets/constants/image.js';
import {useEffect, useState} from 'react';


function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };



        const [displayText, setDisplayText] = useState('');
        const fullText = "<Dinil Damsith/>";

        useEffect(() => {
            let index = 0;
            const interval = setInterval(() => {
                setDisplayText(fullText.slice(0, index + 1));
                index += 1;
                if (index === fullText.length) {
                    clearInterval(interval);
                }
            }, 260); // Adjust speed here
            return () => clearInterval(interval);
        }, [fullText]);


        return (
        <>
            <nav className="px-5 w-full h-[60px] bg-[#292e37] top-0 shadow-md flex justify-between items-center  z-[99999999999999999999] overflow-x-hidden fixed" >
                {/* Logo */}
                <div className="logo flex items-center max-[767px]:absolute max-[767px]:right-[2rem]">
                    {/*<img src={images.Logo} alt="logo" className="h-8 w-auto mr-2" />*/}
                    {/*<h1 className="text-lg font-bold text-white" style={{ background: 'linear-gradient(to right, #b927fc 0%, #2c64fc 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>*/}
                    {/*    {"<Dinil Damsith/>"}*/}
                    {/*</h1>*/}
                    <h1 className="text-lg font-bold text-[#13f7d7]">
                        {displayText}
                    </h1>

                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center">
                    <li className="ml-6"><a href="#homeSection" className="text-[#13f7d7] text-sm font-bold py-1 px-2 text-[18px]">Home</a></li>
                    <li className="ml-6"><a href="#aboutMe" className="text-[#13f7d7] text-sm font-bold font-sans py-1 px-2  text-[18px] ">About Me</a></li>
                    <li className="ml-6"><a href="#skillSection" className="text-[#13f7d7] text-sm font-bold py-1 px-2  text-[18px] ">Skills</a></li>
                    <li className="ml-6"><a href="#projectSection" className="text-[#13f7d7] text-sm font-bold py-1 px-2  text-[18px] ">Projects</a></li>
                    <li className="ml-6"><a href="#contactUsSection" className="text-[#13f7d7] text-sm font-bold py-1 px-2  text-[18px]">Contact Us</a></li>
                </ul>

                {/* Hamburger Menu */}
                <div className="hamburger md:hidden cursor-pointer " onClick={toggleMenu}>
                    <span className="line w-6 h-0.5 bg-white block mb-1"></span>
                    <span className="line w-6 h-0.5 bg-white block mb-1"></span>
                    <span className="line w-6 h-0.5 bg-white block mb-1"></span>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="mobile-menu bg-[#292e37] w-[40%] h-full md:h-auto md:w-auto p-4  top-[3.7rem]  left-0 md:static min-[767px]:hidden z-[999999] fixed">
                    <ul className="flex flex-col items-start space-y-4 ">
                        <a href="#homeSection"><li className="text-[#13f7d7] text-sm font-bold py-1 px-2 text-[18px]">Home</li></a>
                        <a href="#aboutMe"><li className="text-[#13f7d7] text-sm font-bold py-1 px-2  text-[18px]">About Me</li></a>
                        <a href="#skillSection"><li className="text-[#13f7d7] text-sm font-bold py-1 px-2  text-[18px]">Skills</li></a>
                        <a href="#projectSection"><li className="text-[#13f7d7] text-sm font-bold py-1 px-2  text-[18px]">Projects</li></a>
                        <a href="#contactUsSection"><li className="text-[#13f7d7] text-sm font-bold py-1 px-2  text-[18px]">Contact Us</li></a>
                    </ul>
                </div>
            )}
        </>
    );
}

export default Nav;