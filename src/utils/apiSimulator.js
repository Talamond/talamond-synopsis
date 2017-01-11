// Simulate talking to an api server, doesn't do much simulating right now
import moment from 'moment';
import ibm from '../assets/images/IBM_logo.svg';
import uw from '../assets/images/Uwaterloo_seal.gif';
import n8 from '../assets/images/n8.png';
import ontario from '../assets/images/ontario.jpg';
import parlay from '../assets/images/parlay.jpg';
import sql from '../assets/images/sqlpower.png';
const format = 'YYYY-MM-DD';

function createDate(date) {
  return moment(date, format);
}
export function getResumeData() {
  return [
    {
      id: 1,
      startDate: createDate('2006-09-01'),
      endDate: createDate('2011-04-30'),
      summary: 'Bachelor of Computer Science/Software Engineering Option - Co-operative Program, University of Waterloo',
      title: 'Bachelor of Computer Science/Software Engineering Option - Coop',
      employer: 'University of Waterloo',
      type: 'education',
      color: '#F1C40F',
      image: uw
    },
    {
      id: 2,
      startDate: createDate('2007-01-01'),
      endDate: createDate('2007-04-30'),
      title: 'Quality Assurance Functional Analyst',
      employer: 'Parlay Entertainment',
      minor: true,
      details: [
        'Searched for bugs in the applications and reported them with detailed descriptions',
        'Communicated with office workers to quickly solve problems',
        'Given leadership role in projects and performed well'
      ],
      description: 'This was my first job aside from delivering newspapers and selling donuts. At Parlay Enterainment I was ' +
        'introduced to the business world. Here I was responsible for finding bugs in Parlay\'s software (gambling games like ' +
        'slots, blackjack, bingo was the big one) on all major browsers. Here I developed many soft skills, but not much ' +
        'technically.',
      type: 'coop',
      color: '#BF5FFF',
      image: parlay
    },
    {
      id: 3,
      startDate: createDate('2007-09-01'),
      endDate: createDate('2007-12-31'),
      title: 'Java Programmer',
      employer: 'Ministry of Education',
      details: [
        'Developed skills on Object Oriented programming while working on a web application',
        'Used J2EE with IBM Rational to create Enterprise Application pages (JSP, business rules, Hibernate)'
      ],
      description: 'The Ministry of Education provided with my first software development position. Here I contributed ' +
        'to a Java application named AIMS. I was responsible for creating some online forms as well as a payment page. We ' +
        'used Java Server Pages (JSP) for the front-end, J2EE for the backend and Hibernate for database communication.',
      type: 'coop',
      color: '#99A3A4',
      skills: [{label: 'JSP', weight: 7}, {label: 'J2EE', weight: 4}, {label: 'Hibernate', weight: 7}, {label: 'Java', weight: 10},
        {label: 'OO', weight: 4}, {label: 'Web', weight: 8}
      ],
      image: ontario
    },
    {
      id: 4,
      startDate: createDate('2008-05-01'),
      endDate: createDate('2008-08-31'),
      title: 'Java Programmer',
      employer: 'SQL Power Group Inc.',
      details: [
        'Implemented GUI and backend features for database management applications',
        'Contributed in application design sessions',
        'Fixed various types of bugs for various applications'
      ],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et' +
      ' dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo ' +
      'consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ' +
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      type: 'coop',
      color: '#229954',
      skills: [{label: 'Swing', weight: 7}, {label: 'JPA', weight: 7}, {label: 'Hibernate', weight: 7}, {label: 'Java', weight: 10},
        {label: 'OO', weight: 4}
      ],
      image: sql
    },
    {
      id: 5,
      startDate: createDate('2009-01-01'),
      endDate: createDate('2010-08-31'),
      title: 'Java Programmer',
      employer: 'N8Identity',
      type: 'coop',
      color: '#D35400',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et' +
      ' dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo ' +
      'consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ' +
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      skills: [{label: 'Spring', weight: 7}, {label: 'JPA', weight: 7}, {label: 'Hibernate', weight: 7}, {label: 'Java', weight: 10},
        {label: 'OO', weight: 4}, {label: 'RichFaces', weight: 7}, {label: 'PostgreSQL', weight: 7}, {label: 'JUnit', weight: 7},
        {label: 'Agile', weight: 7}, {label: 'ServiceMix', weight: 6}, {label: 'Linux', weight: 6}
      ],
      image: n8
    },
    /*{
      id: 6,
      startDate: createDate('2009-09-01'),
      endDate: createDate('2009-12-31'),
      title: 'Java Programmer',
      employer: 'N8Identity',
      type: 'coop',
      color: '#D35400',
      description: '',
      skills: [{label: 'Spring', weight: 7}, {label: 'JPA', weight: 7}, {label: 'Hibernate', weight: 7}, {label: 'Java', weight: 10},
        {label: 'OO', weight: 4}, {label: 'RichFaces', weight: 7}, {label: 'PostgreSQL', weight: 7}, {label: 'JUnit', weight: 7},
        {label: 'Agile', weight: 7}, {label: 'ServiceMix', weight: 6}, {label: 'Linux', weight: 6}
      ],
      image: n8
    },
    {
      id: 7,
      startDate: createDate('2010-05-01'),
      endDate: createDate('2010-08-31'),
      title: 'Java Programmer',
      employer: 'N8Identity',
      type: 'coop',
      color: '#D35400',
      description: '',
      skills: [{label: 'Spring', weight: 7}, {label: 'JPA', weight: 7}, {label: 'Hibernate', weight: 7}, {label: 'Java', weight: 10},
        {label: 'OO', weight: 4}, {label: 'RichFaces', weight: 7}, {label: 'PostgreSQL', weight: 7}, {label: 'JUnit', weight: 7},
        {label: 'Agile', weight: 7}, {label: 'ServiceMix', weight: 6}, {label: 'Linux', weight: 6}
      ],
      image: n8
    }, */
    {
      id: 8,
      startDate: createDate('2011-05-01'),
      endDate: createDate('2012-12-15'),
      title: 'Java Programmer',
      employer: 'N8Identity',
      type: 'full',
      color: '#D35400',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et' +
      ' dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo ' +
      'consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ' +
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      skills: [{label: 'Spring', weight: 7}, {label: 'JPA', weight: 7}, {label: 'Hibernate', weight: 7}, {label: 'Java', weight: 10},
        {label: 'OO', weight: 4}, {label: 'RichFaces', weight: 7}, {label: 'PostgreSQL', weight: 7}, {label: 'JUnit', weight: 7},
        {label: 'Agile', weight: 7}, {label: 'ServiceMix', weight: 6}
      ],
      image: n8
    },
    {
      id: 9,
      startDate: createDate('2013-01-01'),
      endDate: createDate('2017-01-01'),   // todo get current date and use that
      title: 'Software Developer / Lead UI Architect',
      employer: 'IBM Canada',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et' +
      ' dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo ' +
      'consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ' +
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      summary: 'IBM Canada',
      type: 'full',
      color: '#3498DB',
      image: ibm
    },
  ];
}
