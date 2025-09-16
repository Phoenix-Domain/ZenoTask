import { useState } from 'react';

interface HeaderTypes{
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
        const styles: Record<number, string> = {
            1: 'text-3xl font-bold',
            2: 'text-2xl font-semibold',
            3: 'text-xl font-semibold',
            4: 'text-md font-semibold',
            5: 'font-semibold',
            6: 'font-semibold',
        };
        this.headerFontStyle = styles[this.size] || '';
    } 
}// Header object which accepts size, style and content parameters

function Header({size, content}: HeaderTypes){
    const createNewHeader = (): HeaderObject => new HeaderObject(size, content);

    const [header, setHeader] = useState(createNewHeader);

    const Tag = `h${size}` as keyof HTMLElementTagNameMap;
    
    // const fontStyle = 
    
    return(
        <Tag className={`${header.headerFontStyle}`}>
            {header.content}
        </Tag>
    )
}

export default Header;