import { TaskType } from '@/page/types';
import React from 'react';

interface TodoProps {
  task: TaskType;
}

const Task = ({ task }: TodoProps) => {
  return (
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
  );
};

export default Task;
