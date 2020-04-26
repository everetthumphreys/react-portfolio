import React from "react";
function Contact() {
    return (
        <div>
            <div className="container grey lighten-4 z-depth-2 main-content">
                <div className="row divide">
                    <div className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="first_name" type="text" className="validate" />
                                <label for="name">Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="email" type="email" className="validate" />
                                <label for="email">Email</label>
                            </div>
                        </div>
                        <div className="row">
                            <form className="col s12">
                                <div className="row">
                                    <div className="input-field col s12">
                                        <textarea id="textarea1" className="materialize-textarea"></textarea>
                                        <label for="textarea1">Message</label>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="row">
                            <form className="col s12">
                                <button className="btn waves-effect waves-light red lighten-2" type="submit" name="action">Submit
                            <i className="material-icons right">send</i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default Contact;