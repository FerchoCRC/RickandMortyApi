import React from "react";
import ResidentInfo from "./ResidentInfo";


const ResidentsList = ({residents}) => {
    return (
        <div className='list-card'>
            {
                residents?.map(resident => <ResidentInfo resident={resident} key={resident}/> )
            }
        </div >
    )
}
export default ResidentsList
