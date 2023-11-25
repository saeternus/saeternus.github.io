import image1 from './assets/image.png'
import image3 from './assets/image.png'
import image4 from './assets/image.png'

const courses = [
  {
    title: 'GIS Certification',
    slug: `${'GIS Certification'.toLowerCase().replace(/\s+/g, '-')}`,
    header: 'Certificate Course in Geographical Information System (GIS)',
    description: 'Emerging technologies such as GIS (Geographic Information System) and RS (Remote Sensing) are instrumental in addressing intricate global challenges and impacting various aspects of life. In this context, the role of a Geospatial expert is gaining significance in the decision-making process. Acquiring practical knowledge is essential to comprehensively grasp the underlying concepts and unlock the potential for innovative applications of these technologies across diverse domains.',
    whatsapp: 'https://chat.whatsapp.com/FRmZTHwsDLACdxUAQOg3GE',
    formLink: 'https://forms.gle/2KLbzK9qmT7mr59j7',
    aboutHead: 'Covers pretty much everything you need to know about GIS',
    detailsPara: 'The course is uniquely designed by top technical experts to ensure the meaningful skill development which enables the candidates to gain insight about technology and make them ready to start/accelerate their carrier immediately after completing this course. The objective of the course is to develop an understanding and competence in, Geo spatial technology as- ',
    details: [
      "Digitization of maps and different themes for present day landform evaluation.",
      "Calculation of the area, perimeter and other domains for estimation of different layers for integration and decision making capacity.",
      "Auto Generation of hydrological parameters for water related processes.",
      "Use of various statistical methods in GIS for spatial and vector data.",
      "Application of GIS in various disciplines of geography, geology, social sciences, civil works, etc.",
      "Relevant for disciplines like Science, Social Science, Humanities, Archeology, Disaster Management, Engineering, Computer Science, Planning and Architechture, Mining, Agriculture, Population Studies, Medical Science etc."
    ],
    // features: [
    //   { title: 'Feature 1', text: 'Description of Feature 1' },
    //   { title: 'Feature 2', text: 'Description of Feature 2' },
    // ],
    
    dayPlan: [
      {
        daycount: "Day 1",
        Chapter: "Introduction to GIS",
        duration: "1 hours 30 minutes",
        date: "2/10/2023",
        day: "Monday",
        Chapterdes: "Basic concepts: Definition and history, Components of GIS, Recent trends and applications of GIS.",
      },
      {
        daycount: "Day 2",
        Chapter: "Data structure and formats, Spatial data models",
        duration: "1 hours 30 minutes",
        date: "4/10/2023",
        day: "Wednesday",
        Chapterdes: "Data structure and formats, Spatial data models - Raster and vector, Data base design- editing and topology creation in GIS,",
      },
      {
        daycount: "Day 3",
        Chapter: "Spatial and non-spatial data",
        duration: "1 hours 30 minutes",
        date: "6/10/2023",
        day: "Friday",
        Chapterdes: "Linkage between spatial and non-spatial data, Data inputting in GIS. Rectification, Geo-referencing, Root Mean Square (RMS) Error.",
      },
      {
        daycount: "Day 4",
        Chapter: "Data Types and Data Models",
        duration: "1 hours 30 minutes",
        date: "9/10/2023",
        day: "Monday",
        Chapterdes: "Data Types; Spatial Data; Non-Spatial Data, Data Input.",
      },
      {
        daycount: "Day 5",
        Chapter: "GIS Data, Metadata",
        duration: "1 hours 30 minutes",
        date: "11/10/2023",
        day: "Wednesday",
        Chapterdes: "Existing GIS Data, Metadata; Conversion of Existing Data, Creating New Data.",
      },
      {
        daycount: "Day 6",
        Chapter: "More on Data Models",
        duration: "1 hours 30 minutes",
        date: "13/10/2023",
        day: "Friday",
        Chapterdes: "Data Models; Vector Data Model; Raster Data Model; Integration and Comparison of Vector and Raster Data Models.",
      },
      {
        daycount: "Day 7",
        Chapter: "Spatial Data Editing",
        duration: "1 hours 30 minutes",
        date: "16/10/2023",
        day: "Monday",
        Chapterdes: "Types of Digitizing Errors, Causes for Digitizing Errors.",
      },
      {
        daycount: "Day 8",
        Chapter: "Topological Editing and Non-topological Editing",
        duration: "1 hours 30 minutes",
        date: "18/10/2023",
        day: "Wednesday",
        Chapterdes: "Topological Editing and Non-topological Editing.",
      },
      {
        daycount: "Day 9",
        Chapter: "Other Editing Operations",
        duration: "1 hours 30 minutes",
        date: "20/10/2023",
        day: "Friday",
        Chapterdes: "Editing Using Topological Rules.",
      },
      {
        daycount: "Day 10",
        Chapter: "Attribute Data and Data Exploration",
        duration: "1 hours 30 minutes",
        date: "23/10/2023",
        day: "Monday",
        Chapterdes: "Attribute Data in GIS, Attribute Data Entry, Manipulation of Fields and Attribute Data.",
      },
      {
        daycount: "Day 11",
        Chapter: "DataExploration",
        duration: "1 hours 30 minutes",
        date: "25/10/2023",
        day: "Wednesday",
        Chapterdes: "Attribute Data Query, Raster Data Query.",
      },
      {
        daycount: "Day 12",
        Chapter: "Map- Based Data Interpretation",
        duration: "1 hours 30 minutes",
        date: "27/10/2023",
        day: "Friday",
        Chapterdes: "Map- Based Data Interpretation.",
      },
      {
        daycount: "Day 13",
        Chapter: "Spatial Analysis",
        duration: "1 hours 30 minutes",
        date: "30/10/2023",
        day: "Monday",
        Chapterdes: "Spatial Data: Definition, Analysis, Processes & Steps, Software and Tools, Geodatabase Model, Role of Databases in GIS, Creating, Editing and Managing.",
      },
      {
        daycount: "Day 14",
        Chapter: "Classification scheme of GIS Operations",
        duration: "1 hours 30 minutes",
        date: "1/11/2023",
        day: "Wednesday",
        Chapterdes: "Classification scheme of Vector-Based and Raster-Based GIS Operation Raster-Based Techniques: Methods of reclassification, overlay analysis.",
      },
      {
        daycount: "Day 15",
        Chapter: "Digital Terrain Analysis and Modelling",
        duration: "1 hours 30 minutes",
        date: "3/11/2023",
        day: "Friday",
        Chapterdes: "TIN and DEM, Surface representation and analysis, Slope and Aspect, Geographic Visualization Data Classification, Map Comparison.",
      },
      {
        daycount: "Day 16",
        Chapter: "Geo Statistical Analysis Techniques",
        duration: "1 hours 30 minutes",
        date: "6/11/2023",
        day: "Monday",
        Chapterdes: "Introduction to Spatial Interpolation: Control Points, Global Method- Trend surface analysis, regression model",
      },
      {
        daycount: "Day 17",
        Chapter: "Local methods using 3D Analyst",
        duration: "1 hours 30 minutes",
        date: "8/11/2023",
        day: "Wednesday",
        Chapterdes: "Inverse Distance weighted Interpolation, Kriging- Ordinary Kriging and Universal Kriging, GIS and decision support system.",
      },
      {
        daycount: "Day 18",
        Chapter: "Introduction to Analytical Hierarchy Process (AHP)",
        duration: "1 hours 30 minutes",
        date: "10/11/2023",
        day: "Friday",
        Chapterdes: "Introduction to Analytical Hierarchy Process (AHP), basic principal of AHP. Principal and components of multiple criteria decisionmaking.",
      },
    ],

    duration: '6 Weeks',
    numberOfLiveClasses: 18,
    numberOfAssignments: '6+',
    projectsIncluded: 'Hands-on Projects',
    additionalInfo: 'Lecture timings will be decided on mutual consensus',
    price: '₹2,950',
    originalPrice: '₹7,375',
    discount: '60%',
    inclusiveOfGST: true,
    image: image1,
    
    // lecturesPerWeek: 2,
  }, //Next course Below:  
  
  {
      title: 'SPSS Certification',
      slug: `${'SPSS Certification'.toLowerCase().replace(/\s+/g, '-')}`,
      header: 'Certificate Course in Statistical Package for the Social Sciences (SPSS)',
      description: 'Data analysis is one of the most flourishing fields right now as businesses around the world are trying to make sense of their data. However, there are several data analysis tools available in the market, but SPSS is a suite of software programs that analyses scientific data related to the social sciences. It offers a fast-visual modelling environment that ranges from the smallest to the most complex models. SPSS is designed to accommodate a wide variety of variable data formats, including Excel, CSV, SAS, and Stata data files. The data obtained from SPSS is used for surveys, data mining, market research, etc. SPSS training enables you to master all the essential concepts of SPSS for performing data analysis and statistics through hands-on exposure to industry use cases.',
      whatsapp: 'https://chat.whatsapp.com/FdbSxmUWe4yJTVNQvV1zZ2',
      formLink: 'https://forms.gle/EMas47VcUmrUctK78',
      aboutHead: 'Covers pretty much everything you need to know about SPSS',
      detailsPara: 'The course is uniquely designed by top technical experts to ensure the meaningful skill development which enables the candidates to gain insight about technology and make them ready to start/accelerate their carrier immediately after completing this course. SPSS Training course aims to deliver quality training that covers solid fundamental knowledge on core concepts with a practical approach. Such exposure will help learners scale up their skills and perform real-time projects with the best practices. It is a perfect practical and interactive course that gives excellent basic to intermediate knowledge. It includes-',
      details: [
        "Descriptive Statistics - It includes methodologies such as cross-tabulation, frequencies, and descriptive ratio statistics.",
        "Bivariate Statistics - It includes methodologies such as means, nonparametric tests, correlation, and Analysis of Variance (ANOVA).",
        "Predicting numeral outcomes such as linear regression.",
        "Methodologies such as cluster analysis and factor analysis which is great for predicting for identifying groups.",
        "Numerous chart and graph options for visualizing data patterns, such as histograms, bar charts, and scatter plots.",
        "Government entities, educational institutions, survey companies, market researchers, marketing organizations, health researchers, data miners, and many others use it for analysing survey data. It is popular in academic, scientific, and applied research environments.",
      ],
      // features: [
      //   { title: 'Feature 1', text: 'Description of Feature 1' },
      //   { title: 'Feature 2', text: 'Description of Feature 2' },
      // ],
      
      dayPlan: [
        {
          daycount: "Day 1",
          Chapter: "Introductory Statistics: Data types, Measures of Central tendency, SPSS Environment: Data View &amp; Variable View",
          duration: "1 hours 30 minutes",
          date: "7/9/2023",
          day: "Thursday",
          Chapterdes: ''
        },
        {
          daycount: "Day 2",
          Chapter: "Measures of Variability and Shape, Exploratory Data Analysis: Descriptive Statistics",
          duration: "1 hours 30 minutes",
          date: "9/9/2023",
          day: "Saturday",
          Chapterdes: ''
        },
        {
          daycount: "Day 3",
          Chapter: "Normality tests with plots",
          duration: "1 hours 30 minutes",
          date: "12/9/2023",
          day: "Tuesday",
          Chapterdes: ''
        },
        {
          daycount: "Day 4",
          Chapter: "Data Management: Preparation, Computation & Transformation.",
          duration: "1 hours 30 minutes",
          date: "14/9/2023",
          day: "Thursday",
          Chapterdes: ''
        },
        {
          daycount: "Day 5",
          Chapter: "Bivariate analysis- cross tabulation-chi square, Kappa, correlation.",
          duration: "1 hours 30 minutes",
          date: "16/9/2023",
          day: "Saturday",
          Chapterdes: ''
        },
        {
          daycount: "Day 6",
          Chapter: "Graphical Representation of Data: Histogram, Bar plot, Pie chart, Frequency polygon and Bi-variate analysis",
          duration: "1 hours 30 minutes",
          date: "19/9/2023",
          day: "Tuesday",
          Chapterdes: ''
        },
        {
          daycount: "Day 7",
          Chapter: "Parametric tests: t-test (one sample, paired sample & two independent sample),",
          duration: "1 hours 30 minutes",
          date: "21/9/2023",
          day: "Thursday",
          Chapterdes: ''
        },
        {
          daycount: "Day 8",
          Chapter: "One-way ANOVA, Post hoc tests",
          duration: "1 hours 30 minutes",
          date: "23/9/2023",
          day: "Saturday",
          Chapterdes: ''
        },
        {
          daycount: "Day 9",
          Chapter: "Two-way ANOVA, ANCOVA",
          duration: "1 hours 30 minutes",
          date: "26/9/2023",
          day: "Tuesday",
          Chapterdes: ''
        },
        {
          daycount: "Day 10",
          Chapter: "Non-parametric tests: Mann Whitney U test, Wilcoxon sign rank test, one sample run test, Kruskal-Wallis test.",
          duration: "1 hours 30 minutes",
          date: "28/9/2023",
          day: "Thursday",
          Chapterdes: ''
        },
        {
          daycount: "Day 11",
          Chapter: "Linear Regression (Simple & Multiple) and its diagnostics",
          duration: "1 hours 30 minutes",
          date: "30/9/2023",
          day: "Saturday",
          Chapterdes: ''
        },
        {
          daycount: "Day 12",
          Chapter: "Logistic Regression-Binary & Ordinal and its diagnostics",
          duration: "1 hours 30 minutes",
          date: "3/10/2023",
          day: "Tuesday",
          Chapterdes: ''
        },
        {
          daycount: "Day 13",
          Chapter: "Factor Analysis",
          duration: "1 hours 30 minutes",
          date: "5/10/2023",
          day: "Thursday",
          Chapterdes: ''
        },
        {
          daycount: "Day 14",
          Chapter: "Cluster Analysis-Hierarchical &amp; k-means clustering",
          duration: "1 hours 30 minutes",
          date: "7/10/2023",
          day: "Saturday",
          Chapterdes: ''
        },
        {
          daycount: "Day 15",
          Chapter: "Discriminant Analysis",
          duration: "1 hours 30 minutes",
          date: "10/10/2023",
          day: "Tuesday",
          Chapterdes: ''
        },
        {
          daycount: "Day 16",
          Chapter: "Survival Analysis",
          duration: "1 hours 30 minutes",
          date: "12/10/2023",
          day: "Thursday",
          Chapterdes: ''
        },
        {
          daycount: "Day 17",
          Chapter: "Nearest Neighbour Analysis",
          duration: "1 hours 30 minutes",
          date: "14/10/2023",
          day: "Saturday",
          Chapterdes: ''
        },
        {
          daycount: "Day 18",
          Chapter: "Practice & Case Studies",
          duration: "1 hours 30 minutes",
          date: "17/10/2023",
          day: "Tuesday",
          Chapterdes: ''
        },
      ],

      duration: '6 Weeks',
      numberOfLiveClasses: 18,
      numberOfAssignments: '6+',
      projectsIncluded: 'Hands-on Projects',
      additionalInfo: 'Lecture timings will be decided on mutual consensus',
      price: '₹2,950',
      originalPrice: '₹7,375',
      discount: '60%',
      inclusiveOfGST: true,
      image: image1,
      
      // lecturesPerWeek: 2,
    }, //Next course Below:



  ];
  
  export default courses;
  