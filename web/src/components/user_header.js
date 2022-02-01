import React from "react"

const UserHeader = () => {

    return (
        <section className="text-center color_section">
            <div className="container">
                <div className="row">
                    <div className="sc_content user_header">
                        <div className="col-md-3 col-sm-6">
                            <a href="#">
                                <span className="sc_icon rt-icon-diamond " />
                            </a>
                            <div className="sc_section">
                                <a href="#">Professional Teachers</a>
                            </div>
                            <div className="sc_section">Aliquam erat volutpat</div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <a href="#">
                                <span className="sc_icon rt-icon-heart4 " />
                            </a>
                            <div className="sc_section">
                                <a href="#">Our Approach</a>
                            </div>
                            <div className="sc_section">Dipisicing elit</div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <a href="#">
                                <span className="sc_icon rt-icon-star " />
                            </a>
                            <div className="sc_section">
                                <a href="#">Education Programm</a>
                            </div>
                            <div className="sc_section">Dolor sit amet</div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <a href="#">
                                <span className="sc_icon rt-icon-clipboard " />
                            </a>
                            <div className="sc_section">
                                <a href="#">Latest Events</a>
                            </div>
                            <div className="sc_section">Cras id convallis</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default UserHeader