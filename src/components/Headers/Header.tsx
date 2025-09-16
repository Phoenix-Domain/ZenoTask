interface HeaderProps{
    size: 1 | 2 | 3 | 4 | 5 | 6 ,
    content: string,
} //Type for header object and props

type HeaderSize = {
    size: 1 | 2 | 3 | 4 | 5 | 6;
} //Type for Header size
class HeaderObject{
    size: HeaderSize;
    content: string;
    headerFontStyle?: string // Create key to hold header fontSize and fontStyle

    constructor(size: HeaderSize, content: string, headerFontStyle?: string){
        this.size = size;
        this.content = content;
        this.headerFontStyle = headerFontStyle;
    }
}// Header object which accepts size, style and content parameters



function Header({size, content}: HeaderProps){
    const Tag = `h${size}` as keyof HTMLElementTagNameMap;
    
    return(
        <Tag>
            {content}
        </Tag>
    )
}

export default Header;