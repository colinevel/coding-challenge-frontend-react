# coding-challenge-frontend-react

Welcome to Front-End coding challenge!

Your challenge will be to develop a microsite allowing interaction with a test API https://jsonplaceholder.typicode.com, https://jsonplaceholder.typicode.com/guide.html.

This challenge is composed of 5 levels of difficulty which will be listed below.

## Guidelines

- Challenge is submitted as pull request against this repo ([fork it](https://help.github.com/en/github/getting-started-with-github/fork-a-repo) and [create a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork)).
- The microsite should be deployed to the PaaS of your choice.
- You must solve the levels in ascending order.
- You must commit your code at the end of each level.
- Use create-react-app to set up a basic single-page React application as shown here: https://reactjs.org/docs/create-a-new-react-app.html#create-react-app.

You can have a look at the higher levels, but do the simplest thing that could work for the level you're currently solving.
Each level uses the previous one, you can reuse your old code.
Don't hesitate to write shameless code at first, and then refactor it in the next levels.

### Bonus

- Decent UX and UI (responsiveness...).
- Use Redux

### Things that are important to us

- Code quality, maintainability and readability.

## Level 1

The purpose of this first level is to retrieve users from the following API https://jsonplaceholder.typicode.com/users and to display information of each user.

When this is done, you can move on to the next step.


## Level 2

The purpose of this second level is to update the user information that you previously retrieved and displayed in the previous step. The API provided at the beginning of this challenge allows the modification of each entity.

To do this, you will need to pass a specific `Content-Type`.

When this is done, you can move on to the next step.

## Level 3

The purpose of this third level is to display user posts. you can call a new route to retrieve the posts of a particular user from his ID, as follows: `https://jsonplaceholder.typicode.com/posts?userId=1`

When this is done, you can move on to the next step.


## Level 4

The goal of this fourth level is to display the comments related to each post, you can call a new route to retrieve the comments of a particular post from his ID, as follows: `https://jsonplaceholder.typicode.com/comments?postId=1`

When this is done, you can move on to the next step.

## Level 5

The purpose of this fifth level (the last one, courage 👊) is now to develop a delete function.

On the first page you have developed, you will now be able to delete a user.

if the user has been deleted, all of these messages and comments should be deleted

The query de delete a user can be done simply as below:

```
fetch('https://jsonplaceholder.typicode.com/users/1', {
  method: 'DELETE'
})
```

### Congratulations 🥳

You've completed all the levels! Don't forget to submit your pull request so we can review your challenge and get back to you as soon as possible.

Thank you very much
