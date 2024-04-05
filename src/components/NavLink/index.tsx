import { ComponentProps } from "react";


interface NavLinkProps extends ComponentProps<'a'>{
    children: string
}

export default function NavLink({ children, ...props }:NavLinkProps){
    return(
        <a {...props} className="text-white">{ children }</a>
    );
}