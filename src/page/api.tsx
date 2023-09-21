import { log } from 'console';
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

//タスク編集API
export const editTask = async (
  id: string,
  newText: string
): Promise<TaskType[]> => {
  const res = await fetch(`http://localhost:3001/tasks/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text: newText }),
  });
  const updatedTask = await res.json();

  return updatedTask;
};
//タスク削除API
export const deleteTask = async (id: string): Promise<TaskType[]> => {
  const res = await fetch(`http://localhost:3001/tasks/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });
  const deleteTask = await res.json();

  return deleteTask;
};
