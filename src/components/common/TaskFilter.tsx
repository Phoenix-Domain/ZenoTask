import { useState } from 'react';

function TaskFilter(){
    //get the filter method
    //display a list of tasks based on the filter
    return(
        <section className='m-2 border border-gray-400 py-1 px-2 rounded-2xl bg-gray-300'>
            <article className='text-center'>
                <label htmlFor='Filter' className=''>
                    Filter Tasks by:
                </label>
                <select id="Filter" className='font-bold ml-3 rounded-2xl bg-blue-700 p-1 text-white outline-0'>
                    <option value="Select filter">Select filter</option>
                    <option value="name">Name</option>
                    <option value="priority">Priority</option>
                    <option value="status">Status</option>
                </select>
            </article>
        </section>
    )
}

export default TaskFilter;