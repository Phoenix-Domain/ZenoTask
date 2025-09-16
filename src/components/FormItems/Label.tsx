type LabelKeys = 'htmlFor' | 'content'; //list of attributes or props

type LabelTypes = {
    [k in LabelKeys]: string
}// Use map to avoid repetition since all types are meant to be strings

function Label({ htmlFor, content}: LabelTypes){
    return(
        <label htmlFor={htmlFor} className='font-semibold text-lg'>
            {content}
        </label>
    )
}

export default Label