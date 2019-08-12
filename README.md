# Swolr
### Brent Hanover (@brenthanover) 
### Oliver Yan Li (@Oliverlee1003)
### Albert Park (@Wohlte)
### Eric Wang (@ewang998)

#### Swolr is deployed at: http://swolr.herokuapp.com/

Swolr is a web application that introduces users to local gyms and personal trainers. It allows users to search for gyms and trainers based on preferences, book appointments with trainers, and leave reviews after their training sessions.


## Gyms Page:
* In a three-pane design, the application features a list of gyms with its picture, information, and location on a map using the Google Maps API.  
* At the top of the gyms page, there is an option in the search bar to filter results by tag (e.g. yoga, weightlifting) or by gym name. 
* For each listed gym, users can pull up a list of all trainers registered at that location. 


## Trainers page:
* In a single-card design, the application features trainer cards with a picture, a description, associated gym, and associated tags.
* Also featured is a dynamic rating of each trainer, averaged from the scores of all user reviews. Registered users who are logged in can leave a review and a rating of their trainers. 
* Clicking on the trainer pulls up the trainer page (see **Trainer Page** below). 
* Trainers can be filtered by workout type (yoga, bodybuilding etc), location, Price, and Gender. 

## myTrainers page:
* Features a trainer that is associated with a registered user's account. 

## Accounts Pages:
* The application features several features for registered members who are logged in.
* Users who are Gym Owners have the option to add new gyms. 
* Users who are Trainers may sign up as a trainer, and modify their existing trainer information. 


# Project task requirements

#### Minimum requirements (3-5 will definitely complete):
* Filter function on trainer (after selecting gym, price low to high etc)
* A trainer page (with dummy trainners’ information), profile page, and a gym page
* Pop-up/page when selecting trainer, showing trainer’s information

#### Standard requirements (3-7 will most likely complete):
* Ability to create a profile for a user
* Rating system for users, trainers, gyms
* Map to show locations of gyms
* Ability to leave reviews on pages
* Have the admin account and limit user from updating the trainer’s information
* Use Google maps API to find closest gyms and present that info in our app

#### Stretch requirements (2-3, hope to complete 1):
* Matching system to give recommended lifting partners/trainers to members
* Paypal/Bitcoin


## Pick 2 minimum requirements and break each of them down into ~2-5 smaller tasks

## Gyms page, Trainers page, Trainer page, profile page, Gyms page
* List of Gym with information
* Types of equipment
* Hours, location

## Trainers Page 
* List of trainer with its brief bio (Picture, Name, Gym Locations, Introduction, workout tags)

## Trainer page
* Availability (Text at first, Calendar format in the second phase)
* Workout type, tags( eg. Arms, legs, Chest)
* Bio 

## User Profile page
* Your physical attributes
* List of gyms visited, workouts tried (tags), trainers/members trained with

## Filter function on trainer
* Workout type (yoga, bodybuilding etc), location, etc
* Location.
* Price (from low to high, high to low)
* Gender
