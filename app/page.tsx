'use client';
import { useEffect } from 'react';
import { ITask } from './interfaces'
import Task from "./task";
import { useState } from "react";

export default function Home() {
  let [tasks, setTasks]: [ITask[], Function] = useState([]);
  async function create(): Promise<void> {
    const url = 'http://localhost:3001/task';
    return fetch(url, { 
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({title:'Lorem ipsum dolor', description: 'Lorem ipsum dolor'})
    })
      .then(res => res.json())
      .then(data => {
        console.log(`new data: ${data}`);
        setTasks(data);
      });
  }

  useEffect(() => {load()}, [])
  
  async function load() {
    const url = 'http://localhost:3001/task';
    fetch(url, { 
      method: 'GET',
      headers: {
          'Content-Type': 'application/json'
      },
    })
      .then(res => res.json())
      .then(data => {
        setTasks(data);
      })
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <button id="create-task" onClick={create}>New</button>
        <ul className="task-list">
          {tasks.map(task => (
            <Task
              id={task.id}
              title={task.title}
              description={task.description}
              status={task.status}
              createdAt={task.createdAt}
              updatedAt={task.updatedAt}
            />
          ))}
        </ul>
      </main>
    </div>
  );
}
