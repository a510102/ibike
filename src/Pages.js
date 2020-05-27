import React, { useState, useEffect } from 'react'

function Pages({ dataL, setPageD, pageD }) {
    const [pages, setPages] = useState([]);
    const [showpage, setShowpage] = useState(1);
    useEffect(() => {
        let pagesL = Math.ceil(dataL / 10);
        const newPages = [];
        for (let i = 1; i <= pagesL; i++) {
            newPages.push(i);
        }
        setPages(newPages);
    }, [dataL])

    function prevPage() {
        setPageD(pageD - 1);
        if (pageD === filterpages[0]) {
            setShowpage(showpage - 1)
        }
    }
    function nextPage() {
        setPageD(pageD + 1);
        if (pageD === filterpages.slice(-1)[0]) {
            setShowpage(showpage + 1)
        }
    }

    const filterpages = pages.slice(showpage * 10 - 10, showpage * 10);
    return (
        <ul className="pages">
            <li onClick={prevPage} style={{ display: filterpages[0] === pages[0] && "none" }}>{"<"}</li>
            {
                filterpages.map((page, i) => {
                    return <li
                        className={page === pageD ? "active" : null}
                        key={i}
                        onClick={() => setPageD(page)}>{page}</li>
                })
            }
            <li onClick={nextPage} style={{ display: filterpages.slice(-1)[0] === pages.slice(-1)[0] && "none" }}> {">"}</li>
        </ul>
    )
}

export default Pages