import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

const AddTodo = () => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Trim the input value and check if it's empty or contains only whitespace
        if (!input.trim()) {
            return; // Return early if input is empty
        }

        dispatch(addTodo(input));
        setInput("");
    };

    return (
        <div className="mb-4">
            <h2 className="text-xl font-bold mb-2 text-center">Add Todo</h2>
            <form onSubmit={handleSubmit} className="flex">
                <input
                    type="text"
                    className='px-4 py-2 rounded-l border-2 border-gray-300 focus:outline-none focus:border-violet-700 flex-grow text-black'
                    placeholder="Enter your todo"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button
                    type='submit'
                    className='px-4 py-2 bg-violet-700 text-white rounded-r hover:bg-violet-800 focus:outline-none'
                >
                    Add
                </button>
            </form>
        </div>
    );
};

export default AddTodo;
