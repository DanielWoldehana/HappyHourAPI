# HappyHourAPI
This Api allows you to pull different bars with informations like their names and addresses as well allowing you to pull bars with the cheapest happy hour prices or cheapeast parking lot nearest to the bar, it also allows you to search by the bar with the highest review score, while rendering their website phone number, hours of operation and other relative information.
 ## ROUTS FOR BAR REQUESTS 
 ## Pulling all Bars (get request) 
/api/bar gets all the bars 
 ## Pulling Bars by NAME (get request) 
/api/bar/name/< enter name of bar >
 ## Pulling all Bars with Happy Hour Beer price less then a certain amount (get request) 
/api/bar/hhBeerLorE/< enter a numerical value >
 ## Pulling all Bars with Happy Hour Wine price less then a certain amount (get request) 
/api/bar/hhWineLorE/< enter a numerical value >
 ## Pulling all Bars with Happy Hour Food price less then a certain amount (get request) 
/api/bar/hhFoodLorE/< enter a numerical value >

 ## Add a new bar to the database (post request) 
api/bar  
(then enter the required properties with their key values in the req.body)

 ## To Update a bar (put request) 
 ## enter the bar name you want to change and then enter what you want to change in the req.body 
/api/bar/update/< enter the name of the bar you want to update >

 ## To Delete a bar (delete request) 
 ## enter in the ObjectID of the bar you want to delete #
/api/bar/delete/< enter objectID here >

 ## ROUTS FOR PARKING-LOT REQUESTS 
 ## Pulling all Parking Spots (get Request) 
/api/parking

 ## Pulling all Parking Spots by name (get Request) 
/api/parking/name/< enter the name of parking lot company >

 ## Pull all parking place with a price less then or equal value entered**
/api/parking/PriceLorE/< enter the price value you are looking for >

 ## Post request**
 ## to add a new parking lot in the database 
/api/parking
(then enter the required properties with their key values in the req.body)

 ## Put request 
 ## find the Parking lot by name and update anything about it by inserting it in the req.body 
/api/parking/updateParking/ < enter in the object ID of the parking lot your are trying to update >

 ## Delete request  
 ## delete a parking lot from your database  
/api/parking/delete/ < enter in the objectID of the parking lot you want to delete >

 ## ROUTS FOR REVIEW REQUESTS 

 ## Pull of the reviews (get request) 
/api/reviews

 ## Pull all reviews with a review score/rating higher then or equal to the value you enter
/api/reviews/scoreGorE/ < enter the score value you want to search for >

 ## Put requests
 ## update something about a review by searching for that review by the author name and enter what you want to change about it in the req.body
/api/reviews/update/< enter the name of the review author >

 ## Post request 
 ## add a new review to your datebse  
/api/reviews 
(then enter the required properties with their key values in the req.body)

 ## Delete request  
 ## delete a review with the objectID  
/api/reviews/delete/< enter in the object id of the review you want to delete >