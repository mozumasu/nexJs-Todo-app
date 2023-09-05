import { TaskType } from '@/page/types';
import React from 'react';

interface TodoListProps {
  tasks: TaskType[];
}

const TodoList = ({ tasks }: TodoListProps) => {
  return (
    <ul className="space-y-3">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow"
        >
          <span>{task.text}</span>
          <div>
            <button className="text-green-500 mr-3">Edit</button>
            <button className="text-red-300 mr-1">Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
