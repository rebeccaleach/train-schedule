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



	// take the user input (adding a train) and store it in Firebase and display the information on the page

		// 1. capture the user input and store it in firebase

		// make a click handler

		$('#button').on('click', function() {
			trainName = $('#trainName').val().trim();
			destination = $('#destination').val().trim();
			firstTrainTime = $('#firstTrainTime').val().trim();
			frequency = $('#frequency').val().trim();

			console.log (trainName);
			console.log(destination);
			console.log(firstTrainTime);
			console.log(frequency);

			database.ref().set({
				trainName: trainName,
				destination: destination,
				firstTrainTime: firstTrainTime,
				frequency: frequency
			})
		}) // end of click handler


		// when a value in the database is changed, this function updates it? stores the object item in firebase?

		database.ref().on('value', function(snapshot) {
			console.log(snapshot.val());

		})

		// 2. take each object(?), i.e. each new train, from Firebase and display it on the page in a table







}); // Closing $(document).ready

