/*
  Warnings:

  - You are about to drop the column `customer_email` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `customer_phone` on the `orders` table. All the data in the column will be lost.
  - Added the required column `customer_id` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "orders" DROP COLUMN "customer_email",
DROP COLUMN "customer_phone",
ADD COLUMN     "customer_id" INTEGER NOT NULL,
ADD COLUMN     "is_delivery" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "customers" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address" TEXT NOT NULL,

    CONSTRAINT "customers_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
