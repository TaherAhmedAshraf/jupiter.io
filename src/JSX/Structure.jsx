import React from "react"
import { NavLink } from "react-router-dom"

function Structure(props) {
  return (
    <>
      <section>
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="half-width">
                <div className="content-holder">
                  <h1>{props.Heading} <strong className="BrandName">JUPITER.IO</strong></h1>
                  <h2>{props.Paragraph}</h2>
                  <NavLink to={props.ToURL} className="btn-get-started">{props.BtnName}</NavLink>
                </div>
              </div>
              <div className="half-width">
                <div className="content-holder">
                  <img src={props.Image} alt="Structure Page Image" className="animated"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Structure;

