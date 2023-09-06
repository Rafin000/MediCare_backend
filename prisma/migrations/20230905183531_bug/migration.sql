/*
  Warnings:

  - You are about to drop the column `thanan` on the `locations` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `locations` DROP COLUMN `thanan`,
    ADD COLUMN `thana` VARCHAR(191) NULL;
