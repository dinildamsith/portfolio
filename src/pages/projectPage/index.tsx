import {ProjectCard} from "../../components/projectCard";


export function ProjectPage() {
    return (
        <>
            <div>

                <h1 className="mt-52 text-white font-black-ops opacity-15 text-3xl tracking-[0.29rem] text-[50px] text-center">PROJECTS</h1>


                <div className="flex justify-center mt-10">
                    <div className="p-4 flex flex-wrap gap-4 justify-center">
                        <ProjectCard img='src/assets/imges/test.jpeg' name='ff' desc='lorempsgksrkgoijgijgirj' repoUrl='https://github.com/dinildamsith/react'/>
                    </div>
                </div>

            </div>
        </>
    );
}