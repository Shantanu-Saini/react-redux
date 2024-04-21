# Redux Toolkit and React Redux Demo with todo list mini project

This project demonstrates how to set up a React project with Redux Toolkit and React Redux.

## Getting Started

To get started, follow these steps:

### 1. Create a React Project

First, create a new React project using Create React App:
```bash
npx create-react-app redux-toolkit
cd redux-toolkit
```

### 2. install redux toolkit
```bash
npm install @reduxjs/toolkit
```

### 3. Install React Redux
```bash
npm install react-redux
```

### 4. Create the Redux Store
In the src directory, create /app/store.js. Import configureStore from Redux Toolkit and use it to create the Redux store:
```bash
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    // Add your reducers here
  },
});

export default store;
```

### 5. create Redux Slice Reducers
Create Redux slice reducers using the `createSlice` function provided by Redux Toolkit.
```bash
// src/features/todo/todoSlice.js
import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    // Define your reducers here
  },
});

export const { actions, reducer } = todoSlice;
```

### 6.  Update store.js with Reducers
Import the reducer created in `todoSlice.js` into the `store.js` file and add it to the `reducer` object:
```bash
// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import { reducer as todoReducer } from './features/todo/todoSlice';

const store = configureStore({
  reducer: {
    todos: todoReducer,
    // Add other reducers here if needed
  },
});

export default store;
```

## Using Redux in Your Components
Now that you have set up the Redux store and created slice reducers, you can use Redux in your React components.

### Connecting Components with Redux Store
To connect a component to the Redux store, use the `useSelector` and `useDispatch` hooks provided by `react-redux`.