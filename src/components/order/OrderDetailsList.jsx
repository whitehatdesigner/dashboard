import React, { useState } from 'react'
import { IoEyeOutline } from 'react-icons/io5';
import { MdOutlineDelete } from 'react-icons/md';

const OrderDetailsList = () => {

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);

    // order Data

    const OrderData = [
        {
            orderId: '583485/80',
            createdAt: 'Apr 23, 2024',
            customer: 'Gail C. Anderson',
            priority: 'Normal',
            total: '$1,230.00',
            paymentStatus: 'Unpaid',
            items: 4,
            orderStatus: 'Draft',
        },
        {
            orderId: '583486/80',
            createdAt: 'Apr 23, 2024',
            customer: 'Gail C. Anderson',
            priority: 'Normal',
            total: '$1,230.00',
            paymentStatus: 'paid',
            items: 4,
            orderStatus: 'Packaging',
        },
        {
            orderId: '583487/80',
            createdAt: 'Apr 23, 2024',
            customer: 'Gail C. Anderson',
            priority: 'Normal',
            total: '$1,230.00',
            paymentStatus: 'Refund',
            items: 4,
            orderStatus: 'Completed',
        }
        ,
        {
            orderId: '583488/80',
            createdAt: 'Apr 23, 2024',
            customer: 'Gail C. Anderson',
            priority: 'Normal',
            total: '$1,230.00',
            paymentStatus: 'Refund',
            items: 4,
            orderStatus: 'Canceled',
        }
    ];


    const handleProductView = (order) => {
        setSelectedOrder(order);
        setIsPopupOpen(true);
    }

    const closePopup = () => {
        setSelectedOrder(null);
        setIsPopupOpen(true);
    }

    return (
        <div className='order-list'>
            <div className="heading">
                <h3>Order List</h3>

                <select>
                    <option value="this-month">This Month</option>
                    <option value="export-file">Export</option>
                    <option value="download">Download</option>
                </select>
            </div>

            <table className='order-list'>
                <thead>
                    <tr>
                        <th>Order Id</th>
                        <th>Created at</th>
                        <th>Customer</th>
                        <th>Priority</th>
                        <th>Total</th>
                        <th>Payment Status</th>
                        <th>Items</th>
                        <th>Order Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {OrderData.map((order, index) => (

                        <tr key={index}>
                            <td>#{order.orderId}</td>
                            <td>{order.createdAt}</td>
                            <td>{order.customer}</td>
                            <td>{order.priority}</td>
                            <td>{order.total}</td>
                            <td> <span className={`paymentstatus ${order.paymentStatus.toLowerCase()}`}>{order.paymentStatus}</span></td>
                            <td>{order.items}</td>
                            <td className={`order-status `}>
                                <span className={`${order.orderStatus.toLowerCase()}`}>
                                    {order.orderStatus}
                                </span>
                            </td>
                            <td>
                                <div className="action-buttons">
                                    <button className="cart-button" onClick={() => handleProductView(order)}>
                                        <IoEyeOutline />
                                    </button>
                                    <button className="delete-button">
                                        <MdOutlineDelete />
                                    </button>
                                </div>
                            </td>
                        </tr>

                    ))
                    }
                </tbody>
            </table>

            {/* ======== popup ========= */}

            {isPopupOpen && selectedOrder && (
                <div className="popup-overlay">
                <div className="popup-content">
                    <button className="close-button" onClick={closePopup}>
                        &times;
                    </button>
                    <h3 className='heading'>Order Details</h3>
                    <div className="order-details">
                        <p><strong>Order ID:</strong> #{selectedOrder.orderId}</p>
                        <p><strong>Customer:</strong> {selectedOrder.customer}</p>
                        <p><strong>Date:</strong> {selectedOrder.createdAt}</p>
                        <p><strong>Total:</strong> {selectedOrder.total}</p>
                        <p><strong>Payment Status:</strong> 
                            <span className={`paymentstatus ${selectedOrder.paymentStatus.toLowerCase()}`}>
                                {selectedOrder.paymentStatus}
                            </span>
                        </p>
                        <p><strong>Order Status:</strong> 
                            <span className={`${selectedOrder.orderStatus.toLowerCase()}`}>
                                {selectedOrder.orderStatus}
                            </span>
                        </p>
                        <p><strong>Items:</strong> {selectedOrder.items}</p>

                        <button className='primary-btn'>Delete Order</button>
                    </div>
                </div>
            </div>
            )}
        </div>
    )
}

export default OrderDetailsList