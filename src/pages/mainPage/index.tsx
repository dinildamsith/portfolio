import Nav from "../../components/nav";
import ToggleButton from "../../components/toggleButton";
import AboutMePage from "../aboutMePage";

export default function MainPage(){
    return(
        <>
            <Nav/>
            <div className="h-full w-full">

                  <div className="flex justify-center items-center mt-12">
                    <img src="src/assets/imges/myPic.png" className="h-[250px] rounded-[150px]" alt="My Picture"/>
                  </div>


                 <div className="mt-10 text-center">
                     <h1 className="text-white text-[45px] text-center mt-8 mb-4 px-4 font-medium font-kanit ">
                        Hello! I’m Dinil, a passionate Full Stack Developer. Dive into my portfolio and explore the world of innovative solutions and creative code {"<🌍/>"}.
                    </h1>
                </div>

                <section className="toggleBtnGroup absolute right-0 top-[70px] overflow-x-hidden z-[999]">
                    <ToggleButton btnName="Gmail" icon="fab fa-google"/>
                    <ToggleButton btnName="Facbook" icon="fa-brands fa-facebook"/>
                    <ToggleButton btnName="Git Hub" icon="fa-brands fa-github"/>
                    <ToggleButton btnName="Linkdin" icon="fa-brands fa-linkedin-in"/>
                </section>

            </div>
            <AboutMePage/>
        </>
    )
}