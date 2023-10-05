import { orders, pizza_type, pizza_size } from '@prisma/client'
import prisma from '../db';

interface NewOrder {
    customer_name: string;
    customer_address: string;
    customer_email: string;
    customer_phone: string;
    pizza_type: pizza_type;
    pizza_size: pizza_size;
    pizza_toppings: string;
    is_delivery: boolean;
}

export default class OrderService {
    constructor() {}

    async create({ 
        customer_name,
        customer_address,
        customer_email, 
        customer_phone,
        is_delivery,
        pizza_type,
        pizza_size,
        pizza_toppings,
    }: NewOrder): Promise<orders> {
        const newOrder = await prisma.orders.create({
            data: {
                status: 'preparing',
                is_delivery,
                customer: {
                    create: {
                        name: customer_name,
                        address: customer_address,
                        email: customer_email,
                        phone: customer_phone,
                    },
                },
                pizza: {
                    create: [
                        {
                            type: pizza_type,
                            size: pizza_size,
                            toppings: pizza_toppings,
                        },
                    ],
                },
            },
        });

        return newOrder;
    }
    

    async cancel(id: number, customer_email: string) {
        const canceledOrder = await prisma.orders.update({
            where: { id },
            data: {
                status: 'canceled',
            },
        })
    }
}