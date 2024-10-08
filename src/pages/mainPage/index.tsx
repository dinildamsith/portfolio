import Nav from "../../components/nav";
import ToggleButton from "../../components/toggleButton";
import AboutMePage from "../aboutMePage";

export default function MainPage(){
    return(
        <>
            <img src='assets/imges/bg2.gif' alt="" className='fixed h-full w-full -z-[100]'/>

            <div className="fixed bg-black  h-full w-full  opacity-[0.90] -z-[9]"></div>

            <Nav/>
            <div className="w-full  h-1 -mt-[0rem]" id="homeSection"></div>{/*----- Scroller  Helper-----*/}
            <div  className="h-full w-full">

                  <div className="flex justify-center items-center mt-24" >
                    <img src="assets/imges/myPic.png" className="h-[250px] rounded-[150px]" alt="My Picture"/>
                  </div>


                 <div className="mt-10 text-center">
                     <h1 className="ml-20 mr-20 text-white text-[35px] text-center mt-8 mb-4 px-4  font-medium font-kanit  max-[654px]:text-[25px] max-[588px]:text-[23px] max-[543px]:text-[20px] max-[305px]:text-[16px] max-[245px]:text-[13px] max-[619px]:ml-0 max-[619px]:mr-0">
                         Hello! I’m Dinil, a Software Engineer. Dive into my portfolio and explore a world of innovative solutions and creative code. <br/>{ " <🌍/>."}
                    </h1>
                </div>

                <section className="toggleBtnGroup absolute right-0 top-[70px] overflow-x-hidden z-[999]">
                    <ToggleButton btnName="Gmail" icon="fa fa-envelope" url='mailto:dinildamsith52@gmail.com'/>
                    <ToggleButton btnName="Facbook" icon="fa-brands fa-facebook" url='https://www.facebook.com/dinil.damsith.391'/>
                    <ToggleButton btnName="Git Hub" icon="fa-brands fa-github" url='https://github.com/dinildamsith'/>
                    <ToggleButton btnName="Linkdin" icon="fa-brands fa-linkedin-in" url='https://www.linkedin.com/in/dinil-damsith-0689a9290/'/>
                </section>

            </div>
            <AboutMePage/>
        </>
    )
}