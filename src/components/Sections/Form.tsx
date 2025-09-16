import Label from "../FormItems/Label";
import Input from "../FormItems/Input";

function Form(){
    return(
        <form action=''>
            <fieldset className='border flex flex-col'>
                <legend className='font-bold'>
                    Add New Task
                </legend>
                dueDate
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