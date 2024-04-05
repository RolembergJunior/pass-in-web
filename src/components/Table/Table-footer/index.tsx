import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";


interface TableFooterProps extends ComponentProps<'td'>{}

export default function TableFooter(props:TableFooterProps){
    return(
        <td {...props} colSpan={3} className={twMerge("py-3 px-4 text-sm text-zinc-300", props.className)} />
    );
}