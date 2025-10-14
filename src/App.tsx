import './App.css'
import StatsCard from './components/common/StatsCard'
import TaskForm from './components/common/TaskForm'
import TaskDisplay from './components/common/TaskDisplay'

function App() {
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
        statTitle='Products'
        statValue='0'
        />
        
        <StatsCard 
          statTitle='Items'
          statValue='0'
        />
        <StatsCard 
          statTitle='Value'
          statValue='$0.00'
        />
      </section>

      <section className='flex gap-5 justify-around'>
        <section className='bg-gray-100 p-5 rounded-xl border border-gray-300 w-fit flex flex-col gap-5'>
          <h2 className='text-2xl font-bold'>
            Add New task
          </h2>
          <TaskForm />
        </section>

        <section className='bg-gray-100 p-5 rounded-xl border border-gray-300 w-fit flex flex-col gap-5'>
          <h2 className='text-2xl font-bold'>
            Task List
          </h2>

          <p>
            Manage your Tasks
          </p>

          <TaskDisplay />
        </section>
      </section>
    </main>
  </>
 )
}

export default App
