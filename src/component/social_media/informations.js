import { CDBFooter, CDBBtn, CDBBox } from 'cdbreact';
import myPic from '../assets/my_picture.jpg';
import navIcon1 from '../assets/footer-Icon1.svg';
import navIcon2 from '../assets/footer-Icon2.svg';
import navIcon3 from '../assets/footer-Icon3.svg';
import React, { Component } from 'react'

class Footer extends Component {
  constructor(props) {
    super(props)

    this.state = {
             
    }
}

render(){
  return (
    <CDBFooter className="shadow">
      <CDBBox className="box-m2"     >
        <CDBBox display="flex" alignItems="right">
          <a href="/" className="d-flex align-items-center p-0 text-dark">
            <img className='PicImg'
              alt="logo"
              src={myPic}
            />
            <span className="ml-4 h5 mb-0 font-weight-bold">Leonardo Braga</span>
          </a>
        </CDBBox>
        <CDBBox display="flex">
          <CDBBtn flat color="dark" className="p-2">
          <a href="https://www.linkedin.com/in/leonardo-barbosa-braga-583449142/?locale=en_US"><img src={navIcon1} alt="" /></a>
          </CDBBtn>
          <CDBBtn flat color="dark" className="mx-3 p-2">
                <a href="https://github.com/leobbraga"><img src={navIcon2} alt="" /></a>
          </CDBBtn>
          <CDBBtn flat color="dark" className="p-2">
                <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSGLPmBSdkPDznXvXrDFwTqsPFMsnVZWMhgNdmKjTHmgtFggQzzFWQgZRGGXPGHrtrsSNdvh"><img src={navIcon3} alt="" /></a>
          </CDBBtn>
        </CDBBox>
        <small className="ml-2"> Leonardo barbosa Braga, 2022. All rights reserved.</small>
      </CDBBox>
    </CDBFooter>
  )
}
}

export default Footer;