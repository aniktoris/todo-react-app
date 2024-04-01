import { useState, useEffect } from "react";
import { type Task } from "./types";
import List from "./List";
import Form from "./Form";

function loadTasks():Task[]{
  const storedTasks = localStorage.getItem('tasks');
  return storedTasks ? JSON.parse(storedTasks) : [];
}

function updateStorage(tasks:Task[]){
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function Component() {
  const [tasks, setTasks] = useState<Task[]>(() => loadTasks());

  const addTask = (task:Task): void => {
    setTasks([...tasks, task]);
  }

  const toggleTask = ({id}:{id:string}) => {
    setTasks(tasks.map((task) => {
      if(task.id === id){
        return {...task, isCompleted: !task.isCompleted}
      }
      return task;
    }))
  }

  useEffect(() => {
    updateStorage(tasks);
  }, [tasks])

  return (
    <section>
      <Form addTask={addTask}/>
      <List toggleTask={toggleTask} tasks={tasks}/>
    </section>
  );
}
export default Component;
