import React from 'react'
import { useTotalbalance } from '../stores/useExpenseStore'

const BalanceCard = () => {
    const total = useTotalbalance(); 

  return (
    <div>{total}</div>
  )
}

export default BalanceCard