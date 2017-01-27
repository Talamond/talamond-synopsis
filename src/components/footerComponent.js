import React from 'react';
import MediaQuery from 'react-responsive';
import './footer.scss';
import github from '../assets/images/github.svg';
import email from '../assets/images/email.svg';
import facebook from '../assets/images/facebook.svg';
import linkedin from '../assets/images/linkedin.svg';

function renderFooters(footers) {
  return [];
}

export const Footer = ({footers}) =>
  <footer className="footer-root">
    <a href="https://github.com/Talamond">
      <svg>
        <use xlinkHref={github}/>
      </svg>
    </a>
    <a href="https://github.com/Talamond">
      <svg>
        <use xlinkHref={email}/>
      </svg>
    </a>
    <a href="https://github.com/Talamond">
      <svg>
        <use xlinkHref={facebook}/>
      </svg>
    </a>
    <a href="https://github.com/Talamond">
      <svg>
        <use xlinkHref={linkedin}/>
      </svg>
    </a>
  </footer>;
