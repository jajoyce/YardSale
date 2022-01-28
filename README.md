# YardSale

## Description
For Project 2, we're creating a web app to buy and sell used household items locally, similar to OfferUp, LetGo, etc. 


It allows users to create a profile, post household goods for sale, and view reviews posted by buyers. Each buyer is allowed one review per a product. Sellers have the ability to create a product post, update it and delete it.
The web app is based out of two cities Boston and New York. So sellers have to identify the location of which they would like to sell. Each product also requires price, category (Furniture, Electronic or Clothing) description and the seller's user account. All which are connected through 3 databases model. Our products database and review database both share separate one to many connections with the user database.

## Screenshots

## Technologies Used 
Express, Mongoose, Mongodb, EJS, CSS, Javascript, Nodemon, DotENV

## Userflow
When you vist our site you start at the Homepage as is the cause for most if not all websites. From there you have four options "What's For Sale", "Seller & Buyers", "Seller Reviews", and "Sell Something". If we select the "What's For Sale" it will direct us to our products page. From there each of our products are listed with the price, category, description, location and seller. Also there is a 'Show Product Info' button that directs you to the product page. On the product page the option to update a product is available simply click the "Update Product Info" button. Now we've been redirected once again to the update page. Here we can change any of the products info however all required fields must be completed or we wont be able to update. This page also has a reset form button that restarts the form should you make a mistake. Lastly is the 'Delete Product' button which deletes the product entirely and returns the you back to the products page. Or we could press cancel and return to the product page with no changes made.

Next is our "Seller & Buyers" page, this page displays all our users. For each user their first and last name is displayed as well as username, location and average rating. As displayed is a "Show User Profile" button which singles out a specific user and has a "Update User Profile" button which allows the user to change their profile information.
Clicking the name or the profile picture can also take you to the user's profile. 

Now to our "Seller Reviews" page, here all reviews can be viewed for all the purchased products. The seller's rating, the buyers comments, seller and buyer are all available on this page. Clicking "New Review" takes you to the "New Review Form" on this page a review can be added which will include a title, rating, contect, the seller and buyer.

Lastly is our "Sell Something" page this is where users can add new products to the products page simply filling in all the required fields and selecting the "Add New Product" button.

## Next Steps

Our current website is just a starting point we would like to add a few of the following key features in the near future to really optimize our website:

* Adding a location link that sorts products by location so that buyer aren't confused and make a purchase in the wrong city

* Create something that allows user to update there profile

* Create a link from the Sellers review page to the new review form 

* Adding bcrypt and password hass for user logins

## Sources and References

* Stack Overflow: https://stackoverflow.com/

* W3Schools: https://www.w3schools.com

* Bulma: https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css