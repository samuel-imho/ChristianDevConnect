- CREATE A GIT IGNORE FILE

* simply create 'gitignore' file and type in 'node_modules/' and you do that for anything you dont want in the git repo.

* open the terminal and type in 'git init' to initialize git. So now we have a repository

==========================================================================================================

- Udemy MERN Stack course - Episode 6 - Install dependencies & Basic express setup

* Learn npm install packages and their usefulness. Shows regular and dev dependencies.

==========================================================================================================
SCRIPTS - PACKAGE.JSON FILE

- server script is to run the node server backend.

==========================================================================================================
CONFIGURATION TO CONNECT THE DATABASE TO THE APPLICATION

- create a folder on the top level called 'config'. In there create a file called 'default.json'
- "the depenency created in package.json file will allow us to create global values that can be used throughout the application. The default json file can have all the default values.
- put your 'mongoURI' link in the default.json file (mongoURI is the link from mongo atlas to connect to app)
- create another file in the
- CONNECTION LOGIC: create a new file in the config folder called 'db.js'
