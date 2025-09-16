interface HeaderProps{
    size: 1 | 2 | 3 | 4 | 5 | 6 ,
    content: string,
} //Type for header object and props

class HeaderObject{
    size: number;
    content: string;
    headerFontStyle?: string // Create key to hold header fontSize and fontStyle

    constructor(size: number, content: string){
        this.size = size;
        this.content = content;
        this.setFontStyle();
    }

    setFontStyle(){
        if(this.size === 1){
            this.headerFontStyle = `text-3xl font-bold`
        }else if(this.size === 2){
            this.headerFontStyle = `text-2xl font-semibold`
        }else if(this.size === 3){
            this.headerFontStyle = `text-xl font-semibold`
        }else if(this.size === 4){
            this.headerFontStyle = `text-md font-semibold`
        }else if(this.size === 5){
            this.headerFontStyle = `font-semibold`
        }else if(this.size === 6){
            this.headerFontStyle = `font-semibold`
        }
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