

function TaskForm(){
    return(
        <form action="" className='bg-gray-100 p-5 rounded-xl border border-gray-300 w-fit flex flex-col gap-5'>
            <section>
                <label htmlFor="">
                    Task Name:
                </label>
                <input type="text" className='border block bg-gray-300 border-gray-400 rounded-xl p-2'/>
            </section>

            <section className='flex justify-around gap-5'>
                <article>
                    <label htmlFor="">
                        Priority Level
                    </label>
                    <input type="text" className='border block bg-gray-300 border-gray-400 rounded-xl p-2'/>
                </article>

                <article>
                    <label htmlFor="">
                        Status
                    </label>
                    <input type="text" className='border block bg-gray-300 border-gray-400 rounded-xl p-2'/>
                </article>
            </section>

            <button className='bg-blue-700 text-white w-fit px-16 py-2 m-auto rounded-xl'>
                Submit
            </button>
        </form>
    )
}

export default TaskForm;