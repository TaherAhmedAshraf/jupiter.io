import React from "react"
import "./CSS/Service.css"
import { AiOutlineGlobal as GlobeIcon } from 'react-icons/ai';
import { FaMobileAlt as MobileIcon } from 'react-icons/fa';
import { BsLaptop as LaptopIcon } from 'react-icons/bs';
import { FaWordpress as WordpressIcon } from 'react-icons/fa';
import { IoBulbSharp as BulbIcon } from 'react-icons/io5';
import { IoTimerOutline as TimerIcon } from 'react-icons/io5';





function Services() {
  return (
    <>
      <section>
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="service-content">
                <div className="service-header">
                  <h1>Services</h1>
                  <p>Effective implementation of relevant services strengthen the relationship between government and citizens, and empowers citizens towads social and economic development.</p>
                </div>
                <div className="service-menu">
                  <div className="SingleServiceMenu">
                    <div className="box">
                      <div id="GlobeIcon" className="Icon"><GlobeIcon /></div>
                      <h2>Web Soultions</h2>
                      <p>We understand your need to Automate and Uplift your business process. Whether it is custom database software or a CMS based application.</p>
                    </div>
                  </div>
                  <div className="SingleServiceMenu">
                    <div className="box">
                      <div id="MobileIcon" className="Icon"><MobileIcon /></div>
                      <h2>Mobile Apps</h2>
                      <p>Mobile apps are applications that are developed to run on a mobile & lightweight versions of software.</p>
                    </div>
                  </div>
                  <div className="SingleServiceMenu">
                    <div className="box">
                      <div id="LaptopIcon" className="Icon"><LaptopIcon /></div>
                      <h2>Domain Hosting</h2>
                      <p>Domain names are used to identify one or more IP addresses & Web hosting is a service that allows organizations and individuals to post a website</p>
                    </div>
                  </div>
                  <div className="SingleServiceMenu">
                    <div className="box">
                      <div id="WordpressIcon" className="Icon"><WordpressIcon /></div>
                      <h2>CMS Customization</h2>
                      <p>Beside custom CMS development, YetFix also work for customization of popular open source Content Management System.</p>
                    </div>
                  </div>
                  <div className="SingleServiceMenu">
                    <div className="box">
                      <div id="BulbIcon" className="Icon"><BulbIcon /></div>
                      <h2>e-COMMERCE</h2>
                      <p>e-Commerce is a buzzword these days.YetFix offers a complete portfolio of professional e-Commerce services</p>
                    </div>
                  </div>
                  <div className="SingleServiceMenu">
                    <div className="box">
                      <div id="TimerIcon" className="Icon"><TimerIcon /></div>
                      <h2>Digital Content</h2>
                      <p>This concept is totally modern. In this way you can present the jeast and focus on the main subject of seminar, workshop, meeting and other programs.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;