let htmlSec1 = "";
let htmlSec2 = "";


let favSongs = [{name:"Mystery of Love", author: "Sufjan Stevens", image: "https://i.ytimg.com/vi/N0CP9zpbmAQ/maxresdefault.jpg"},
                {name:"HunnyBee", author: "Unknown Mortal Orchestra", image: "https://images.genius.com/799b6ac308db18791e73d838cd1605d7.1000x1000x1.png"},
                {name:"Ill Humor", author: "No Buses", image: "https://i1.wp.com/catbrainland.com/wp-content/uploads/2019/11/no-buses-cat-brain-land-feature.jpg?fit=1399%2C600&ssl=1"},
                {name:"Achilles Come Down", author: "Gang of Youths", image: "https://64.media.tumblr.com/3554b30e765c11135fab16d4a29f0b1e/47eb6fbaa98d9c74-03/s512x512u_c1/125a7ebb614b62801adcb0ea69d8c672b1b989b5.jpg"},
                {name:"IDontWannaBeYouAnymore", author: "Billie Ellish", image: "https://images.genius.com/7cefe83b18c65ffd2f17a223891dfe12.1000x1000x1.jpg"},
                {name:"Love Crime", author: "Siouxsie", image: "https://upload.wikimedia.org/wikipedia/en/f/f1/Siouxsie_Love_Crime.jpg"},
                {name:"Radio", author: "Lana Del Rey", image: "https://images.genius.com/fc0c076b4e0397fae0c62813be8530b9.1000x1000x1.jpg"},
                // {name:"", author: "", image: ""}
            ];

html = "";
let counter = `This is how many songs you have on the list: ${favSongs.length}`;



for (let i = 0; i < favSongs.length; i ++){
    let song = favSongs[i];
    if (i%2 === 0){
        htmlSec1 += `<div class = "song${i}">
            <h3>${song.name} by ${song.author}</h3>
            <img class = "songPic" src = "${song.image}" alt = "image">
            </div>
            <br>`;
    }
   
    else{
        htmlSec2 += `<div class = "song${i}">
        <h3>${song.name} by ${song.author}</h3>
        <img class = "songPic" src = "${song.image}" alt = "image">
        </div>
        <br>`;
    }

}

function addSong(n, a, i){
    let newSong = {
        name: n,
        author: a,
        image: i,
    }

    favSongs.push(newSong);
    display();
};

function display(){
    let sortingNum = favSongs.length -1;
    let lastSong = favSongs[sortingNum];

    if (sortingNum%2 === 0){
        htmlSec1 += `<div class = "song${sortingNum}">
            <h3>${lastSong.name} by ${lastSong.author}</h3>
            <img class = "songPic" src = "${lastSong.image}" alt = "image">
            </div>`;
    }
    else{
        htmlSec2 += `<div class = "song${sortingNum}">
        <h3>${lastSong.name} by ${lastSong.author}</h3>
        <img class = "songPic" src = "${lastSong.image}" alt = "image">
        </div>`;
    }
    
    counter = `This is how many songs you have on the list: ${favSongs.length}`;
    console.log(favSongs);
};

let object = {song:"", author:"", url:""};
function input(){
    object.song = document.getElementById("textbox1").value;
    object.author = document.getElementById("textbox2").value;
    object.url = document.getElementById("textbox3").value;
    favSongs.push(object);
    display();

    clearAndShow();

}

function clearAndShow(){
    object[song] = "";
    object[author] = "";
    object[url] = "";

    messageBox.innerHTML = "";
}



addSong("My War", "Shinsei Kamattechan", "https://media.comicbook.com/2020/12/attack-on-titan-1247747-1280x0.jpeg");
addSong("Hypnotic", "Zella Day", "https://upload.wikimedia.org/wikipedia/en/9/99/Zella_Day_%E2%80%93_Hypnotic.jpg");
addSong("Be Seeing You", "Soccer Mommy", "https://i.ytimg.com/vi/Pk8zS_8rQog/maxresdefault.jpg");
addSong("Watermelon Sugar High", "Harry Styles", "https://i.ytimg.com/vi/7-x3uD5z1bQ/maxresdefault.jpg");

const quote = "We are what we do repeatedly. Excellence then, is not an act, but a habit";
document.getElementById("left").innerHTML = htmlSec1;
document.getElementById("right").innerHTML = htmlSec2;


//still need to figure out how to display entered song and permantly save the data