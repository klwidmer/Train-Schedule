var config = {
    apiKey: "AIzaSyCZxMxCcb-J28dlKAcg8IzXJnZnu28v8CE",
    authDomain: "train-9afca.firebaseapp.com",
    databaseURL: "https://train-9afca.firebaseio.com",
    projectId: "train-9afca",
    storageBucket: "train-9afca.appspot.com",
    messagingSenderId: "447167494009"
  };
  firebase.initializeApp(config);
  var database = firebase.database()

$("#submit-button").on("click", function () {
    
    let currentTime = $(".inputcurrentTime").val()
    let trainName = $("#inputTrainName").val()
    let destination = $("#inputDestination").val()
    let firstTrainTime = $("#inputFirstTrainTime").val()
    let frequency = $("#inputFrequency").val()
  
    
    database.ref().push({
        currentTime:currentTime,
        trainName: trainName,
        destination: destination,
        firstTrainTime: firstTrainTime,
        frequency: frequency,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
        
    });
    
})
database.ref().on("child_added", function(snapshot){
    
    let newTR = $("<tr>")
    
    let newTrainName = $("<td>").text(snapshot.val().trainName)
    let newDestination = $("<td>").text(snapshot.val().destination)
    let newFirstTrainTime = $("<td>").text(snapshot.val().firstTrainTime)
    let newFrequency = $("<td>").text(snapshot.val().frequency)
    console.log(snapshot.val());

    newTR.append(newTrainName)
    newTR.append(newDestination)
    newTR.append(newFirstTrainTime)
    newTR.append(newFrequency)
    newTR.append("<td>")
    $("#table-body").append(newTR)

})


// Current Time
    var currentTime = moment();
    currentTime.append("CURRENT TIME: " + moment(currentTime).format("hh:mm"));
// moment().format('.currentTime'); 



// Katies Example

// I wasn't able to get the trains to  calculate when the next train will arrive; this should be relative to the current time
// I used Katie's example in multiple different way, but wasn't sucessfull. 

// var randomDate = "02/23/1999";
// var randomFormat = "MM/DD/YYYY";
// var convertedDate = moment(randomDate, randomFormat);

// Using scripts from moment.js write code below to complete each of the following.
// Console.log to confirm the code changes you made worked.

// 1 ...to convert the randomDate into three other date formats
// console.log(moment(convertedDate).format("MM/DD/YY"));
// console.log(moment(convertedDate).format("MMM Do, YYYY hh:mm:ss"));
// console.log(moment(convertedDate).format("X"));
// console.log("----------------------------------------");

// 2 ...to determine the time in years, months, days between today and the randomDate
// console.log(moment(convertedDate).toNow());
// console.log(moment(convertedDate).diff(moment(), "years"));
// console.log(moment(convertedDate).diff(moment(), "months"));
// console.log(moment(convertedDate).diff(moment(), "days"));
// console.log("----------------------------------------");

// 3 ...to determine the number of days between the randomDate and 02/14/2001
// var newDate = moment("02/14/2001", randomFormat);
// console.log(moment(convertedDate).diff(moment(newDate), "days"));

// 4 ...to convert the randomDate to unix time (be sure to look up what unix time even is!!!)
// console.log(moment(convertedDate).format("X"));
// console.log("----------------------------------------");

// 5 ...to determine what day of the week and what week of the year this randomDate falls on.
// console.log(moment(convertedDate).format("DDD"));
// console.log(moment(convertedDate).format("dddd"));


    // Assumptions
    // var tFrequency = 3;

    // Time is 3:30 AM
    // var firstTime = "03:30";

    // First Time (pushed back 1 year to make sure it comes before current time)
    // var firstTimeConverted = moment(firstTime, "hh:mm").subtract(1, "years");
    // console.log(firstTimeConverted);

    // Current Time
    // var currentTime = moment();
    // console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

    // Difference between the times
    // var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    // console.log("DIFFERENCE IN TIME: " + diffTime);

    // Time apart (remainder)
    // var tRemainder = diffTime % tFrequency;
    // console.log(tRemainder);

    // Minute Until Train
    // var tMinutesTillTrain = tFrequency - tRemainder;
    // console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

    // Next Train
    // var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    // console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));
