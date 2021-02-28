import React from "react"
import Structure from "./Structure"
import Image from "../Images/HomePageImage.png"

function Home() {
  return (
    <>
      <Structure
        Heading="Grow your business with"
        Paragraph="We are a team of telented web developer making website"
        BtnName="get started"
        ToURL="/service"
        Image={Image} />
    </>
  );
}

export default Home;

