import React, { useState } from 'react'

function SearchBike({ Filterdata, areas }) {
    const [text, setText] = useState('');
    function handleChange(event) {
        const { value } = event.target
        setText(value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        Filterdata(text);
        setText('');
    }
    return (
        <form onSubmit={handleSubmit} className="searchbike">
            <select onChange={handleChange} className="searchbike-select">
                <option>請選擇地區...</option>
                {
                    areas.map((area, i) => {
                        return <option key={i} value={area}>{area}</option>
                    })
                }
            </select>
            <button className="searchbike-btn">search</button>
        </form>
    )
}

export default SearchBike;