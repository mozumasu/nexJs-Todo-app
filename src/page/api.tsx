import { TaskType } from './types';

export const getAllTasks = async (): Promise<TaskType[]> => {
  const res = await fetch('http://localhost:3001/tasks', { cache: 'no-store' });
  const tasks = res.json();

  return tasks;
};
