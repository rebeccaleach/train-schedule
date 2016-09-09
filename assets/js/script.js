// TRAIN

$(document).ready(function(){

	// initialize Firebase

	var config = {
	    apiKey: "AIzaSyDG295WTsaGZudoCsauzQWiS4DQTZa7dsk",
	    authDomain: "train-schedule-b9fc4.firebaseapp.com",
	    databaseURL: "https://train-schedule-b9fc4.firebaseio.com",
	    storageBucket: "",
	};
	firebase.initializeApp(config);


	// reference the FB db in a variable

	var database = firebase.database();

	// train info variables

	var trainName;
	var destination;
	var firstTrainTime;
	var frequency;

	var now;
	var timeElapsed;
	var unitsElapsed;
	var unitsTillArrival;
	var minutesTillArrival;
	var arrivalTime;
	var minutesAway;





	// take the user input (adding a train) and store it in Firebase and display the information on the page

		// 1. capture the user input and store it in firebase

		// make a click handler

		$('#button').on('click', function() {
			trainName = $('#trainName').val().trim();
			destination = $('#destination').val().trim();
			firstTrainTime = $('#firstTrainTime').val().trim();
			frequency = $('#frequency').val().trim();

			var newTrain = {
				name: trainName,
				dest: destination,
				time: firstTrainTime,
				freq: frequency
			};

			// looks like the textboxes are clearing themselves, so do i still need to clear them manually?

			// console.log(newTrain.name);
			// console.log(newTrain.dest);
			// console.log(newTrain.time);
			// console.log(newTrain.freq);

			firebase.database().ref().push(newTrain);

		}) // end of click handler


		// when a value in the database is changed, this function updates it? stores the object item in firebase? why do i need this if the data is already stored in the firebase? it's already there. i can see it

		// this function also populates the table on the HTML page

		firebase.database().ref().on('child_added', function(snapshot) {
			// console.log(snapshot.val());

			// updating the original variables again
			// i don't really understand what this is doing
			trainName = snapshot.val().name;
			destination = snapshot.val().dest;
			firstTrainTime = snapshot.val().time;
			frequency = snapshot.val().freq;

			// console.log(trainName);
			// console.log(destination);
			// console.log(firstTrainTime);
			// console.log(frequency);

			// variables that require Moment crap





		// 2. take each object(?), i.e. each new train, from Firebase and display it on the page in a table

			$('#trainTable > tbody').append('<tr><td>' + trainName + '</td><td>' + destination + '</td><td>' + frequency + '</td><td>' + arrivalTime + '</td><td>' + minutesAway + '</td></tr>');



		});

		







}); // Closing $(document).ready

