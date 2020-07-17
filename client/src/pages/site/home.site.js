import React from 'react';
import "../../assets/css/home.scss"


export default class Home extends React.Component {
    render() {
        return (
            <div>

                <div className="main-section-container">
                    <div className="container">
                        <section className="title-container">
                            <div className="title-background-box" />
                            <div className="title-box">
                                <text className="title">Hello,</text> <br/> 
                                <text className="title">We are</text> <br/> 
                                <text className="title">Lighthouse</text>
                            </div>
                        </section>
                    </div>
                </div>

                <div>                    
                    <div className="content-container">
                        <div className="_element content-section-title">
                            <div className="section-title-container">
                                <text>Who are we?</text>
                            </div>
                        </div>

                        <div className="content-section-container">
                            <text>
                                Lighthouse, is a non-profit organization that seeks to provide light and warmth to those in need of help. 
                                We started out as a group of college students, looking for ways to work towards God's vision. 
                                We wanted to give even though we did not have.
                            </text>
                        </div>
                    </div>

                    <div className="verse-container">
                        <div className="verse">
                                " <br/>
                                LET YOUR LIGHT SHINE BEFORE MEN IN SUCH A WAY THAT THEY MAY SEE YOUR GOOD WORKS, AND <text>GLORIFY YOUR FATHER</text> WHO IS IN HEAVEN <br/>
                                " <br/>
                                <i>MATTHEW 5:16 NASB</i>
                        </div>
                    </div>

                    <div className="content-container">
                        <div className="_element content-section-title">
                            <div className="section-title-container">
                                <text>What do we do?</text>
                            </div>
                        </div>

                        <div className="content-section-container">
                            <text>
                                We carry out various kinds of minitries.
                                We first seek for people, organization, or group that need some help - 
                                financial support, emotional support, or any form of support that we can provide.
                                Then we organize events that could provide the help.
                                In the past, we have done both online and offline fundraisers.
                                Visit the Ministry section to explore more about our ministries and work we do.
                            </text>
                        </div>

                        <div className="button">
                            <a href="/ministry">MINISTRY</a>
                        </div>
                    </div>

                    <div className="_element grey-background content-container">
                        <div className="content-section-title">
                            <div className="section-title-container">
                                <text>Crews</text>
                            </div>
                        </div>

                        <div className="container content-container">
                            <div className="crew-image"/>
                            <div className="crew-info">
                                <text className="name">Jason Kim</text><br/>
                                <text className="info">Co-Founder</text>
                            </div>

                            <div className="crew-image"/>
                            <div className="crew-info">
                                <text className="name">Ki Min Lee</text><br/>
                                <text className="info">Co-Founder</text>
                            </div>
                        </div>
                    </div>

                    <div className="_element content-container">
                        <h3>Support Us</h3>
                        <div className="button">
                            <a href="#">Venmo</a>
                        </div>

                        <div className="button">
                            <a href="#">Paypal</a>
                        </div>
                    </div>
                        
                </div>

            </div>
        )
    }
}