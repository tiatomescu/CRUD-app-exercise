# CRUD-app-exercise
Exercise to spin up a fullstack CRUD app.
This application consists of three parts: a client-side, server-side, and allows for a database connections.
It utilizes a Vite+React client, an Express app server, and a PostgreSQL database. All commands given are CLI commands.

## Table of Contents
- [Installation & Setup](#installation--setup)
- [Database Setup](#database-setup)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)

## Installation & Setup
The application requires Node.js- please see installation guidelines for your system [here](https://nodejs.org/en/download).
To check if you have Node.js installed, run the following command:
```
node -v
npm -v
```
If version numbers appear for both commands, you are ready to proceed!

Now, clone the repository into your local system. Change your current working directory to where you want the local repository, then run:
```
git clone [HTTP or SSH connection string]
cd your-repo-name
```
For more information about cloning, visit [Cloning a Repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository).

## Database Setup
This application requires a PostgreSQL database to be available for connections. Please ensure that PostgreSQL is installed and running on your system, and that you have created the necessary database for this application. You can find installation guidelines for your system [here](https://www.postgresql.org/download/).

If you are using a PostgreSQL instance running in a Docker container, and would like persistent storage, please ensure you have configured a volume. Without a volume, any data in your database will be lost when the container is stopped or removed.

## Running the Application
This proccess is easier to troubleshoot if you are running it in a code editor like VS code. Ensure your current working directory is the cloned repository, then run:
```
code .
```
### Server-side
Great! Now you are in a code editor. Let's spin up the server, run:
```
cd server
npm install
npm run start
```
If successful, you will see `Your server is running on http://localhost:8080` in the console.
Yay! Let's move on to the next step. Run Ctl + C to exit nodemon, and navigate back to the root directory:
```
cd ..
```

### Client-side
Okay, let's start up the client-side, run:
```
cd client
npm install
npm run dev
```
If successfull, you will see

```
VITE v6.2.4  ready in 241 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help`
```

## API Endpoints
GET /api/movies - Fetch all movies