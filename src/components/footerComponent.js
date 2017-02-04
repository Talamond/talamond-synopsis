import React from 'react';
import { Link } from 'react-router';
import { NAVIGATION } from '../constants/navigation.js';
import './footer.scss';
import github from '../assets/images/github.svg';
import email from '../assets/images/email.svg';
import facebook from '../assets/images/facebook.svg';
import linkedin from '../assets/images/linkedin.svg';
import meetup from '../assets/images/meetup.svg';

export const Footer = ({footers}) =>
  <footer className="footer-root">
    <div className="footer info">
      <h4>Jonathan Sweetman</h4>
      <h4>sweetmanjon@gmail.com</h4>
      <h4>Toronto, ON</h4>
      <h4>Canada</h4>
    </div>
    <div className="footer social-area">
      <a href="https://github.com/Talamond">
        <svg>
          <use xlinkHref={github}/>
        </svg>
      </a>
      <a href="mailto:sweetmanjon@gmail.com" target="_top">
        <svg>
          <use xlinkHref={email}/>
        </svg>
      </a>
      <a href="https://www.facebook.com/jonathan.sweetman">
        <svg>
          <use xlinkHref={facebook}/>
        </svg>
      </a>
      <a href="https://ca.linkedin.com/in/jonathansweetman">
        <svg>
          <use xlinkHref={linkedin}/>
        </svg>
      </a>
      <a href="https://www.meetup.com/Random-activity-group-20s/">
        <svg>
          <use xlinkHref={meetup}/>
        </svg>
      </a>
    </div>
    <div className="footer about">
      <Link to={NAVIGATION.BLOG.PATH + NAVIGATION.BLOG.SYNOPSIS.PATH}>About this site</Link>
      <Link to={NAVIGATION.BLOG.PATH + NAVIGATION.BLOG.ABOUT_ME.PATH}>About me</Link>
    </div>
    <h3 className="footer message">Please feel free to contact me!</h3>
  </footer>;
