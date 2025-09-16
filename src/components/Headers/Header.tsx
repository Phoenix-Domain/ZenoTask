interface HeaderProps{
    size: 1 | 2 | 3 | 4 | 5 | 6 ,
    style: string,
    content: string
}

class HeaderObject implements HeaderProps {
    size: 1 | 2 | 3 | 4 | 5 | 6 
    style: string
    content: string

    constructor(size: 1 | 2 | 3 | 4 | 5 | 6, style: string, content: string){
        this.size = size
        this.style = style
        this.content = content

    }
}



function Header(){
    return(
        <>

        </>
    )
}

export default Header;