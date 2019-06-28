function imageInfo(id, picture, date, title, descLong) {
    this.id = id;
    this.picture = picture;
    this.date = date;
    this.title = title;
    this.descLong = descLong;
}

var images = ["",
    new imageInfo(
        1,
        "images/gallery/gamingworkshop.jpg",
        "Nov 26, 2017",
        "Gaming Workshop",
        "A game development workshop was organised by Agampreet Singh and it was attended by lods of students."
    ),
    new imageInfo(
        2,
        "images/gallery/orientation.jpg",
        "Aug 8, 2018",
        "Orientation Programme",
        "An introductory programme was held to brief the fresher batch students about CESS. About 100+ students attended that session and it was a laugh riot."
    ),
    new imageInfo(
        3,
        "images/gallery/webclass.jpg",
        "Mar 19, 2018",
        "Web Development Classes",
        "A week long session was organised to tell the students about the fundamentals about the web technology and its development."
    ),
    new imageInfo(
        4,
        "images/gallery/afteralgoworkshop.jpg",
        "Sept 8, 2018",
        "Happy Faces",
        "These people helped CESS in organising a Coding Blocks sponsored workshop on Algorithms."
    ),
    new imageInfo(
        5,
        "images/gallery/cricketwinners.jpg",
        "Mar 19, 2018",
        "Cricket Champs",
        "The Cricket Team of CET dept. made a fabulous effort and brought home the Champion's Trophy."
    ),
    new imageInfo(
        6,
        "images/gallery/drawing.jpg",
        "Oct 20, 2018",
        "Brush Strokes",
        "This artwork is one of the entries made to an event orgnanised in Polaris Fest by Fine Arts Team of CESS."
    ),
    new imageInfo(
        7,
        "images/gallery/gallery.jpg",
        "Oct 27, 2018",
        "Gallery",
        "This gallery was orchestrated by Design and Fine Arts Team during Polaris Fest and it was one of its main attraction point."
    ),
    new imageInfo(
        8,
        "images/gallery/placementtalk.jpg",
        "Jun 10, 2018",
        "Placement Talk",
        "Despite the sweltering heat of June, the 2018 batch of CET Dept provided its insight on placement scenario to the budding juniors."
    ),
    new imageInfo(
        9,
        "images/gallery/dance.jpg",
        "Oct 28, 2018",
        "People Gone Crazy",
        "People enjoy DJ at Polaris TechFest which was the highest point in the working of CESS."
    ),
    new imageInfo(
        10,
        "images/gallery/polaristeam.jpg",
        "Oct 26, 2018",
        "The CESS Squad",
        "These individuals along with the volunteers were responsible for a successful conduct of the Polaris TechFest."
    ),
    new imageInfo(
        11,
        "images/gallery/pubg.jpg",
        "Oct 27, 2018",
        "Chicken Dinners",
        "A gaming event was organised during Polaris TechFest and PubG was the highlight of the event with over 200 avid gamers being the part of it."
    )
];

var row = document.querySelector(".holder .row");

var i, l = images.length;
for (i = 1; i < l; i++){
    var div = document.createElement("div");
    div.setAttribute("class", "box");
    div.setAttribute("id", "box" + images[i].id);
    row.appendChild(div);

    var box = document.querySelector("#box" + images[i].id);

    box.innerHTML = `
        <div class="img-holder"></div>
            <div class="content">
            <p>` + images[i].date + `</p>
                <br>
                <h3>` + images[i].title + `</h3>
                <p>` + images[i].descLong + `</p>
                <div class="social">
                    <i id="grin" class="fas fa-grin"></i>
                    <i id="hearts" class="fas fa-grin-hearts"></i>
                    <i id="flushed" class="fas fa-flushed"></i>
                    <i id="laugh" class="fas fa-grin-squint-tears"></i>
                    <i id="stars" class="fas fa-grin-stars"></i>
                    <i id="angry" class="fas fa-angry"></i>
                </div>
            </div>
        </div>
    `;
    var emojis = document.querySelectorAll("#box" + images[i].id + " .social i");
    var j;
    for (j = 0; j < emojis.length; j++){
        emojis[j].id = emojis[j].id + images[i].id;
        emojis[j].classList.add("animated");
        emojis[j].setAttribute("onclick", "changeLike('" + images[i].id + "',this)");
    }
    var imgHolder = document.querySelector("#box" + images[i].id + " .img-holder");
    imgHolder.style.backgroundImage = "url(" + images[i].picture + ")";
}

if (localStorage["arr_emoji"] === undefined){
    var arr_emoji = [""];
    for (i = 1; i < l; i++){
        arr_emoji.push("");
    }
    localStorage["arr_emoji"] = JSON.stringify(arr_emoji);
}

function changeLike(img_id, emoji){
    if(emoji.style.color != "rgb(226, 71, 71)"){

        //unset all the emojis
        var emojis = document.querySelectorAll("#box" + img_id + " .social i");
        var j;
        for (j = 0; j < emojis.length; j++){
            emojis[j].classList.remove("bounce");
            emojis[j].style.color = "rgba(33, 33, 33, 0.5)";
            
        }
            // if (emojis[j].style.color == "rgb(226, 71, 71)"){
            var arr_emoji = localStorage["arr_emoji"];
            arr_emoji = JSON.parse(arr_emoji);
            arr_emoji[img_id] = emoji.id;
            arr_emoji = JSON.stringify(arr_emoji);
            localStorage["arr_emoji"] = arr_emoji;
            
            emoji.classList.add("bounce");
            emoji.style.color = "rgb(226, 71, 71)";
    }
    else if(emoji.style.color == "rgb(226, 71, 71)"){
        var arr_emoji = localStorage["arr_emoji"];
        arr_emoji = JSON.parse(arr_emoji);
        arr_emoji[img_id] = "";
        arr_emoji = JSON.stringify(arr_emoji);
        localStorage["arr_emoji"] = arr_emoji;
        emoji.classList.remove("bounce");
        emoji.style.color = "rgba(33, 33, 33, 0.5)";
    }
}

function updateEmojis(){
    var arr_emoji = localStorage["arr_emoji"];
    arr_emoji = JSON.parse(arr_emoji);
    var x;
    for (x = 1; x < arr_emoji.length; x++){
        if (arr_emoji[x] != ""){
            var emoji = document.getElementById(arr_emoji[x]);
            emoji.style.color = "rgb(226, 71, 71)";
        }
    }
}

window.onload = updateEmojis();