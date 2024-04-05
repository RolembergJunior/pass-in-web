import NavLink from "../NavLink";


export default function Header(){
    return(
        <div className="flex items-center gap-4 w-[90%] h-12 mx-auto">
            <img
                src="./Logo.png" 
                alt="Logo projeto" />
            <div>
                <nav className="flex gap-4">
                    <NavLink href="/eventos">
                        Eventos
                    </NavLink>
                    <NavLink href="/participantes">
                        Participantes
                    </NavLink>
                </nav>
            </div>
        </div>  
    );
}