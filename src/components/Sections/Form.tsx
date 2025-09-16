import Label from "../FormItems/Label";
import Input from "../FormItems/Input";

function Form(){
    return(
        <form action="">
            <fieldset className='border flex flex-col'>
                <legend className="font-bold">
                    Add New Task
                </legend>
                <div>
                    <Label htmlFor="" content='Title'/>
                    <Input type='text' />
                </div>
                <div>
                    <Label htmlFor="" content='Due Date' />
                    <Input type='text' />
                </div>
                <div>
                    <Label htmlFor="" content='Time' />
                    <Input type='text' />
                </div>
                <div>
                    <Label htmlFor="" content='Priority' />
                    <Input type='text' />
                </div>
                <div>
                    <Label htmlFor="" content='Add Note' />
                    <textarea name="" id=""></textarea>
                </div>
            </fieldset>
        </form>
    )
}

export default Form;