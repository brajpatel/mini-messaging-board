# Mini Messaging Board
![preview-img1](https://github.com/brajpatel/mini-messaging-board/blob/main/public/images/preview-img1.jpg)
![preview-img2](https://github.com/brajpatel/mini-messaging-board/blob/main/public/images/preview-img2.jpg)
![preview-img3](https://github.com/brajpatel/mini-messaging-board/blob/main/public/images/preview-img3.jpg)
## Summary
This app was created for The Odin Project's [Express & Mongoose](https://www.theodinproject.com/paths/full-stack-javascript/courses/nodejs#express-mongoose) in the NodeJS Course. The main objectives of this project were:
- setting up a project with 'express-generator'
- creating routes with express
- utilising a templating engine
- working with a database to store and retrive data
- deploying the app by using a 'Platform as a Service(PaaS)'
I chose to work with [Pug](https://pugjs.org/api/getting-started.html) over other templating languages like EJS to push myself to learn or at least expose myself to something that didn't look or feel like "normal" HTML to work with. I also chose to use MongoDB Atlas for the app's databse and used Mongoose to connect my Express app to the database.
The app was finally deployed using [fly.io](https://fly.io/).
## About
All the messages stored in the database are retrieved and displayed on the board and can be read. The user can also create a new message by completing the simple form implemented on the page. A new document is created using that data and is then stored in the database and displayed on the board.
<br/><br/>
These are some of the challenges I faced while making this project:
- Working with Pug and understanding how it works with whitespace when creating views
- Importing 'secrets' to fly.io so the app could successfully be deployed
## View Project
Check out my Mini Messaging Board by clicking [here](https://snowy-violet-6688.fly.dev/). Feel free to create a message to add to the board!!
