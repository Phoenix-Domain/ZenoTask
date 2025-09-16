type InputKeys = 'type' | 'id';

type InputTypes = {
    [k in InputKeys]: string
}

function Input({type, id}: InputTypes){
    return(
        <input id={id} type={type} className='block bg-gray-200 rounded p-1.5 text-gray-900'/>
    )
}

export default Input;