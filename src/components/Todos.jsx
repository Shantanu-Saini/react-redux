import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';

const Todos = () => {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    return (
        <div className="mt-8">
            <h1 className="text-2xl font-bold mb-4">Todos</h1>
            <ul className="space-y-4">
                {todos.map((task) => (
                    <li key={task.id} className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-md text-black w-full">
                        <span className="flex-grow">{task.text}</span>
                        <button
                            onClick={() => dispatch(removeTodo(task.id))}
                            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none"
                        >
                            🗑
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todos;
