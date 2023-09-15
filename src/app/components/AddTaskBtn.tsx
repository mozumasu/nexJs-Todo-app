'use client';
import { AddTask } from '@/page/api';
import React, { ChangeEvent, FormEvent, useState } from 'react';

const AddTaskBtn = () => {
  const [TaskTitle, setTaskTitle] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    await AddTask({ id: '4', text: TaskTitle });

    setTaskTitle('');
  };
  return (
    <form className="mb-4 space-y-3" onSubmit={handleSubmit}>
      <input
        type="text"
        className="w-full border px-4 py-2 rounded focus:outline-none focus:border-blue-400"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setTaskTitle(e.target.value)
        }
        value={TaskTitle}
      />
      <button className="w-full px-4 py-2 text-white bg-blue-500 rounded transform hover:bg-blue-400 hover:scale-95 duration-75">
        Add Task
      </button>
    </form>
  );
};

export default AddTaskBtn;
