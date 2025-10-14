
interface Task{
    id: number
    Title: string;
    Priority: string;
    Status: string;
}
interface TaskDisplayProps{
    tasks: Task[]
}

function TaskDisplay({tasks}: TaskDisplayProps){
      return(
        <section>
            {
                // Conditional statement to render and display tasks
                tasks.length <= 0 ? <article>
                    <p>No Tasks Yet.</p>
                    <h3>Fill form to add Task</h3>
                </article> : tasks.map(task => (
                    <article key={task.id}>
                        <p>{task.Title}</p>
                        <p>{task.Priority}</p>
                        <p>{task.Status}</p>
                    </article>
                ))
            }
        </section>
    )
}

export default TaskDisplay;