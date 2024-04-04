import { ChevronLeft, ChevronRightIcon, ChevronsLeft, ChevronsRight, MoreHorizontal, Search } from "lucide-react";

export default function AttendeeList(){
    return(
        <div className="w-[90%] mx-auto space-y-5">
            <div className="flex items-center gap-3">
                <h1 className="text-2xl">Participantes</h1>
                <div className="flex items-center w-72 gap-3 py-1.5 px-3 bg-transparent border border-white/10 rounded-lg">
                    <Search className="size-6 text-emerald-300"/>
                    <input className="bg-transparent flex-1 outline-none border-0 p-0 text-small" type="text" placeholder="Buscar participantes"/>
                </div>
            </div>
            <div className="border border-white/10 rounded-lg">
                <table className="w-full ">
                    <thead>
                        <tr className="border-b border-b-white/10">
                            <th className="py-3 px-4 text-sm font-semibold text-left">
                                <input type="checkbox" className="bg-transparent border border-white/10 rounded-sm outline-none" />
                            </th>
                            <th className="py-3 px-4 text-sm font-semibold text-left">Código</th>
                            <th className="py-3 px-4 text-sm font-semibold text-left">Participante</th>
                            <th className="py-3 px-4 text-sm font-semibold text-left">Data de inscrição</th>
                            <th className="py-3 px-4 text-sm font-semibold text-left">Data do check-in</th>
                            <th className="py-3 px-4 text-sm font-semibold text-left"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: 8 }).map( (_, i) =>{
                            return(
                            <tr key={i} className="border-b border-white/10 hover:bg-white/5" >
                                <td className="py-3 px-4 text-sm text-zinc-300" >
                                    <input type="checkbox" className="bg-transparent border border-white/10 rounded-sm" />
                                </td>
                                <td className="py-3 px-4 text-sm text-zinc-300" >12345</td>
                                <td className="py-3 px-4 text-sm text-zinc-300" >
                                    <div className="flex flex-col">
                                        <span className="text-white font-semibold">Rolemberg Antonio Pereira Junior</span>
                                        <span>junior@gmail.com</span>
                                    </div>
                                </td>
                                <td className="py-3 px-4 text-sm text-zinc-300" >7 dias atrás</td>
                                <td className="py-3 px-4 text-sm text-zinc-300" >3 dias atrás</td>
                                <td className="py-3 px-4 text-sm text-zinc-300" >
                                    <button className="bg-black/20 border border-white/10 rounded-md p-1.5">
                                        <MoreHorizontal className="size-4" />
                                    </button>
                                </td>
                            </tr>
                            )
                        } ) }
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={3} className="py-3 px-4 text-sm text-zinc-300">
                                Mostrando 10 e 228 itens
                            </td>

                            <td colSpan={3} className="py-3 px-4 text-sm text-zinc-300 text-right">
                                <div className="inline-flex items-center gap-6">
                                    Página 1 de 23
                                    <div className="flex gap-2">
                                        <button className="bg-black/20 border border-white/10 rounded-md p-1.5">
                                            <ChevronsLeft className="size-4" />
                                        </button>
                                        <button className="bg-black/20 border border-white/10 rounded-md p-1.5">
                                            <ChevronLeft className="size-4" />
                                        </button>
                                        <button className="bg-white/10 border border-white/10 rounded-md p-1.5 ">
                                            <ChevronRightIcon className="size-4" />
                                        </button>
                                        <button className="bg-white/10 border border-white/10 rounded-md p-1.5 ">
                                            <ChevronsRight className="size-4" />
                                        </button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
}