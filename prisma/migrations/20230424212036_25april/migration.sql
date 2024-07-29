/*
  Warnings:

  - Added the required column `dateEnd` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "dateEnd" TIMESTAMP(3) NOT NULL;
