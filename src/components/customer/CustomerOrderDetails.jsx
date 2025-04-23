import React from 'react'

const CustomerOrderDetails = () => {


    const OrderHistory = [
        {
            invoiceID: 'INV2540',
            status: 'Completed',
            amount: '$420',
            dueDate: '07 Jan 2023',
            paymentMethod: 'UPI'
        },
        {
            invoiceID: 'INV3924',
            status: 'Cancel',
            amount: '$736.00',
            dueDate: '03 Dec, 2023',
            paymentMethod: 'Visa'
        },
    ]


  return (
    <div className='order-history'>
        <div className="section-heading">
            <h3>Transaction History</h3>
        </div>

        <table>
            <thead>
                <th>Invoice ID</th>
                <th>Status</th>
                <th>Total Amount</th>
                <th>Due Date</th>
                <th>Payment Method</th>
            </thead>
            <tbody>
                {
                    OrderHistory.map((items,index) => (
                        <tr key={index}>
                            <td>{items.invoiceID}</td>
                            <td className={`order-status ${items.status.toLowerCase()}`}><span>{items.status}</span></td>
                            <td>{items.amount}</td>
                            <td>{items.dueDate}</td>
                            <td>{items.paymentMethod}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default CustomerOrderDetails