// JavaScript Document

function myFunction () {
    var elem = document.getElementById("chooseMe");
    var fortuneNum = elem.options[elem.selectedIndex].value;
    var fortuneMessage;
    console.log(fortuneNum);

    switch (Number(fortuneNum)) {
        case 1:
        case 6:
            fortuneMessage = "You will inherit a fortune"
            break;
        case 2:
        case 7:
            fortuneMessage = "You'll be a JavaScript Ninja"
            break;
        case 3:
            fortuneMessage = "You will win a car"
            break;
        case 4:
        case 8:
            fortuneMessage = "You will get a new computer today"
            break;
        default:
            fortuneMessage = "You have three hours to live"
                                  
    } // end of switch

    document.getElementById("feedback").innerHTML = fortuneMessage;
}

