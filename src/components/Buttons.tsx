interface ButtonType{
    type: 'button' | 'submit' | 'reset'
    content: string
    style: string
}

function Button({ type, content, style }: ButtonType){
    return(
        <button>

        </button>
    )
}

export default Button