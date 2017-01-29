// Simulate talking to an api server, doesn't do much simulating right now
import ibm from '../assets/images/IBM_logo.svg';
import uw from '../assets/images/Uwaterloo_seal2.png';
import n8 from '../assets/images/n8.png';
import ontario from '../assets/images/ontario.jpg';
import parlay from '../assets/images/parlay2.png';
import sql from '../assets/images/sqlpower2.png';
import {createDate} from './dateHelper.js';

// TODO, pull descriptions from text file
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
/*    {
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
      image: parlay,
      skills: [{label: 'QA', weight: 7}
      ],
    },
*/
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
        {label: 'Web', weight: 8}, {label: 'SVN', weight: 5}
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
      description: 'SQLPower has a variety of tools related to Database management. Here I mostly worked on the front end for these applications, which were multi platform Java applications. The front end was built using Swing UI. At SQLPower, we also practiced pair programming, I can\'t say it was very time efficient...',
      type: 'coop',
      color: '#229954',
      skills: [{label: 'Swing', weight: 7}, {label: 'JPA', weight: 7}, {label: 'Hibernate', weight: 7}, {label: 'Java', weight: 10},
        {label: 'Oracle', weight: 6}, {label: 'PostgreSQL', weight: 6},
        {label: 'SQLServer', weight: 6}, {label: 'SVN', weight: 5}
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
      description: 'I spent 3 coop terms at N8Identity (4 months each) and worked as a Java developer on a web application called ELM. ELM was a product that aided large companies with onboarding their employees. We used Spring framework for ELM and primefaces for the user interface. The backend was many Java OSGI services that we ran on service mix and used Hiberate to communicate with the database. Some of my responsiblility here included: content management directly with clients, creating a client Software Specification Document for a reporting module in ELM, creating a feed handler for bulk data load, typical ELM enhancements and bug fixes.',
      skills: [{label: 'Spring', weight: 7}, {label: 'JPA', weight: 7}, {label: 'Hibernate', weight: 7}, {label: 'Java', weight: 10},
        {label: 'RichFaces', weight: 7}, {label: 'PostgreSQL', weight: 7}, {label: 'JUnit', weight: 7},
        {label: 'Agile', weight: 7}, {label: 'ServiceMix', weight: 6}, {label: 'Linux', weight: 6}, {label: 'Tomcat', weight: 10},
        {label: 'SVN', weight: 5}, {label: 'CSS', weight: 8}
      ],
      image: n8
    },
    {
      id: 8,
      startDate: createDate('2011-05-01'),
      endDate: createDate('2012-12-15'),
      title: 'Java Programmer',
      employer: 'N8Identity',
      type: 'full',
      color: '#D35400',
      description: 'After I graduated University, I returned to N8Identity for a year and a half. During this period, we put more ephasis on writing unit tests with our code, but other than that, we continued to working on ELM implementing new enhancements. The tech stack remained the same as did my responsibilities.',
      skills: [{label: 'Spring', weight: 7}, {label: 'JPA', weight: 7}, {label: 'Hibernate', weight: 7}, {label: 'Java', weight: 10},
        {label: 'RichFaces', weight: 7}, {label: 'PostgreSQL', weight: 7}, {label: 'JUnit', weight: 7},
        {label: 'Agile', weight: 7}, {label: 'ServiceMix', weight: 6}, {label: 'Linux', weight: 6}, {label: 'Tomcat', weight: 10},
        {label: 'Git', weight: 7}, {label: 'CSS', weight: 8}
      ],
      image: n8
    },
    {
      id: 9,
      startDate: createDate('2013-01-01'),
      endDate: createDate('2015-08-31'),
      title: 'Software Developer / Team Lead',
      employer: 'IBM Canada',
      description: 'Started off at IBM as a regular Software Developer working an application ICM, ' +
      'but I quickly became someone they knew could adapt and that they could trust to put onto new project. After a few months, ' +
      'I was moved onto a small team started a new project called Concert because of my former Java experience and good reviews from my ICM team lead. ' +
      'Shortly after Concert started' +
      ' I was put into a Team Lead position where I was responsible for delievering Concert\'s mobile application. Also around this' +
      'time I became responsible work interviewing new hires. ' +
      ' We worked on Concert for about a year and a half and sold a few copies, but then I was moved onto another new venture ' +
      'called Watson Analytics. There I was responsible for getting Watson Analytics\' "UI Core". After that we spend a few moneths' +
      'playing with Apache Kafka, Spark Streaming and Microservices for a new project, but that was quickly interrupted ' +
      'by the next new thing...',
      descriptions: {
        ICM: 'Incentive Compensation Management (ICM) is our biggest product with over 200 large enterprise clients. ICM started off' +
        ' as a windows desktop application using Windows Forms, C#, .Net Framework amd SQLServer. ' +
        'ICM is used by companies with a myriad of salespeople to perform complex calculations on how much earnings each salesperson makes.' +
        'While I worked on ICM, I was part of' +
        ' a small 4 person team and was responsible for fixing bugs as well as implementing new ICM enhancements on the full stack.' +
        ' I worked on ICM for about 4 months.',
        Concert: 'Concert was a new product idea that brought some existing IBM applications together in a moe user friendly way. ' +
        ' It was a web application with a Java backend that integrated with some other IBM products. But I don\'t know much about that' +
        ' because I was responsible for the apps that connected with the Java backend, Concert Mobile. ' +
        'Concert Mobile ran on both Android and iOS. We built it using Sencha Touch and IBM Worklight. Technically speaking, Concert Mobile' +
        ' was a Native Application on both Andriod and iOs, but actually, all the native code did was run a WebView. The WebView contained ' +
        'Javascript running Sencha Touch. So while most the development couldn\'t be considered Native development, there was still a bit ' +
        'of native work for things like the WebViews and our login process. I was also responsible for deploying Concert Mobile onto the App Store ' +
        'and Play Store. Concert sold a few copies before I moved onto the next new project.',
        'Watson Analytics': 'Watson Analytics, like Concert, was another application that brought together other IBM products in a more ' +
        'user friendly way. The collaboration was taken to the next level in Watson Analytics there. There we 4 separate teams among IBM ' +
        'who all worked together to produce Watson Analytics. While the idea of Watson Analytics came from our PM, none of the applications ' +
        'being integrated with it out created by us, so we took the role of creating WA\'s "Core". The Core was a web application that ' +
        'hosted all the other applications in iframes and provided mechanisms of communication using primarily Web Api\'s postMessage. The core ' +
        'provided a Javascript library that tenant applications could include to make communication easy. There was also support for ' +
        'drag and drop between the iframes and Core. For the Core\'s UI, we used primarily backbonejs with some jQuery to create our UI.'
      },

      summary: 'IBM Canada',
      type: 'full',
      color: '#3498DB',
      skills: [
        {label: 'C#', weight: 10},
        {label: 'Java', weight: 27},
        {label: 'Mobile', weight: 25},
        {label: 'Javascript', weight: 40},
        {label: 'Objective C', weight: 6},
        {label: 'Sencha Touch', weight: 10},
        {label: 'Extjs', weight: 20},
        {label: 'JUnit', weight: 7},
        {label: 'Tomcat', weight: 10},
        {label: 'Git', weight: 10},
        {label: 'jQuery', weight: 20},
        {label: 'CSS', weight: 40},
        {label: 'NodeJS', weight: 40},
        {label: 'Backbonejs', weight: 20},
        {label: 'HTML5', weight: 30},
        {label: 'Apache Kafka', weight: 15}
      ],
      image: ibm
    },
    {
      id: 10,
      startDate: createDate('2015-09-01'),
      endDate: createDate('2017-02-01'),   // todo get current date and use that
      title: 'Lead UI Architect',
      employer: 'IBM Canada',
      description: 'In September 2015, I started a new venture at IBM. I was given the responsibility of leading the development of ICM’s UI, a migration from windows to web app. After a successful rewrite of ICM’s UI, I was promoted to Lead UI Architect and moved onto rewriting the UI of another application called RCA. Once the Architect, not only was I responsible for building the initial UI build for the applications, I was also responsible for educating all teams in our office on coding good practices. After another successful rewrite of RCA’s UI, I now work on a common component library for all our products to use with the goal of saving effort and making them more consistent.',
      descriptions: {
        ICM: 'Being a 10 year old application, rewriting ICM was a massive undertaking. ICM had 800 screens of content that needed to be redesigned and rewrote. One of the major problems  we had was that most of our office had little to no web development experience. It was up to me to choose the web tech stack and educate the rest of the office on how to develop with it. I choose React because of its simplicity and popularity with Redux to help support our monolithic application. We started off with only 4 developers, but after a few months we had over 20 developers all working on ICM for the rest of the year. The IBM Design team provided new interface design of which I critiqued. The new ICM rewrite sold almost 2 copies right after we released it and since then has sold many more.',
        RCA: 'RCA was another product that had a lack-luster user interface. Similar to ICM, I was tasked to rewrite RCA. Again I choose React with Redux to achieve this. It was a similar experience, but on a much smaller scale on a much smaller time frame. We had only 3 months of time to start the rewrite. In the 3 months, with a team of 4, we managed to rewrite 75% the application while leaving the other 25% with the old UI contained seemless in iframes. Since I had done my job getting the ball moving. After that 75% of the UI was complete, I handed off the rest of the RCA development to the team and moved onto something new.',
        'React Components': 'While building RCA, I was also tasked of building a shared react component library. One of the problems we continually have with the designers is they keep designing things they’ve already done. What ended up happening it through out our 3 large teams, we have several different looks and feels for components that should be the same. It is now my job to create a library all the teams can use and also get the design team aligned with this component library. Some of the features of the component library include: high unit test coverage, accessiblity (to match wc3 level AA and polished looks with animation.'
      },
      summary: 'IBM Canada',
      type: 'full',
      color: '#3498DB',
      skills: [
        {label: 'React', weight: 100},
        {label: 'Redux', weight: 100},
        {label: 'ES6', weight: 90},
        {label: 'Javascript', weight: 40},
        {label: 'CSS', weight: 50},
        {label: 'SASS', weight: 30},
        {label: 'Webpack', weight: 70},
        {label: 'Karma', weight: 50},
        {label: 'NPM', weight: 50},
        {label: 'Git', weight: 20}
      ],
      image: ibm
    },
  ];
}
