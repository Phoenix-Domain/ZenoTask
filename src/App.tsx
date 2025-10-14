import './App.css'
import StatsCard from './components/common/StatsCard'
import TaskForm from './components/common/TaskForm'
import TaskDisplay from './components/common/TaskDisplay'
import { useState } from 'react'

interface Task{
  id:number;
  Title: string;
  Priority: string;
  Status: string;
}

class TaskClass{
  id:number;
  Title:string;
  Priority:string;
  Status:string;

  constructor(id: number, Title: string, Priority: string, Status: string){
    this.id = id;
    this.Title = Title;
    this.Priority = Priority;
    this.Status = Status
  }
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleDelete = (x: number): void => {
    setTasks(prevTask => prevTask.filter(task => task.id !== x))
  }

 return(
  <>
    <header className='text-center'>
      <h1 className='text-5xl font-bold'>
        ZenoTask
      </h1>

      <h2>
        Manage your tasks with real time updates
      </h2>
    </header>
    <main>
      <section className='flex justify-around my-20 gap-5 mx-5'>
        <StatsCard 
        statTitle='Tasks'
        statValue={tasks.length}
        />
        
        <StatsCard 
          statTitle='Tasks Pending'
          statValue={0}
        />
        <StatsCard 
          statTitle='Completed Tasks'
          statValue={0}
        />
      </section>

      <section className='flex gap-5 justify-around'>
        <section className='bg-gray-100 p-5 rounded-xl border border-gray-300 w-fit flex flex-col gap-5'>
          <h2 className='text-2xl font-bold'>
            Add New task
          </h2>
          <TaskForm TaskClass={TaskClass} setTasks={setTasks}/>
        </section>

        <section className='bg-gray-100 p-5 rounded-xl border border-gray-300 w-full flex flex-col gap-5'>
          <h2 className='text-2xl font-bold'>
            Task List
          </h2>

          <p>
            Manage your Tasks
          </p>

          <TaskDisplay tasks={tasks} handleDelete={handleDelete}/>
        </section>
      </section>
    </main>
  </>
 )
}

export default App
