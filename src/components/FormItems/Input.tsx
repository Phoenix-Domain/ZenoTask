type InputTypes = {
    type: string
}

function Input({type}: InputTypes){
    return(
        <input type={type} className='block bg-gray-300 p-1'/>
    )
}

export default Input;