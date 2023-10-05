/*
  Warnings:

  - Changed the type of `type` on the `pizzas` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `size` on the `pizzas` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "pizza_type" AS ENUM ('thin_crust', 'stuffed_crust', 'deep_dish');

-- CreateEnum
CREATE TYPE "pizza_size" AS ENUM ('small', 'medium', 'large', 'extra_large');

-- AlterTable
ALTER TABLE "pizzas" DROP COLUMN "type",
ADD COLUMN     "type" "pizza_type" NOT NULL,
DROP COLUMN "size",
ADD COLUMN     "size" "pizza_size" NOT NULL;

-- DropEnum
DROP TYPE "pizza_Size";

-- DropEnum
DROP TYPE "pizza_Type";
