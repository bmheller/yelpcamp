var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");


var data = [
    {
        name: "Cloud's Rest",
        image: "https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg",
        description: "Bacon ipsum dolor amet sausage leberkas rump, strip steak porchetta flank swine. Filet mignon rump porchetta pork chop. Hamburger landjaeger tail short loin, pancetta pastrami burgdoggen ground round picanha frankfurter pork chop. Shoulder brisket cow beef ribs sausage, ribeye strip steak flank t-bone ball tip fatback alcatra."
    },
    {
        name: "Granite Peak",
        image: "https://farm2.staticflickr.com/1424/1430198323_c26451b047.jpg",
        description: "Bacon ipsum dolor amet sausage leberkas rump, strip steak porchetta flank swine. Filet mignon rump porchetta pork chop. Hamburger landjaeger tail short loin, pancetta pastrami burgdoggen ground round picanha frankfurter pork chop. Shoulder brisket cow beef ribs sausage, ribeye strip steak flank t-bone ball tip fatback alcatra."
    },
    {
        name: "Desert Mesa",
        image: "https://farm3.staticflickr.com/2116/2164766085_0229ac3f08.jpg",
        description: "Bacon ipsum dolor amet sausage leberkas rump, strip steak porchetta flank swine. Filet mignon rump porchetta pork chop. Hamburger landjaeger tail short loin, pancetta pastrami burgdoggen ground round picanha frankfurter pork chop. Shoulder brisket cow beef ribs sausage, ribeye strip steak flank t-bone ball tip fatback alcatra."
    }
    ];

function seedDB(){
    //Remove all campgrounds
    Campground.remove({}, function(err){
        console.log("Removed Campgrounds");
        // //Add a few campgrounds
        // data.forEach(function(seed){
        //     Campground.create(seed, function(err, campground){
        //         if(err){
        //             console.log(err);
        //         } else {
        //             console.log("Added a campground");
        //             //Create a comment
        //             Comment.create(
        //                 {
        //                     text: "This place is great, but I wish there was internet.",
        //                     author: "Homer"
        //                 }, function(err, comment){
        //                     if(err){
        //                         console.log(err);
        //                     } else {
        //                       campground.comments.push(comment);
        //                       campground.save();
        //                       console.log("Created a new comment");
        //                     }
        //                 });
        //         }
        //     });
        //  });  
    });
}


module.exports = seedDB;