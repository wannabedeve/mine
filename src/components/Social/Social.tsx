import React from 'react'
import './style.css'
export const Social = () => {
    return (
        <div className='w-full mx-auto'>

            {/* <div className="socialw fadeInDown">

                <a href="http://dribbble.com/ryanbishop" target="_blank">
                    <span className="social first"> <img src="/social/5.webp" /></span>
                </a>

                <a href="http://behance.com/ryanbishop" target="_blank">
                    <span className="social"> <img src="https://i.imgur.com/fkuhUov.png" /></span>
                </a>

                <a href="https://facebook.com/abletroner" target="_blank">
                    <span className="social"><img src="https://i.imgur.com/PY2EPRW.png" /></span>
                </a>

                <a href="https://twitter.com/abletroner" target="_blank">
                    <span className="social"> <img src="https://i.imgur.com/ny0pyqt.png" /> </span>
                </a>

                <a href="http://instagram.com/abletroner" target="_blank">
                    <span className="social"> <img src="https://i.imgur.com/tZZG2zQ.png" /></span>
                </a>

            </div> */}



            <div>
                <div className="socialw fadeInDown">
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=khaled.ahmed.alkharashi@gmail.com&su=could%20tell%20name%20please&body=Please%20Feel%20Free%20to%20write%20your%20thoughts%20..." target="_blank" className="social first">
                        <span className="icon normal"><img src="/social/1.png" alt="" /></span>
                        <span className="icon hover"><img src="/social/2.png" alt="" /></span>
                    </a>
                    <a href="https://wa.me/+201025440707?text=Hello%20Khaled" target="_blank" className="social">
                        <span className="icon normal"><img src="/social/23.png" alt="" /></span>
                        <span className="icon hover"><img src="/social/3.png" alt="" /></span>
                    </a>
                    <a href="https://www.linkedin.com/in/khaled-al-kharashi-10653b247/" target="_blank" className="social">
                        <span className="icon normal"><img src="/social/linkk.png" alt="" /></span>
                        <span className="icon hover"><img src="/social/lin.png" alt="" /></span>
                    </a>
                    <a href="https://github.com/KhaledAhmedA" target="_blank" className="social">
                        <span className="icon normal"><img src="/social/hit.webp" alt="" /></span>
                        <span className="icon hover"><img src="/social/gitt.webp" alt="" /></span>
                    </a>

                </div>
            </div>

        </div>
    )
}
