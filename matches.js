const requests = document.querySelectorAll(".display-request")
for (var i = 0; i < requests.length; i++) {
    requests[i].addEventListener('click',
        function () {
            document.querySelector(".request-application").style.display = 'flex';
        });
}

document.querySelector(".application-close").addEventListener('click',
    function () {
        document.querySelector(".request-application").style.display = 'none';
    });


function toggleMenu() {
    var menuToggle = document.querySelector('.toggle');
    var navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}

function toggleFilter() {
    var filterToggle = document.querySelector('.filter-trigger');
    var filter = document.querySelector('.filter');
    filterToggle.classList.toggle('active');
    filter.classList.toggle('active');
}

/*
//Date
*/

var options_box_date = document.getElementById("options_box_date");

var today_date = new Date().getDate();
var year = new Date().getFullYear();
var month = new Date().getMonth();
var lastDay = new Date(year, month + 1, 0).getDate();
var nextMonthFirstDay = new Date(year, month + 2, 1).getDate();
var nextMonthLastDay = new Date(year, month + 2, 0).getDate();

for (today_date; today_date <= lastDay; today_date++) {
    var date = new Date(year, month, today_date);
    date.setDate(date.getDate());
    date = String(date);
    var words = date.split(' ');
    var words_date = words.slice(0, 3);
    var date_modified = words_date.join(' ');

    let div = document.createElement('div');
    let input = document.createElement('input');
    let label = document.createElement('label');
    div.className = "option";
    input.className = "radio";
    input.setAttribute("type", "radio");
    input.setAttribute("name", "date");
    input.value = date_modified;
    label.innerHTML = date_modified;

    div.appendChild(input);
    div.appendChild(label);

    options_box_date.appendChild(div);
}

for (nextMonthFirstDay; nextMonthFirstDay <= nextMonthLastDay; nextMonthFirstDay++) {
    var date = new Date(year, month + 1, nextMonthFirstDay);
    date.setDate(date.getDate());
    date = String(date);
    var words = date.split(' ');
    var words_date = words.slice(0, 3);
    var date_modified = words_date.join(' ');

    let div = document.createElement('div');
    let input = document.createElement('input');
    let label = document.createElement('label');
    div.className = "option";
    input.className = "radio";
    input.setAttribute("type", "radio");
    input.setAttribute("name", "date");
    input.value = date_modified;
    label.innerHTML = date_modified;

    div.appendChild(input);
    div.appendChild(label);

    options_box_date.appendChild(div);
}

/*
//HTML
*/
const selectedAll = document.querySelectorAll(".selected");

const options_box_sport = document.getElementById("options_box_sport");
const optionsListSport = options_box_sport.querySelectorAll(".option");
let sport_value = "";
optionsListSport.forEach(o => {
    o.addEventListener("click", () => {
        sport_value = o.querySelector("input").value;
    });
})

const optionsListDate = options_box_date.querySelectorAll(".option");
let date_value = "";
optionsListDate.forEach(o => {
    o.addEventListener("click", () => {
        date_value = o.querySelector("input").value;
    });
})

const options_box_time = document.getElementById("options_box_time");
const optionsListTime = options_box_time.querySelectorAll(".option");
let time_value = "";
optionsListTime.forEach(o => {
    o.addEventListener("click", () => {
        time_value = o.querySelector("input").value;
    });
})

const options_box_sex = document.getElementById("options_box_sex");
const optionsListSex = options_box_sex.querySelectorAll(".option");
let sex_value = "anyone";
optionsListSex.forEach(o => {
    o.addEventListener("click", () => {
        sex_value = o.querySelector("input").value;
    });
})

const selected_sport = document.getElementById("selected_sport");
const selected_time = document.getElementById("selected_time");
const selected_date = document.getElementById("selected_date");
const selected_sex = document.getElementById("selected_sex");

selected_date.innerHTML = "All Date";
selected_time.innerHTML = "All Time";
selected_sex.innerHTML = "Anyone";

selectedAll.forEach(selected => {
    const optionsContainer = selected.previousElementSibling;
    const optionsList = optionsContainer.querySelectorAll(".option");
    const select_box1 = document.getElementById("select-box1");
    const select_box2 = document.getElementById("select-box2");
    const option_date = document.getElementById("option_date");
    let previous_word = "";

    selected.addEventListener("click", () => {
        if (optionsContainer.classList.contains("active")) {
            optionsContainer.classList.remove("active");
        } else {
            let currentActive = document.querySelector(".options-box.active");

            if (currentActive) {
                currentActive.classList.remove("active");
            }

            optionsContainer.classList.add("active");
        }
    });

    select_box1.addEventListener("click", () => {
        if (selected_date.innerHTML === "All Date") {
            select_box2.style.pointerEvents = "none";
            selected_time.innerHTML = "All Time";
            select_box2.style.opacity = "0.7";
        } else {
            select_box2.style.pointerEvents = "unset";
            select_box2.style.opacity = "1";
        }
    })

    select_box2.addEventListener("click", () => {
        if (selected_date.innerHTML === "All Date") {
            select_box2.style.pointerEvents = "none";
            selected_time.innerHTML = "All Time";
            select_box2.style.opacity = "0.7";
        } else {
            select_box2.style.pointerEvents = "unset";
            select_box2.style.opacity = "1";
        }
    })

    optionsList.forEach(o => {
        o.addEventListener("click", () => {
            selected.innerHTML = o.querySelector("label").innerHTML;
            optionsContainer.classList.remove("active");
            // if (previous_word != o.querySelector("label").innerHTML) {
            //     if (selected_date.innerHTML == "All Date") {
            //         var child = display_container.lastElementChild;
            //         while (child) {
            //             display_container.removeChild(child);
            //             child = display_container.lastElementChild;
            //         }
            //         db.collection('match').where('sport', '==', sport_value).where('sex', '==', sex_value).orderBy("date").orderBy("time").onSnapshot(snapshot => {
            //             let changes = snapshot.docChanges();
            //             changes.forEach(change => {
            //                 if (change.type == "added") {
            //                     renderMatch(change.doc);
            //                 } else if (change.type == "removed") {
            //                     let li = display_container.querySelector('[data-id=' + change.doc.id + ']');
            //                     display_container.removeChild(li);
            //                 }
            //             })
            //         })
            //     } else if (selected_date.innerHTML != "All Date" && selected_time.innerHTML == "All Time") {
            //         var child = display_container.lastElementChild;
            //         while (child) {
            //             display_container.removeChild(child);
            //             child = display_container.lastElementChild;
            //         }
            //         db.collection('match').where('sport', '==', sport_value).where('sex', '==', sex_value).where("date", "==", date_value).orderBy("time").onSnapshot(snapshot => {
            //             let changes = snapshot.docChanges();
            //             changes.forEach(change => {
            //                 if (change.type == "added") {
            //                     renderMatch(change.doc);
            //                 } else if (change.type == "removed") {
            //                     let li = display_container.querySelector('[data-id=' + change.doc.id + ']');
            //                     display_container.removeChild(li);
            //                 }
            //             })
            //         })
            //     } else if (selected_date.innerHTML != "All Date" && selected_time.innerHTML != "All Time") {
            //         var child = display_container.lastElementChild;
            //         while (child) {
            //             display_container.removeChild(child);
            //             child = display_container.lastElementChild;
            //         }
            //         db.collection('match').where('sport', '==', sport_value).where('sex', '==', sex_value).where("date", "==", date_value).where("time", "==", time_value).onSnapshot(snapshot => {
            //             let changes = snapshot.docChanges();
            //             changes.forEach(change => {
            //                 if (change.type == "added") {
            //                     renderMatch(change.doc);
            //                 } else if (change.type == "removed") {
            //                     let li = display_container.querySelector('[data-id=' + change.doc.id + ']');
            //                     display_container.removeChild(li);
            //                 }
            //             })
            //         })
            //     }
            //     previous_word = o.querySelector("label").innerHTML;
            // }
        });
    });
})

/*
//FIREBASE 
*/
const display_container = document.querySelector(".display-container");

//Create elements and render Match
// function renderMatch(doc) {
//     let li = document.createElement('li');
//     let div = document.createElement('div');
//     let event_name = document.createElement('span');
//     let sport = document.createElement('span');
//     let time = document.createElement('span');
//     let location = document.createElement('span');
//     let address = document.createElement('span');
//     let date = document.createElement('span');
//     let sex = document.createElement('span');

//     li.setAttribute("data-id", doc.id);
//     event_name.textContent = "Event name: " + doc.data().event_name;
//     sport.textContent = "Sport: " + doc.data().sport;
//     time.textContent = "Time: " + doc.data().time;
//     location.textContent = "Location: " + doc.data().location;
//     address.textContent = "Address: " + doc.data().address;
//     date.textContent = "Date: " + doc.data().date;
//     sex.textContent = "Sex: " + doc.data().sex;

//     li.appendChild(event_name);
//     li.appendChild(sport);
//     li.appendChild(time);
//     li.appendChild(location);
//     li.appendChild(address);
//     li.appendChild(date);
//     li.appendChild(sex);

//     matchList.appendChild(li);
// }

const objectOfDays = {
    "Mon": "Monday",
    "Tue": "Tuesday",
    "Wed": "Wednesday",
    "Thu": "Thursday",
    "Fri": "Friday",
    "Sat": "Saturday",
    "Sun": "Sunday",
};

function renderMatch(doc) {
    //MAIN DIV
    let display_content_per_date = document.createElement('div');
    display_content_per_date.className = "display-content-per-date";

    //DATE AND UL
    let date = document.createElement('h4');
    let display_list = document.createElement('ul');

    date.className = "display-date";
    display_list.className = "display-list";
    let date_text = doc.data().date;
    let date_split = date_text.split(" ");
    let full_day = objectOfDays[date_split[0]];
    let date_final = date_split.splice(1, 2);
    let date_join = date_final.join(" ");
    date.innerHTML = full_day + " " + date_join + ", " + doc.data().time + " WIB";

    //LI
    let display_item = document.createElement('li');
    display_item.className = "display-item";

    //SPORT'S ICON
    let display_color_identifier = document.createElement('div');
    let icon = document.createElement('img');
    display_color_identifier.className = "display-color-identifier";

    if (doc.data().sport == "basketball") {
        icon.src = "./images/basketball2.svg";
        display_item.id = "display-basketball";
    } else if (doc.data().sport == "soccer") {
        icon.src = "./images/soccer2.svg";
        display_item.id = "display-soccer";
    } else if (doc.data().sport == "badminton") {
        icon.src = "./images/badminton2.svg";
        display_item.id = "display-badminton";
    } else if (doc.data().sport == "volleyball") {
        icon.src = "./images/volleyball2.svg";
        display_item.id = "display-volleyball";
    }

    //EVENT NAME, AMOUNT OF PLAYERS, GENDER
    let display_text = document.createElement('div');
    let display_title = document.createElement('h2');
    let display_amount = document.createElement('div');
    let img = document.createElement('img');
    let p = document.createElement('p');
    let display_peoplepref2 = document.createElement('p');

    display_text.className = "display-text";
    display_title.className = "display-title";
    display_amount.className = "display-amount";

    img.src = "./images/group.svg";
    display_title.innerHTML = doc.data().event_name;
    p.innerHTML = "3 / 10";

    //DISPLAY BAR
    let display_bar = document.createElement('div');
    display_bar.className = "display-bar";

    //DISPLAY LOCATION
    let display_location = document.createElement('div');
    let display_place = document.createElement('p');
    let display_address = document.createElement('p');

    display_location.className = "display-location";
    display_place.className = "display-place";
    display_place.style.textOverflow = "ellipsis";
    display_address.className = "display-address";

    display_place.innerHTML = doc.data().location;
    display_address.innerHTML = doc.data().address;

    //GENDER ICON
    let display_peoplepref = document.createElement('div');
    let display_sex_icon = document.createElement('div');
    let img_gender = document.createElement('img');
    let display_sex_text = document.createElement('p');

    display_sex_icon.className = "display-sex-icon";
    display_sex_text.className = "display-sex-text";

    //BUTTON
    let button = document.createElement('button');
    let button_p = document.createElement('p');
    let button_image = document.createElement('img');

    //CLASS BUTTON TERGANTUNG ACTION
    button.setAttribute("type", "submit");
    button.className = "display-request";
    button_p.innerHTML = "Request";
    button_image.src = "./images/Right arrow.svg";
    // button.className = "display-delete";
    // button.className = "display-request";

    //SET ID FIREBASE KE LI
    display_item.setAttribute("data-id", doc.id);

    if (doc.data().sex == 'male') {
        display_peoplepref2.className = "display-peoplepref2 display-male2";
        display_peoplepref2.innerHTML = "male only";
        img_gender.src = "./images/male.svg";
        img_gender.alt = "malesign";
        display_peoplepref.className = "display-peoplepref display-male";
        display_sex_text.innerHTML = "male only";
    } else if (doc.data().sex == 'female') {
        display_peoplepref2.className = "display-peoplepref2 display-female2";
        display_peoplepref2.innerHTML = "female only";
        img_gender.src = "./images/female.svg";
        img_gender.alt = "femalesign";
        display_peoplepref.className = "display-peoplepref display-female";
        display_sex_text.innerHTML = "female only";
    } else if (doc.data().sex == 'anyone') {
        display_peoplepref2.className = "display-peoplepref2 display-anysex2";
        display_peoplepref2.innerHTML = "anyone can join";
        img_gender.src = "./images/anysex.svg";
        img_gender.alt = "unisex";
        display_peoplepref.className = "display-peoplepref display-anysex";
        display_sex_text.innerHTML = "anyone";
    }

    //display-color-identifier
    display_color_identifier.appendChild(icon);
    display_item.appendChild(display_color_identifier);

    //display-text
    display_amount.appendChild(img);
    display_amount.appendChild(p);
    display_text.appendChild(display_title);
    display_text.appendChild(display_amount);
    display_text.appendChild(display_peoplepref2);

    //display-location
    display_location.appendChild(display_place);
    display_location.appendChild(display_address);

    //display-peoplepref
    display_sex_icon.appendChild(img_gender);
    display_peoplepref.appendChild(display_sex_icon);
    display_peoplepref.appendChild(display_sex_text);

    //display button
    button.appendChild(button_p);
    button.appendChild(button_image);

    //APPEND TO DISPLAY-ITEM
    display_item.appendChild(display_color_identifier);
    display_item.appendChild(display_text);
    display_item.appendChild(display_bar);
    display_item.appendChild(display_location);
    display_item.appendChild(display_peoplepref);
    display_item.appendChild(button);

    //APPEND TO MAIN DIV
    display_list.appendChild(display_item);
    display_content_per_date.appendChild(date);
    display_content_per_date.appendChild(display_list);
    display_container.appendChild(display_content_per_date);
}


// UNCOMMENT

// db.collection('match').where('sex', '==', sex_value).orderBy("date").orderBy("time").onSnapshot(snapshot => {
//     let changes = snapshot.docChanges();
//     changes.forEach(change => {
//         if (change.type == "added") {
//             renderMatch(change.doc);
//         } else if (change.type == "removed") {
//             let li = display_container.querySelector('[data-id=' + change.doc.id + ']');
//             display_container.removeChild(li);
//         }
//     })
// })


//UNTUK SCHEDULE

let temp_list = [];
let temp_list2 = [];

function renderMatch2(doc) {
    //MAIN DIV
    let display_content_per_date = document.createElement('div');
    display_content_per_date.className = "display-content-per-date";

    //DATE AND UL
    let date = document.createElement('h4');
    let display_list = document.createElement('ul');

    date.className = "display-date";
    display_list.className = "display-list";
    let date_text = doc.date;
    let date_split = date_text.split(" ");
    let full_day = objectOfDays[date_split[0]];
    let date_final = date_split.splice(1, 2);
    let date_join = date_final.join(" ");
    date.innerHTML = full_day + " " + date_join + ", " + doc.time + " WIB";

    //LI
    let display_item = document.createElement('li');
    display_item.className = "display-item";

    //SPORT'S ICON
    let display_color_identifier = document.createElement('div');
    let icon = document.createElement('img');
    display_color_identifier.className = "display-color-identifier";

    if (doc.sport == "basketball") {
        icon.src = "./images/basketball2.svg";
        display_item.id = "display-basketball";
    } else if (doc.sport == "soccer") {
        icon.src = "./images/soccer2.svg";
        display_item.id = "display-soccer";
    } else if (doc.sport == "badminton") {
        icon.src = "./images/badminton2.svg";
        display_item.id = "display-badminton";
    } else if (doc.sport == "volleyball") {
        icon.src = "./images/volleyball2.svg";
        display_item.id = "display-volleyball";
    }

    //EVENT NAME, AMOUNT OF PLAYERS, GENDER
    let display_text = document.createElement('div');
    let display_title = document.createElement('h2');
    let display_amount = document.createElement('div');
    let img = document.createElement('img');
    let p = document.createElement('p');
    let display_peoplepref2 = document.createElement('p');

    display_text.className = "display-text";
    display_title.className = "display-title";
    display_amount.className = "display-amount";

    img.src = "./images/group.svg";
    display_title.innerHTML = doc.event_name;
    p.innerHTML = "3 / 10";

    //DISPLAY BAR
    let display_bar = document.createElement('div');
    display_bar.className = "display-bar";

    //DISPLAY LOCATION
    let display_location = document.createElement('div');
    let display_place = document.createElement('p');
    let display_address = document.createElement('p');

    display_location.className = "display-location";
    display_place.className = "display-place";
    display_place.style.textOverflow = "ellipsis";
    display_address.className = "display-address";

    display_place.innerHTML = doc.location;
    display_address.innerHTML = doc.address;

    //GENDER ICON
    let display_peoplepref = document.createElement('div');
    let display_sex_icon = document.createElement('div');
    let img_gender = document.createElement('img');
    let display_sex_text = document.createElement('p');

    display_sex_icon.className = "display-sex-icon";
    display_sex_text.className = "display-sex-text";

    //BUTTON
    let button = document.createElement('button');
    let button_p = document.createElement('p');
    let button_image = document.createElement('img');

    //CLASS BUTTON TERGANTUNG ACTION
    button.setAttribute("type", "submit");
    // button.className = "display-request";
    // button_p.innerHTML = "Request";
    // button_image.src = "./images/Right arrow.svg";

    // button.className = "display-delete";
    // button.className = "display-request";

    //SET ID FIREBASE KE LI
    display_item.setAttribute("data-id", doc.id);

    if (doc.sex == 'male') {
        display_peoplepref2.className = "display-peoplepref2 display-male2";
        display_peoplepref2.innerHTML = "male only";
        img_gender.src = "./images/male.svg";
        img_gender.alt = "malesign";
        display_peoplepref.className = "display-peoplepref display-male";
        display_sex_text.innerHTML = "male only";
    } else if (doc.sex == 'female') {
        display_peoplepref2.className = "display-peoplepref2 display-female2";
        display_peoplepref2.innerHTML = "female only";
        img_gender.src = "./images/female.svg";
        img_gender.alt = "femalesign";
        display_peoplepref.className = "display-peoplepref display-female";
        display_sex_text.innerHTML = "female only";
    } else if (doc.sex == 'anyone') {
        display_peoplepref2.className = "display-peoplepref2 display-anysex2";
        display_peoplepref2.innerHTML = "anyone can join";
        img_gender.src = "./images/anysex.svg";
        img_gender.alt = "unisex";
        display_peoplepref.className = "display-peoplepref display-anysex";
        display_sex_text.innerHTML = "anyone";
    }

    if (doc.owner == "1fj3C0p3vowY8tCrpHNa") {
        button.className = "display-delete";
        button_p.innerHTML = "Delete";
        button_image.src = "./images/Trash.svg";
    } else {
        button.className = "display-leave";
        button_p.innerHTML = "Leave";
        button_image.src = "./images/Leave.svg";
    }

    //display-color-identifier
    display_color_identifier.appendChild(icon);
    display_item.appendChild(display_color_identifier);

    //display-text
    display_amount.appendChild(img);
    display_amount.appendChild(p);
    display_text.appendChild(display_title);
    display_text.appendChild(display_amount);
    display_text.appendChild(display_peoplepref2);

    //display-location
    display_location.appendChild(display_place);
    display_location.appendChild(display_address);

    //display-peoplepref
    display_sex_icon.appendChild(img_gender);
    display_peoplepref.appendChild(display_sex_icon);
    display_peoplepref.appendChild(display_sex_text);

    //display button
    button.appendChild(button_p);
    button.appendChild(button_image);

    //APPEND TO DISPLAY-ITEM
    display_item.appendChild(display_color_identifier);
    display_item.appendChild(display_text);
    display_item.appendChild(display_bar);
    display_item.appendChild(display_location);
    display_item.appendChild(display_peoplepref);
    display_item.appendChild(button);

    //APPEND TO MAIN DIV
    display_list.appendChild(display_item);
    display_content_per_date.appendChild(date);
    display_content_per_date.appendChild(display_list);
    display_container.appendChild(display_content_per_date);
}

// db.collection('account').doc("1fj3C0p3vowY8tCrpHNa").collection('matches_created_join').get().then((snapshot) => {
//     snapshot.docs.forEach(doc => {
//         temp_list.push(doc.data().match_id);
//     })

//     db.collection('match').where(firebase.firestore.FieldPath.documentId(), 'in', temp_list).get().then((snapshot) => {
//         snapshot.docs.forEach(dok => {
//             // renderMatch(dok);
//             temp_list2.push(dok.data());
//         })

//         //SORT HOUR
//         temp_list2.sort(function (a, b) {
//             // Turn your strings into dates, and then subtract them
//             // to get a value that is either negative, positive, or zero.
//             return a.time.slice(0, 2) - b.time.slice(0, 2);
//         });

//         //SORT DATE
//         temp_list2.sort(function (a, b) {
//             // Turn your strings into dates, and then subtract them
//             // to get a value that is either negative, positive, or zero.
//             return new Date(a.date) - new Date(b.date);
//         });

//         temp_list2.forEach(doc => {
//             renderMatch2(doc);
//             // console.log(ok);
//         })
//     })
// })


// db.collection('account').doc("1fj3C0p3vowY8tCrpHNa").get().then(function (doc) {
//     if (doc.exists) {
//         console.log("Document data:", doc.data());
//     } else {
//         // doc.data() will be undefined in this case
//         console.log("No such document!");
//     }
// }).catch(function (error) {
//     console.log("Error getting document:", error);
// });


// db.collection('match').doc('wnvMQrBcGK7HvuPJIzYM').get().then(function (dom) {
//     if (dom.exists) {
//         renderMatch(dom);
//     } else {
//         // doc.data() will be undefined in this case
//         console.log("No such document!");
//     }
//     // renderMatch(dom);
// }).catch(function (error) {
//     console.log("Error getting document:", error);
// });


/*
//UNTUK MATCHES
*/

// db.collection('account').doc("1fj3C0p3vowY8tCrpHNa").collection('matches_created_join').get().then((snapshot) => {
//     snapshot.docs.forEach(doc => {
//         temp_list.push(doc.data().match_id);
//     })

//     db.collection('match').where(firebase.firestore.FieldPath.documentId(), 'in', temp_list).get().then((snapshot) => {
//         snapshot.docs.forEach(dok => {
//             let join = "";
//             let pending = "";

//             db.collection('match').doc(dok.id).collection('matches_join').where("user_id", "==", "1fj3C0p3vowY8tCrpHNa").get().then((snapshot) => {
//                 snapshot.docs.forEach(doc => {
//                     if (doc.exists) {
//                         join = "yes";
//                     }
//                 })

//                 db.collection('match').doc(dok.id).collection('pending').where("user_id", "==", "1fj3C0p3vowY8tCrpHNa").get().then((snapshot) => {
//                     snapshot.docs.forEach(doc => {
//                         if (doc.exists) {
//                             pending = "yes";
//                         }
//                     })
//                     renderMatch3(dok.data(), join, pending);
//                 })
//             })
//         })
//     })
// })

var match_list = ['Qq00cMP6HvEFbUwVOn09', 'RTZurXkIOIZ2mH3y6vde', 'GszIwiSHAdoPv7zRHfnf', 'wnvMQrBcGK7HvuPJIzYM'];

db.collection('match').where(firebase.firestore.FieldPath.documentId(), 'in', match_list).get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderMatch3(doc.data(), "no", "no");
    })
})

var ok_test = {
    address: "jl.hello234",
    date: "Sun Dec 27 2020",
    event_name: "Hello!@#",
    location: "hello",
    owner: "1fj3C0p3vowY8tCrpHNa",
    sex: "male",
    sport: "basketball",
    time: "12:00",
}

var ok_test2 = {
    address: "jl.hello234",
    date: "Sun Dec 27 2020",
    event_name: "Joseph@34",
    location: "hello",
    owner: "1fj3C0p3vowY8tCrpHNa",
    sex: "male",
    sport: "basketball",
    time: "12:00",
}

var ok_test3 = {
    address: "jl.hello234",
    date: "Mon Dec 28 2020",
    event_name: "Hsoiuf",
    location: "hello",
    owner: "1fj3C0p3vowY8tCrpHNa",
    sex: "male",
    sport: "basketball",
    time: "15:00",
}

var ok_test4 = {
    address: "jl.hello234",
    date: "Mon Dec 28 2020",
    event_name: "joasdfa",
    location: "hello",
    owner: "1fj3C0p3vowY8tCrpHNa",
    sex: "male",
    sport: "basketball",
    time: "15:00",
}

var ok_test5 = {
    address: "jl.hello234",
    date: "Tue Dec 29 2020",
    event_name: "asdkljfha",
    location: "hello",
    owner: "1fj3C0p3vowY8tCrpHNa",
    sex: "male",
    sport: "basketball",
    time: "15:00",
}

var ok_test6 = {
    address: "jl.hello234",
    date: "Wed Dec 30 2020",
    event_name: "asdkljfha",
    location: "hello",
    owner: "1fj3C0p3vowY8tCrpHNa",
    sex: "male",
    sport: "basketball",
    time: "15:00",
}

var ok_test7 = {
    address: "jl.hello234",
    date: "Wed Dec 30 2020",
    event_name: "asdkljfha",
    location: "hello",
    owner: "1fj3C0p3vowY8tCrpHNa",
    sex: "male",
    sport: "basketball",
    time: "12:00",
}

var ok_test8 = {
    address: "jl.hello234",
    date: "Sun Dec 27 2020",
    event_name: "GUa_test_8",
    location: "hello",
    owner: "1fj3C0p3vowY8tCrpHNa",
    sex: "male",
    sport: "basketball",
    time: "17:00",
}

// window.alert(new Date("Tue Dec 29 2020 23:00"))

let div = document.querySelector(".display-container");
// console.log(div.length);

renderMatch3(ok_test4, "yes", "no")
renderMatch3(ok_test5, "yes", "no")
renderMatch3(ok_test6, "yes", "no")
renderMatch3(ok_test7, "yes", "no")
renderMatch3(ok_test, "yes", "no")
renderMatch3(ok_test3, "yes", "no")
renderMatch3(ok_test2, "yes", "no")

function sortDiv() {
    var div, i, switching, b, shouldSwitch;
    div = document.querySelector(".display-container");
    switching = true;
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
        // Start by saying: no switching is done:
        switching = false;
        b = div.childNodes;

        // Loop through all div items:
        for (i = 1; i < (div.childElementCount); i++) {
            // Start by saying there should be no switching:
            shouldSwitch = false;
            /* Check if the next item should
            switch place with the current item: */
            let date1 = new Date(b[i].id);
            let date2 = new Date(b[i + 1].id);

            // console.log(date1);
            // console.log("-----")
            // console.log(date2);

            if (date1 > date2) {
                /* If next item is alphabetically lower than current item,
                mark as a switch and break the loop: */
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            /* If a switch has been marked, make the switch
            and mark the switch as done: */
            b[i].parentNode.insertBefore(b[i + 1], b[i]);
            switching = true;
        }
    }
}

function renderMatch3(doc, join, pending) {
    //MAIN DIV
    let display_content_per_date = document.createElement('div');
    display_content_per_date.className = "display-content-per-date";
    display_content_per_date.id = doc.date + " " + doc.time;

    //DATE AND UL
    let date = document.createElement('h4');
    let display_list = document.createElement('ul');

    date.className = "display-date";
    display_list.className = "display-list";
    let date_text = doc.date;
    let date_split = date_text.split(" ");
    let full_day = objectOfDays[date_split[0]];
    let date_final = date_split.splice(1, 2);
    let date_join = date_final.join(" ");
    date.innerHTML = full_day + " " + date_join + ", " + doc.time + " WIB";
    display_list.id = full_day + " " + date_join + ", " + doc.time + " WIB";

    //LI
    let display_item = document.createElement('li');
    display_item.className = "display-item";

    //SPORT'S ICON
    let display_color_identifier = document.createElement('div');
    let icon = document.createElement('img');
    display_color_identifier.className = "display-color-identifier";

    if (doc.sport == "basketball") {
        icon.src = "./images/basketball2.svg";
        display_item.id = "display-basketball";
    } else if (doc.sport == "soccer") {
        icon.src = "./images/soccer2.svg";
        display_item.id = "display-soccer";
    } else if (doc.sport == "badminton") {
        icon.src = "./images/badminton2.svg";
        display_item.id = "display-badminton";
    } else if (doc.sport == "volleyball") {
        icon.src = "./images/volleyball2.svg";
        display_item.id = "display-volleyball";
    }

    //EVENT NAME, AMOUNT OF PLAYERS, GENDER
    let display_text = document.createElement('div');
    let display_title = document.createElement('h2');
    let display_amount = document.createElement('div');
    let img = document.createElement('img');
    let p = document.createElement('p');
    let display_peoplepref2 = document.createElement('p');

    display_text.className = "display-text";
    display_title.className = "display-title";
    display_amount.className = "display-amount";

    img.src = "./images/group.svg";
    display_title.innerHTML = doc.event_name;
    p.innerHTML = "3 / 10";

    //DISPLAY BAR
    let display_bar = document.createElement('div');
    display_bar.className = "display-bar";

    //DISPLAY LOCATION
    let display_location = document.createElement('div');
    let display_place = document.createElement('p');
    let display_address = document.createElement('p');

    display_location.className = "display-location";
    display_place.className = "display-place";
    display_place.style.textOverflow = "ellipsis";
    display_address.className = "display-address";

    display_place.innerHTML = doc.location;
    display_address.innerHTML = doc.address;

    //GENDER ICON
    let display_peoplepref = document.createElement('div');
    let display_sex_icon = document.createElement('div');
    let img_gender = document.createElement('img');
    let display_sex_text = document.createElement('p');

    display_sex_icon.className = "display-sex-icon";
    display_sex_text.className = "display-sex-text";

    //BUTTON
    let button = document.createElement('button');
    let button_p = document.createElement('p');
    let button_image = document.createElement('img');

    //CLASS BUTTON TERGANTUNG ACTION
    button.setAttribute("type", "submit");
    // button.className = "display-request";
    // button_p.innerHTML = "Request";
    // button_image.src = "./images/Right arrow.svg";

    // button.className = "display-delete";
    // button.className = "display-request";

    //SET ID FIREBASE KE LI
    display_item.setAttribute("data-id", doc.id);

    if (doc.sex == 'male') {
        display_peoplepref2.className = "display-peoplepref2 display-male2";
        display_peoplepref2.innerHTML = "male only";
        img_gender.src = "./images/male.svg";
        img_gender.alt = "malesign";
        display_peoplepref.className = "display-peoplepref display-male";
        display_sex_text.innerHTML = "male only";
    } else if (doc.sex == 'female') {
        display_peoplepref2.className = "display-peoplepref2 display-female2";
        display_peoplepref2.innerHTML = "female only";
        img_gender.src = "./images/female.svg";
        img_gender.alt = "femalesign";
        display_peoplepref.className = "display-peoplepref display-female";
        display_sex_text.innerHTML = "female only";
    } else if (doc.sex == 'anyone') {
        display_peoplepref2.className = "display-peoplepref2 display-anysex2";
        display_peoplepref2.innerHTML = "anyone can join";
        img_gender.src = "./images/anysex.svg";
        img_gender.alt = "unisex";
        display_peoplepref.className = "display-peoplepref display-anysex";
        display_sex_text.innerHTML = "anyone";
    }

    if (doc.owner == "1fj3C0p3vowY8tCrpHNa") {
        //owner
        button.className = "display-delete";
        button_p.innerHTML = "Delete";
        button_image.src = "./images/Trash.svg";
    } else if (join == "yes") {
        //leave
        button.className = "display-leave";
        button_p.innerHTML = "Leave";
        button_image.src = "./images/Leave.svg";
    } else if (pending == "yes") {
        //withdraw
        button.className = "display-delete";
        button_p.innerHTML = "Withdraw";
        button_image.src = "./images/Trash.svg";
    } else {
        //request
        button.className = "display-request";
        button_p.innerHTML = "Request";
        button_image.src = "./images/Right arrow.svg";
    }


    //display-color-identifier
    display_color_identifier.appendChild(icon);
    display_item.appendChild(display_color_identifier);

    //display-text
    display_amount.appendChild(img);
    display_amount.appendChild(p);
    display_text.appendChild(display_title);
    display_text.appendChild(display_amount);
    display_text.appendChild(display_peoplepref2);

    //display-location
    display_location.appendChild(display_place);
    display_location.appendChild(display_address);

    //display-peoplepref
    display_sex_icon.appendChild(img_gender);
    display_peoplepref.appendChild(display_sex_icon);
    display_peoplepref.appendChild(display_sex_text);

    //display button
    button.appendChild(button_p);
    button.appendChild(button_image);

    //APPEND TO DISPLAY-ITEM
    display_item.appendChild(display_color_identifier);
    display_item.appendChild(display_text);
    display_item.appendChild(display_bar);
    display_item.appendChild(display_location);
    display_item.appendChild(display_peoplepref);
    display_item.appendChild(button);

    //CHECK IF THERE IS DUPLICATE
    let ul_id = full_day + " " + date_join + ", " + doc.time + " WIB";
    var find_duplicate = document.getElementById(ul_id);
    if (find_duplicate) {
        //APPEND TO EXISTING UL
        find_duplicate.appendChild(display_item);
    } else {
        //APPEND TO MAIN DIV
        display_list.appendChild(display_item);
        display_content_per_date.appendChild(date);
        display_content_per_date.appendChild(display_list);
        display_container.appendChild(display_content_per_date);
    }
}

sortDiv();

function test() {
    renderMatch3(ok_test8, "yes", "no");
    sortDiv();

}


// setTimeout(test(), 10000);

var div_main = document.querySelector(".display-container").childNodes;
var date_current = new Date();

var top_on_the_list = new Date(div_main[1].id);

if (top_on_the_list < date_current) {
    console.log(top_on_the_list);
    console.log(date_current);
    console.log("it is smaller");
    // document.querySelector(".display-container").removeChild(div_main[1]);
} else {
    console.log(top_on_the_list);
    console.log(date_current);
    console.log("it is larger");
}