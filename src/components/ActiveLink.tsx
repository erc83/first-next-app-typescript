'use client'
import { CSSProperties ,FC } from "react";

import { usePathname } from "next/navigation";

import Link from "next/link";

interface Props {
    text: string;
    href: string;
}

// se agrega el FC<Props>
export const ActiveLink: FC<Props> = ({ text, href }) => {  // son props
    
    const path = usePathname();
    // console.log(path);
    
    const style: CSSProperties = {
        color: '#0070f3',
        textDecoration: 'underline'
    }

    return ( 
        <Link href={href} className="nav-link" style={ path === href ? style : undefined }>
            {text}
        </Link>
    )
}
