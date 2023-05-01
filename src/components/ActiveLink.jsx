'use client'

import { usePathname } from "next/navigation";

import Link from "next/link";

export const ActiveLink = ({ text, href }) => {
    
    const path = usePathname();
    // console.log(path);
    
    const style = {
        color: '#0070f3',
        textDecoration: 'underline'
    }
    return (
        <Link href={href} className="nav-link" style={ path === href ? style : null }>
            {text}
        </Link>
    )
}
