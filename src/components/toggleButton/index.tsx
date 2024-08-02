import '@fortawesome/fontawesome-free/css/all.min.css';

function ToggleButton(props:any){
    return(
        <>
            <a href={props.url}>
                <div className="toggleBtn relative w-[135px] bg-[#292e37] h-[46px] mt-[20px] mb-2 shadow-md ring-4 ring-transparent ring-offset-0 right-[-85px] transition-right duration-500 rounded-tl-[20px] rounded-bl-[20px] rounded-tr-none rounded-br-none hover:right-0 cursor-pointer flex items-center justify-between px-4">
                    <div className="toggleBtnIcon text-[#63E6BE] text-xl">
                        <i className={`${props.icon}`}></i>
                    </div>
                    <h3 className="toggleBtnTxt text-[#63E6BE] font-bold">
                        {props.btnName}
                    </h3>
                </div>

            </a>
        </>
    );
}

export default  ToggleButton