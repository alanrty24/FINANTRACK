import React from 'react'
import useCategoryStore from '../stores/useCategoryStore'
const CATEGORIES = {
    income: [
        { id: 'salary', name: 'Salario', icon: "💼"},
        { id: 'freelance', name: 'Freelance', icon: "💻"},
        { id: 'investment', name: 'Inversiones', icon: "📈"},
        { id: 'other-income', name: 'Otro', icon: "💰"},
    ],
    expense:[
        { id: 'food', name: 'Comida', icon: '🍕'},
        { id: 'transport', name: 'Transporte', icon: '🚗'},
        { id: 'entertaiment', name: 'Entretenimiento', icon: '🎬'},
        { id: 'shopping', name: 'Compras', icon: '🛍️'},
        { id: 'bills', name: 'Servicios', icon: '📄'},
        { id: 'health', name: 'Salud', icon: '🏥'},
        { id: 'other-expense', name: 'Otro', icon: '💸'},
    ]
}

const PruebaCode = () => {
    
    const addCategoryExpense = useCategoryStore((state) => (state.addCategoryExpense))
    const addCategoryIncome = useCategoryStore((state) => (state.addCategoryIncome))
    
    const handleClick = () => {
        CATEGORIES.expense.forEach(cat => {
            addCategoryExpense(cat)
        })       

        CATEGORIES.income.forEach(cat => {
            addCategoryIncome(cat)
        }) 
    }
    return (
    <div>
        <button onClick={handleClick} className='p-4 bg-blue-600 text-white rounded-2xl m-4 cursor-pointer'>Guardar Categories</button>
    </div>
  )
}

export default PruebaCode