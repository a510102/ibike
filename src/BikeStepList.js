import React from 'react'
import BikeStep from './BikeStep';

function BikeStepList({ datas }) {
    return (
        <div className="bikestepList">
            {
                datas.map(data => {
                    return <BikeStep key={data.ID} data={data} />
                })
            }
        </div>
    )
}

export default BikeStepList;