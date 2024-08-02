export default function ContactUsPage(){
    return(
        <>
            <div id='contactUsSection' className="w-full h-auto bg-[#292e37] mt-44">
                <h1 className="relative text-white font-black-ops opacity-15 tracking-[0.29rem] text-[50px] text-center max-[510px]:text-[30px] max-[248px]:text-[25px]">
                    CONTACT ME
                </h1>

                <div className="flex justify-center">
                    <div className="p-4 flex flex-wrap gap-[4rem] justify-center">

                        <div className="flex flex-col items-center">
                            <a href="tel:+94714430305" className="flex flex-col items-center">
                                <img src="src/assets/imges/call.png" className="w-12 h-12" alt="Call icon" />
                                <h1 className="text-white mb-2">+94 714430305</h1>
                            </a>
                        </div>
                        <div className="flex flex-col items-center">
                            <a href="mailto:dinildamsith52@gmail.com" className="flex flex-col items-center">
                                <img src="src/assets/imges/mail.png" className="w-12 h-12" alt="Email icon" />
                                <h1 className="text-white mb-2">dinildamsith52@gmail.com</h1>
                            </a>
                        </div>
                        <div className="flex flex-col items-center">
                            <a
                                href="https://www.google.com/maps/search/?api=1&query=Avissawella"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center"
                            >
                                <img src="src/assets/imges/location.png" className="w-12 h-12" alt="Location icon" />
                                <h1 className="text-white mb-2">Avissawella</h1>
                            </a>
                        </div>

                    </div>
                </div>
                <p className="text-gray-500 text-sm text-center mt-4 max-[510px]:text-[13px] max-[368px]:text-[10px]">
                    Copyright © 2024 Dinil Damsith. All rights reserved.
                </p>
            </div>

        </>
    )
}