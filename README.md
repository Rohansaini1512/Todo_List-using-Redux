# Todo List Application

A simple and efficient Todo List application built with React. This application uses the Context API and reducers to manage state, providing a clean and maintainable codebase.

## Features

- **Add Todos**: Easily add new tasks to your todo list.
- **Delete Todos**: Remove tasks from your todo list.
- **Toggle Todos**: Mark tasks as completed or incomplete.
- **Persistent State**: The application maintains the state using Context API and reducers for efficient state management.


## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Context API**: React feature for managing state globally.
- **Reducers**: A predictable state container for JavaScript apps, used for state management.

## Getting Started



### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Rohansaini1512/Todo_List-using-Redux.git
    ```
2. Navigate to the project directory:
    ```bash
    cd todo-list
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
    

### Running the Application

1. Start the development server:
    ```bash
    npm start run dev
    ```
    
2. Open your browser and go to [http://localhost:3000](http://localhost:3000) to view the application.

## Usage

1. **Add a Todo**:
    - Enter a task in the input field and press "Add" to add it to your todo list.
2. **Delete a Todo**:
    - Click the "Delete" button next to a task to remove it from the list.
3. **Toggle a Todo**:
    - Click on a task to mark it as completed or incomplete.

## State Management with Context API and Reducers

The application uses the Context API and reducers to manage the state efficiently. Below is a brief overview of how state management is implemented:

### Context

The `TodoContext` provides the state and dispatch function to all components that need access to the todo list.

