import React from 'react'

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer>
            <p>cpoyright © {year}</p>
            <div>Icons made by <a href="https://www.flaticon.com/authors/google" title="Google">Google</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </footer>
    )
}

export default Footer

