import React, { useEffect, useState } from "react";

function ContactUs() {
const [isContact,setisContact]=useState(false)
    useEffect(() => {
      if (window.location.pathname.match("/auth")) {
        setisContact(true);
      }
    }, [isContact]);
    console.log(isContact);
  if (isContact)
    return (
      <div className="contactUs">
        {/* <a href="*">Contact Us</a>|<a href="*">Terms & Condition</a> */}
      </div>
    );
}

export default ContactUs;
