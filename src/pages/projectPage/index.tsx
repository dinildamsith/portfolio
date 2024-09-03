import  { useState } from 'react';
import { ProjectCard } from "../../components/projectCard";
import ContactUsPage from "../contactUsPage";

export function ProjectPage() {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const visibleProjectsCount = 3; // Number of projects to show at once

    const projects = [
        { img: 'assets/imges/meat.jpg', name: 'Hen House System', desc: '', repoUrl: 'https://github.com/dinildamsith/HenHouse_Layerd_Architecture' },
        { img: 'assets/imges/conect4.jpg', name: 'Connect 4 Game', desc: '', repoUrl: 'https://github.com/dinildamsith/Connect_4_Game' },
        { img: 'assets/imges/hostel.jpg', name: 'Hostel Management System', desc: '', repoUrl: 'https://github.com/dinildamsith/D24_Hostel_Managment_System_Hibernate' },
        { img: 'assets/imges/gmail.jpg', name: 'Gmail Mobile App Clone', desc: '', repoUrl: 'https://github.com/dinildamsith/Gmail_App_Clone' },
        { img: 'assets/imges/ticket.jpg', name: 'Highway Ticket System', desc: '', repoUrl: 'https://github.com/dinildamsith/Highway_Ticket_ManagementSystem_Microservice' },
        { img: 'assets/imges/shoes.jpg', name: 'Shoes Shop System', desc: '', repoUrl: 'https://github.com/dinildamsith/HelloShoesShop' },
        { img: 'assets/imges/hotelbooking.png', name: 'Hotel Room Booking System', desc: '', repoUrl: 'https://github.com/dinildamsith/HotelXYZ_Room_Booking_System_FrontEnd' },
        { img: 'assets/imges/chatApp.jpg', name: 'Chat App', desc: '', repoUrl: 'https://github.com/dinildamsith/Chat_App' },
        { img: 'assets/imges/pos.jpg', name: 'POS System', desc: '', repoUrl: 'https://github.com/dinildamsith/PosSystem' }
    ];

    const handleNext = () => {
        setCurrentProjectIndex((prevIndex) =>
            Math.min(prevIndex + visibleProjectsCount, projects.length - visibleProjectsCount)
        );
    };

    const handlePrevious = () => {
        setCurrentProjectIndex((prevIndex) =>
            Math.max(prevIndex - visibleProjectsCount, 0)
        );
    };

    return (
        <>
            <div className="w-full h-1 -mt-[0rem]" id="projectSection"></div>{/*----- Scroller  Helper-----*/}

            <div className="overflow-x-hidden">
                <h1 className="mt-20 text-white font-black-ops opacity-15 text-3xl tracking-[0.29rem] text-[50px] text-center max-[510px]:text-[30px] max-[248px]:text-[25px]">PROJECTS</h1>

                <div className="flex justify-center mt-10">
                    <div className="p-4 flex flex-wrap gap-4 justify-center">
                        {projects.slice(currentProjectIndex, currentProjectIndex + visibleProjectsCount).map((project, index) => (
                            <ProjectCard
                                key={index}
                                img={project.img}
                                name={project.name}
                                desc={project.desc}
                                repoUrl={project.repoUrl}
                            />
                        ))}
                    </div>
                </div>

                <div className="flex justify-center mt-10">
                    <button
                        className={`text-white bg-blue-500 px-4 py-2 mr-2 rounded-lg hover:bg-blue-600 ${currentProjectIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                        onClick={handlePrevious}
                        disabled={currentProjectIndex === 0}
                    >
                        Previous
                    </button>
                    <button
                        className={`text-white bg-blue-500 px-4 py-2 ml-2 rounded-lg hover:bg-blue-600 ${currentProjectIndex >= projects.length - visibleProjectsCount ? 'opacity-50 cursor-not-allowed' : ''}`}
                        onClick={handleNext}
                        disabled={currentProjectIndex >= projects.length - visibleProjectsCount}
                    >
                        Next
                    </button>
                </div>
            </div>

            <ContactUsPage />
        </>
    );
}
