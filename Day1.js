const fs = require('fs');

// Synchronously read file
const data = fs.readFileSync('Day1_input.txt', 'utf8');

// function to get the min value of a list
const popMin = function (list) {
    let min = Infinity;
    let minIndex = 0;

    for (let i = 0; i < list.length; i++) {
        if (list[i] < min) {
            min = list[i];
            minIndex = i;
        }
    }

    return list.splice(minIndex, 1);
}

// function to count similarities 
const countSimilarity = function (list, value) {
    let countMatch = 0;
    for (item of list) {
        if (item === value) {
            countMatch++;
        }
    }

    return countMatch;
}

// Split the data into lines
const lines = data.split('\n').map(line => line.trim()).filter(line => line);

// filter the lines into left and right lists
var leftList = [];
var rightList = [];

for (const line of lines) {
    const [left, right] = line.split("   ").map(Number);
    leftList.push(left);
    rightList.push(right);
}

function part1() {

    // max distance stored here
    var totalDistance = 0;

    // go through and get the min value for each to compare and 
    while (leftList.length > 0) {
        totalDistance += Math.abs(popMin(leftList) - popMin(rightList));
    }

    console.log("Total Distance: ", totalDistance);
}

function part2() {

    //total similarities 
    var totalSimilarities = 0;

    // go through the left list and calc the simularities and add to the total
    for (let value of leftList) {
        totalSimilarities += (value * countSimilarity(rightList, value));
    }

    console.log("total similarities: ", totalSimilarities)
}