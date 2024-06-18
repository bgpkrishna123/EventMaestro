# Event Maestro

## Introduction :-
The Event Maestro website is a comprehensive platform that simplifies event planning and management. It allows users to book events, create their own events, and offers a responsive layout for seamless access across various devices.

## Project Type:-
Fullstack (MERN)

## Deployed App:-
Frontend: https://event-maestro-jfkz.vercel.app/ </br>
Backend:  https://eventmaestro.onrender.com

## EventMaestro Directory Structure

**├── Backend/**<br>
│   ├── .env<br>
│   ├── .gitignore<br>
│   ├── index.js<br>
│   ├── package-lock.json<br>
│   ├── package.json<br>
│   └── src/<br>
│       ├── Middleware/<br>
│       │   ├── access.js<br>
│       │   └── auth.js<br>
│       ├── configs/<br>
│       │   └── db.js<br>
│       ├── controllers/<br>
│       │   ├── event.js<br>
│       │   └── user.js<br>
│       ├── models/<br>
│       │   ├── blacklist.Schema.js<br>
│       │   ├── event.schema.js<br>
│       │   └── user.schema.js<br>
│       └── routes/<br>
│           ├── event.routes.js<br>
│           └── user.routes.js<br>
**├── Frontend/**<br>
│   ├── .env<br>
│   ├── .eslintrc.cjs<br>
│   ├── .gitignore<br>
│   ├── README.md<br>
│   ├── index.html<br>
│   ├── package-lock.json<br>
│   ├── package.json<br>
│   ├── src/<br>
│   │   ├── App.css<br>
│   │   ├── App.jsx<br>
│   │   ├── Components/<br>
│   │   │   ├── AppNavbar.jsx<br>
│   │   │   ├── BookedEvents.jsx<br>
│   │   │   ├── Carouj.jsx<br>
│   │   │   ├── Carousel.jsx<br>
│   │   │   ├── Checkout.jsx<br>
│   │   │   ├── Container.jsx<br>
│   │   │   ├── EventCreationModal.jsx<br>
│   │   │   ├── FloatingContactForm.jsx<br>
│   │   │   ├── Footer.jsx<br>
│   │   │   ├── InternationalWeddingPlanner.jsx<br>
│   │   │   ├── Middle.jsx<br>
│   │   │   ├── OurServices.jsx<br>
│   │   │   ├── Payment.jsx<br>
│   │   │   ├── VideoSection.jsx<br>
│   │   │   ├── WelcomeSection.jsx<br>
│   │   │   └── vars.js<br>
│   │   ├── Page/<br>
│   │   │   ├── EventPage.jsx<br>
│   │   │   ├── FindEvent.jsx<br>
│   │   │   ├── HomePage.jsx<br>
│   │   │   └── Login.jsx<br>
│   │   ├── Routes/<br>
│   │   │   └── AllRoutes.jsx<br>
│   │   ├── Styles/<br>
│   │   │   ├── Checkout.css<br>
│   │   │   ├── Container.css<br>
│   │   │   ├── FloatingContactForm.css<br>
│   │   │   ├── InternationalWeddingPlanner.css<br>
│   │   │   ├── Login.css<br>
│   │   │   ├── Middle.css<br>
│   │   │   ├── OurServices.css<br>
│   │   │   ├── Payment.css<br>
│   │   │   ├── VideosSection.css<br>
│   │   │   └── WelcomeSection.css<br>
│   │   ├── admin/<br>
│   │   │   ├── Admin.jsx<br>
│   │   │   └── admin.css<br>
│   │   ├── assets/<br>
│   │   │   ├── Img_1.jpg<br>
│   │   │   ├── Img_2.png<br>
│   │   │   ├── Img_3.png<br>
│   │   │   ├── Img_4.png<br>
│   │   │   ├── Logo.jpeg<br>
│   │   │   ├── Logo.png<br>
│   │   │   ├── airplane.png<br>
│   │   │   ├── artist.png<br>
│   │   │   ├── balloons.png<br>
│   │   │   ├── bg.jpg<br>
│   │   │   ├── brand.png<br>
│   │   │   ├── chip.png<br>
│   │   │   ├── cocktail.png<br>
│   │   │   ├── corporate.png<br>
│   │   │   ├── couple.png<br>
│   │   │   ├── curtains.png<br>
│   │   │   ├── dish.png<br>
│   │   │   ├── fashion.png<br>
│   │   │   ├── garlands.png<br>
│   │   │   ├── globe-1.jpg<br>
│   │   │   ├── guests.png<br>
│   │   │   ├── hospitality.png<br>
│   │   │   ├── location.png<br>
│   │   │   ├── management.png<br>
│   │   │   ├── marker.png<br>
│   │   │   ├── meeting.png<br>
│   │   │   ├── musical-note.png<br>
│   │   │   ├── phone1.png<br>
│   │   │   ├── photo-camera.png<br>
│   │   │   ├── react.svg<br>
│   │   │   ├── seminar.png<br>
│   │   │   ├── singer.png<br>
│   │   │   ├── slider1.jpg<br>
│   │   │   ├── title-icon.png<br>
│   │   │   ├── v3_f1.jpg<br>
│   │   │   ├── v3_f2.jpg<br>
│   │   │   ├── v3_f3.jpg<br>
│   │   │   ├── video-camera.png<br>
│   │   │   ├── virtual.png<br>
│   │   │   ├── visa.png<br>
│   │   │   ├── w-chat.png<br>
│   │   │   ├── waiter.png<br>
│   │   │   ├── wedding-rings.png<br>
│   │   │   ├── wedding.png<br>
│   │   │   └── whatsapp-icon.png<br>
│   │   ├── index.css<br>
│   │   ├── main.jsx<br>
│   │   ├── postcss.config.js<br>
│   │   └── styles/<br>
│   │       └── admin.css<br>
│   ├── tailwind.config.js<br>
│   ├── vercel.json<br>
│   └── vite.config.js<br>
└── README.md<br>



## Video Walkthrough of the project
link:

## Features
- Responsive and dynamic website
- User authentication using jwt
- Password hashing
- CRUD Operations
- Search property using search param
- Private routes
- Admin functionality

## Design decisions or assumptions
The development focused on creating an intuitive and secure platform that emphasizes community building among food enthusiasts. Assumptions include a high engagement rate based on quality content and user-friendly features.

### Snapshot of Website

# Navbar
<img width="929" alt="image" src="https://github.com/bgpkrishna123/EventMaestro/assets/157980081/cb5bff5c-f455-44cf-9155-e97c30e0f5e3">

# SignIn / SignUp
<img width="751" alt="image" src="https://github.com/bgpkrishna123/EventMaestro/assets/157980081/22887764-0ec7-4d3c-9994-e018eb3d2874">

# Carousel
<img width="938" alt="image" src="https://github.com/bgpkrishna123/EventMaestro/assets/157980081/fe739c59-603c-40ca-8372-ff9842b3b577">

# Mid-Section 
<img width="887" alt="image" src="https://github.com/bgpkrishna123/EventMaestro/assets/157980081/09e3d491-1505-4aca-acae-6d00add149bd">

<br/>

<img width="917" alt="image" src="https://github.com/bgpkrishna123/EventMaestro/assets/157980081/9d511832-4c7e-4327-b0e9-ae2a1f2ce23a">

<br/>

<img width="824" alt="image" src="https://github.com/bgpkrishna123/EventMaestro/assets/157980081/20901b53-10d3-4a40-8a04-a52132e0b694">


# Footer
<img width="874" alt="image" src="https://github.com/bgpkrishna123/EventMaestro/assets/157980081/1a7f19b4-ffcb-4943-af65-49e2a28f2485">


## Installation & Getting started
Detailed instructions on how to install, configure, and get the project running.

To run the frontend website, enter the following commands in your terminal:

```bash

# Move into the FrontEnd Directory
cd frontend/

# Install all dependencies
npm install

# Run the dev server
npm run dev

```

To run the backend server, enter the following commands in your terminal:

```bash

# Move into the BackEnd directory
cd backend/

# Install all dependencies
npm install

# Run the server
npm run start

```

## Credentials

To be able to access the Admin Dashboard, enter these credentials in the Login Page :
```bash
UserId : planner@gmail.com
Password: planner
```
normal user:
Email:user@gmail.com
Password: user;


## API Endpoints
The deployed server can be used to fetch and sort any data. Further, it can be used to log in and register a user.

- API : https://eventmaestro.onrender.com

- GET /posts - retrieve all items
- POST /posts - create a new item
- PATCH /posts/:id - Patch an item
- DELETE /posts/:id - Delete an item
- POST /login - login in a user
- POST /register - create a user account
- POST/logout -logout a user account


## Technology Stack

List and provide a brief overview of the technologies used in the project.

- Frontend: React.js, Chakara UI, BootStrap, Axios
- Backend: Node.js, Express.js
- Database: MongoDB
- Other: Mongoose, JWT

## Contributors
Event Maestro is a collaborative project. Meet our collaborators:

Krishna Pratap (Ft30_114)
<br>
Shivani Patil (Ft30_289)
<br>
Abhay Kawle (Fw28_126)
