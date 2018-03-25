# [Site Name]

Project 1  
CPSC 473 - Front-End Engineering - Spring 2018  
California State University, Fullerton

A project where users can create their own “business card” or “landing” pages.

## Getting Started
You will need to download and install a few things before you get started.

### Prerequisites

You will need Node.js to run the server. You can download it [here](https://nodejs.org/en/download/).
You will need MongoDB and Deployd to run the backend server. [MongoDB](https://docs.mongodb.com/manual/administration/install-community/) [Deployd](https://github.com/deployd/deployd#install-from-npm)

Create a directory to store the project in.
```
mkdir SiteName
cd SiteName
```

### Installing

Clone the repo go into the main directory

```
git clone https://github.com/dannyboy15/cpsc473_project_1.git

cd cpsc473_project_1

npm install get-dependencies --save
npm --save-dev nodemon
```

## Running the site locally
To start the server

```
npm run dev
```
To start the back end server
```
npm install deployd-cli -g
dpd create profiles-backend
cd profiles-backend
dpd -d
```

## Authors
* **Daniel Bravo** [dannyboy15](https://github.com/dannyboy15)
* **Dominick Hem** [username](https://github.com)
* **Vishnu Shesha** [username](https://github.com)
* **Roy Redman** [username](https://github.com)
* **Prajwal Bhyrappa** [username](https://github.com)
* **Peng Chen** [username](https://github.com/pengchen95)
