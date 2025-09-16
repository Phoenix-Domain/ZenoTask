interface HeaderProps{
    size: 1 | 2 | 3 | 4 | 5 | 6 ,
    content: string
} //Type for header object and props

class HeaderObject{
    size: 1 | 2 | 3 | 4 | 5 | 6;
    content: string;

    constructor(size: 1 | 2 | 3 | 4 | 5 | 6, style: string, content: string){
        this.size = size;
        this.content = content;
    }
}// Header object which accepts size, style and content parameters



function Header({size, content}){
    return(
        <>

        </>
    )
}

export default Header;