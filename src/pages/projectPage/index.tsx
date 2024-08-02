import {ProjectCard} from "../../components/projectCard";

export function ProjectPage() {
    return (
        <>
            <div>

                <h1 className="mt-52 text-white font-black-ops opacity-15 text-3xl tracking-[0.29rem] text-[50px] text-center">PROJECTS</h1>


                <div className="flex justify-center">
                    <div className="p-4 flex flex-wrap gap-4 justify-center">
                        <ProjectCard/>
                        <ProjectCard/>
                        <ProjectCard/>
                        <ProjectCard/>
                        <ProjectCard/>
                    </div>
                </div>

            </div>
        </>
    );
}