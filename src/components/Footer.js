import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();
    console.log(year)
    return (
        <div className = "footer">
            <div className='footer-ends'>
                <div className='links'>
                    <p>Amina</p>
                    <p>Athanas</p>
                </div>
                <div className='links'>
                    links
                </div>
                <div className='links'>
                    <p>facebook</p>
                    <p>twitter</p>
                    <p>instagram</p>
                </div>
            </div>
            <div className ='copyright'>
                <p>All right reserved &copy; {+year-4 +' - ' +year}</p>
            </div>
        </div>
    )
}

export default Footer;