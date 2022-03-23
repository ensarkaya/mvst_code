**Github Repositories with Search Functionality**
-
This project allows search and sort functionalities over Github repositories.

**How to run the project**
-
First, you need to clone the project from github, you can run:
### `git clone https://github.com/ensarkaya/mvst_code.git`
Then, in the project directory, you should run:
### `npm install`
After installation completed, you can run:
### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

**How to use:**
-
At first, you should enter a username of a Github user(rengil or rodrigopk) and click search. 
If the user is not found in the data, then the web page will inform you and ask for new input.
Else the web page will show the user informations on a card on the left side and his/her repositories on the right side
You can search between repositories with the search bar on the upper right position.
You can also sort the repositories with respect to the name, creation date, update date, fork count.

**Demo:**
-
https://mvst-code-challange.herokuapp.com

**Future improvements:**
-
- Adding a test suite by using Jest and React Testing Library
- Modifying the UI according to first feedback.
- Adding Redux 

**Your feedback about this exercise:**
-
I think there are several points that I was not quite sure about the project:
- Can I use static data or not?
- Should I need to add a backend server and a database?
- What is a storybook, I found a open-source library that is called Storybook. Did you mean "use Storybook library"?

**Data creation**
-
I used GraphQL explorer(https://docs.github.com/en/graphql/overview/explorer) to extract data from github with the following query:

{
  user(login: "enter username here") {
    id
    name
    login
    avatarUrl
    bio
    url
     repositories(first: 100, privacy: PUBLIC) {
      nodes {
        name
        createdAt
        description
        forkCount
        updatedAt
      }
    }
  }
}

