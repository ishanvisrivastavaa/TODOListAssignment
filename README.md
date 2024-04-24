# React + Vite
#publicURL
https://todolist-eta-eight.vercel.app/

#Todo List Application
This is a simple todo list application built with React and Redux.

#Features
1. Add tasks to the list
2. Delete individual tasks
3. Remove all tasks from the list
4. Persistence: Tasks are saved locally and will not be lost on page reload
 
#Setup
1. Clone the repository to your local machine:
git clone https://github.com/ishanvisrivastavaa/todo-list.git

2.Navigate to the project directory:
cd todo-list

3. Install dependencies:
npm install

4. Start the development server:
npm start
Open your web browser and visit http://localhost:3000 to view the application.

#Usage
1. Enter a task in the input field and press Enter or click the "+" button to add it to the list.
2. Click the trash icon next to a task to delete it.
3. Click the "Check List" button to remove all tasks from the list.

#Code Overview
1. src/components/Todo.js: Contains the main Todo component responsible for rendering the todo list and handling user interactions.
2. src/actions/index.js: Defines the Redux actions for adding, deleting, and removing todos.
3. src/reducers/todoReducers.js: Implements the Redux reducers to update the state based on the actions.


#License
MIT License

