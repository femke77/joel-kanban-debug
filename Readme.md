# Kanban Board Application

## Introduction

This project is a Kanban board application that features secure authentication using JSON Web Tokens (JWT). The authentication flow ensures that users can securely log in, manage their session, and access the board only when authenticated.


## Table of Contents

- [Kanban Board Application](#kanban-board-application)
  - [Introduction](#introduction)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [User Story](#user-story)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [Technologies Used](#technologies-used)
  - [Contributing](#contributing)
  - [License](#license)
- [](#)

## Features

- **User Authentication**: Secure login with JWT.
  
- **Session Management**: Session expiration and inactivity handling.
  
- **Kanban Board Access**: Access to the board only for authenticated users.
  
- **Create tasks**: Add new tasks with title, description, and priority level.
  
- **Move tasks between columns**: Use drag-and-drop functionality to move tasks between “To Do”, “In Progress”, and “Done” columns.
  
- **Update tasks**: Edit task details at any time, allowing users to change descriptions, due dates, or status.
  
- **Delete tasks**: Remove tasks from the board once they are no longer needed.


## User Story

GIVEN a Kanban board with a secure login page
WHEN I load the login page
THEN I am presented with form inputs for username and password
WHEN I enter my valid username and password
THEN I am authenticated using JSON Web Tokens (JWT) and redirected to the main Kanban board page
WHEN I enter an invalid username or password
THEN I am presented with an error message indicating that the credentials are incorrect
WHEN I successfully log in
THEN a JWT is stored securely in the client's local storage for subsequent authenticated requests
WHEN I log out
THEN the JWT is removed from the client's local storage and I am redirected to the login page
WHEN I try to access the Kanban board page without being authenticated
THEN I am redirected to the login page
WHEN I remain inactive for a defined period
THEN my session expires, the JWT is invalidated, and I am redirected to the login page upon my next action

## Installation

1. **Clone the Repository:**
   https://github.com/jdeluna06/Kanban-Board

2. **Navigate to the project directory:**
cd kanban-board

3. **Install Dependencies:**
npm install

4. **Start the development server:**
npm start

## Usage
Navigate to the login page.
Enter your credentials to access the Kanban board.
Use the board to create, update, and delete tasks.
Log out when finished, or your session will expire after a period of inactivity

## Credits
- **Joel De Luna** - Developer

## Technologies Used
Frontend: React, HTML, CSS
Backend: Node.js, Express
Authentication: JSON Web Tokens (JWT)
Storage: Local Storage for JWTs

## Contributing
If you'd like to contribute to this project, feel free to fork the repository and submit a pull request with your improvements.

## License

This project is licensed under the MIT License.
# 
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
