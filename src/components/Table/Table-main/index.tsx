import { ComponentProps } from "react";


interface tableMainProps extends ComponentProps<'td'>{}

export default function TableMain(props:tableMainProps){
    return(
        <td {...props} className="py-3 px-4 text-sm text-zinc-300" />
    );
}