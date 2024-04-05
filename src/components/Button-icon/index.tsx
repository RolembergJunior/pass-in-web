import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";


interface ButtonIconProps extends ComponentProps<'button'>{
    transparent: boolean
}

export default function ButtonIcon({ transparent, ...props}:ButtonIconProps){
    return(
        <button 
            {...props} 
            // className={ transparent 
            //     ?  border border-white/10 rounded-md p-1.5"
            //     :  border border-white/10 rounded-md p-1.5"}
            className={twMerge("border border-white/10 rounded-md p-1.5",
                transparent ? "bg-transparent" : "bg-white/10",
                props.disabled ? "opacity-40" : "opacity-none"
            )}
        />
    );
}