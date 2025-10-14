import './App.css'
import StatsCard from './components/common/StatsCard'
import TaskForm from './components/common/TaskForm'

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

      <section>
        <TaskForm />
      </section>
    </main>
  </>
 )
}

export default App
