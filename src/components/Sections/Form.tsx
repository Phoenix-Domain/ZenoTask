import Label from "../FormItems/Label";
import Input from "../FormItems/Input";

function Form(){
    return(
        <form action="">
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
        </form>
    )
}

export default Form;