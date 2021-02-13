function timeInSeconds() {
    let hours = document.getElementById("hours").value;
    let output = parseInt(hours) * 3600;
    document.getElementById("outputInSec").value = output;
}
// function addElement(){
//     var nodeToAdd = document.getElementById("invArr");
//     nodeToAdd = document.createElement("INPUT");
//     nodeToAdd.setAttribute("type","text");
//     nodeToAdd.setAttribute("id","addele");
//     nodeToAdd.setAttribute("placeHolder","Enter Value");

//     document.getElementById("invArr").appendChild(nodeToAdd);

// }
// function invertArray(){
//     let arr="";
//     arr = [document.getElementById("addele").value];
//     for (let index = 0; index < arr.length; index++) {
//         console.log("mam",arr);

//     }
//     arr = arr * (-1);
//     console.log("arr",arr);

// }

function invertArray() {
    let invert1 = document.getElementById("invert1").value;
    let invert2 = document.getElementById("invert2").value;
    let invert3 = document.getElementById("invert3").value;
    let invert4 = document.getElementById("invert4").value;
    var arr = [invert1, invert2, invert3, invert4]
    var invArr = []
    for (let index = 0; index < arr.length; index++) {
        invArr[index] = arr[index] * (-1);
        document.getElementById("Inverted").value = invArr;
    }
}

function ageInDays() {
    let age = document.getElementById("age").value;
    let output = parseInt(age) * 365;
    document.getElementById("daysAge").value = output;
}
function checkLength() {
    let str1 = document.getElementById("str1").value;
    let str2 = document.getElementById("str2").value;
    let strl1 = str1.length;
    let strl2 = str2.length;

    if (strl1 === strl2) {
        let output = "True";
        document.getElementById("check").value = output;
    }
    else {
        output = "False";
        document.getElementById("check").value = output;
    }
}

function convertArray() {
    var arr1 = document.getElementById("arrE1").value;
    var arr2 = document.getElementById("arrE2").value;
    var arr3 = document.getElementById("arrE3").value;
    var arr4 = document.getElementById("arrE4").value;
    var arr5 = document.getElementById("arrE5").value;
    var arr6 = document.getElementById("arrE6").value;
    var arr7 = document.getElementById("arrE7").value;
    var arr8 = document.getElementById("arrE8").value;

    var inputArray = [arr1, arr2, arr3, arr4, arr5, arr6, arr7, arr8];

    for (let i = 0; i < inputArray.length; i++) {
        if ((isNaN(inputArray[i]) === false) && (inputArray[i] != "")) {
            inputArray[i] = `"${inputArray[i]}"`;

        }
        else if (isNaN(inputArray[i]) === true) {
            inputArray[i] = inputArray[i];

        }
        else {
            console.log("enter a value");
        }
    }
    document.getElementById("intToStr").value = `[${[inputArray]}]`;
}

function leapYear() {

    var div = document.getElementById("leapYearDiv");
    var yearInput = document.getElementById("leapYear").value;
    if ((yearInput % 4 == 0) && (yearInput % 100 != 0) || (yearInput % 400 == 0)) {
        document.getElementById("leap").value = `${yearInput} is a Leap Year`;

    } else {
        document.getElementById("leap").value = `${yearInput} is not a Leap Year`;

    }
}

