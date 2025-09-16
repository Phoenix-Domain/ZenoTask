interface HeaderProps{
    size: 1 | 2 | 3 | 4 | 5 | 6 ,
    content: string,
} //Type for header object and props

class HeaderObject{
    size: number;
    content: string;
    headerFontStyle?: string // Create key to hold header fontSize and fontStyle

    constructor(size: number, content: string, headerFontStyle?: string){
        this.size = size;
        this.content = content;
        this.headerFontStyle = headerFontStyle;
    }

    setFontStyle(){
        if(this.size === 1){}
    } 
}// Header object which accepts size, style and content parameters
const testObj = new HeaderObject(1, 'Zenooo')
console.log(testObj.headerFontStyle);


function Header({size, content}: HeaderProps){
    const Tag = `h${size}` as keyof HTMLElementTagNameMap;
    
    return(
        <Tag>
            {content}
        </Tag>
    )
}

export default Header;