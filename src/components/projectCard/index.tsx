
export function ProjectCard(props:any) {
    return (
        <>

            <div
                className="w-80 bg-[#292e37] border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700  backdrop-blur-lg mt-4 max-[510px]:w-[13rem]"
                style={{
                    boxShadow: `rgba(25, 87, 79, 0.25) 0px 14px 55px,rgba(20, 100, 88, 0.12) 0px -12px 30px, rgba(28, 105, 94, 0.12) 0px 4px 6px,rgba(13, 54, 48, 0.17) 0px 12px 13px,rgba(19, 247, 215, 0.09) 0px -3px 5px`
                }}
            >
                <a href="#">
                    <img className="rounded-t-lg w-80" src={props.img} alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-[18px] font-bold tracking-tight  text-white ">
                            {props.name}
                        </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {props.desc}
                    </p>
                    <a href={props.repoUrl} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Github
                        <svg
                            className="w-5 h-5 ml-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.112.793-.262.793-.582 0-.287-.011-1.048-.017-2.057-3.338.726-4.042-1.415-4.042-1.415-.546-1.387-1.333-1.757-1.333-1.757-1.091-.746.083-.731.083-.731 1.205.085 1.838 1.237 1.838 1.237 1.07 1.834 2.806 1.304 3.489.997.108-.775.419-1.304.763-1.605-2.666-.305-5.466-1.333-5.466-5.933 0-1.311.469-2.383 1.235-3.221-.123-.304-.535-1.528.117-3.183 0 0 1.007-.323 3.301 1.23.957-.266 1.984-.399 3.003-.404 1.019.005 2.046.138 3.004.404 2.292-1.553 3.297-1.23 3.297-1.23.654 1.655.242 2.879.119 3.183.768.838 1.235 1.91 1.235 3.221 0 4.61-2.804 5.625-5.476 5.921.43.37.823 1.102.823 2.221 0 1.603-.014 2.896-.014 3.287 0 .322.192.698.8.58C20.565 21.796 24 17.302 24 12c0-6.627-5.373-12-12-12z"
                            />
                        </svg>
                    </a>
                </div>
            </div>

        </>
    );
}