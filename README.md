### :heavy_check_mark: FINISHED
#### :green_book: [Interface] Event Scheduling
# :date: Event Scheduling

## :mag: Objective
Event Scheduling is an event scheduler with invitation support. Through this application, it's possible to manage your own events consisting of: name, start date, and end date. Each user has their own events, but there's nothing stopping them from inviting other users to their events. The application supports inviting multiple users registered in the application. Remember that all invitations are created with a "pending" status, and the user you invited needs to accept this invitation.

## :computer: Development
The project consists of a web-based event calendar system with [backend](https://github.com/bielborgesc/back-event-scheduling) and frontend.

It will be developed in REST architecture with the following functionalities:

- User registration;
- Login for system access;
- Addition of events;
- Event editing;
- Event removal;
- Event listing;

The necessary attributes for the event are:

- Description;
- Start date and time;
- End date and time;
- Events cannot be overwritten and if attempted, it will prompt a warning to the user;
- Support for multiple users;
- Events will be associated with the user who created them;
- Frontend rendered on the client side using the React JS library;
- Events lasting more than one day;
- Responsive application, using Bootstrap and SCSS using the concept of [Atomic Design](https://medium.com/pretux/atomic-design-o-que-%C3%A9-como-surgiu-e-sua-import%C3%A2ncia-para-a-cria%C3%A7%C3%A3o-do-design-system-e3ac7b5aca2c);
- If an event is deleted, its attendees should be notified about the event cancellation.

## :arrow_forward: Run the code

In the project directory, you can run:

### `npm start`

[](https://github.com/bielborgesc/front-react-event-scheduling#npm-start)

Runs the app in the development mode.  
Open  [http://localhost:3000](http://localhost:3000/)  to view it in your browser.

The page will reload when you make changes.  
You may also see any lint errors in the console.

## :heavy_check_mark: Concluding

The main objective of this application is to serve as an interface for the API found in the repository: [back-event-scheduling](https://github.com/bielborgesc/back-event-scheduling). This frontend interface is an alternative interface built in React. The main interface was built in Angular and can be found in this repository: [front-event-scheduling](https://github.com/bielborgesc/front-event-scheduling).

## :raising_hand_man: Developers

Gabriel Carvalho  
Jackson de Almeida
