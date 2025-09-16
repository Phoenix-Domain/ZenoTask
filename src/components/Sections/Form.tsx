import Label from "../FormItems/Label";
import Input from "../FormItems/Input";

function Form(){
    return(
        <form action='' className='p-3'>
            <fieldset className='border border-gray-600 flex flex-col p-3 bg-[rgb(13,21,39)] text-white w-fit mx-auto rounded-lg items-center shadow-[inset_4px_4px_4px_rgba(3,10,20,1)]'>
                <legend className='font-bold'>
                    Add New Task
                </legend>
                
                <div>
                    <Label htmlFor='title' content='Title'/>
                    <Input type='text' id='title' />
                </div>
                <div>
                    <Label htmlFor='dueDate' content='Due Date' />
                    <Input type='text' id='dueDate' />
                </div>
                <div>
                    <Label htmlFor='time' content='Time' />
                    <Input type='text' id='time' />
                </div>
                <div>
                    <Label htmlFor='priority' content='Priority' />
                    <Input type='text' id='priority' />
                </div>
                <div>
                    <Label htmlFor='addNote' content='Add Note' />
                    <textarea name='' id='addNote'></textarea>
                </div>
            </fieldset>
        </form>
    )
}

export default Form;