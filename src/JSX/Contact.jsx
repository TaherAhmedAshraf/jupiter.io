import React from "react"


function Contact() {
  return (
    <>
      <div className="Contact-Head">Contact Us Now</div>
      <p className="Contact-Text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a feugiat felis. Duis lorem lacus, imperdiet vitae leo maximus, vehicula bibendum justo.</p>
      <form action="POST" className="w-50 mx-auto">
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Full Name</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="eg. Jhon Roka" />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Phone Number</label>
          <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="eg. +15852135930" />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">Message</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea >
        </div>
        <button type="submit" class="btn mb-2 purple-btn">Submit</button>
      </form>
    </>
  );
}

export default Contact;

