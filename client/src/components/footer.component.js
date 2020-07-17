import React from 'react';
import "../assets/css/footer.scss";
import Logo from "../assets/img/lighthouse_logo_1.png"

const email = "thekiminlee@gmail.com"
const EMAIL = "mailto:" + email;
const phone = "71444236938";

export default class Footer extends React.Component {
    render() {
        return (
            <div className="footer-container">
                <div className="footer">
                    <div className="y-center">
                        <img src={Logo}></img>
                    </div>
                    <section>
                        <h7>Church</h7>
                        <br/>
                        <text>
                            Sarang Community Church <br/>
                            Korean-College Ministry <br/>
                            1111 N. Brookhurst St. <br/>
                            Anaheim, CA 
                        </text>
                    </section>
                    <section>
                        <h7>Lighthouse</h7>
                        <br/><a href={EMAIL}>Contact</a>
                        <br/><a href="#">Instagram</a>
                    </section>
                    {/* <section>
                        <h7>Icons</h7>
                        <div className="icon-link">Home icon made by <a href="https://www.flaticon.com/authors/bqlqn" title="bqlqn">bqlqn</a></div>
                        <div className="icon-link">Ministry icon made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a></div>
                        <div className="icon-link">Donate icon made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a></div>
                        <div className="icon-link">Instagram icon made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a></div>
                        <br/>
                        <div className="icon-link"> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> </div>
                    </section> */}
                </div>
                <div className="footer-2">
                        <text>Lighthouse: Let your light shine</text>
                </div>
            </div>
       )
    }
}