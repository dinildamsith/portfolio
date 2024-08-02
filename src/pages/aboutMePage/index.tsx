import './abou.css'
import SkillPage from "../skillPage";
// import {FaBook, FaGraduationCap} from "react-icons/fa";
export default function AboutMePage(){
    return(
        <>

            <div className="w-full  h-1 -mt-[0rem]" id="aboutMe"></div>{/*----- Scroller  Helper-----*/}
            <div className="w-full">
                <h1 className="mt-20 text-white font-black-ops opacity-15 text-3xl tracking-[0.29rem] text-[50px] text-center max-[510px]:text-[30px] max-[248px]:text-[25px]">ABOUT ME</h1>

                <div className="flex justify-center items-center mt-12">
                    <img src="src/assets/imges/2.png" className="h-[200px] outline outline-2 outline-[#13f7d7] rounded-[200px]" alt="My Picture" />
                </div>

                <h1 className="text-white text-[35px] text-center mt-8 mb-4 px-4  font-medium font-kanit  max-[654px]:text-[25px] max-[588px]:text-[23px] max-[543px]:text-[20px] max-[305px]:text-[16px] max-[245px]:text-[13px]">
                    Hi, I'm Dinil Damsith, a passionate full-stack developer with a strong focus on front-end
                    development. My expertise spans across various technologies, but my main role lies in crafting
                    seamless and engaging user interfaces. I thrive on creating innovative solutions and continuously
                    learning to stay ahead in the tech world <br/>{"<🌍/>"}.
                </h1>


                <div className="flex justify-center items-center ">
                    <div className="finbyz-timeline">
                        <div className="container  wgl-row-animation">
                            <div className="row">
                                <div data-vc-full-width="true" data-vc-full-width-init="true"
                                     className="vc_row wpb_row vc_row-fluid vc_custom_1542873226451 vc_row-has-fill wgl-row-animation w-[728px]  max-[773px]:w-[500px] max-[520px]:w-[290px] max-[309px]:w-[240px]"
                                     style={{
                                         left: '-11.2px',
                                         boxSizing: 'border-box',
                                         paddingLeft: '11.2px',
                                         paddingRight: '10.8px',
                                         position: 'relative'
                                     }}
                                >
                                    <div
                                        className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-offset-3 vc_col-lg-6 vc_col-md-offset-2 vc_col-md-8 ">
                                        <div className="vc_column-inner ">
                                            <div className="wpb_wrapper">
                                                <div id="seofy_spacer_5cf90ca8186e1"
                                                     className="seofy_module_spacing responsive_active">
                                                    <div className="spacing_size spacing_size-initial"
                                                         style={{ height: '53px' }}
                                                    ></div>
                                                    <div className="spacing_size spacing_size-tablet"
                                                         style={{ height: '30px' }}
                                                    ></div>
                                                </div>
                                                <div id="seofy_dbl_5cf90ca818809"
                                                     className="seofy_module_double_headings acenter ">
                                                    <div className="heading_title"
                                                         style={{ fontSize: '36px', lineHeight: '1.333', fontWeight: '800' }}
                                                    ><span
                                                        className="heading_divider"></span>
                                                        <div className="heading_title_mobile  text-center  text-[#13f7d7] -mt-10 opacity-[0.3]"
                                                             style={{ fontSize: '32px', lineHeight: '1.333' }}
                                                        >
                                                            {/*Education*/}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="seofy_module_spacing">
                                                    <div className="spacing_size spacing_size-initial"
                                                         style={{ height: '10px' }}
                                                    ></div>
                                                </div>
                                                <div className="seofy_module_text" style={{ fontSize: '18px', lineHeight: '30px' }}
                                                >
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="wpb_column vc_column_container vc_col-sm-12 -mt-24">
                                        <div className="vc_column-inner ">
                                            <div className="wpb_wrapper">
                                                <div className="seofy_module_spacing">
                                                    <div className="spacing_size spacing_size-initial"
                                                         style={{ height: '30px' }}
                                                    ></div>
                                                </div>
                                                <div className="seofy_module_time_line_vertical appear_anim max-[522px]:text-[13px]">
                                                    <div id="time_line_5cf90ca818f641"
                                                         className="time_line-item  item_show">
                                                        <div className="time_line-date_wrap">
                                                            <div className="seofy_hexagon">
                                                                <svg style={{ fill: '#13f7d7' }}

                                                                     xmlns="http://www.w3.org/2000/svg"
                                                                     viewBox="0 0 177.4 197.4">
                                                                    <path
                                                                        d="M0,58.4v79.9c0,6.5,3.5,12.6,9.2,15.8l70.5,40.2c5.6,3.2,12.4,3.2,18,0l70.5-40.2c5.7-3.2,9.2-9.3,9.2-15.8V58.4 c0-6.5-3.5-12.6-9.2-15.8L97.7,2.4c-5.6-3.2-12.4-3.2-18,0L9.2,42.5C3.5,45.8,0,51.8,0,58.4z"></path>
                                                                </svg>
                                                            </div>
                                                            <div className="seofy_hexagon">
                                                                <svg
                                                                    style={{
                                                                        filter: 'drop-shadow(4px 5px 4px rgba(19, 247, 215, 0.3))',
                                                                        fill: '#13f7d7'
                                                                    }}

                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 177.4 197.4">
                                                                    <path
                                                                        d="M0,58.4v79.9c0,6.5,3.5,12.6,9.2,15.8l70.5,40.2c5.6,3.2,12.4,3.2,18,0l70.5-40.2c5.7-3.2,9.2-9.3,9.2-15.8V58.4 c0-6.5-3.5-12.6-9.2-15.8L97.7,2.4c-5.6-3.2-12.4-3.2-18,0L9.2,42.5C3.5,45.8,0,51.8,0,58.4z"></path>
                                                                </svg>
                                                            </div>
                                                            <h4 className="time_line-date">2011</h4></div>
                                                        <div className="time_line-content"> <h5 className="time_line-title flex items-center text-white rr">
                                                            {/*<FaBook className="mr-2 text-lg" /> /!* Adjust the size and margin as needed *!/*/}
                                                            Primary Level
                                                        </h5>
                                                            <div className="time_line-descr text-white">Seethawaka National School</div>
                                                        </div>
                                                    </div>
                                                    <div id="time_line_5cf90ca818f641"
                                                         className="time_line-item  item_show">
                                                        <div className="time_line-date_wrap">
                                                            <div className="seofy_hexagon">
                                                                <svg style={{ fill: '#13f7d7' }}

                                                                     xmlns="http://www.w3.org/2000/svg"
                                                                     viewBox="0 0 177.4 197.4">
                                                                    <path
                                                                        d="M0,58.4v79.9c0,6.5,3.5,12.6,9.2,15.8l70.5,40.2c5.6,3.2,12.4,3.2,18,0l70.5-40.2c5.7-3.2,9.2-9.3,9.2-15.8V58.4 c0-6.5-3.5-12.6-9.2-15.8L97.7,2.4c-5.6-3.2-12.4-3.2-18,0L9.2,42.5C3.5,45.8,0,51.8,0,58.4z"></path>
                                                                </svg>
                                                            </div>
                                                            <div className="seofy_hexagon">
                                                                <svg
                                                                    style={{
                                                                        filter: 'drop-shadow(4px 5px 4px rgba(19, 247, 215, 0.3))',
                                                                        fill: '#13f7d7'
                                                                    }}

                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 177.4 197.4">
                                                                    <path
                                                                        d="M0,58.4v79.9c0,6.5,3.5,12.6,9.2,15.8l70.5,40.2c5.6,3.2,12.4,3.2,18,0l70.5-40.2c5.7-3.2,9.2-9.3,9.2-15.8V58.4 c0-6.5-3.5-12.6-9.2-15.8L97.7,2.4c-5.6-3.2-12.4-3.2-18,0L9.2,42.5C3.5,45.8,0,51.8,0,58.4z"></path>
                                                                </svg>
                                                            </div>
                                                            <h4 className="time_line-date">2022</h4></div>
                                                        <div className="time_line-content"> <h5 className="time_line-title flex items-center text-white">
                                                            {/*<FaBook className="mr-2 text-lg" /> /!* Adjust the size and margin as needed *!/*/}
                                                            GCE Ordinary Level ( O/L )
                                                        </h5>
                                                            <div className="time_line-descr text-white">Seethawaka National School</div>
                                                        </div>
                                                    </div>
                                                    <div id="time_line_5cf90ca818fa82"
                                                         className="time_line-item  item_show">
                                                        <div className="time_line-date_wrap">
                                                            <div className="seofy_hexagon">
                                                                <svg style={{

                                                                    fill: '#13f7d7'
                                                                }}

                                                                     xmlns="http://www.w3.org/2000/svg"
                                                                     viewBox="0 0 177.4 197.4">
                                                                    <path
                                                                        d="M0,58.4v79.9c0,6.5,3.5,12.6,9.2,15.8l70.5,40.2c5.6,3.2,12.4,3.2,18,0l70.5-40.2c5.7-3.2,9.2-9.3,9.2-15.8V58.4 c0-6.5-3.5-12.6-9.2-15.8L97.7,2.4c-5.6-3.2-12.4-3.2-18,0L9.2,42.5C3.5,45.8,0,51.8,0,58.4z"></path>
                                                                </svg>
                                                            </div>
                                                            <div className="seofy_hexagon">
                                                                <svg
                                                                    style={{
                                                                        filter: 'drop-shadow(4px 5px 4px rgba(19, 247, 215, 0.3))',
                                                                        fill: '#13f7d7'
                                                                    }}

                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 177.4 197.4">
                                                                    <path
                                                                        d="M0,58.4v79.9c0,6.5,3.5,12.6,9.2,15.8l70.5,40.2c5.6,3.2,12.4,3.2,18,0l70.5-40.2c5.7-3.2,9.2-9.3,9.2-15.8V58.4 c0-6.5-3.5-12.6-9.2-15.8L97.7,2.4c-5.6-3.2-12.4-3.2-18,0L9.2,42.5C3.5,45.8,0,51.8,0,58.4z"></path>
                                                                </svg>
                                                            </div>
                                                            <h4 className="time_line-date">2022</h4></div>
                                                        <div className="time_line-content"><h5
                                                            className="time_line-title text-white">GDSE - Computer Science</h5>
                                                            <div className="time_line-descr text-white">IJSE - Institute of Software
                                                                Engineering
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        <SkillPage/>
        </>
    )
}