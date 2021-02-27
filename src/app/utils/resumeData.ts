import { TimelineElementI } from 'app/modules/timeline/timelineF';
import {createDate} from './dateHelper';

// TODO, pull descriptions from text file
export function getResumeData(): TimelineElementI[] {
  return [
    {
      id: 1,
      startDate: createDate('2006-09-01'),
      endDate: createDate('2011-04-30'),
      summary: 'Bachelor of Computer Science/Software Engineering Option - Co-operative Program, University of Waterloo',
      title: 'Bachelor of Computer Science - Coop',
      subTitle: 'Software Engineering Option',
      employer: 'University of Waterloo',
      type: 'education',
      color: '#F1C40F',
      image: '../../jsweetman/assets/images/Uwaterloo_seal2.png'
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
     image: '../../jsweetman/assets/images/parlay2.png',
     skills: [{label: 'QA', weight: 7}
     ],
     },
     */
    {
      id: 3,
      startDate: createDate('2007-09-01'),
      endDate: createDate('2007-12-31'),
      title: 'Java Programmer (Coop)',
      employer: 'Ministry of Education',
      details: [
        'Honed skills on Object Oriented programming',
        'Collaborated with third party to implement web application AIMS',
        'Used J2EE with IBM Rational to create Enterprise Application pages (JSP, business rules, Hibernate)'
      ],
      description: 'The Ministry of Education provided me with my first software development position. Here I contributed ' +
      'to a Java application named AIMS. I was responsible for creating online forms as well as a payment page. We ' +
      'used Java Server Pages (JSP) for the front-end, J2EE for the backend and Hibernate for database communication.',
      type: 'coop',
      color: '#99A3A4',
      skills: [
        {label: 'JSP', weight: 6},
        {label: 'J2EE', weight: 3},
        {label: 'Hibernate', weight: 7},
        {label: 'Java', weight: 10},
        {label: 'Web', weight: 8},
        {label: 'SVN', weight: 5}
      ],
      image: '../../jsweetman/assets/images/ontario.png'
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
      description: 'SQLPower has a variety of tools related to Database Management that supports all popular types of databases. Here I mostly worked on the front end for these applications, which were multi platform Java applications built using Swing UI. At SQLPower, we also practiced pair programming.',
      type: 'coop',
      color: '#229954',
      skills: [
        {label: 'Swing', weight: 7},
        {label: 'JPA', weight: 7},
        {label: 'Hibernate', weight: 6},
        {label: 'Java', weight: 10},
        {label: 'Oracle', weight: 3},
        {label: 'PostgreSQL', weight: 3},
        {label: 'SQLServer', weight: 3},
        {label: 'SVN', weight: 5}
      ],
      image: '../../jsweetman/assets/images/sqlpower.png'
    },
    {
      id: 5,
      startDate: createDate('2009-01-01'),
      endDate: createDate('2010-08-31'),
      title: 'Java Programmer',
      employer: 'N8Identity',
      type: 'coop',
      color: '#D35400',
      details: [
        'Implemented enhancements and fixed bugs on flagship product ELM',
        'Worked directly with clients to refine application content (string management)',
        'Partook in writing the client Software Specification Document'
      ],
      description: 'Between Jan 1st 2009 and Aug 31st 2010, I spent 3 coop terms at N8Identity (4 months each) and worked as a full stack Java developer on a web application called ELM. ELM was a product that aided large companies with onboarding their new hires. We used Spring framework and Java for ELM\'s backend and primefaces for the user interface. The backend comprised of many Java OSGI services that ran on service mix and used Hiberate to communicate with the database. Some of my responsibilities here included: content management directly with clients, creating a client Software Specification Document for a reporting module in ELM, typical ELM enhancements and bug fixes.',
      skills: [
        {label: 'Spring', weight: 7},
        {label: 'JPA', weight: 7},
        {label: 'Hibernate', weight: 7},
        {label: 'Java', weight: 10},
        {label: 'RichFaces', weight: 7},
        {label: 'PostgreSQL', weight: 7},
        {label: 'JUnit', weight: 7},
        {label: 'Agile', weight: 7},
        {label: 'ServiceMix', weight: 6},
        {label: 'Linux', weight: 6},
        {label: 'Tomcat', weight: 10},
        {label: 'SVN', weight: 5},
        {label: 'CSS', weight: 8}
      ],
      image: '../../jsweetman/assets/images/n8.svg'
    },
    {
      id: 8,
      startDate: createDate('2011-05-01'),
      endDate: createDate('2012-12-15'),
      title: 'Java Programmer',
      employer: 'N8Identity',
      type: 'full',
      color: '#D35400',
      details: [
        'Implemented enhancements and fixed bugs on flagship product ELM',
        'Created Feed Handler for loading bulk data into PostgreSQL',
        'Design strategies to foster forward thinking and efficient solutions',
        'Developed robust JUnit test cases'
      ],
      description: 'After I graduated University, I returned to N8Identity for a year and a half. During this period, we put more ephasis on writing unit tests with our code, but other than that, we continued to working on ELM implementing new enhancements. The tech stack and my responsibilities remained the same from my coop terms.',
      skills: [
        {label: 'Spring', weight: 7},
        {label: 'JPA', weight: 7},
        {label: 'Hibernate', weight: 7},
        {label: 'Java', weight: 10},
        {label: 'RichFaces', weight: 7},
        {label: 'PostgreSQL', weight: 7},
        {label: 'JUnit', weight: 7},
        {label: 'Agile', weight: 7},
        {label: 'ServiceMix', weight: 6},
        {label: 'Linux', weight: 6},
        {label: 'Tomcat', weight: 10},
        {label: 'Git', weight: 7},
        {label: 'CSS', weight: 8}
      ],

      image: '../../jsweetman/assets/images/n8.svg'
    },
    {
      id: 9,
      startDate: createDate('2013-01-01'),
      endDate: createDate('2015-08-31'),
      title: 'Software Developer',
      employer: 'IBM Canada',
      description: 'I started off at IBM as a Software Developer working on ICM, ' +
      'but after a few months they realized I was someone intelligent who could adapt to the task at hand, so they moved onto a brand new project call Concert. ' +
      'Shortly after Concert started' +
      ' I was put into a Team Lead position where I was responsible for delivering Concert\'s mobile application. Also around this ' +
      'time I became responsible for interviewing potential new hires. ' +
      ' We worked on Concert for about a year and a half and sold it to a few clients, but then I was moved onto another new venture ' +
      'called Watson Analytics. There I was responsible for creating Watson Analytics\' "UI Core". After that we spent a few months' +
      ' playing with Apache Kafka, Spark Streaming and Microservices for a new product, but that was quickly interrupted ' +
      'by ICM\'s UI rewrite.',
      descriptions: {
        ICM: 'Incentive Compensation Management (ICM) is our biggest product with over 200 enterprise clients. ICM started off' +
        ' as a windows desktop application using Windows Forms, C#, .Net Framework and SQLServer. ' +
        'ICM is used by companies with a large amount of salespeople to perform complex calculations on how much earnings each salesperson made during a period. ' +
        'While I worked on ICM, I was part of' +
        ' a small 4 person team and was responsible for fixing bugs as well as implementing new ICM enhancements on the full development stack.' +
        ' I worked on ICM for about 4 months.',
        Concert: 'Concert was a new product idea that brought some existing IBM applications together in a more user friendly way. ' +
        ' It was a web application with a Java backend that integrated with some other IBM products. I don\'t know much about that part' +
        ' because I was responsible for the mobile application that connected with the Java backend, Concert Mobile. ' +
        'Concert Mobile ran on both Android and iOS. We built it using Sencha Touch and IBM Worklight. Technically speaking, Concert Mobile' +
        ' was a Native Application on both Andriod and iOS but the fact is, all the native code did was run a WebView, so it was essentially a mobile web app. ' +
        ' Most the development couldn\'t be considered native, but there was still a bit ' +
        'of native work for things like the WebViews and our login process. I was also responsible for deploying Concert Mobile onto the App Store ' +
        'and Play Store. Concert sold a few copies before I moved onto the next new project.',
        WA: 'Watson Analytics, like Concert, was another application that brought together other IBM products in a more ' +
        'user friendly way. The collaboration was taken to the next level in Watson Analytics by having 4 separate teams among IBM ' +
        'work together to produce Watson Analytics, all located in different parts of the world. While the idea of Watson Analytics came from our PM, none of the applications ' +
        'being integrated with it were created by us, so we took the role of creating WA\'s "Core". The Core was a web application that ' +
        'hosted all the other applications in iframes and provided mechanisms of communication using primarily Web Api\'s postMessage. The core ' +
        'provided a Javascript library that tenant applications could include to make communication easy. There was also support for ' +
        'drag and drop between the iframes and the Core. For the Core\'s UI, we used primarily backbonejs with some jQuery to create our UI.'
      },
      details: [
        'Interviewed development team candidates',
        'Implemented enhancements and fixed bugs on a variety of products',
        'Lead a team of developers on product implementation',
        'Responsible for creating and deploying cross platform mobile application'
      ],
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
      image: '../../jsweetman/assets/images/IBM_logo.svg'
    },
    {
      id: 10,
      startDate: createDate('2015-08-31'),
      endDate: createDate('2017-03-31'),
      title: 'Lead UI Architect',
      employer: 'IBM Canada',
      description: 'In September 2015, I started a new venture at IBM. I was given the responsibility of leading the development of ICM’s UI, a migration from windows to web app. After a successful rewrite of ICM’s UI, I was promoted to Lead UI Architect and moved onto rewriting the UI of RCA. As the Architect, I was also responsible for educating all teams on UI (React/Redux) coding best practices. After another successful rewrite of RCA’s UI, I now work on a common component library for all our products to use with the goal of making the applications consistent with each other.',
      descriptions: {
        ICM: 'Being a 10 year old application, rewriting ICM was a massive undertaking. ICM had 800 screens of content that needed to be redesigned and rewritten from C# to Web. One of the major problems we faced was that most of our office had little to no web development experience. It was up to me to choose the web tech stack and educate the rest of the office on how to develop in web. I choose React because of its simplicity and popularity along with Redux to manage the state of our monolithic application. We started off with only 4 developers, but after a few months we had 20 developers all working on ICM. The IBM Design team provided new interface designs of which I critiqued and implemented along with my team. The new ICM rewrite sold twice right after we released it and since then has sold several more.',
        RCA: 'RCA was another product that had a lack-luster user interface and again I was tasked to rewrite the front end. Again I choose React with Redux to achieve this. It was a similar experience, but on a much smaller scale on a much smaller time frame. In the 3 months, with a team of 4, we managed to rewrite 75% the application while leaving the other 25% with the old UI contained seemless in iframes. Since I had done my job getting the ball moving, I handed off the rest of the UI to the RCA development team and they completed the rewrite a month later.',
        Library: 'While building RCA, I was also tasked of building a shared React component library. One of the problems we continually have with the designers is they keep redesigning things they’ve already done. Through out our 3 large teams, we ended up having several different looks and feels for components that should be the same. It is now my job to create a library all the teams can use and also get the design team aligned with this component library. Some of the features of the component library include: high unit test coverage, accessibility and polished looks.'
      },
      details: [
        'Responsible for designing and implementing UI Architecture on several projects',
        'Lead several teams of up to 20 developers on product implementation',
        'Worked with design to flesh out application behaviour',
        'Trained developers on React/Redux practices',
        'Implemented a React component library to be used on all products'
      ],
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
      image: '../../jsweetman/assets/images/IBM_logo.svg'
    },
    {
      id: 11,
      startDate: createDate('2017-04-01'),
      endDate: createDate('2019-04-01'),
      title: 'Freelance UI Developer',
      employer: 'Toptal Contract',
      description: `After 4 years working for IBM as Lead UI Architect, I decided it was time for a change and new challenges. I joined Toptal as a freelance UI developer and was quickly matched with a client. I was tasked to migrate the existing Flash implementation to a modern web app. As the sole frontend developer, the client and I worked closely to ensure the UI and backend worked seamlessly. The frontend was designed to fetch the minimum amount of data from the backend to reduce data usage and to maximize speeds. It was also built to rollback the Redux state based on status codes the backend returned which indicated conflicts with other users (e.g. an item no longer being available in the cart). Deployment was a success, with thousands of users satisfied with the new responsive app.`,
      details: [
        'Rewrote client’s web application from Flash to a modern web stack as the sole UI developer',
        'Consumed Sketch files and app architecture specifications which were used to create a responsive web application',
        'Advised the client on coding best practices and UI architecture',
        'Successfully deployed the web app to 1000s of satisfied users'
      ],
      type: 'full',
      color: '#3498DB',
      skills: [
        {label: 'React', weight: 100},
        {label: 'Redux', weight: 100},
        {label: 'Typescript', weight: 100},
        {label: 'CSS', weight: 50},
        {label: 'SASS', weight: 70},
        {label: 'Webpack', weight: 50},
        {label: 'Responsive', weight: 60},
        {label: 'rxjs', weight: 60},
        {label: 'Yarn', weight: 30},
        {label: 'Git', weight: 20},
        {label: 'Sketch', weight: 20}
      ],
      image: '../../jsweetman/assets/images/toptal_logo2.png',
      imageWidth: 400
    },
    {
      id: 12,
      startDate: createDate('2018-04-01'),
      endDate: createDate('2019-12-31'),
      title: 'Freelance UI Developer',
      employer: 'Symon.AI',
      description: `While working at Toptal, I was approached by a former colleague to join a startup, Symon.AI. I was one of the first three to join the team and worked as the sole UI Developer on Symon.AI for the next 2 years, until its acquisition by Varicent Inc in 2020. My responsibilities included working with design to provide optimum user experience, planning API requirements and implementing all the UI.`,
      descriptions: {
        SymonAI: `Symon.AI is best described as a machine learning pipeline. Essentially, you import data from a variety of sources (csv, GSheets, Google Ads, Google Analytics, Shopify) and apply transformations to create predictive models. The data can be viewed at any phase of the transformations and be used to make charts, similar to Excel. There are over 50 different tools you can use to transform your data and a page dedicated to laying them out. The frontend is built using React, Redux, Typescript and PostCSS.`
      },
      details: [
        'Built and architected Symon.AI’s UI from nothing as the sole UI developer',
        'Worked with designers to implement optimum UX experience',
        'Developed coding standards, boilerplates, component libraries and all application features',
        'Integrated with Sentry and LogRocket to provide a seamless experience finding and debugging application issues'
      ],
      type: 'full',
      color: '#3498DB',
      skills: [
        {label: 'React', weight: 100},
        {label: 'Redux', weight: 100},
        {label: 'Typescript', weight: 100},
        {label: 'CSS', weight: 50},
        {label: 'PostCSS', weight: 70},
        {label: 'Webpack', weight: 50},
        {label: 'rxjs', weight: 60},
        {label: 'Yarn', weight: 30},
        {label: 'Git', weight: 20},
        {label: 'Jest', weight: 50},
        {label: 'Zeplin', weight: 30}
      ],
      image: '../../jsweetman/assets/images/symon_logo.svg'
    },
    {
      id: 13,
      startDate: createDate('2020-01-01'),
      endDate: createDate('2021-03-01'),   // todo get current date and use that
      title: 'Senior UI Developer',
      employer: 'Varicent',
      description: `After the acquisition by Varicent, I continued to work on Symon.AI's UI. We scaled up in size and I led the new frontend developers as they became up to speed on Symon.AI. We succeeded our goals in getting at least 10 clients for Symon.AI by the end of our first year. Our team supports our clients on a daily basis using various integrations I am responsible for setting up (e.g. Sentry, Logrocket, Intercom, Upscope and WalkMe). Sentry lets us know when clients encounter bugs. Logrocket helps developers reproduce bugs found by QA/clients. Intercom and Upscope are used as a way for clients to contact support and WalkMe provides education and tutorials on how to use Symon.AI. Symon.AI continues to grow as we're finding new ways to attract clients.`,
      descriptions: {
        SymonAI: `Symon.AI continues to evolve. We built Apps within Symon where users can easily plugin their data to generate infographics that share statistics and predictions of their data. I designed and built the Explain Waterfall visualization, which shows users which columns in their data are most impactful. We implemented more import connectors including SalesForce, Excel and various database connectors. I also conducted user experiments that put the UX to the test. Users were given a set of tasks to complete and we recorded their attempts. Using the recordings, I proposed and implemented better UX, which resulted in the next set of users having an improved success rate. Within Varicent, Symon.AI is growing and being used by all Varicent’s other products to provide predictive analytics.`
      },
      details: [
        'Continuing to work on Symon.AI after being acquired',
        'Collaborating with product management to make decisions on what features are most valuable',
        'Responsible for hiring and onboarding new UI developers',
        'Trained developers on React/Redux practices',
        'Integrated with Intercom, Upscope and WalkMe to provide a premium experience educating and helping users'
      ],
      type: 'full',
      color: '#3498DB',
      skills: [
        {label: 'React', weight: 100},
        {label: 'Redux', weight: 100},
        {label: 'Typescript', weight: 100},
        {label: 'CSS', weight: 50},
        {label: 'PostCSS', weight: 70},
        {label: 'Webpack', weight: 50},
        {label: 'rxjs', weight: 60},
        {label: 'Yarn', weight: 30},
        {label: 'Git', weight: 20},
        {label: 'Zeplin', weight: 30}
      ],
      image: '../../jsweetman/assets/images/varicent_logo.png'
    },
  ];
}
