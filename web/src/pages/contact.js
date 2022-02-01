import React from "react"
import TopOfPage from "../components/topofpage"

const Contact = () => {
    return (
        <main>
            <TopOfPage />
            <section className="mainWrap">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="columnsWrap">
                                <div className="col-sm-6 sc_column_item">
                                    <figure className="sc_image  sc_image_shape_square">
                                        <img src="img/contact.jpg" alt />
                                    </figure>
                                </div>
                                <div className="col-sm-6 sc_column_item">
                                    <h1>We’d love to hear from you</h1>
                                    <p>Lorem ipsum dolor sit amet, has facer euismod hendrerit cu. Ei zril aliquid iudicabit has, et duo tollit oportere. Ex eos admodum accumsan prodesset, vel ex accusam accusamus. Zril integre voluptua vis ea, labore conclusionemque te vim. Ei suas vivendum neglegentur vel, ipsum aliquam has ne.</p>
                                    <h1>Business hours</h1>
                                    <p>
                                        <strong>
                                            Monday – Friday 9am to 5pm
                                            <br />
                                            Saturday – 9am to 2pm
                                            <br />
                                            Sunday – Closed
                                        </strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="sc_contact_form sc_contact_form_contact">
                                <h1 className="title">Send Us a Message</h1>
                                <form data-formtype="contact" method="post" action="include/contact-form.php">
                                    <div className="columnsWrap">
                                        <div className="col-sm-4">
                                            <label className="required" htmlFor="sc_contact_form_username">Name</label>
                                            <input id="sc_contact_form_username" type="text" name="username" />
                                        </div>
                                        <div className="col-sm-4">
                                            <label className="required" htmlFor="sc_contact_form_email">E-mail</label>
                                            <input id="sc_contact_form_email" type="text" name="email" />
                                        </div>
                                        <div className="col-sm-4">
                                            <label className="required" htmlFor="sc_contact_form_subj">Subject</label>
                                            <input id="sc_contact_form_subj" type="text" name="subject" />
                                        </div>
                                    </div>
                                    <div className="message">
                                        <label className="required" htmlFor="sc_contact_form_message">Your Message</label>
                                        <textarea id="sc_contact_form_message" className="textAreaSize inited" name="message" style={{ overflow: 'hidden', overflowWrap: 'break-word', resize: 'none', height: 74 }} defaultValue={""} />
                                    </div>
                                    <div className="sc_contact_form_button">
                                        <div className="squareButton ico">
                                            <a href="#" className="sc_contact_form_submit icon-comment inited">Send Message</a>
                                        </div>
                                    </div>
                                    <div className="result sc_infobox" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    )
}

export default Contact
