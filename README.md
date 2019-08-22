# Swolr
### Brent Hanover (@brenthanover) 
### Oliver Yan Li (@Oliverlee1003)
### Albert Park (@Wohlte)
### Eric Wang (@ewang998)

#### Swolr is deployed at: http://swolr.herokuapp.com/

Swolr is a web application that introduces users to local gyms and personal trainers. It allows users to search for gyms and trainers based on preferences, book appointments with trainers, and leave reviews after their training sessions.




# Application structure

## Website pages

### Gyms Page:
* In a three-pane design, the application features a list of gyms with its picture, information, and location on a map using the Google Maps API.  
* At the top of the gyms page, there is an option in the search bar to filter results by tag (e.g. yoga, weightlifting) or by gym name. 
* For each listed gym, users can pull up a list of all trainers registered at that location. 


### Trainers page:
* In a single-card design, the application features trainer cards with a picture, a description, associated gym, and associated tags.
* Also featured is a dynamic rating of each trainer, averaged from the scores of all user reviews. Registered users who are logged in can leave a review and a rating of their trainers. 
* Clicking on the trainer pulls up the trainer page (see **Trainer Page** below). 
* Trainers can be filtered by workout type (yoga, bodybuilding etc), location, Price, and Gender. 

### myTrainers page:
* Features a trainer that is associated with a registered user's account. 

### Accounts Pages:
* The application features several features for registered members who are logged in.
* Users who are Gym Owners have the option to add new gyms. 
* Users who are Trainers may sign up as a trainer, and modify their existing trainer information. 

# Code styling and samples

### Code style

Our code style follows proper indenting and formatting and adheres to camel case. We tried as best as possible to be descriptive with functions and variables without being pedantic.

### Folder structure

The code structure is separated into two main areas: frontend and backend. All frontend files can be found in Workout-App/imports/ui. All backend files are kept under Workout-App/backend/api, with the exception of the Meteor server file under Workout-App/server which manages the user IDs. Styling is kept under Workout-App/client/main.css.

In the frontend, we separate actions, components and reducers, so that they are easily found. Actions are split up into actions for gyms, trainers, tags, etc. Components are split up into three main areas: gyms, trainers, and general. The reducers are split up by gyms, traingers, tags, etc, and combined using root reducer.

The backend is split up similarly. The server file for meteor is kept separately as that's what meteor requires, but the rest of the backend is stored in backend/api. Models holds all of the schema for the database, and routes holds all of the routing files.

### Code samples

We have included some code samples to display the typical code structure for our actions, reducers, and components.

### Sample reducers

```
export const trainersLoading = (state = false, action) => {
    if (action.type === 'TRAINERS_LOADING') {
        return action.isLoading
    }
    return state;
};

export const trainersErrored = (state = false, action) => {
    if (action.type === 'TRAINERS_ERRORED') {
        return action.hasErrored;
    }
    return state;
};
```

Above is an example of a couple of reducers. The reducer is clearly labeled so an unfamiliar person would know what the reducer and action does. The two above are clearly sent when the trainers are loading and when they have errored. In this case they just return booleans, but other reducers have data being returned.

### Sample action

```
export const gymsFetchData = (url) => {
    return (dispatch) => {
        dispatch(isGymsLoading(true));

        axios.get(url)
            .then((response) => {
                if (!response.data) {
                    throw Error(response.statusText);
                }
                dispatch(isGymsLoading(false));
                dispatch(gymsSuccess(response.data));
                return response.data;
            })
            .catch((err) => {
                console.log("There is an error occurring in fetch gyms action");
                console.log(err);
                dispatch(gymsErrored(true))
            });
    };
};
```

This is an example of an action that uses axios and thunk to asynchronously return a function. The action actually calls other actions in it, like 'isTrainersLoading', 'trainersSuccess', and 'trainersErrored'. It is clear from the names and style that the first line of the return statement dispatches an action saying that the trainers are loading. 

If the data is successfully fetched, an action is dispatched that says the trainers aren't loading, and then dispatches an action with the data saying that the asynchronous call has been successful. The catch statement is clear as well, console logging an error if it occurs and then dispatching an action saying that the trainers fetch data action has errored. All of this can be gleaned from the code by reading it because of the clear variable names and structured design.


### Sample component

```
    render() {
        if (this.props.hasErrored) {
            return <div>
                <GymMenu/>
                <br/>
                <p>Sorry! Error rendering</p>
            </div>
        }

        if (this.props.isLoading) {
            return <div align="center">
                <GymMenu/>
                <br/>
                <p>Loading...</p>
                <Spinner/>
            </div>
        }

        return (
            <div>
                <GymMenu/>
                <br/>
                {this.renderTags()}
                <br/>
                <ul>
                    {this.renderGyms()}
                </ul>
            </div>
        )
    };
```

This is a sample component, showing only the render method. Because of our naming conventions and abstraction practices, it is easy to follow what the code is doing. We often abstracted functionality out to other methods to increase readability. 

It is clear to see that if there is an error, only show an error message, if the page is loading, to display a loading sign with a loading spinner, and otherwise to show the tags and the gyms.




# Basic Contribution Requirements:

### Oliver:

Trainers page:  I took charge of the trainers page design by semantic UI, generated the data from backend using get method from mongo DB. I wrote the backend method to get all the trainers information, all the trainers tags, all the gyms tags. When we do the search in trainers page, those tags are generated automatically in the dropdown. I also wrote the loading feature that when it’s fetching data from backend, there’s a spinner loading in the page. 

Trainer page: I used semantic UI to show the trainers information and comment form. I wrote back end method to update the trainer comments, give trainers a rate. I also used semantic-rating to display rating bar. 

I also set up mongoDB, express, wrote connection between trainers page and trainer by redux, so that once we click on a trainer, it leads to that trainer information page. I also wrote the certification awarded to the trainers who fulfil the requirements, and pdf generator to display the pdf version of certification

### Eric: 
User Authentication: added meteor’s existing user account functionality and google log in, also updated custom field of “trainer” on user object to express user status 

Trainer Card: I designed the trainer card that design trainer and the information that we display on the card

Add Trainer/Edit Trainer: I implemented the forms to add and edit trainer information 

I also set up the project initially using meteor and semantic ui, deployed the project by deploying express API and helped deploy front end meteor application  

### Brent:

Gyms: I took the lead on the gyms, creating the schema for the database, creating the card component, the gyms page comprised of the cards with each dataset, the gym form to add new data to our database, and creating the tag system that was copied over to the forms and trainers pages. Along with the above there was significant work in setting up actions, reducers, backend calls, and components.

Sorting and searching: I created the sorting algorithm that sorts the frontend data based on tags. I used the backend call implemented by Eric that returns the list of tags, and through redux, made it so that the user can sort the gyms and trainers by selecting or deselecting tags. I also implemented a search feature which allows users to search gyms and trainers by name.

Actions, axios, thunk: I implemented thunk and axios into our actions and made them asynchronous calls that can return functions. This made it easier to do our calls to the backend, and made it so that we can dispatch actions in an action, and properly show error messages. I also created the structure for showing whether or not the data is loading, loaded, or errored.

Other areas I took the lead on were implementing the Google maps API, storing images as base64 strings in mongo, parsing those strings into images, implementing the site navigation with BrowserRouter, putting data in the URL so it is persistent upon page reloading, and added most of the data for the trainers and gyms.


### Albert:

User Interface Design: Contributed CSS and HTML design to the front end, including navigation, header, and other components of the website design. 

Redux: Contributed to the addition of Redux to our application, mainly employing routing and server requests when clicking through the navigation. 

Deployment: Contributed to the deployment of the application through heroku. 






# Basic Functionality Requirements

### Split up requirements into minimum, standard, and stretch requirements

#### Minimum requirements (3-5 will definitely complete):
- Filter function on trainer (after selecting gym, price low to high etc)
  - Completed, users can filter gyms and trainers by tags and search by name
- A trainer page (with dummy trainners’ information), profile page, and a gym page
  - Completed, there is a page with all trainers, a detailed page for each trainer, a page where trainers can edit their info, and a page with all of the gyms.
- Pop-up/page when selecting trainer, showing trainer’s information
  - Completed, a separate page was implemented when a trainer on the trainers page is clicked. That page has all of the detailed information for the trainer

#### Standard requirements (3-7 will most likely complete):
- Ability to create a profile for a user
  - Completed, users can sign in and create a trainer profile. Once they have created the profile they can edit their information on the trainer form page.
- Rating system for users, trainers, gyms
  - Completed for trainers, users can comment and rate trainers
- Map to show locations of gyms
  - Completed, Google maps API was integrated with the project to show the gyms location on a map
- Ability to leave reviews on pages
  - Completed for trainers, users can comment on trainers
- Have the admin account and limit user from updating the trainer’s information
  - Completed, when user signs up as a trainer a custom field - Trainer is updated to differentiate regular user and trainer. Trainer has the ability to update its own information
- Use Google maps API to find closest gyms and present that info in our app.
  - Not completed. Google maps API was implemented and GPS coordinates are stored in the block of data for each gym, but we did not implement an algorithm to sort gyms by location.

#### Stretch requirements (2-3, hope to complete 1):
- Matching system to give recommended lifting partners/trainers to members
  - Not implemented
- Paypal/Bitcoin
  - Not implemented


### Pick 2 minimum requirements and break each of them down into ~2-5 smaller tasks

#### Gyms page, Trainers page, Trainer page, profile page, Gyms page
- [x] List of Gym with information
- [x] Types of equipment
- [x] Hours, location

#### Trainers Page 
- [x] List of trainer with its brief bio (Picture, Name, Gym Locations, Introduction, workout tags)

#### Trainer page
- [ ] Availability (Text at first, Calendar format in the second phase)
- [x] Workout type, tags( eg. Arms, legs, Chest)
- [x] Bio 

#### User Profile page
- [ ] Your physical attributes
- [ ] List of gyms visited, workouts tried (tags), trainers/members trained with

#### Filter function on trainer
- [x] Workout type (yoga, bodybuilding etc), location, etc
- [ ] Location.
- [ ] Price (from low to high, high to low)
- [ ] Gender






# Challenges, learning, and future directions:
A few challenges appeared in our projects:

### Deployment
#### Issue:
Deployment was a significant challenge for us because we mixed Meteor with the MERN-stack application. We had backend calls working in both meteor and express. When we deployed, it failed and it was difficult to see exactly which part was causing the problem. We solved the problem by deploying the backend part separately as an API. This method made it easier to debug and deploy the app.

#### What did we learn?
We learned that it is a good idea to deploy the app early during development. This way, we know exactly which steps/parts have the problem for deployment. If the app is huge, we can to separate back end and front end and deploy separately.

### Styling:
#### Issue:
Our goal was to make the app as aesthetically pleasing as possible. When dealing with the header, we aimed to make it moving around and make sure that it would invite users to try the app. After cropping the image, changing the brightness of the picture and editing the CSS, we made our header moving up and down. 

We also had discussions on how the pages would look. For example, when we initially designed the layout of trainers page, we were debating whether to use card or rows to display the trainers. We mocked up the page by rows and cards separately and compared them together, and then agreed to use cards instead. 

#### What did we learn?
Team work, conflict resolution, and how to use semantic UI and CSS. In the future, those design ideas and css knowledge can help us. 


### Image storing in MongoDB:
#### Issue:
Originally, we were simply inputting image URLs to the database. We realized that this would be an issue if a user wanted to upload a new picture. So, we changed the forms to uploading a picture instead of the URL, converted the picture into a base64 string, and stored that string in our database. Then, there is a simple parser in the GymCard and TrainerCard components that parses the string into an image. This method has a limitation of only being able to upload pictures that are below ~50kb.

#### What did we learn?
New technologies can help us to store images. In the future, we can store an image using a base64 string and a parser.

### Action-reducer interface
#### Issue:
The trainer page data was not successfully rendered even when the action was called successfully, meaning that reducers were not called properly. After debugging for a while, we realized that it’s because we did not include reducers in the combined root reducers. 

#### What did we learn?
We gained a better understanding of the redux lifecycle more, and how every single part is connected to each other. 




# Initiative and additional contributions:

### Authentication
The authentication functionalities went beyond the features. Our original goal was simply to allow trainers to update their information, which would likely have been done by scrolling through and selecting which trainer to update. We then wanted to improve functionality to only allow the trainer to update their own data. After brainstorming, we realized that we can get meteor to assign each trainer a userID when the trainer signs up.  We then allowed trainers to access only their own trainer information only by the userID they were assigned with, when they created their profile. When a user signs up as a trainer, they will be assigned 'true' in the custom user field 'trainer', allowing us to separate standard users from trainers.

### Google Map API: 
We successfully incorporated Google Maps API into our application to show the location of gyms. To avoid misuse of the API key (which could end up in charges for us) we removed the key from the final project, only showing it in the presentation. The API allows us to input an address as a string and return GPS coordinates, and we store those coordinates as a string in our database. Then we embedded a map window in each gym card, centred the map on the coordinates for each gym, and dropped a marker at the coordinates.

### Dropdown for tags:
To get the list of tags associated with all gyms and trainers, we created a backend call that populates an array with the tags and stores it in redux. When we are filtering the gyms and trainers by tags, those tags appear as prompts in the form field.

### Search gyms and trainers by name
This was not part of our original goals. We created functionality to store the list of gym and trainers names in redux, and connected it to the search bar at the top of the gyms and trainers pages. Clicking on the search bar makes a list of all gym or trainer names pop up. As the user types, the options narrow down until the user can select the gym or trainer they're looking for. When they hit enter, the page will only show that gym or trainer.

### Loaded, loading, and not loaded features
To show the user that the website is loading and not just stalled, we wanted to implement a loading spinner. The spinner itself was downloaded through npm but the functionality implemented with redux. Right after the fetch data action is sent, we send an action to make the spinner component appear.  When the data is successfully fetched, we send a successful load action that removes the spinner component and puts in all of the cards populated with the data. If the data never loads, the spinner spins for a few seconds and then times out, and the spinner is removed and the page shows an error message in place of any component. These are all done with actions, redux, and switch statements.

### Frontend/backend split
The express backend in backend/api was later deployed separately as Swolr’s API and allowed us to separate Swolr’s Front-end and Back-end into 2 modules. This structure gave us the ability to work on both modules simultaneously and independently. As long as both the frontend and backend developers maintain the same standard of data between the RESTful API and meteor application, teams can work on only front or back end. This allows us to scale up our application more rapidly when needed. 

