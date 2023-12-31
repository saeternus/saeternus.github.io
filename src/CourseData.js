import dav from "./assets/dav.png";
import crm from "./assets/CRM.jpg";
import globe from "./assets/globe.jpg";
import stats from "./assets/stats.avif";
import satellite from "./assets/satellite.avif";
import data from "./assets/data.jpeg";
import project from "./assets/project.jpeg";

const courses = [
  {
    title: 'GIS Certification',
    slug: 'gis',
    startdate: 'January 7, 2024',
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
        Chapterdes: "Overview, A Brief History of GIS, Essential Components of GIS, Software Installation",
      },
      {
        daycount: "Day 2",
        Chapter: "GIS Basics I",
        duration: "1 hours 30 minutes",
        date: "4/10/2023",
        day: "Wednesday",
        Chapterdes: "GIS System, Projection System, Hands on Practice",
      },
      {
        daycount: "Day 3",
        Chapter: "GIS Basics II",
        duration: "1 hours 30 minutes",
        date: "6/10/2023",
        day: "Friday",
        Chapterdes: "Geodatabase Preparation, Type of GIS Layers, Hands on Practice",
      },
      {
        daycount: "Day 4",
        Chapter: "GIS Basics III",
        duration: "1 hours 30 minutes",
        date: "9/10/2023",
        day: "Monday",
        Chapterdes: "Georeferencing of Vector, Georeferencing of Raster, Projection Transformation, Hands on Practice",
      },
      {
        daycount: "Day 5",
        Chapter: "GIS Layer Editing",
        duration: "1 hours 30 minutes",
        date: "11/10/2023",
        day: "Wednesday",
        Chapterdes: "Digitisation of Point, Line and Polygon, Filling Attributes, Attribute Joining, Area and Perimeter Calculation, Calculations in Attributes, Hands on Practice",
      },
      {
        daycount: "Day 6",
        Chapter: "Data Management Tools",
        duration: "1 hours 30 minutes",
        date: "13/10/2023",
        day: "Friday",
        Chapterdes: "Vector Operations in GIS Platform, ArcGIS-Clip Management and Mosaic, Raster and Vector Data Clipping, Making Sample Location with GPS Location, Hands on Practice",
      },
      {
        daycount: "Day 7",
        Chapter: "Spatial Analyst I",
        duration: "1 hours 30 minutes",
        date: "16/10/2023",
        day: "Monday",
        Chapterdes: "Extraction by points, Extraction by mask, Maths tools, Reclassify, Hands on Practice",
      },
      {
        daycount: "Day 8",
        Chapter: "Spatial Analyst II",
        duration: "1 hours 30 minutes",
        date: "18/10/2023",
        day: "Wednesday",
        Chapterdes: "Condition, Interpolation, Hands on Practice",
      },
      {
        daycount: "Day 9",
        Chapter: "Spatial Analyst III",
        duration: "1 hours 30 minutes",
        date: "20/10/2023",
        day: "Friday",
        Chapterdes: "Hydrology Tool, Raster Calculator, Hands on Practice",
      },
      {
        daycount: "Day 10",
        Chapter: "Spatial Analyst IV",
        duration: "1 hours 30 minutes",
        date: "23/10/2023",
        day: "Monday",
        Chapterdes: "Zonal Stats, Table Calculation, Rater & Vector Analysis, Hands on Practice",
      },
      {
        daycount: "Day 11",
        Chapter: "Use cases of tools",
        duration: "1 hours 30 minutes",
        date: "25/10/2023",
        day: "Wednesday",
        Chapterdes: "Watershed analysis, Contour preparation, Slope, Aspect and Hill Shade analysis, Hands on Practice",
      },
      {
        daycount: "Day 12",
        Chapter: "Query Builder",
        duration: "1 hours 30 minutes",
        date: "27/10/2023",
        day: "Friday",
        Chapterdes: "Query Algorithm, Writing an equation, Hands on Practice",
      },
      {
        daycount: "Day 13",
        Chapter: "Hands on Practise of Vector Analysis",
        duration: "1 hours 30 minutes",
        date: "30/10/2023",
        day: "Monday",
        Chapterdes: "Case Study for LULC Change",
      },
      {
        daycount: "Day 14",
        Chapter: "Hands on Practise of Raster Analysis",
        duration: "1 hours 30 minutes",
        date: "1/11/2023",
        day: "Wednesday",
        Chapterdes: "Case study for Change Detection",
      },
      {
        daycount: "Day 15",
        Chapter: "Map Preparation and Data Export",
        duration: "1 hours 30 minutes",
        date: "3/11/2023",
        day: "Friday",
        Chapterdes: "Scale Fixing, North Direction, Annotation, Exporting Map, Hands on Practice",
      },
      {
        daycount: "Day 16",
        Chapter: "GIS Open-Source Platform",
        duration: "1 hours 30 minutes",
        date: "6/11/2023",
        day: "Monday",
        Chapterdes: "Q GIS, Vector Operation, Raster Operation, GIS analysis, Map Preparation, Hands on Practice",
      },
    ],

    duration: '6 Weeks',
    numberOfLiveClasses: 18,
    numberOfAssignments: '6+',
    projectsIncluded: 'Hands-on Projects',
    additionalInfo: 'Lecture timings will be decided as per your availability',
    price: '₹3,540',
    originalPrice: '₹7,000',
    discount: '50%',
    inclusiveOfGST: true,
    image: globe,
    
    // lecturesPerWeek: 2,
  }, //Next course Below:  
    //Course2
  {
      title: 'SPSS Certification',
      slug: 'spss',
      startdate: 'soon!',
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
          Chapter: "Introductory Statistics: Data types, Measures of Central tendency, SPSS Environment: Data View & Variable View",
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
          Chapter: "Data Management: Preparation, Computation & Transformation",
          duration: "1 hours 30 minutes",
          date: "14/9/2023",
          day: "Thursday",
          Chapterdes: ''
        },
        {
          daycount: "Day 5",
          Chapter: "Bivariate analysis - cross tabulation - chi square, Kappa, correlation",
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
          Chapter: "One-way ANOVA, Post hoc tests, Two-way ANOVA, ANCOVA",
          duration: "1 hours 30 minutes",
          date: "23/9/2023",
          day: "Saturday",
          Chapterdes: ''
        },
        {
          daycount: "Day 9",
          Chapter: "Non-parametric tests: Mann Whitney U test, Wilcoxon sign rank test, one sample run test, Kruskal-Wallis test",
          duration: "1 hours 30 minutes",
          date: "26/9/2023",
          day: "Tuesday",
          Chapterdes: ''
        },
        {
          daycount: "Day 10",
          Chapter: "Linear Regression (Simple & Multiple) and its diagnostics, Logistic Regression-Binary & Ordinal and its diagnostics",
          duration: "1 hours 30 minutes",
          date: "28/9/2023",
          day: "Thursday",
          Chapterdes: ''
        },
        {
          daycount: "Day 11",
          Chapter: "Factor Analysis",
          duration: "1 hours 30 minutes",
          date: "30/9/2023",
          day: "Saturday",
          Chapterdes: ''
        },
        {
          daycount: "Day 12",
          Chapter: "Cluster Analysis-Hierarchical & k-means clustering",
          duration: "1 hours 30 minutes",
          date: "3/10/2023",
          day: "Tuesday",
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
      additionalInfo: 'Lecture timings will be decided as per your availability',
      price: '₹2,950',
      originalPrice: '₹7,375',
      discount: '60%',
      inclusiveOfGST: true,
      image: stats,
      
      // lecturesPerWeek: 2,
    }, //Next course Below:
    //Course3
    {
      title: 'Python Data Analysis Certification',
      slug: 'python-data-analysis-visualisation',
      startdate: 'December 16, 2023',
      header: 'Certificate Course in Python - Data Analysis and Visualisation',
      description: "Unlock the power of Python for data analysis and visualization in this comprehensive course. From mastering fundamental Python concepts to handling datasets and conducting exploratory data analysis, you'll gain the skills to visualize data effectively. Explore a variety of plots, charts, and statistical techniques, and even delve into geospatial data visualization. Elevate your proficiency in Python and transform raw data into meaningful insights. Join us on this engaging journey of learning and acquire the expertise needed for impactful data-driven decision-making.",
      whatsapp: 'https://chat.whatsapp.com/HkrLN4L6LdaGuhj1TqkYWT',
      formLink: 'https://forms.gle/GnXUAxDczULkvQQF6',
      aboutHead: 'Covers pretty much everything you need to know about Python',
      detailsPara: 'Dive into the world of Python and empower your data-driven journey. This course covers Python basics, data preprocessing, exploratory data analysis, and advanced visualization techniques. From matplotlib to geospatial data handling, elevate your skills and transform data into compelling visual narratives. Get ready to unleash the potential of Python for impactful data analysis.',
      details: [
        "Python fundamentals for data manipulation",
        "Comprehensive data wrangling and preprocessing",
        "Exploratory data analysis with pandas and numpy",
        "Diverse visualization techniques with matplotlib",
        "Geospatial data visualization using folium",
      ],
      
      dayPlan : [
        {
          daycount: "Day 1",
          Chapter: "Python - Introduction, variables, constants, strings, lists and maps.",
          duration: "1 hour 30 minutes",
        },
        {
          daycount: "Day 2",
          Chapter: "Python - conditionals, loops and functions.",
          duration: "1 hour 30 minutes",
        },
        {
          daycount: "Day 3",
          Chapter: "Python - classes and packages. How to read documentation?",
          duration: "1 hour 30 minutes",
        },
        {
          daycount: "Day 4",
          Chapter: "Importing/loading datasets. Data wrangling, preprocessing and cleanup. Handling excel, csv and dataframes.",
          duration: "1 hour 30 minutes",
        },
        {
          daycount: "Day 5",
          Chapter: "Exploratory data analysis with pandas and numpy. Basic statistical analysis like mean, median, mode, standard deviation, percentiles etc.",
          duration: "1 hour 30 minutes",
        },
        {
          daycount: "Day 6",
          Chapter: "Plotting with matplotlib. Visually appealing visualizations for papers and presentations.",
          duration: "1 hour 30 minutes",
        },
        {
          daycount: "Day 7",
          Chapter: "Area plots, histograms, bar charts, pie charts, box plots, and scatter plots.",
          duration: "1 hour 30 minutes",
        },
        {
          daycount: "Day 8",
          Chapter: "Classification and regression decision trees. Linear regression, logistic regression.",
          duration: "1 hour 30 minutes",
        },
        {
          daycount: "Day 9",
          Chapter: "Handling 3D data. Bubble plots, heatmaps and 3D bar charts.",
          duration: "1 hour 30 minutes",
        },
        {
          daycount: "Day 10",
          Chapter: "Normality, Statistical tests, confidence interval estimates etc.",
          duration: "1 hour 30 minutes",
        },
        {
          daycount: "Day 11",
          Chapter: "Visualizing geospatial data with folium.",
          duration: "1 hour 30 minutes",
        },
        {
          daycount: "Day 12",
          Chapter: "Model evaluation and refinement. Testing.",
          duration: "1 hour 30 minutes",
        },
      ],
    

      duration: '6 Weeks',
      numberOfLiveClasses: 12,
      numberOfAssignments: '6+',
      projectsIncluded: 'Hands-on Projects',
      additionalInfo: 'Lecture timings will be decided as per your availability',
      price: '₹2,950',
      originalPrice: '₹7,375',
      discount: '60%',
      inclusiveOfGST: true,
      image: dav,
      
      // lecturesPerWeek: 2,
    }, //Next course Below:
    //Course4
    {
      title: 'Remote Sensing Certification',
      slug: 'remote-sensing',
      startdate: 'December 25, 2023',
      header: 'Certificate Course in Remote Sensing',
      description: "The Certificate Course in Remote Sensing offers a comprehensive training program, covering essential principles of remote sensing and hands-on experience with relevant software. This course provides practical skills in image processing, classification, and spatial modeling, enabling participants to harness the power of remote sensing data for environmental monitoring, resource management, and GIS applications. ",
      whatsapp: 'https://chat.whatsapp.com/C1JrWWEMrbwBp785QnFNVj',
      formLink: 'https://forms.gle/4XCdgsjLha6iwnga8',
      aboutHead: 'Covers pretty much everything you need to know about Remote Sensing',
      detailsPara: 'The Remote Sensing Certification Course offers a comprehensive exploration of remote sensing principles and practical applications using relevant software. Beginning with foundational concepts, participants learn satellite image processing techniques, image classification, and analysis methodologies. Advanced technologies, including LiDAR and hyperspectral data, are covered alongside real-world use cases and applications of UAVs in remote sensing. Hands-on practice sessions reinforce theoretical knowledge, preparing participants for certification through a structured curriculum. Topics include:',
      details: [
        "Satellite Image Processing: FCC preparation, image referencing, and enhancement.",
        "Image Classification and Analysis: Digital classification, supervised/unsupervised classification, and on-screen visual interpretation.",
        "Advanced Technologies: Delve into LiDAR, microwave, and hyperspectral data, understanding their applications and advancements.",
        "Real-world Use Cases: Examine practical applications through case studies, highlighting the versatility of remote sensing technologies.",
        "Practical Hands-on Practice: Engage in extensive hands-on sessions, reinforcing skills in utilizing software for practical applications.",         
    ],
      dayPlan : [
        {
          daycount: "Day 1",
          Chapter: "Introduction to Remote Sensing: A Short History of Remote Sensing; Introduction to Digital Data; Important Basic Concepts of Remote Sensing; Geographic Concepts",
          duration: "1 hour 30 minutes",
          date: "25/12/2023",
          day: "Monday",
        },
        {
          daycount: "Day 2",
          Chapter: "Satellite Image Technology and Basics: The Electromagnetic Spectrum; Passive/Active Sensors; Remote Sensing Sensor Platforms; Analogue Aerial Photography; Digital Imagery; Imagery Types",
          duration: "1 hour 30 minutes",
          date: "29/12/2023",
          day: "Friday",
        },
        {
          daycount: "Day 3",
          Chapter: "Image Processing Software Installation Demo",
          duration: "1 hour 30 minutes",
          date: "1/01/2024",
          day: "Monday",
        },
        {
          daycount: "Day 4",
          Chapter: "Satellite Image Pre Processing-I: Satellite Data Downloading; FCC Preparation; Colour Matching; Hands on Practice",
          duration: "1 hour 30 minutes",
          date: "5/01/2024",
          day: "Friday",
        },
        {
          daycount: "Day 5",
          Chapter: "Satellite Image Pre Processing-II: Image Pre-Processing; Hands on Practice",
          duration: "1 hour 30 minutes",
          date: "8/01/2024",
          day: "Monday",
        },
        {
          daycount: "Day 6",
          Chapter: "Satellite Image Pre Processing-III: Image Referencing and Transformation; Image Mosaics; Hands on Practice",
          duration: "1 hour 30 minutes",
          date: "12/01/2024",
          day: "Friday",
        },
        {
          daycount: "Day 7",
          Chapter: "Hands on Practice for Satellite Image Pre Processing",
          duration: "1 hour 30 minutes",
          date: "15/01/2024",
          day: "Monday",
        },
        {
          daycount: "Day 8",
          Chapter: "Image Processing-I: Image Enhancement; Hands on Practice",
          duration: "1 hour 30 minutes",
          date: "19/01/2024",
          day: "Friday",
        },
        {
          daycount: "Day 9",
          Chapter: "Image Processing-II: Image Fusion; Hands on Practice",
          duration: "1 hour 30 minutes",
          date: "22/01/2024",
          day: "Monday",
        },
        {
          daycount: "Day 10",
          Chapter: "Image Classification-I: General Introduction; Vector File Creation; Raster File Creation; Hands on Practice",
          duration: "1 hour 30 minutes",
          date: "26/01/2024",
          day: "Friday",
        },
        {
          daycount: "Day 11",
          Chapter: "Image Classification-II: Digital Classification; Image Classification Unsupervised; Image Classification Supervised; Hands on Practice",
          duration: "1 hour 30 minutes",
          date: "29/01/2024",
          day: "Monday",
        },
        {
          daycount: "Day 12",
          Chapter: "Image Classification-III: On Screen Visual Interpretation; Change Detection; Vegetation Indices Analysis; Hands on Practice",
          duration: "1 hour 30 minutes",
          date: "2/02/2024",
          day: "Friday",
        },
        {
          daycount: "Day 13",
          Chapter: "Hands on Practice for Image Classification",
          duration: "1 hour 30 minutes",
          date: "5/02/2024",
          day: "Monday",
        },
        {
          daycount: "Day 14",
          Chapter: "Satellite Image Analysis-I: Attribute Formation; Colour Coding; Hands on Practice",
          duration: "1 hour 30 minutes",
          date: "9/02/2024",
          day: "Friday",
        },
        {
          daycount: "Day 15",
          Chapter: "Satellite Image Analysis-II: Area Calculation; Statistics Generation",
          duration: "1 hour 30 minutes",
          date: "12/02/2024",
          day: "Monday",
        },
        {
          daycount: "Day 16",
          Chapter: "Advanced Technology of Remote Sensing: Brief Description of Optical, Microwave, LiDAR & Hyperspectral Data; Advancement of Mivrowave, LiDAR and Hyperspectral on Optical Data; Use Cases of Various Aspects of Remote Sensing; UAV (Unmanned Aerial Vehicle)",
          duration: "1 hour 30 minutes",
          date: "16/02/2024",
          day: "Friday",
        },
      ],
    

      duration: '8 Weeks',
      numberOfLiveClasses: 16,
      numberOfAssignments: '8+',
      projectsIncluded: 'Hands-on Projects',
      additionalInfo: 'Lecture timings will be decided as per your availability',
      price: '₹2,990',
      originalPrice: '₹10,700',
      discount: '72%',
      inclusiveOfGST: true,
      image: satellite,
      
      // lecturesPerWeek: 2,
    }, //Next course Below:
    //Course5
    {
      title: 'Research Methodology - Research Design and Writing',
      slug: 'research-methodology-research-design-and-writing',
      startdate: 'January 16, 2024',
      header: 'Certificate Course in Research Methodology - Research Design and Writing',
      description: "Embark on a transformative journey into the realm of research methodology. From laying the groundwork with fundamentals and diverse methodologies to navigating the intricacies of formulating hypotheses and writing impactful papers, each class unfolds a new chapter. Delve into practical insights, enhance your writing skills, and master the art of effective presentations. Join us to foster your passion for research and equip yourself with the tools needed for scholarly success.",      
      whatsapp: 'https://chat.whatsapp.com/HLFjC7Usbs12NDdY0pR1fV',
      formLink: 'https://forms.gle/EcBkBU18eM3o96S38',
      aboutHead: 'Covers fundamental aspects of Research Methodology pertaining to Research Design and Writing',
      detailsPara: "Elevate your research skills with our comprehensive Research Methodology Certificate Course. This course is meticulously crafted to provide a deep understanding of fundamental research principles and methodologies.",
      details: [
        "Dive into key research processes and designs.",
        "Explore various research methods and techniques.",
        "Formulate impactful research problems and hypotheses.",
        "Develop effective literature review and reading skills.",
        "Enhance your report writing and citation proficiency.",
        "Learn presentation skills, internet utilization, and showcasing your work."
      ],
        dayPlan: [
          {
            daycount: "Day 1",
            Chapter: "Fundamentals of Research: Importance & Scope; Research: Meaning, Types, Objectives, Characteristics; Positivism and Post Positivism to Research; Introducing the Idea of Research in Social Sciences; Limitation of Research",
            duration: "1 hour 30 minutes",
          },
          {
            daycount: "Day 2",
            Chapter: "Research Process; Research Designs and Variables; Vectoring and Examples",
            duration: "1 hour 30 minutes",
          },
          {
            daycount: "Day 3",
            Chapter: "Various Methods and Techniques of Research",
            duration: "1 hour 30 minutes",
          },
          {
            daycount: "Day 4",
            Chapter: "Formulation of Research Problem; Articulating your Synopsis; How to map the thesis to a claim?",
            duration: "1 hour 30 minutes",
          },
          {
            daycount: "Day 5",
            Chapter: "Formulation of Hypothesis: Concepts, Types, Sources; Characteristics of a Good Hypothesis; Hypothesis testing and Evaluation Design",
            duration: "1 hour 30 minutes",
          },
          {
            daycount: "Day 6",
            Chapter: "How to read a research paper?; Review of Literature; Referencing System",
            duration: "1 hour 30 minutes",
          },
          {
            daycount: "Day 7",
            Chapter: "Precaution in Preparing the Research Report; The Mechanics of Writing: Report, Dissertation, Thesis; Index/Content, Appendix, Footnotes, Endnotes, Use of Diacritical Marks",
            duration: "1 hour 30 minutes",
          },
          {
            daycount: "Day 8",
            Chapter: "Quotation, Citation, Bibliographical References; Drawing Conclusion, Giving Suggestions and Recommendations; Claims and Implied Evaluation",
            duration: "1 hour 30 minutes",
          },
          {
            daycount: "Day 9",
            Chapter: "Writing Abstract, Book Review, Content Writing; Writing and Editing Research Papers; How to Avoid Plagiarism",
            duration: "1 hour 30 minutes",
          },
          {
            daycount: "Day 10",
            Chapter: "Formulation of Research Proposal; How to Ask for Funding/Collaboration?; How to Give a Presentation",
            duration: "1 hour 30 minutes",
          },
          {
            daycount: "Day 11",
            Chapter: "Writing Well-Formatted Papers: LATEX and Overleaf",
            duration: "1 hour 30 minutes",
          },
          {
            daycount: "Day 12",
            Chapter: "Use of Internet in Research: Email, Google Scholar, Interaction through Social Networking and Other Channels; How to Showcase your Work on the Web?; Understanding Impact Factor, Citations, H-index etc.",
            duration: "1 hour 30 minutes",
          },
        ],

      duration: '6 Weeks',
      numberOfLiveClasses: 12,
      numberOfAssignments: '6+',
      projectsIncluded: 'Hands-on Projects',
      additionalInfo: 'Lecture timings will be decided as per your availability',
      price: '₹2,950',
      originalPrice: '₹8,200',
      discount: '64%',
      inclusiveOfGST: true,
      image: crm,

    }, //Next course Below:
    //Course6

    {
     title: 'Research Methodology Data Collection and Analysis',
     slug: 'research-methodology-data-collection-and-analysis',
     startdate: 'March 16, 2024',
     header: 'Certificate Course in Research Methodology - Data Collection and Analysis',
     description: "Join us to master the intricacies of data collection and analysis in research. Explore the qualities of a researcher, delve into sampling techniques, and design effective questionnaires. Get hands-on with data preprocessing, Python-based exploratory data analysis, and visualization. This course is tailored for students eager to enhance their skills in collecting, processing, and analyzing data for impactful research.",      
      whatsapp: 'https://chat.whatsapp.com/HLFjC7Usbs12NDdY0pR1fV',
      formLink: 'https://forms.gle/waNVN81LwwTR5Mwh8',
      aboutHead: 'Covers fundamental aspects of Research Methodology pertaining to Data Collection and Analysis',
      detailsPara: "Embark on a profound journey of research exploration with our course on Research Methodology: Data Collection and Analysis. Designed for aspiring researchers and data enthusiasts, this course offers a holistic understanding of essential research processes, from sampling techniques to advanced data analysis using Python. Here are a few key highlights:",
      details: [
        "Master essential techniques for qualitative and quantitative research methodologies.",
        "Dive into practical sessions covering Python, exploratory data analysis, and handling large datasets.",
        "Explore crucial aspects like sampling design, hypothesis formulation, and questionnaire design.",
        "Apply statistical tools like SPSS for data analysis and visualization.",
        "Cover a broad range of topics, from remote sensing to GIS, enhancing your data collection and analysis toolkit.",
      ],
      dayPlan: [
        {
          daycount: "Day 6",
          Chapter: "Qualities of Researcher; Attitude Measuring and Observation; Importance of Velocity; Preparing your Elevator Pitch",
          duration: "1 hour 30 minutes",
        },
        {
          daycount: "Day 7",
          Chapter: "Sampling Design Techniques: Concepts and Types; Selection of Suitable Sampling Techniques; Sampling Size Decision; Sampling Error",
          duration: "1 hour 30 minutes",
        },
        {
          daycount: "Day 8",
          Chapter: "Data Types and Sources: Primary and Secondary; Application of Sampling in various types; User Study",
          duration: "1 hour 30 minutes",
        },
        {
          daycount: "Day 9",
          Chapter: "Designing Questionnaire/Interview Schedule",
          duration: "1 hour 30 minutes",
        },
        {
          daycount: "Day 10",
          Chapter: "Data Preprocessing: Data Preparation, Tabulation, Coding and Editing; Graphical Representation and Mapping",
          duration: "1 hour 30 minutes",
        },
        {
          daycount: "Day 11",
          Chapter: "Introduction to Python; Exploratory Data Analysis with Python; Handling Large Excel and CSV files Using Open Street Maps",
          duration: "1 hour 30 minutes",
        },
        {
          daycount: "Day 12",
          Chapter: "More Python concepts; Data Analysis and Visualisation with Python",
          duration: "1 hour 30 minutes",
        },
        {
          daycount: "Day 1",
          Chapter: "Application of Remote Sensing in Research",
          duration: "1 hour 30 minutes",
        },
        {
          daycount: "Day 2",
          Chapter: "Application of GIS in Research",
          duration: "1 hour 30 minutes",
        },
        {
          daycount: "Day 3",
          Chapter: "Use of Statistical Techniques in Research",
          duration: "1 hour 30 minutes",
        },
        {
          daycount: "Day 4",
          Chapter: "Data Analysis and Visualisation with SPSS",
          duration: "1 hour 30 minutes",
        },
        {
          daycount: "Day 5",
          Chapter: "Scale Techniques: Concepts, Types, Rating and Ranking Scale; Scale Construction Techniques, Multidimensional Scaling",
          duration: "1 hour 30 minutes",
        },
      ],

          duration: '6 Weeks',
          numberOfLiveClasses: 12,
          numberOfAssignments: '6+',
          projectsIncluded: 'Hands-on Projects',
          additionalInfo: 'Lecture timings will be decided as per your availability',
          price: '₹2,950',
          originalPrice: '₹8,200',
          discount: '64%',
          inclusiveOfGST: true,
          image: data,

    }, //Next course Below:
    //Course7
    {
      title: 'Remote Sensing & GIS Project',
      slug: 'remote-sensing-gis-project',
      startdate: 'next week!',
      header: 'Research Project in Remote Sensing & GIS',
      description: "Join us to work on your very own research project or pick from one of our ideas that aligns with your interests. This will involve working with our experts to apply your Remote Sensing and GIS skills to real world case studies. In the end, you get an opportunity to publish a research paper!",      
       whatsapp: 'https://chat.whatsapp.com/CxMeIeJcX5v4NDtE0Inld2',
       formLink: 'https://forms.gle/jCB9H6QSXfTuEzSj7',
       aboutHead: 'Use your Remote Sensing and GIS skills in the real world!',
       detailsPara: "This program shall take you through a step by step journey through a research project of your choice involving Remote Sensing and GIS. You will be mentored by out expert team with meetings every week with continuous guidance and feedback. Here are a few key highlights:",
       details: [
         "Make a full scale project for your resume to showcase your skills.",
         "One-on one mentorship with guidance and feedback at each stage.",
         "No time limit. Work flexibly!",
         "Apply your Remote Sensing and GIS skills to practical case studies.",
         "Publish a paper at the end!",
       ],
       dayPlan: [
         {
           Chapter: "Topic Discussion",
           duration: "30+ minutes",
         },
         {
           Chapter: "Synopsis Draft",
           duration: "30+ minutes",
         },
         {
           Chapter: "Data Collection and Cleanup",
           duration: "30+ minutes",
         },
         {
           Chapter: "Data Analysis",
           duration: "30+ minutes",
         },
         {
           Chapter: "Data Management",
           duration: "30+ minutes",
         },
         {
           Chapter: "Mapping and Visualisation",
           duration: "30+ minutes",
         },
         {
           Chapter: "Presentation",
           duration: "30+ minutes",
         },
         {
           Chapter: "Report Writing",
           duration: "30+ minutes",
         },
       ],
           duration: '8 Weeks',
           numberOfLiveClasses: 8,
           numberOfAssignments: '4+',
           projectsIncluded: 'Hands-on Projects',
           additionalInfo: 'Lecture timings will be decided as per your availability',
           price: '₹2,596',
           originalPrice: '₹9,600',
           discount: '73%',
           inclusiveOfGST: true,
           image: project,
 
     }, //Next course Below:
     //Course8
  ];
  
  export default courses;
  