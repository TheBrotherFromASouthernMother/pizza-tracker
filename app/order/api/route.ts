import { NextResponse } from 'next/server'
import OrderService from 'services/order_service'

export async function POST(request: Request) {
    // const orderService = new OrderService();
    // const newOrder = await orderService.create({
    //     customer_email: 'christian@thegreenbook.io',
    //     customer_phone: '713-517-0617',
    //     type: 'thin_crust',
    //     size: 'large',
    //     toppings: 'italian',
    // })

    // console.log(newOrder);

    return NextResponse.json({
        message: 'order created',
    })
}