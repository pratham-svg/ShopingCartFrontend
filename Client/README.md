A simple, modern  e-commerce site that can be tailored to the needs of individual sellers in a short matter of time.


My idea with eCommerce site was to develop a lean  for an e-commerce site that can be easily customized and added to by the user. The site boasts all the features that you would expect from a e-commerce site including product pages, product view pages, a shopping cart and pages for the brand to tell their story and post upcoming events such as sales and product releases.

The idea is for the user (ie. the brand) to be able to mix-and-match pieces of the site as they please. This includes  replacing products, and adding personalized product to the ‘Cart’ and ‘Order’ sections.

eCommercePlate was created using a React.js frontend served by a Node.js backend both of which were created specifically for this project.

The React.js frontend makes use of various npm packages, including Routers and the freeware package  feature on each product view page. The frontend also utilizes the Bootstrap CDN for styling and the Ion-Icons CDN for the icons that can be seen in the NavBar, product view pages and the shopping cart. The front end also makes use of  middleware to hold state.

React.js came in particularly useful when passing down state to different product view pages as well as consolidating data into the single shopping cart page.  Fetching the  data from the Node.js API and adding and manipulating Cartitems.

The Node.js backend is formatted as a NoSQL/MongoDb API that holds object data . There are four main models, Users, Products and Cartitems as well as another model for Order. Users and Products are joined by Cartitems in an association where both Users and Products can have many Cartitems and where each Cartitem will belong to a user’s ‘cart’. The photos are serialized as imageable and each product can have multiple photos as well as share photos with one another.

There are a variety of JavaScript functions throughout the framework that carry out a variety of tasks such as determining what components to render, calculating shopping cart totals and handling the various DOM events involved in the application.

All in all this was an extremely challenging project and one that absolutely forced us to learn and nail down difficult concepts such as creating a multiple association Node.js API using NoSQL/MongoDb, using React.js to hold and pass down state and writing logic functions to handle data on the frontend. I’ve learned a lot working on this project and completing it has made us hungry to apply these skills onto other endeavors.