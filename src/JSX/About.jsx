import React from "react"
import Structure from "./Structure"
import Image from "../Images/HomePageImage.png"

function About() {
  return (
    <>
      <Structure
        Heading="Welcome to the About page"
        Paragraph="We are a team of telented web developer making website"
        BtnName="more about us"
        ToURL="/about"
        Image={Image} />
    </>
  );
}

export default About;

