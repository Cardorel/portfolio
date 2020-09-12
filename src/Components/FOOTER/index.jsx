import React from 'react'
import Left from './Left'
import Center from './Center'
import Right from './Right'
import './footer.styles.scss'


export default function Footer() {
    return (
        <footer>
            <div className="footer_container">
                <div className="footer_left">
                    <Left/>
                </div>
                <div className="footer_center">
                   <Center/>
                </div>
                <div className="footer_right">
                   <Right/>
                </div>
            </div>
        </footer>
    )
}
