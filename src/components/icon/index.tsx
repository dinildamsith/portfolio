export default function TechnicalSkillIcon(props:any){
    return(
        <>
            <img
                src={props.iconUrl}
                className="w-12 h-12 rounded-[11px] transition-shadow duration-300 ease-in-out"
                style={{
                    boxShadow: '0px 0px 15px 3px rgba(0, 0, 0, 0)', // initial no shadow
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0px 0px 15px 3px rgba(19, 247, 215, 0.6)'; // hover effect
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0px 0px 15px 3px rgba(0, 0, 0, 0)'; // remove shadow on leave
                }}
                onMouseDown={(e) => {
                    e.currentTarget.style.boxShadow = '0px 0px 15px 3px rgba(19, 247, 215, 1)'; // shadow on click
                }}
                onMouseUp={(e) => {
                    e.currentTarget.style.boxShadow = '0px 0px 15px 3px rgba(19, 247, 215, 0.6)'; // revert to hover shadow on release
                }}
            />


        </>
    )
}