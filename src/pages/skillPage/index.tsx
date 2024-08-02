import {ProjectPage} from "../projectPage";
import TechnicalSkillIcon from "../../components/icon";

export default function SkillPage(){
    return(
        <>
            <div className="w-full  h-1 -mt-[0rem]" id="skillSection"></div> {/*----- Scroller  Helper-----*/}
            <div >
                <h1 className="mt-20 text-white font-black-ops opacity-15 text-3xl tracking-[0.29rem] text-[50px] text-center max-[510px]:text-[30px] max-[248px]:text-[25px]">TECHNICAL SKILLS</h1>

                <div>

                    {/*------Languages-----*/}
                    <div className="flex justify-center">
                        <div className="p-4 flex flex-wrap gap-4 justify-center">
                            <h1 className="text-center text-[#13f7d7] w-full mt-12 ">Languages</h1>
                                <TechnicalSkillIcon iconUrl='https://skillicons.dev/icons?i=java'/>
                                <TechnicalSkillIcon iconUrl='https://skillicons.dev/icons?i=python'/>
                                <TechnicalSkillIcon iconUrl='https://skillicons.dev/icons?i=html'/>
                                <TechnicalSkillIcon iconUrl='https://skillicons.dev/icons?i=css'/>
                                <TechnicalSkillIcon iconUrl='https://skillicons.dev/icons?i=nodejs'/>
                                <TechnicalSkillIcon iconUrl='https://skillicons.dev/icons?i=ts'/>
                        </div>
                    </div>

                    {/*------Frameworks & Libraries-----*/}
                    <div className="flex justify-center">
                        <div className="p-4 flex flex-wrap gap-4 justify-center">
                            <h1 className="text-center text-[#13f7d7] w-full mb-4">Frameworks & Libraries</h1>
                            <TechnicalSkillIcon iconUrl='https://skillicons.dev/icons?i=spring'/>
                            <TechnicalSkillIcon iconUrl='https://skillicons.dev/icons?i=express'/>
                            <TechnicalSkillIcon iconUrl='https://skillicons.dev/icons?i=react'/>
                            <TechnicalSkillIcon iconUrl='https://skillicons.dev/icons?i=hibernate'/>
                            <TechnicalSkillIcon iconUrl='https://skillicons.dev/icons?i=tailwind'/>
                            <TechnicalSkillIcon iconUrl='https://skillicons.dev/icons?i=bootstrap'/>
                            <TechnicalSkillIcon iconUrl='https://skillicons.dev/icons?i=npm'/>
                            <TechnicalSkillIcon iconUrl='https://skillicons.dev/icons?i=jquery'/>
                        </div>
                    </div>


                    {/*------Database & Tools-----*/}
                    <div className="flex justify-center">
                        <div className="p-4 flex flex-wrap gap-4 justify-center">
                            <h1 className="text-center text-[#13f7d7] w-full mb-4">Database & Tools</h1>
                            <TechnicalSkillIcon iconUrl='https://skillicons.dev/icons?i=mysql'/>
                            <TechnicalSkillIcon iconUrl='https://skillicons.dev/icons?i=mongodb'/>
                            <TechnicalSkillIcon iconUrl='https://skillicons.dev/icons?i=maven'/>
                            <TechnicalSkillIcon iconUrl='https://skillicons.dev/icons?i=gradle'/>
                            <TechnicalSkillIcon iconUrl='https://skillicons.dev/icons?i=vite'/>
                            <TechnicalSkillIcon iconUrl='https://skillicons.dev/icons?i=firebase'/>
                            <TechnicalSkillIcon iconUrl='https://skillicons.dev/icons?i=figma'/>
                            <TechnicalSkillIcon iconUrl='https://skillicons.dev/icons?i=idea'/>
                            <TechnicalSkillIcon iconUrl='https://skillicons.dev/icons?i=vscode'/>
                            <TechnicalSkillIcon iconUrl='https://skillicons.dev/icons?i=postman'/>
                        </div>
                    </div>


                    {/*------Version Controller-----*/}
                    <div className="flex justify-center">
                        <div className="p-4 flex flex-wrap gap-4 justify-center">
                            <h1 className="text-center text-[#13f7d7] w-full mb-4">Version Controller</h1>
                            <TechnicalSkillIcon iconUrl='https://skillicons.dev/icons?i=git'/>
                            <TechnicalSkillIcon iconUrl='https://skillicons.dev/icons?i=github'/>
                        </div>
                    </div>

                </div>

            </div>
            <ProjectPage/>
        </>
    )
}