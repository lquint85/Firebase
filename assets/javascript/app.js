
        //link this in the javascript file at the top of the js file\\
        console.log("hello");
                  var config = {
    apiKey: "AIzaSyDDPFUB1nFWqKl6PADCvEa2QInzwiXQ4GQ",
    authDomain: "train-schedule-935b1.firebaseapp.com",
    databaseURL: "https://train-schedule-935b1.firebaseio.com",
    projectId: "train-schedule-935b1",
    storageBucket: "train-schedule-935b1.appspot.com",
    messagingSenderId: "42827001529"
  };
  firebase.initializeApp(config); //hooks local to firebase\\

  var trainDataBase = firebase.database() //




        //form piece of information (object)\\
        //save this object to firebase\\
        //what is firebase? you can create a data base=object
        //each object will be inserted in bigger object (data base object\\)
        //create 
        //web sockets realtime nature of firebase communication
        //each new object that you piush is considered a child\\ 
      
       //creat object 
        var trainSchedule= {
            firstTrain: "7:30pm",
            destination: "chicago",
            name: "Amtrak",
            frequency: "10 minutes",
            }
 //push to database   

         trainDataBase.ref().push(trainSchedule)


//allows us to listen to the database for any new children added\\
         trainDataBase.ref().on("child_added", function(childSnapshot,previousChildKey){
            
           console.log(childSnapshot.val())
            var firstTrain = childSnapshot.val().firstTrain;
            var destination = childSnapshot.val().destination;
            var name = childSnapshot.val().name;
            var frequency= childSnapshot.val().frequency;

            console.log(destination);
        

            //add new pieces of information on table (append) to a row\\

            //where it gets complicated  the next arrival train depends on the time you open the page\\
            /* 7:45pm 8:00pm vs 7:50am this is where moment js comes in order to 
            calculate the new arrival time use moment js for new user log in so that the user can see 
            up to date time from there stance.
             */




         });

         //1.things to work on html grab existing train data from firebase and display on the table


         //2.make form that user can input data. first four like in above object

         //3. grab from child from firebase database added and append to the table

         //.practice going  over syntax for objects and functions

         // grab train data from firebase database when you first open the page


         


