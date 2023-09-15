import { TaskType } from './types';

//タスク一覧取得API
export const getAllTasks = async (): Promise<TaskType[]> => {
  const res = await fetch('http://localhost:3001/tasks', { cache: 'no-store' });
  const tasks = res.json();

  return tasks;
};

//タスク追加API
export const AddTask = async (task: TaskType): Promise<TaskType[]> => {
  const res = await fetch('http://localhost:3001/tasks', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task),
  });
  const newTask = res.json();

  return newTask;
};
