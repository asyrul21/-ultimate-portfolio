webpackHotUpdate("static/development/pages/projects.js",{

/***/ "./public/static/data/projects.json":
/*!******************************************!*\
  !*** ./public/static/data/projects.json ***!
  \******************************************/
/*! exports provided: slugs, proProjects, academicProjects, personalProjects, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"slugs\":{\"Academic\":[{\"key\":\"rpi\",\"name\":\"Raspberry Pi CNC\"},{\"key\":\"chatbot\",\"name\":\"Chatbot Data Analysis\"}],\"Professional\":[{\"key\":\"esri\",\"name\":\"C# .NET ESRI\"},{\"key\":\"myipcs\",\"name\":\"Big Data (Census)\"},{\"key\":\"webcrawl\",\"name\":\"Python Web Crawl\"}],\"Personal\":[{\"key\":\"wedding\",\"name\":\"Wedding Planner\"},{\"key\":\"wifePort\",\"name\":\"Wife's Portfolio\"},{\"key\":\"ultimatePort\",\"name\":\"Ultimate Portfolio\"},{\"key\":\"recipeBook\",\"name\":\"Recipe Repository\"},{\"key\":\"funfactory\",\"name\":\"Kindergarden Website\"}]},\"proProjects\":{\"esri\":{\"title\":\"Cadu 2 C# and ESRI Development\",\"time\":\"Oct 2018 - Sept 2019\",\"text\":\"For this project I worked with another developer to perform maintenance and enhancements to the software that manages addresses’ geographical information on the Malaysian map. This software is being used internally to update map information regarding for example new household data, removing a household data, editing, and moving properties or roads across the map. The software development stack involved C#, .NET, Oracle DB, and is integrated with the ESRI ArcGIS Engine. Worked independently to fix and resolve various issues and enhancements.\",\"role\":\"Lead Developer\",\"contribution\":\"Fixed over 50+ bugs and did over 30+ feature enhancement on a pre-written code \",\"technology\":[\"C#\",\".NET Framework\",\"OracleDB\",\"ESRIArcGIS\"],\"images\":[\"/static/images/projects/esri/esri1.jpeg\",\"/static/images/projects/esri/esri2.jpeg\",\"/static/images/projects/esri/esri3.jpeg\"]},\"myipcs\":{\"title\":\"Integrated Census (Big Data) Project\",\"time\":\"Oct 2017 - Oct 2018\",\"text\":\"For this project I led a team of six(6) programmers whom I worked with as the Data Management team of a large-scale, national-level Big Data project named MyIPCS (Malaysia Integrated Population Census System). We essentially handled Bi Data preperation - from exporting, cleaning, stemming, then upload them to ElasticSearch. The front-end developers would then query data from this endpoint to build dashboards for users. It was an End-to-end, Big Data processing and analytics web application development, using NodeJS, React and ElasticSearch.\",\"role\":\"Lead Developer\",\"contribution\":\"Address ID Proof of Concept\",\"technology\":[\"NodeJS\",\"ReactJS\",\"ElasticSearch\",\"GraphQL\"],\"images\":[\"/static/images/projects/myipcs/myipcs1.png\",\"/static/images/projects/myipcs/myipcs2.png\",\"/static/images/projects/myipcs/myipcs3.png\"]},\"webcrawl\":{\"title\":\"Web Crawling using Python\",\"time\":\"Sep 2017 - Oct 2017\",\"text\":\"As a Junior Data Engineer, I worked with my superior, who was the Data Scientist, to conduct Big data analytics on customer's insights on the organisation's products and services. My task was to perform web crawling using Python and the Scrapy Web Crawling engine to extract text data from various websites and news portal. The results would then be passed to the Data Scientist for further data analytics tasks. I had to move departments within only one month due to organisational decisions.\",\"role\":\"Junior Data Engineer\",\"contribution\":\"Applied Selenium to automate web browsing, to scrape dynamic web pages.\",\"technology\":[\"Python\",\"Scrapy Web Crawling Engine\",\"Beautiful Soup\",\"XPath\"],\"images\":[\"/static/images/projects/myipcs/webcrawl1.png\",\"/static/images/projects/myipcs/webcrawl12.png\",\"/static/images/projects/myipcs/webcrawl3.png\"]}},\"academicProjects\":{\"rpi\":{\"title\":\"Using Raspberry Pi 3 Model B to Drive a CNC Machine in Real Time\",\"time\":\"2017\",\"intro\":\"This was part of my Bachelor degree's Final Year Project (FYP), which I spent over six months to complete. The project was well out of my degree's syllabus scope, as it covered various concepts such as multi-threading, parallel-processing, electrical signals and Single Board Computers. I developed two main programs; the G-Code Interpreter, and the Interpolation program. These two programs work together to drive an industry-grade Computerised Numerical Control (CNC) machine, which was connected to the Raspberry Pi's pins. \",\"main\":\"A digital image is first converted into a G-Code using a Computer-Aided Design (CAD) and Computer-Aided Manufacturing (CAM) softwares. I would then execute the G-code Interpreter that reads this G-Code file and translate it into a signal file, which is basically a file containing numbers. The Interpolation Program then takes this signal file to produce electrical pulses that drives the CNC machine to move a pen attached to it and draw the digital image on a piece of paper.\",\"technology\":\"The execution of this project exposed myself to an extensive amount of linux commands, since Raspberry Pi runs the Raspbian OS, which is based on Linux. I also did all developments on a seperate machine running Linux Debian. Development wise, the two programs were written heavily in C++/C++11. Parallel processing and multi-threading had to be implemented as signals need to be generated concurrently to the CNC machine's servo motors. I was also exposed to various Computer-Aided Design (CAD) and Computer-Aided Manufacturing (CAM) softwares, such as AutoCAD and PyCAM respectively.\",\"results\":\"The end product of this project opened my eyes to the power of Software Engineering, as those two programs I wrote actually drove the CNC machine to draw images on a piece of paper. Some mathematics was involved as well, hence I was very happy and blown away to see those numbers work together to produce real results. The full report/thesis for this project is available upon request.\",\"videos\":[\"https://www.youtube.com/watch?v=18HlXoZ8_5g\",\"https://www.youtube.com/watch?v=18HlXoZ8_5g\",\"https://www.youtube.com/watch?v=18HlXoZ8_5g\"]},\"chatbot\":{\"title\":\"A Chatbot to Facilitate Data Analysis\",\"time\":\"TBC 2020\",\"intro\":\"This is my MSc Project, in which I will be building a chatbot designed to faciliate Big Data preparation by helping users to choose the appropriate pipeline functions based on a set of predefined questions and answers. The chatbot will be integrated with a GUI-powered Data Analysis workflow tool to give the answers that users expect. This project is currently ongoing, hence the page will be updated once everything is complete.\",\"main\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\",\"technology\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\",\"results\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\"}},\"personalProjects\":{\"wifePort\":{\"title\":\"Wife's Portfolio\",\"time\":\"2018\",\"link\":\"http://www.yasminraihan.com/\",\"intro\":\"Sometime in 2018 I helped my wife to develop her own Portfolio Website, to store all past projects that she was involved in, accademically and professionally. We spent around two(2) months for the completion of this full end-to-end, design-to-deploy development project. The pages are responsive as well as optimised for mobile experience as well.\",\"main\":\"The webpage was first designed using Figma, a web design software, similar to Sketch. There were data going in and out of this webpage, hence we kept things as simple as possible and focues primarily on its front-end design and feel.\",\"technology\":\"The core technology underlining this project was plain HTML, CSS3, but we implmented things in a full-stack way, except that we did not connect a database : NodeJS and Express in the backend, JQuery for DOM manipulation, and Ajax for optimisation. For deployment, we used Heroku, and purchased a domain from a Domain Provider. We also used Github to keep track of the code changes and versioning.\",\"results\":\"The end product of this project was a minimalistic but filled with the essential information that would keep track of my wife's past experiences and work portfolio. One way to improve this website is to implement new technologies such GatsbyJS or NextJS to improve the performance and speed of this website further. Another improvement is to abstract away data components of the website from the development code, hence enhancing software maintainability.\"},\"ultimatePort\":{\"title\":\"My Portfolio\",\"time\":\"TBC 2020\",\"intro\":\"This could be my own portfolio that stores all my acadmic and professional records, but what I designed it to be much more than just that. I designed it to also store useful contents that users can visit and learn a thing or two, and then share them if they think some of the articles might be useful. I aim to complete this project by the end of 2020. Therefore, this webpage shall be updated further as the project completes.\",\"main\":\"Some of the other contents that may be useful for the users include my travel blog, which could store and share my travel experiences around the world. We aim to provide feedback and opinions on for example the flight, accommodation, activities, and overall experiences, so users could read and make necessary preparations should they plan to travel to the same places as we did.\",\"technology\":\"For this project, I implemented NextJS, providing server-side rendering technology for fast browsing experience. At the point of writing this there is no need for a database connection, but this may subject to change. It would also be deployed on to heroku.\",\"results\":\"The result of this project is yet to be descibed, once the project is finished.\"},\"wedding\":{\"title\":\"Wedding Planning System\",\"link\":\"http://www.asyrulmarriesyasmin.com\",\"time\":\"2018\",\"intro\":\"Planning a wedding is not an easy task, especially when we have various tasks delegated amongst our own family members. The aim for this project was to help planning a wedding easier, by registering all required tasks into the system, and each task is monitored or managed by one person. This was my first full-stack web development project,, after I enrolled in a course called the Web Developer Bootcamp (Udemy), and completed the whole 46-hour video course to gain all the necessary knowledge.\",\"main\":\"This project covers a wide range of web development topics, such as HTML, CSS, Bootstrap, Authentication, Authorisation, Database, Express, and Deployment. Users are able to create a task, and assign this task to an individual. For each of these tasks, there is a page for them, where users can comment and do some minor discussion regarding the topic. The owner of the task, i.e. the person the task was assigned to, is able to delete/remove comments, and the progress in the task description, as well as to update the 'progress bar'.\",\"technology\":\"This project covers all aspect of a CRUD application (Create, Read, Update and Delete). I used NodeJS, Express, MongoDB and Bootstrap. I deployed it on Heroku, but for the development environment I used the Amazon Web Services (AWS) Cloud 9. GitHub was also used for source tracking.\",\"results\":\"The result of this project is full-fledged NodeJS application that allows users to log in, create a task, update their tasks, comment, delete and so on. The website also contains any relevant information related to the wedding, such as the map, the invitation card, and to monitor the number of guests. One way this project could have been improved is by implementing a Front-End framework, such as Angular or ReactJS.\"},\"funfactory\":{\"title\":\"Kindergarten Website\",\"time\":\"TBC 2020\",\"intro\":\"For this project I will be building a website for a Kindergarten Business owned by my mother-in-law. The sole purpose of this website is to provide necessary information about the business, as well as to provide contact information for potential customers. This project is currently under the design phase, and I plan to implement Gatsby JS into this project. We aim to complete this project by the end of 2020.\",\"main\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\",\"technology\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\",\"results\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\"},\"recipeBook\":{\"title\":\"Recipe Repository\",\"time\":\"TBC 2021\",\"intro\":\"This is the project that I aspire to complete by the end of 2021. The basic idea is to store all recipes from my mother's physical recipe book into a Graph-based datastore, to implement an achitechture similar to those of Search Engines or Wikepedia. This way, the system is able to process and return answers for queries based on natural language, such as 'How many grams of butter do I need to bake the Marble Cake' or 'How long should I leave the jelly in the fridge'. This would be the most challenging personal project for me, considering the amount of technology involved in the development.\",\"main\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\",\"technology\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\",\"results\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\"}}}");

/***/ })

})
//# sourceMappingURL=projects.js.53bbdd83ea832d28ee7f.hot-update.js.map