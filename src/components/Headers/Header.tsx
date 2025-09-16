import { useState,  useEffect } from 'react';

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
        }; //Use object key value pairs to store sizes and their respective styles

        this.headerFontStyle = styles[this.size] || ''; //locate style value based on size key and pass it to headerFontStyle
    } 
}// Header object which accepts size, and content parameters

function Header({size, content}: HeaderTypes){
    const [header, setHeader] = useState(new HeaderObject(size, content));// state to store header

    useEffect(() => {
        setHeader(new HeaderObject(size, content));
    }, [size, content])// Render header whenever size or content changes

    const Tag = `h${size}` as keyof HTMLElementTagNameMap;
        
    return(
        <Tag className={`${header.headerFontStyle}`}>
            {header.content}
        </Tag>
    )
}

export default Header;