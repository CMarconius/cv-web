import React, { useState } from 'react';
import axios from 'axios';

const Contact = ({ data }) => {
   const [url, setUrl] = useState('mailto:test@example.com?subject=subject&body=body');
   const [firstName, setFirstName] = useState('');
   const [lastName, setLastName] = useState('');
   const [email, setEmail] = useState('');
   const [message, setMessage] = useState('');

   console.log(data)

    const handleClick = (e) => {
       e.preventDefault();

       const Data = {
          firstName:email,
          lastName:email,
          email:email,
          message:email
       }
       axios.post('https://challenge-ea4ca.firebaseio.com/', Data).then(response=>{
          console.log(response);
          setFirstName("");
          setLastName("");
          setEmail("");
          setMessage("");
       })
      // window.open(`mailto:${email}?subject=${subject}&body=${name}: ${message}`);
    }
    

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">{data?.message}</p>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">

               <form id="contactForm" name="contactForm">
					<fieldset>

                  <div>
						   <label htmlFor="contactFirstName">First Name <span className="required">*</span></label>
						   <input value={firstName} type="text" defaultValue="Your First Name..." size="35" id="contactFirstName" name="contactFirstName" onChange={e => setFirstName(e.target.value)}/>
                  </div>

                  <div>
						   <label htmlFor="contactLastName">Last Name <span className="required">*</span></label>
						   <input value={lastName} type="text" defaultValue="Your Last Name..." size="35" id="contactLastName" name="contactLastName" onChange={e => setLastName(e.target.value)}/>
                  </div>

                  <div>
						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
						   <input value={email} type="text" defaultValue="Your Email..." size="35" id="contactEmail" name="contactEmail" onChange={e=> setEmail(e.target.value)}/>
                  </div>

                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea value={message} onChange={e => setMessage(e.target.value)} cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
                  </div>

                  <div>
                     <button type='submit' onClick={handleClick} className="submit">Submit</button>
                     <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                     </span>
                  </div>
					</fieldset>
				   </form>

           <div id="message-warning"> Error boy</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>
           </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Address and Phone</h4>
					   <p className="address">
						   {data?.name}<br />
						   {data?.address.street} <br />
						   {data?.address.city}, {data?.address.state} {data?.address.zip}<br />
						   <span>{data?.phone}</span>
					   </p>
				   </div>

               <div className="widget widget_tweets">

		         </div>
            </aside>
      </div>
   </section>
    );
}

export default Contact;
