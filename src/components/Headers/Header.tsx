interface HeaderProps{
    size: 1 | 2 | 3 | 4 | 5 | 6 ,
    style: string,
    content: string
} //Type for header object and props

class HeaderObject{
    size: 1 | 2 | 3 | 4 | 5 | 6; 
    style: string;
    content: string;

    constructor(size: 1 | 2 | 3 | 4 | 5 | 6, style: string, content: string){
        this.size = size;
        this.style = style;
        this.content = content;
    }
}// Header object which accepts size, style and content parameters



function Header(){
    return(
        <>

        </>
    )
}

export default Header;