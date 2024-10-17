# Chatbot Brainstorming App

## Overview

This project is a simple full-stack web application that allows users to brainstorm ideas with a chatbot. Users can interact with the chatbot, save certain ideas, and reset the conversation and saved ideas. The application is built using React for the front-end and Node.js with Express for the back-end.

## Project Structure

/chatbot-app │
├── /client # React front-end
├── /src
   └── App.js # Main application file │
└── /server # Express back-end │
   ├── index.js # Main server file

## Features

- **Chat Interface**: Users can send messages to the chatbot and receive responses.
- **Save Ideas**: Users can save specific ideas generated during the chat.
- **Reset Functionality**: Users can reset both the chat history and the saved ideas.

## Technologies Used

- **Front-End**: React(vite)
- **Back-End**: Node.js, Express
- **Database**: In-memory storage (using an array)

### Back-End (Node.js + Express)

1. **Setup**: The server is set up using Express and listens on port `5000`.
2. **Endpoints**:
   - `POST /chat`: Receives user messages and generates a simple bot response.
   - `POST /save-idea`: Saves a user-specified idea to an in-memory array.
   - `POST /reset`: Clears both the chat history and saved ideas.
3. **In-Memory Storage**: Both chat history and saved ideas are stored in memory, allowing for simple manipulation without a database.

### Front-End (React)

1. **User Interface**: The UI consists of a chat history display, an input field for user messages, buttons for saving ideas and resetting, and a list of saved ideas.
2. **State Management**: The application uses React state to manage the chat history and saved ideas.
3. **API Calls**: Axios is used to communicate with the back-end server, sending user messages and retrieving responses.

## Running the Application Locally

### Prerequisites

- Node.js (version 14 or later)
- npm (Node package manager)

### Step 1: Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/Mohamed-Ebeid/chatbot-app.git
cd chatbot-app
```

### Step 2: Set Up the Back-End

Navigate to the server directory:

```bash
 cd server
```

Install the required packages:

```bash
 npm install express cors body-parser
```

Start the back-end server:

```bash
node index.js
```

The server will be running on `http://localhost:5000`.

### Step 3: Set Up the Front-End

Navigate back to the chatbot-app directory and then to the client directory:

```bash
 cd ../client
```

Install the required packages:

```bash
 npm install axios
```

Start the front-end application:

```bash
 npm start
```

The React application will open in your default web browser at `http://localhost:5173`.

## Usage

1. Chat with the Bot: Type your message in the input field and click "Send" to interact with the chatbot.
2. Save Ideas: If you want to save an idea, type it in the input field and click "Save Idea".
3. Reset: Click the "Reset" button to clear the chat history and saved ideas.

## Conclusion

This application serves as a basic framework for a chatbot brainstorming tool. You can expand its functionality by integrating a more sophisticated chatbot API or adding persistent storage with a database. Enjoy brainstorming with your chatbot!

Feel free to modify any sections as needed, and replace the GitHub URL with your actual repository link!
