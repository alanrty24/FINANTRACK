import React from 'react'
import Card from '../ui/Card'
import Button from '../ui/Button'
import RecentTransaction from '../dashboard/RecentTransaction'

const Transaction = () => {
  return (
    <Card>
        <section className='w-full'>
            <Button
            variant = {"new"}
            className = {`w-full`}
            >
                + Nueva Transacción
            </Button>
            
        </section>
        <section className='mt-4'>
            <RecentTransaction />
        </section>
    </Card>
  )
}

export default Transaction