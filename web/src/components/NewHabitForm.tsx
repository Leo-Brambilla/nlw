import { Check } from "phosphor-react";

export function NewHabitForm () {
    return (
        <form className="w-full flex flex-col mt-6">
            <label htmlFor="title"  className="font-semibold leading-tight">
                Qual seu comprometimento 
            </label>
            <input 
            type="text"            
            id="title"
            placeholder="Exercícios, dormir bem, beber água..." 
            autoFocus
            className="p-4 rouded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400"
            />
        <label htmlFor="" font-semibold leading-tight mt-4>
            Qual a recorrência?
        </label>


        <button type="submit" className="mt-6 rounded-lg p-4 flex items-center gap-3 font-semibold bg-green-600">
            <Check size={20} weight="bold"/>
            Confirmar
        </button>
            
        </form>
    )
}