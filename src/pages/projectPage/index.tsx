import {ProjectCard} from "../../components/projectCard";
import ContactUsPage from "../contactUsPage";


export function ProjectPage() {
    return (
        <>
            <div className="overflow-x-hidden">
                <h1 className="mt-52 text-white font-black-ops opacity-15 text-3xl tracking-[0.29rem] text-[50px] text-center max-[510px]:text-[30px] max-[248px]:text-[25px]">PROJECTS</h1>
                <div className="flex justify-center mt-10">
                    <div className="p-4 flex flex-wrap gap-4 justify-center">
                        <ProjectCard img='src/assets/imges/meat.jpg' name='Hen House System' desc={''} repoUrl='https://github.com/dinildamsith/HenHouse_Layerd_Architecture'/>
                        <ProjectCard img='src/assets/imges/conect4.jpg' name='Connect 4 Game' desc='' repoUrl='https://github.com/dinildamsith/Connect_4_Game'/>
                        <ProjectCard img='src/assets/imges/hostel.jpg' name='Hostel Managment System' desc='' repoUrl='https://github.com/dinildamsith/D24_Hostel_Managment_System_Hibernate'/>
                        <ProjectCard img='src/assets/imges/gmail.jpg' name='Gmail Mobile App Clone' desc='' repoUrl='https://github.com/dinildamsith/Gmail_App_Clone'/>
                        <ProjectCard img='src/assets/imges/ticket.jpg' name='Highway Ticket System' desc='' repoUrl='https://github.com/dinildamsith/Highway_Ticket_ManagementSystem_Microservice'/>
                        <ProjectCard img='src/assets/imges/shoes.jpg' name='Shoes Shop System' desc='' repoUrl='https://github.com/dinildamsith/HelloShoesShop'/>
                        <ProjectCard img='src/assets/imges/pos.jpg' name='POS System' desc='' repoUrl='https://github.com/dinildamsith/PosSystem'/>
                        <ProjectCard img='src/assets/imges/chatApp.jpg' name='Chat App' desc='' repoUrl='https://github.com/dinildamsith/Chat_App'/>
                    </div>
                </div>

            </div>
            <ContactUsPage/>
        </>
    );
}