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
                    <input type="text" />
                </div>
                <div>
                    <Label htmlFor="" content='Due Date' />
                    <input type="text" />
                </div>
                <div>
                    <Label htmlFor="" content='Time' />
                    <input type="text" />
                </div>
                <div>
                    <Label htmlFor="" content='Priority' />
                    <input type="text" />
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