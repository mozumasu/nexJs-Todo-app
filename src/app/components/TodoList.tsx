import { TaskType } from '@/page/types';
import React from 'react';
import Task from './Task';

interface TodoListProps {
  tasks: TaskType[];
}

const TodoList = ({ tasks }: TodoListProps) => {
  return (
    <ul className="space-y-3">
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TodoList;
