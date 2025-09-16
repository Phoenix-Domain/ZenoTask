type InputKeys = 'type' | 'id';

type InputTypes = {
    [k in InputKeys]: string
}

function Input({type, id}: InputTypes){
    return(
        <input id={id} type={type} className='block bg-gray-300 p-1'/>
    )
}

export default Input;