
interface Task{
    id: number
    title: string;
    priority: string;
    status: string;
}
interface TaskDisplayProps{
    tasks: Task[];
    handleDelete: (x: number) => void;
}

function TaskDisplay({tasks, handleDelete}: TaskDisplayProps){
      return(
        <section>
            {
                // Conditional statement to render and display tasks
                tasks.length <= 0 ? <article>
                    <p>No Tasks Yet.</p>
                    <h3>Fill form to add Task</h3>
                </article> : tasks.map(task => (
                    <article key={task.id} className='flex justify-around m-2 border border-gray-400 gap-5 py-1 px-2 rounded-2xl bg-gray-300'>
                        <p className='font-bold'>
                            {task.title}
                        </p>
                        <p>
                            {task.priority}
                        </p>
                        <p>
                            {task.status}
                        </p>

                        <button className='font-bold text-gray-50 bg-red-500 px-2 rounded-md' onClick={() => {
                            handleDelete(task.id)
                        }}>
                            X
                        </button>
                    </article>
                ))
            }
        </section>
    )
}

export default TaskDisplay;