type LabelKeys = 'htmlFor' | 'content' | 'style'; //list of attributes or props

type LabelTypes = {
    [k in LabelKeys]: string
}// Use map to avoid repetition since all types are meant to be strings

function Label({ htmlFor, content, style }: LabelTypes){
    return(
        <label htmlFor={htmlFor} className={style}>
            {content}
        </label>
    )
}

export default Label