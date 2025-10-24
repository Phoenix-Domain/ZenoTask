import { useState } from 'react';

interface Task{
    id: number
    title: string;
    priority: string;
    status: string;
}
interface EditTaskFormProps{
    tasks: Task[]
}

function EditTaskForm({ tasks }: EditTaskFormProps){
    const [edittedTaskTitle, setEdittedTaskTitle] = useState<string>('');

    const [edittedTaskPriority, setEdittedTaskPriority] = useState<string>('');

    const [edittedTaskStatus, setEdittedTaskStatus] = useState<string>('');


    const handleSubmit = (): void => {
        
    }

    return(
        <form action="" className='bg-gray-100 p-5 rounded-xl border border-gray-300 w-fit flex flex-col gap-5 fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2' onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
        }}>
            <section>
                <label htmlFor="">
                    Task Name:
                </label>
                <input type="text" className='border block bg-gray-300 border-gray-400 rounded-xl p-2' value={edittedTaskTitle} onChange={e => {
                    setEdittedTaskTitle(e.target.value.trim())
                }}/>
            </section>

            <section className='flex justify-around gap-5'>
                <article>
                    <label htmlFor="">
                        Priority Level
                    </label>
                    <select name="" id=""  className='border block bg-gray-300 border-gray-400 rounded-xl p-2' value={edittedTaskPriority}  onChange={e => {
                    setEdittedTaskPriority(e.target.value.trim())}}>
                        <option value="select status">Select Priority Level</option>
                        <option value="top">Top</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                </article>

                <article>
                    <label htmlFor="">
                        Status
                    </label>
                    <select name="" id=""  className='border block bg-gray-300 border-gray-400 rounded-xl p-2' value={edittedTaskStatus}  onChange={e => {
                    setEdittedTaskStatus(e.target.value.trim())}}>
                        <option value="select status">Select Status</option>
                        <option value="completed">Completed</option>
                        <option value="pending">Pending</option>
                        <option value="not started">Not Started</option>
                    </select>
                </article>
            </section>

            <button className='bg-blue-700 text-white w-fit px-16 py-2 m-auto rounded-xl' type='submit'>
                Submit
            </button>
        </form>
    )
}

export default EditTaskForm;