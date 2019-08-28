function teamInfo(id, picture, title, descShort, descLong) {
    this.id = id;
    this.picture = picture;
    this.title = title;
    this.descShort = descShort;
    this.descLong = descLong;
}

function headsInfo(id, teamId, firstName, lastName, facebook, instagram, linkedin, twitter, picture){
    this.id = id;
    this.teamId = teamId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.facebook = facebook;
    this.instagram = instagram;
    this.linkedin = linkedin;
    this.twitter = twitter;
    this.picture = picture;
}

// var heads = ["",
//     new headsInfo(
//         1,
//         1,
//         "Ravgeet",
//         "Dhillon",
//         "https://www.facebook.com/ravgeet.dhillon/",
//         "https://instagram.com/ravd_ravgeet/",
//         "https://www.linkedin.com/in/ravgeet-dhillon-a16110123/",
//         "https://twitter.com/RavgeetRocks/",
//         "images/cessteam/ravgeet.jpg"
//     ),
//     new headsInfo(
//         2,
//         1,
//         "Puneet",
//         "Saini",
//         "https://facebook.com",
//         "https://www.instagram.com/puneetsaini/",
//         "https://linkedin.com",
//         "https://twitter.com",
//         "images/cessteam/puneet.jpg"
//     ),
//     new headsInfo(
//         3,
//         2,
//         "Chhaya",
//         "Anand",
//         "https://facebook.com",
//         "https://www.instagram.com/chhaya_07/",
//         "https://linkedin.com",
//         "https://twitter.com",
//         "images/cessteam/chhaya.jpg"
//     ),
//     new headsInfo(
//         4,
//         2,
//         "Jashan",
//         "Hans",
//         "https://facebook.com",
//         "https://www.instagram.com/jashan._.hans/",
//         "https://linkedin.com",
//         "https://twitter.com",
//         "images/cessteam/jashan.jpg"
//     ),
//     new headsInfo(
//         5,
//         2,
//         "Parneet",
//         "Kaur",
//         "https://facebook.com",
//         "https://www.instagram.com/parneet___kaur/",
//         "https://linkedin.com",
//         "https://twitter.com",
//         "images/cessteam/parneet.jpg"
//     ),
//     new headsInfo(
//         6,
//         3,
//         "Shreya",
//         "Mittal",
//         "https://facebook.com",
//         "https://www.instagram.com/i__am_shreyamittal/",
//         "https://linkedin.com",
//         "https://twitter.com",
//         "images/cessteam/shreya.jpg"
//     ),
//     new headsInfo(
//         7,
//         3,
//         "Mohit",
//         "Shahi",
//         "https://facebook.com",
//         "https://www.instagram.com/mohit_shahi/",
//         "https://linkedin.com",
//         "https://twitter.com",
//         "images/cessteam/mohitshahi.jpg"
//     ),
//     new headsInfo(
//         8,
//         4,
//         "Rhythm",
//         "",
//         "https://facebook.com",
//         "https://www.instagram.com/rhythm.sparks/",
//         "https://linkedin.com",
//         "https://twitter.com",
//         "images/cessteam/rhythm.jpg"
//     ),
//     new headsInfo(
//         9,
//         4,
//         "Tushar",
//         "Sharma",
//         "https://facebook.com",
//         "https://www.instagram.com/_tushar_sharma._/",
//         "https://linkedin.com",
//         "https://twitter.com",
//         "images/cessteam/tushar.jpg"
//     ),
//     new headsInfo(
//         10,
//         5,
//         "Manisha",
//         "Mittal",
//         "https://facebook.com",
//         "https://www.instagram.com/manishamittal14/",
//         "https://linkedin.com",
//         "https://twitter.com",
//         "images/cessteam/manisha.jpg"
//     ),
//     new headsInfo(
//         11,
//         5,
//         "Ridhima",
//         "Aggarwal",
//         "https://www.facebook.com/ridhima.aggarwal.986",
//         "https://www.instagram.com/ridhima182/",
//         "https://linkedin.com",
//         "https://twitter.com",
//         "images/cessteam/ridhima.jpg"
//     ),
//     new headsInfo(
//         12,
//         6,
//         "Rumeet",
//         "Singh",
//         "https://facebook.com",
//         "https://www.instagram.com/rumeet._.singh/",
//         "https://linkedin.com",
//         "https://twitter.com",
//         "images/cessteam/rumeet.jpg"
//     ),
//     new headsInfo(
//         13,
//         6,
//         "Mohit",
//         "Sharma",
//         "https://facebook.com",
//         "https://www.instagram.com/_mohit._.sharma_/",
//         "https://linkedin.com",
//         "https://twitter.com",
//         "images/cessteam/mohit.jpg"
//     ),
//     new headsInfo(
//         14,
//         7,
//         "Ritika",
//         "Dhamija",
//         "https://facebook.com",
//         "https://www.instagram.com/dhamija_ritika/",
//         "https://linkedin.com",
//         "https://twitter.com",
//         "images/cessteam/ritika.jpg"
//     ),
//     new headsInfo(
//         15,
//         7,
//         "Ashish",
//         "Oberoi",
//         "https://www.facebook.com/ashishoberoi.veni.vidi.vici",
//         "https://www.instagram.com/_ashishoberoi_/",
//         "https://www.linkedin.com/in/ashish-oberoi-b7116a137",
//         "https://twitter.com",
//         "images/cessteam/ashish.jpg"
//     ),
//     new headsInfo(
//         16,
//         8,
//         "Ashish",
//         "Kheveria",
//         "https://facebook.com",
//         "https://www.instagram.com/ashish.kheveria/",
//         "https://linkedin.com",
//         "https://twitter.com",
//         "images/cessteam/ravgeet.jpg"
//     ),
//     new headsInfo(
//         17,
//         8,
//         "Vendan",
//         "Jain",
//         "https://facebook.com",
//         "https://instgram.com",
//         "https://linkedin.com",
//         "https://twitter.com",
//         "images/cessteam/puneet.jpg"
//     )
// ];

var heads = ["",
    new headsInfo(
        1,
        1,
        "Rumeet",
        "Singh",
        "https://www.facebook.com/ravgeet.dhillon/",
        "https://instagram.com/ravd_ravgeet/",
        "https://www.linkedin.com/in/ravgeet-dhillon-a16110123/",
        "https://twitter.com/RavgeetRocks/",
        "images/cessteam/rumeet.jpg"
    ),
    new headsInfo(
        2,
        1,
        "Harmandeep",
        "Singh",
        "https://facebook.com",
        "https://www.instagram.com/puneetsaini/",
        "https://linkedin.com",
        "https://twitter.com",
        "images/cessteam/new_harman.jpg"
    ),
    new headsInfo(
        3,
        1,
        "Bharat",
        "Nischal",
        "https://facebook.com",
        "https://www.instagram.com/chhaya_07/",
        "https://linkedin.com",
        "https://twitter.com",
        "images/cessteam/new_bharat.jpg"
    ),
    new headsInfo(
        4,
        2,
        "Madhav",
        "Chopra",
        "https://facebook.com",
        "https://www.instagram.com/jashan._.hans/",
        "https://linkedin.com",
        "https://twitter.com",
        "images/cessteam/new_madhav.jpg"
    ),
    new headsInfo(
        5,
        2,
        "Guntash",
        "",
        "https://facebook.com",
        "https://www.instagram.com/parneet___kaur/",
        "https://linkedin.com",
        "https://twitter.com",
        "https://www.w3schools.com/bootstrap4/img_avatar5.png"
    ),
    new headsInfo(
        6,
        3,
        "Riya",
        "Mittal",
        "https://facebook.com",
        "https://www.instagram.com/i__am_shreyamittal/",
        "https://linkedin.com",
        "https://twitter.com",
        "images/cessteam/new_riya.jpg"
    ),
    new headsInfo(
        7,
        3,
        "Kriti",
        "Rikhi",
        "https://facebook.com",
        "https://www.instagram.com/mohit_shahi/",
        "https://linkedin.com",
        "https://twitter.com",
        "https://www.w3schools.com/bootstrap4/img_avatar5.png"
    ),
    new headsInfo(
        8,
        4,
        "Divyakshi",
        "",
        "https://facebook.com",
        "https://www.instagram.com/rhythm.sparks/",
        "https://linkedin.com",
        "https://twitter.com",
        "https://www.w3schools.com/bootstrap4/img_avatar5.png"
    ),
    new headsInfo(
        9,
        4,
        "Gagandeep",
        "Singh",
        "https://facebook.com",
        "https://www.instagram.com/_tushar_sharma._/",
        "https://linkedin.com",
        "https://twitter.com",
        "https://www.w3schools.com/bootstrap4/img_avatar3.png"
    ),
    new headsInfo(
        10,
        5,
        "Devanshi",
        "Aggarwal",
        "https://facebook.com",
        "https://www.instagram.com/manishamittal14/",
        "https://linkedin.com",
        "https://twitter.com",
        "https://www.w3schools.com/bootstrap4/img_avatar5.png"
    ),
    new headsInfo(
        11,
        5,
        "Shruti",
        "",
        "https://www.facebook.com/ridhima.aggarwal.986",
        "https://www.instagram.com/ridhima182/",
        "https://linkedin.com",
        "https://twitter.com",
        "https://www.w3schools.com/bootstrap4/img_avatar5.png"
    ),
    new headsInfo(
        12,
        6,
        "Manjot",
        "Singh",
        "https://facebook.com",
        "https://www.instagram.com/rumeet._.singh/",
        "https://linkedin.com",
        "https://twitter.com",
        "images/cessteam/new_manjot.jpg"
    ),
    new headsInfo(
        13,
        6,
        "Akshit",
        "Bhatia",
        "https://facebook.com",
        "https://www.instagram.com/_mohit._.sharma_/",
        "https://linkedin.com",
        "https://twitter.com",
        "images/cessteam/new_akshit.jpg"
    ),
    new headsInfo(
        14,
        7,
        "Geetanjali",
        "",
        "https://facebook.com",
        "https://www.instagram.com/dhamija_ritika/",
        "https://linkedin.com",
        "https://twitter.com",
        "images/cessteam/new_geet.jpg"
    ),
    new headsInfo(
        15,
        7,
        "Ayush",
        "Kaushik",
        "https://www.facebook.com/ashishoberoi.veni.vidi.vici",
        "https://www.instagram.com/_ashishoberoi_/",
        "https://www.linkedin.com/in/ashish-oberoi-b7116a137",
        "https://twitter.com",
        "images/cessteam/new_ayushkaushik.jpg"
    ),
    new headsInfo(
        16,
        8,
        "Ashish",
        "Kheveria",
        "https://facebook.com",
        "https://www.instagram.com/ashish.kheveria/",
        "https://linkedin.com",
        "https://twitter.com",
        "https://www.w3schools.com/bootstrap4/img_avatar3.png"
    ),
    new headsInfo(
        17,
        8,
        "Vendan",
        "Jain",
        "https://facebook.com",
        "https://instgram.com",
        "https://linkedin.com",
        "https://twitter.com",
        "https://www.w3schools.com/bootstrap4/img_avatar3.png"
    ),
    new headsInfo(
        18,
        4,
        "Manik",
        "Clair",
        "https://facebook.com",
        "https://instgram.com",
        "https://linkedin.com",
        "https://twitter.com",
        "https://www.w3schools.com/bootstrap4/img_avatar3.png"
    ),
    new headsInfo(
        19,
        3,
        "Harman",
        "Singh",
        "https://facebook.com",
        "https://instgram.com",
        "https://linkedin.com",
        "https://twitter.com",
        "https://www.w3schools.com/bootstrap4/img_avatar3.png"
    ),
];

var teams = ["",
    new teamInfo(
        1,
        'images/teams/technical.jpg',
        "Technical Team",
        "We promote and develop technical skills among students.",
        "We as a Technical team are famously known as CESS Code Squad. We are responsible for promoting and developing technical skills among students. We believe that technology can revolutionise the world as it's doing, so our motto is to make students equipped with tech arsenal for the future endeavours in IT field. We organise various events such as Web Development flash classes, Crash Courses, Seminars, Hackathons and much more. Our main agenda is to make coding a joyful experience for students and relieve them of all the fears related to coding. We also contribute to Open Source community, and develop applications on real world problems as a Team."
    ),
    new teamInfo(
        2,
        "images/teams/placement.jpg",
        "Placement Team",
        "We make best efforts to improve the placement scenario.",
        "We as Placement Team, do our best to call companies for better placement opportunities of our seniors. We work as a team and collect databases of various recruiters and send invitations to the companies to visit our campus from time to time. Our goal is to indulge in effective company calling, and try our best efforts to improve the placement scenario. We also publish our yearly magazine named From Inside the Room, to keep the students aware regarding what type of questions are being asked and what the recruitment process is all about. We also inform the students regarding various Govt. exams and make sure that the student be placed in place of his/her choice."
    ),
    new teamInfo(
        3,
        "images/teams/promotion.jpg",
        "Promotion Team",
        "We promote and create hype for the events to have mass participation.",
        "We as a team, form an integral part of CESS organisation. An event cannot be a success if people are not aware about CESS and its events. Promotion is done not only in CET department but in almost all the departments of the university. We also try our best to reach many other institutes across North India and promote our events and workshops. Our team help its students to develop their communication skills. The students who are the part of CESS Promotion team also gain confidence and possess interactivity to speak anywhere at any platform or stage."
    ),
    new teamInfo(
        4,
        "images/teams/pr.jpg",
        "Public Relations Team",
        "We earn our sponsors who help us in performing successful events.",
        "The members of our Public Relations team are meant to be the face of the CESS. For any event or a workshop, one question always lies there, that is how to get all of those important people notice us? We need PR Team! The foundation of any event, either financially or for resources is laid by us. Our main task focuses upon gaining sponsors for certain events. We don’t come up with catchy phrases to make people pay for what they probably don’t need. We earn our sponsors who belive in our work and talent."
    ),
    new teamInfo(
        5,
        "images/teams/finearts.jpg",
        "Fine Arts Team",
        "We provide exposure to world beyond academics, we are here to boost an artist in the students.",
        "We as a Fine Arts team, is an elementary pillar of CESS. CESS looks forward to us for its artistic endeavours. We providing exposure to the world beyond academics. We are here to boost an artist within the students. Admist many events organised by university, The Art Exhibition is our top serving. We also organise an Artistic Week and many other events like Calligraphy, Graffiti, Cartoonilia and much more. We undertake the presentation and creative tasks pertaining to any sort of seminar or events. We look forward for an electic mix of members, who are willing to be as creative as possible."
    ),
    new teamInfo(
        6,
        "images/teams/design.jpg",
        "Design Team",
        "We encourage designing amongst students to create them developers as well as designers.",
        "We as a Design team, are the coolest team of CESS. We make posters for events, covers for magazines, and logos for organisation and events of CESS or University if needed. We look forward to give a better understanding of Adobe Photoshop and advanced editing softwares to willing students, so that they can become a designer along with being a developer. In past years, we have successfully organised Art exhibition, Graffiti, Pokémon hunt and much more. We work closely with Fine Arts Team."
    ),
    new teamInfo(
        7,
        "images/teams/literary.jpg",
        "Literary Team",
        "We organize technical workshops and events to develop students interest in technologies.",
        "We as a Literary team are responsible for tasks like online activities for budding poets and writers. We promote our poets and writers on our Instagram page 'The Literati'. Poems, articles and short stories are published regularly by us. Apart from writing, the team members also participate in oratorical activities like debates, extempore, MUN that organized in different colleges and universities. The updates regarding the same are published on the CESS's official Instagram page or our Instagram handle. Short online events like Knit Out a Story, are also organised by our dedicated team. We cover all the reading, writing, and speaking activities."
    )
    // new teamInfo(
    //     8,
    //     "images/teams/music.jpg",
    //     "Music Team",
    //     "We find musical talent in our students and perform at various events and occasions."
    // )
];


function openPage(team_id){
    var box = document.querySelector("#box" + team_id);
    box.addEventListener("click", location.href = 'team.html?team=' + team_id);
}

var row = document.querySelector(".holder .row");

var i, lTeams = teams.length;
for (i = 1; i < lTeams; i++){
    
    var j, lHeads = heads.length; 
    var currentHeads = [""];
    for (j = 1; j < lHeads; j++){
        if (heads[j].teamId == i){
            currentHeads.push(heads[j].firstName);
        }
    }

    var div = document.createElement("div");
    div.setAttribute("class", "box");
    div.setAttribute("id", "box" + teams[i].id);
    div.setAttribute("onclick", "openPage('" + teams[i].id + "')");
    row.appendChild(div);
    var box = document.querySelector("#box" + teams[i].id);
    box.style.backgroundImage = "linear-gradient(-45deg, rgba(0, 0, 0, 0.8),rgba(33, 33, 33, 1)),url(" + teams[i].picture + ")";
    box.innerHTML = `
        <div class="content">
            <p class="title">` + teams[i].title + `</p>
            <p class="desc">` + teams[i].descShort + `</p>
            <br>
            <p class="heads"></p>
            <a class="link">More <i class="fas fa-angle-double-right"></i></a>
        </div>
    `;

    var heads_p = document.querySelector("#box" + teams[i].id + " .heads");
    if (currentHeads.length > 3){
        heads_p.innerHTML = "Headed by " + currentHeads[1] + ", " + currentHeads[2] + " and " + currentHeads[3];
    }
    else{
        heads_p.innerHTML = "Headed by " + currentHeads[1] + " and " + currentHeads[2];
    }

    var link = document.querySelector("#box" + teams[i].id + " a");
    link.setAttribute("onclick", "openPage('" + teams[i].id + "')");
}
