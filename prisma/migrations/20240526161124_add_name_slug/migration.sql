/*
  Warnings:

  - Made the column `nameSlug` on table `Category` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `nameSlug` to the `Subcategory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Category" ALTER COLUMN "nameSlug" SET NOT NULL;

-- AlterTable
ALTER TABLE "Subcategory" ADD COLUMN     "nameSlug" TEXT NOT NULL;
