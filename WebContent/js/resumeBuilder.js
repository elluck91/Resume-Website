/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
    "name" : "Lukasz Juraszek",
    "role" : "Software Engineer",
    "contacts" : {
        "mobile" : "(408) 987 - 1134",
        "email" : "juraszeklukasz@gmail.com",
        "github" : "elluck91",
        "LinkedIn" : "lukaszjuraszek",
        "location" : "Santa Clara, CA, US"
    },
    "biopic" : "images/thumb.png",
    "welcomeMessage" : "I am a second year Software Engineering student with passion for improving lives with technology. I am seeking a challanging opportunity where I could make things better, prettier and more efficient.",
    "skills" : ["JavaScript,", "jQuery,", "Ajax,", "JSON,", "HTML,", "CSS,", "Java,", "CRM on Demand"],
    "display" : function() {
 
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole);

        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        $("#header").prepend(formattedName);

       var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
       $("#topContacts").append(formattedMobile);

       var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
       $("#topContacts").append(formattedEmail);
       var formattedLinkedIn = HTMLlinkedIn.replace("%data%", bio.contacts.LinkedIn);
       $("#topContacts").append(formattedLinkedIn);
       var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
       $("#topContacts").append(formattedGithub);
       var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
       $("#topContacts").append(formattedLocation);
       var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
       $("#header").append(formattedBioPic);
       
       var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
       $("#header").append(formattedWelcomeMessage);

        if(bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            var formattedSkill;

            for (item in bio.skills) {
                formattedSkill = HTMLskills.replace("%data%", bio.skills[item]);
                $("#skills").append(formattedSkill);
            }
        }       
    }
}

bio.display();


var work = {
    "jobs" : [
        {
            "position" : "CRM on Demand Administrator",
            "employer" : "Alpha & Omega Semiconductor",
            "dates" : "JANUARY 2014 - PRESENT",
            "location" : "Sunnyvale, CA, USA",
            "description" : "* Trained 30 employees, successfully delegating reporting and tracking responsibilities while developing new software features<br />* Wrote, tested and implemented three 300-line-long REST APIs in a month, used for on-screen fields update<br />* Constructed approximately 100 custom opportunity and financial reports, allowing managers to view and plan design and sales schedules<br />* Developed and implemented a system of 60 workflows in three weeks, improving software adoption rate by 30 percent"
        },
        {
        "position" : "Tutor",
        "employer" : "Self-employed",
        "dates" : "AUG 2013 – FEB 2014",
        "location" : "Sunnyvale, CA, USA",
     "description" : "* Conducted seven aptitude tests, understanding students' emotional approach to work and tailoring teaching methods to individual student<br />* Succeeded in helping students reach their goal of earning a desired grade<br />* Increased test scores by 30 percent on average by developing plan and systematic check-ups"
        },
        {
        "position" : "Sales Representative",
        "employer" : "MetLife",
        "dates" : "APRIL 2010 – OCTOBER 2011",
        "location" : "Wroclaw, Poland",
     "description" : "* Sold auto, home, life insurance products<br />* Accomplished 85 percent success rate with profitable projects<br />* Increased market share by 15% within assigned territory<br />* Improved opportunity tracking and sales results by developed a database of more than 300 customers"
        },
        {
        "position" : "Squad Commander",
        "employer" : "Army",
        "dates" : "APRIL 2010 – OCTOBER 2010",
        "location" : "Poznan, Poland",
     "description" : "* Created and executed combat training plan for a 10 person team, boosting morale and confidence<br />* Analyzed topographic and meteorological factors for combat, improving equipment and tactic choice<br />* Conducted Mathematical scrutiny of bullet drop and drift, raising target shooting accuracy by 50 percent<br />* Used radio and GPS communication to quickly and accurately convey confidential information"
        },
    ],
    "display" : function() {
        for (index in work.jobs) {
            $("#workExperience").append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[index].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[index].position);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[index].location);
            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[index].dates);
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[index].description);
            
            $(".work-entry:last").append(formattedEmployerTitle);
            $(".work-entry:last").append(formattedLocation);
            $(".work-entry:last").append(formattedDates);
            $(".work-entry:last").append(formattedDescription);

                }          
            }
        }
    

var education = {
    "schools" : [
        { 
            "school" :"San Jose State University",
            "yearsAttended" : "2015-2018  ",
            "location" : "San Jose, CA, USA",
            "major" : "Software Engineering",
            "degree" : "Bachelor of Science",
            "courses" : ["Object Oriented Programming in Java", "Intermediate Software Design in Java", "Intro to Engineering"]

        },
        {
            "school" : "De Anza College",
            "yearsAttended" : "2013-2015  ",
            "location" : "Cupertino, CA, USA",
            "major" : "Business Administration",
            "degree" : "Associate of Science",
            "courses" : ["Statistics", "Financial Accounting", "Managerial Accounting", "Microeconomics", "Macroeconomics", "Business Law", "Business Information Systems"]
        }
    ],
    "display" : function() {
        for (eachSchool in education.schools) {
            $("#education").append(HTMLschoolStart);

            var formattedSchool = HTMLschoolName.replace("%data%", education.schools[eachSchool].school);
            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[eachSchool].degree);
            var formattedDates = HTMLschoolDates.replace("%data%", education.schools[eachSchool].yearsAttended);
            var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[eachSchool].location);
            var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[eachSchool].major);
            
            $(".education-entry:last").append(formattedSchool);
            $(".education-entry:last").append(formattedDegree);
            $(".education-entry:last").append(formattedDates);
            $(".education-entry:last").append(formattedLocation);
            $(".education-entry:last").append(formattedMajor);
        }     
    }
}

education.display();
work.display();

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});

var project = {
    "projects" : [
        {
            "title" : "Project Name",
            "dates" : "June 2015 - August 2015",
            "description" : "Lorem ipsum dolor sit amet, ad prima dolorum impedit pro. Cum aliquam pericula eu. Autem convenire honestatis an eam, democritum repudiandae an mel. Mel ut putent aliquam pertinax. At cum salutandi instructior, qui eu possit latine sadipscing, ei vel suas posse. Eu velit meliore scribentur his, cum solum reque ei. Sit ex dolores gloriatur, his oblique fastidii in, eu eum postea aliquip praesent. Et sit agam esse delicata. Ad maluisset conceptam quo, volumus epicurei ei vix, vidit antiopam tincidunt cu vim. Mnesarchum definitiones vituperatoribus duo ex. Pro dolore constituam eloquentiam ne, has ne decore doming graeco. Ei cum affert viderer, vix sumo molestie ei, case adolescens deseruisse ut usu.",
            "image" : "./images/197x148.gif"

        },
        {
            "title" : "Project Name 2",
            "dates" : "June 2015 - August 2015",
            "description" : "Lorem ipsum dolor sit amet, ad prima dolorum impedit pro. Cum aliquam pericula eu. Autem convenire honestatis an eam, democritum repudiandae an mel. Mel ut putent aliquam pertinax. At cum salutandi instructior, qui eu possit latine sadipscing, ei vel suas posse. Eu velit meliore scribentur his, cum solum reque ei. Sit ex dolores gloriatur, his oblique fastidii in, eu eum postea aliquip praesent. Et sit agam esse delicata. Ad maluisset conceptam quo, volumus epicurei ei vix, vidit antiopam tincidunt cu vim. Mnesarchum definitiones vituperatoribus duo ex. Pro dolore constituam eloquentiam ne, has ne decore doming graeco. Ei cum affert viderer, vix sumo molestie ei, case adolescens deseruisse ut usu.",
            "image" : "./images/197x148.gif"

        }
    ],
    "display" :  function() {
    for (index in project.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", project.projects[index].title);
        $(".project-entry:last").append(formattedTitle);
        
        var formattedDates = HTMLprojectDates.replace("%data%", project.projects[index].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", project.projects[index].description);
        $(".project-entry:last").append(formattedDescription);

        var formattedImage = HTMLprojectImage.replace("%data%", project.projects[index].image);
        $(".project-entry:last").append(formattedImage);

    }
}
}

project.display();

function connect() {
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
       $("#footerContacts").append(formattedMobile);

       var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
       $("#footerContacts").append(formattedEmail);
       var formattedLinkedIn = HTMLlinkedIn.replace("%data%", bio.contacts.LinkedIn);
       $("#footerContacts").append(formattedLinkedIn);
       var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
       $("#footerContacts").append(formattedGithub);
 
}

connect();

$("#mapDiv").append(googleMap);
