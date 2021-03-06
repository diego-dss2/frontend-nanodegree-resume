/*
This is empty on purpose! Your code to build the resume will go here.
 */
 /*$("#main").append("Diego");*/

 


var skills = ["programming", "photography", "cooking"];

var bio = {
    "name": "Diego Lopez",
    "role": "Web Developer",
    //"address": "El Vergel 2336 depto 203",
    "contacts": {
        "location": "Providencia, Chile",
        "phone": "+56227176861",
        "email": "dlopezv@gmail.com",
        "mobile": "+56964075197",
        "twitter": "@diegolopezv"
    },
    "welcomeMessage": "Bienvenido a mi currículum en línea",
    "skills": skills,
    "bioPic": "images/dlopez.jpg",
    "display": function () {
        formattedMobile = HTMLmobile.replace("%data%", this.contacts.mobile);
        formattedEmail = HTMLemail.replace("%data%", this.contacts.email);
        formattedTwitter = HTMLtwitter.replace("%data%", this.contacts.twitter);
        formattedLocation = HTMLlocation.replace("%data%", this.contacts.location);

        $("#topContacts").append(formattedMobile);
        $("#topContacts").append(formattedEmail);
        $("#topContacts").append(formattedTwitter);
        $("#topContacts").append(formattedLocation);

        $("#footerContacts").append(formattedMobile);
        $("#footerContacts").append(formattedEmail);
        $("#footerContacts").append(formattedTwitter);
        $("#footerContacts").append(formattedLocation);


        formattedName = HTMLheaderName.replace("%data%", this.name);
        formattedRole = HTMLheaderRole.replace("%data%", this.role);
        
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);

        formattedImage = HTMLbioPic.replace("%data%", this.bioPic);
        formattedMessage = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);

        $("#header").append(formattedImage);
        $("#header").append(formattedMessage);

        if (this.skills.length > 0) {
            $("#header").append(HTMLskillsStart);  
        }
        for (var s in this.skills) {
            var formattedSkill = HTMLskills.replace("%data%", this.skills[s]);
            $("#skills").append(formattedSkill);
        }
    }
};

var projects = {
    "projects": [
        {
            "title" : "ENAMI",
            "dates": "Septiembre 2015 a Abril 2016",
            "description": "Implementación TEPS para ENAMI",
            "images" : ["http://www.ecozone.cl/wp-content/uploads/2015/01/logo_enami.jpg"]
        },
        {
            "title": "TPA",
            "dates": "Enero 2013 a Junio 2013",
            "description": "Software para TPA",
            "images" : ["http://www.tpa-thai.co.th/images/tpa_logo.jpg"]
        }
    ],
    "display": function () {
        for (var p in projects.projects) {
            $("#projects").append(HTMLprojectStart);
            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[p].title);
            $(".project-entry:last").append(formattedTitle);
            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[p].dates);
            $(".project-entry:last").append(formattedDates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[p].description);
            $(".project-entry:last").append(formattedDescription);
            // acá va lo de las imágenes
            if (projects.projects[p].images.length > 0) {
                for (var image in projects.projects[p].images) {
                    var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[p].images[image]);
                    $(".project-entry:last").append(formattedImage);
                }
            }
        }
    }
};

var work = {
    "jobs": [
        {
            "employer": "Xperts Ltda.",
            "title": "Jefe de Proyectos",
            "location": "Valdivia",
            "dates": "22-03-2002 a 25-09-2006",
            "description": "Le hacíamos a todo"
        },
        {
            "employer": "Entel PCS",
            "title": "Ingeniero de Proyectos",
            "location": "Santiago",
            "dates": "27-09-2006 a 18-11-2013",
            "description": "Soporte a la venta de VAS Empresas"
        },
        {
            "employer": "Telefónica Chile",
            "title": "Digital Sales Manager",
            "location": "Santiago",
            "dates": "25-11-2013 a 11-09-2015",
            "description": "M2M y Salud"
        },
        {
            "employer": "Entel",
            "title": "Consultor de Productos y Servicios",
            "location": "Santiago",
            "dates": "22-09-2015 - present day",
            "description": "Proyecto TDE"
        }
    ],
    "display": function () {
        for (var job in work.jobs) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            $(".work-entry:last").append(formattedEmployerTitle);

            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            $(".work-entry:last").append(formattedDates);
            //console.log(formattedDates);

            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
            $(".work-entry:last").append(formattedDescription);
        }
    }
};


var education = {
    "schools": [
        {
            "name": "Universidad Austral de Chile",
            "location": "Valdivia, Chile",
            "degree": "Licenciado en Ciencias de la Ingeniería",
            "major": ["Ingeniero Civil en Informática"],
            "dates": "1996 - 2001",
            "url": "www.uach.cl"
        },
        {
            "name": "Universidad Técnica Federico Santa María",
            "location": "Valparaíso, Chile",
            "degree": "Magíster en Tecnologías de la Información",
            "major": ["MTI"],
            "dates": "2005 - 2008",
            "url": "www.utfsm.cl"
        }],
    "onlinecourses": [
        {
            "title": "Front End Web Developer",
            "school": "Udacity",
            "dates": "2015 - 2016",
            "url": "www.udacity.com"
        },
        {
            "title": "Introduction to Relational Databases",
            "school": "Coursera / Stanford",
            "dates": "2011",
            "url": "www.coursera.org"
        }
    ],
    "display": function () {
        // schools
        for (var s in education.schools) {
            $("#education").append(HTMLschoolStart);
            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[s].name);
            //$(".education-entry:last").append(formattedSchoolName);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[s].degree);
            $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[s].dates);
            $(".education-entry:last").append(formattedSchoolDates);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[s].location);
            $(".education-entry:last").append(formattedSchoolLocation);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[s].major);
            $(".education-entry:last").append(formattedSchoolMajor);
            //console.log("nombre: " + formattedSchoolMajor);
        }

        $(".education-entry:last").append(HTMLonlineClasses);

        for (var o in education.onlinecourses) {
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlinecourses[o].title);
            //$(".education-entry:last").append(formattedOnlineTitle);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlinecourses[s].school);
            $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlinecourses[s].dates);
            $(".education-entry:last").append(formattedOnlineDates);
            var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlinecourses[s].url);
            $(".education-entry:last").append(formattedOnlineURL);
            
        }
    }
};



bio.display();

work.display();

projects.display();

education.display();

/*function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}*/


/*function locationizer(work_obj) {
    var locationArray = [];

    for (job in work_obj.jobs) {
        var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
    }
    return locationArray;
}*/


$("#mapDiv").append(googleMap);