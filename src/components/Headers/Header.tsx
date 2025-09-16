interface HeaderProps{
    size: 1 | 2 | 3 | 4 | 5 | 6 ,
    content: string
} //Type for header object and props

type HeaderSize = {
    size: 1 | 2 | 3 | 4 | 5 | 6;
} //Type for Header size
class HeaderObject{
    size: HeaderSize;
    content: string;

    constructor(size: HeaderSize, content: string){
        this.size = size;
        this.content = content;
    }
}// Header object which accepts size, style and content parameters



function Header({size, content}: HeaderProps){
    const Tag = `h${size}` as keyof HTMLElementTagNameMap;
    
    const styleHeader = (size: HeaderSize) => {

    }
    return(
        <Tag>
            {content}
        </Tag>
    )
}

export default Header;