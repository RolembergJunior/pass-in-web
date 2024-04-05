import { ChevronLeft, ChevronRightIcon, ChevronsLeft, ChevronsRight, MoreHorizontal, Search } from "lucide-react";
import Table from "../Table";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/pt-br';
import TalbeHeader from "../Table/Table-header";
import TableMain from "../Table/Table-main";
import ButtonIcon from "../Button-icon";
import TableFooter from "../Table/Table-footer";
import { useState } from "react";
import { attendees } from "../../data/attendees";

export default function AttendeeList(){
    const [searchInputText, setSearchInputText] = useState('');
    const [ page, setPage ] = useState(1);

    function onHandleChangeInput(e:React.ChangeEvent<HTMLInputElement>){
        setSearchInputText(e.target.value)
    }

    dayjs.extend(relativeTime);
    dayjs.locale('pt-br');

    const totalPages = attendees.length / 10;
    
    function toFirstPage(){
        setPage(1)
    }

    function toLastPage(){
        setPage( totalPages )
    }


    return(
        <div className="w-[90%] mx-auto space-y-5">
            <div className="flex items-center gap-3">
                <h1 className="text-2xl">Participantes</h1>
                <div className="flex items-center w-72 gap-3 py-1.5 px-3 bg-transparent border border-white/10 rounded-lg">
                    <Search className="size-6 text-emerald-300"/>
                    <input 
                        onChange={(e) => onHandleChangeInput(e)} 
                        className="bg-transparent flex-1 outline-none border-0 p-0 text-small focus:border-none" 
                        type="text"
                        value={searchInputText} 
                        placeholder="Buscar participantes"
                    />
                </div>
            </div>
            <Table>
                    <thead>
                        <tr className="border-b border-b-white/10">
                            <TalbeHeader>
                                <input type="checkbox" className="bg-transparent border border-white/10 rounded-sm outline-none" />
                            </TalbeHeader> 
                            <TalbeHeader>Código</TalbeHeader>
                            <TalbeHeader>Participante</TalbeHeader> 
                            <TalbeHeader>Data de inscrição</TalbeHeader> 
                            <TalbeHeader>Data do check-in</TalbeHeader>
                            <TalbeHeader></TalbeHeader>
                        </tr>
                    </thead>
                    <tbody>
                        {attendees.slice((page - 1) * 10, page * 10).map( (attendee) =>{
                            return(
                            <tr key={attendee.id} className="border-b border-white/10 hover:bg-white/5" >
                                <TableMain>
                                    <input type="checkbox" className="bg-transparent border border-white/10 rounded-sm" />
                                </TableMain>
                                <TableMain>{ attendee.id }</TableMain>
                                <TableMain>
                                    <div className="flex flex-col">
                                        <span className="text-white font-semibold">{ attendee.name }</span>
                                        <span>{ attendee.email }</span>
                                    </div>
                                </TableMain>
                                <TableMain>{ dayjs().to(attendee.createAt) }</TableMain>
                                <TableMain>{ dayjs().to(attendee.checkedInAt)  }</TableMain>
                                <TableMain>
                                    <ButtonIcon transparent >
                                        <MoreHorizontal className="size-4" />
                                    </ButtonIcon>
                                </TableMain>
                            </tr>
                            )
                        } ) }
                    </tbody>
                    <tfoot>
                        <tr>
                            <TableFooter colSpan={3} className="py-3 px-4 text-sm text-zinc-300">
                                Mostrando 10 e { attendees.length } itens
                            </TableFooter>

                            <TableFooter colSpan={3} className="text-right">
                                <div className="inline-flex items-center gap-6">
                                    Página {page} de {Math.ceil(totalPages)}
                                    <div className="flex gap-2">
                                        <ButtonIcon onClick={() => toFirstPage()} disabled={ page === 1 } transparent={false} >
                                            <ChevronsLeft className="size-4" />
                                        </ButtonIcon>
                                        <ButtonIcon onClick={() => setPage( page - 1 )} disabled={ page === 1 } transparent={false} >
                                            <ChevronLeft className="size-4" />
                                        </ButtonIcon>
                                        <ButtonIcon onClick={() => setPage( page + 1 )} disabled={ page === 20 } transparent={false} >
                                            <ChevronRightIcon className="size-4" />
                                        </ButtonIcon>
                                        <ButtonIcon onClick={() => setPage( totalPages )} disabled={ page === 20 } transparent={false} >
                                            <ChevronsRight className="size-4" />
                                        </ButtonIcon>
                                    </div>
                                </div>
                            </TableFooter>
                        </tr>
                    </tfoot>
            </Table>
        </div>
    );
}