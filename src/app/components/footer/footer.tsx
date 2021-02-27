import React from 'react';
const Github = require('../../../jsweetman/assets/images/github.svg');
const Email = require('../../../jsweetman/assets/images/email.svg');
const Facebook = require('../../../jsweetman/assets/images/facebook.svg');
const LinkedIn = require('../../../jsweetman/assets/images/linkedin.svg');
const Meetup = require('../../../jsweetman/assets/images/meetup.svg');

require('./footer.css');

export const Footer = (): JSX.Element => {

  // todo: what's the new react-router Link?
  // <Link to={ABOUT_PATH}>About me</Link>

  return <footer className="footer">
    <div className="footer__info">
      <h4>Jonathan Sweetman</h4>
      <h4>sweetmanjon@gmail.com</h4>
      <h4>Toronto, ON</h4>
      <h4>Canada</h4>
    </div>
    <div className="footer__socialArea">
      <a className="footer__socialLink" href="https://github.com/Talamond">
        <Github/>
      </a>
      <a className="footer__socialLink" href="mailto:sweetmanjon@gmail.com" target="_top">
        <Email/>
      </a>
      <a className="footer__socialLink" href="https://www.facebook.com/jonathan.sweetman">
        <Facebook/>
      </a>
      <a className="footer__socialLink" href="https://ca.linkedin.com/in/jonathansweetman">
        <LinkedIn/>
      </a>
      <a className="footer__socialLink" href="https://www.meetup.com/Random-activity-group-20s/">
        <Meetup/>
      </a>
    </div>
    <div className="footer__about">
      <a className="footer__resumeLink" href="/jsweetman/assets/JonathanSweetmanResume.pdf">View Resume</a>
    </div>
  </footer>;
};
