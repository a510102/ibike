import React, { useState } from 'react'
import BikeMap from './BikeMap';

function BikeStep({ data }) {
    const { Position, AvailableCNT, EmpCNT,
        CAddress } = data;
    const [isShow, setIsShow] = useState(false);
    const Markstep = [data.Y, data.X];
    function handleClick() {
        setIsShow(prevValue => !prevValue);
    }

    return (
        <div className="bikestep">
            <h3>站名:{Position} </h3>
            <p>可用車輛:{AvailableCNT} / 剩餘空位:{EmpCNT} </p>
            <button onClick={handleClick}>{isShow ? "Close Map" : "Show Map"}</button>
            {isShow && <BikeMap Markstep={Markstep}
                CAddress={CAddress} />}
        </div>
    )
}

export default BikeStep;