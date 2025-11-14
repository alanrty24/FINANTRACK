import React from 'react'
import { useBalance, useTotalbalance } from '../stores/useExpenseStore'
import Card from '../ui/Card'
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { MdTrendingDown, MdTrendingUp } from 'react-icons/md';

const BalanceCard = () => {
    const total = useTotalbalance(); 
    const balance = useBalance(); 
    const balances = [
      {name:"Total", color: "bg-(--non-photo-blue)" , icono:AiOutlineDollarCircle , monto: total, text: total > 0 ? "text-green-600" : "text-red-600"},
      {name:"Ingresos", color: "bg-green-200" , icono:MdTrendingUp , monto: balance.income, text: "text-green-600"  },
      {name:"Gastos", color: "bg-red-200" , icono:MdTrendingDown , monto: balance.expense, text: "text-red-600" },
    ]
  return (
    <Card className={`grid grid-cols-1 gap-4 md:grid-cols-3`}>
      {
        balances.map((bal,i) => {
          return(
            <Card
            key={i}
            className={`flex flex-col gap-2 flex-1 items-center justify-center p-6 rounded-2xl border-2 border-white text-xl ${bal.color}`}
            >
              {/* Icono */}
              <div className='flex justify-center items-center w-5 h-5 mt-4'>
                <div className='p-2 bg-(--federal-blue) text-white border-2 rounded-xl'>
                  <bal.icono className='text-2xl lg:text-3xl' />
                </div>
              </div>

              {/* Titulo */}
              <h3 className='font-mono font-bold mt-4 text-slate-700'>{bal.name}</h3>

              {/* Monto */}
              <span className={`${bal.text} font-bold`}>Bs. {bal.monto}</span>
            </Card>
          )
        })
      }
    </Card>
  )
}

export default BalanceCard