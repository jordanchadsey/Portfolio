import React from "react";


const ContactForm = () => (
  <div class="container">
    <div class="row">
        <div class="col m10 offset-m1 s12">
            <h3 class="center-align">Send Me a Note</h3>
            <div class="row">
                <form class="col m8 offset-m2 s12">
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="name" type="text"/>
                            <label for="name">Name</label>
                        </div>
                        <div class="input-field col s12">
                            <input id="email" type="email" class="form-input"/>
                            <label for="email">Email</label>
                        </div>
                        <div class="input-field col s12">
                          <textarea id="message" class="materialize-textarea"></textarea>
                          <label for="message">Message</label>
                        </div>
                    </div>

                    <div class="divider"></div>
                    <div class="row">
                        <div class="col m12">
                         <p class="right-align"><button class="btn btn-large waves-effect waves-light" type="button" name="action">Send Message</button></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

);

export default ContactForm;
