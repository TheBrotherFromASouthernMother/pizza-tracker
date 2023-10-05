import { orders, pizza_Type, pizza_Size } from '@prisma/client'
import prisma from '../db';

interface NewOrder {
    customer_email: string;
    customer_phone: string;
    type: pizza_Type,
    size: pizza_Size,
    toppings: string,
}

export default class OrderService {
    constructor() {}

    async create({ 
        customer_email, 
        customer_phone,
        type,
        size,
        toppings,
    }: NewOrder): Promise<orders> {
        const newOrder = await prisma.orders.create({
            data: {
                status: 'preparing',
                customer_email,
                customer_phone,
                pizza: {
                    create: [
                        {
                            type,
                            size,
                            toppings,
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