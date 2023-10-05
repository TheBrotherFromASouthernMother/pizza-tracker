-- CreateEnum
CREATE TYPE "pizza_Type" AS ENUM ('thin_crust', 'stuffed_crust', 'deep_dish');

-- CreateEnum
CREATE TYPE "pizza_Size" AS ENUM ('small', 'medium', 'large', 'extra_large');

-- CreateEnum
CREATE TYPE "order_status" AS ENUM ('preparing', 'in_progress', 'completed', 'canceled');

-- CreateTable
CREATE TABLE "orders" (
    "id" SERIAL NOT NULL,
    "status" "order_status" NOT NULL,
    "customer_email" TEXT NOT NULL,
    "customer_phone" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pizzas" (
    "id" SERIAL NOT NULL,
    "type" "pizza_Type" NOT NULL,
    "size" "pizza_Size" NOT NULL,
    "toppings" TEXT NOT NULL DEFAULT 'cheese',
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,
    "order_id" INTEGER NOT NULL,

    CONSTRAINT "pizzas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "employees" (
    "id" SERIAL NOT NULL,
    "unique_id" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "employees_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "pizzas" ADD CONSTRAINT "pizzas_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
