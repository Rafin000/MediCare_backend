/*
  Warnings:

  - The primary key for the `blog_category` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `blogId` on the `blog_category` table. All the data in the column will be lost.
  - You are about to drop the column `categoryId` on the `blog_category` table. All the data in the column will be lost.
  - The primary key for the `doctor_award` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `awardId` on the `doctor_award` table. All the data in the column will be lost.
  - You are about to drop the column `doctorId` on the `doctor_award` table. All the data in the column will be lost.
  - The primary key for the `doctor_degree` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `degreeId` on the `doctor_degree` table. All the data in the column will be lost.
  - You are about to drop the column `doctorId` on the `doctor_degree` table. All the data in the column will be lost.
  - The primary key for the `doctor_location` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `doctorId` on the `doctor_location` table. All the data in the column will be lost.
  - You are about to drop the column `locationId` on the `doctor_location` table. All the data in the column will be lost.
  - The primary key for the `doctor_specialization` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `doctorId` on the `doctor_specialization` table. All the data in the column will be lost.
  - You are about to drop the column `specializationId` on the `doctor_specialization` table. All the data in the column will be lost.
  - You are about to drop the column `chamber_location` on the `doctors` table. All the data in the column will be lost.
  - You are about to alter the column `work_experience` on the `doctors` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Json`.
  - The primary key for the `hospital_department` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `departmentId` on the `hospital_department` table. All the data in the column will be lost.
  - You are about to drop the column `hospitalId` on the `hospital_department` table. All the data in the column will be lost.
  - The primary key for the `hospital_doctor` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `doctorId` on the `hospital_doctor` table. All the data in the column will be lost.
  - You are about to drop the column `hospitalId` on the `hospital_doctor` table. All the data in the column will be lost.
  - The primary key for the `hospital_location` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `hospitalId` on the `hospital_location` table. All the data in the column will be lost.
  - You are about to drop the column `locationId` on the `hospital_location` table. All the data in the column will be lost.
  - The primary key for the `hospital_social` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `hospitalId` on the `hospital_social` table. All the data in the column will be lost.
  - You are about to drop the column `socialId` on the `hospital_social` table. All the data in the column will be lost.
  - The primary key for the `hospital_treatment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `hospitalId` on the `hospital_treatment` table. All the data in the column will be lost.
  - You are about to drop the column `treatmentId` on the `hospital_treatment` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `hospitals` table. All the data in the column will be lost.
  - The primary key for the `user_role` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `roleId` on the `user_role` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `user_role` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `userName` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `socials` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user_social` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `blog_id` to the `blog_category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category_id` to the `blog_category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `award_id` to the `doctor_award` table without a default value. This is not possible if the table is not empty.
  - Added the required column `doctor_id` to the `doctor_award` table without a default value. This is not possible if the table is not empty.
  - Added the required column `degree_id` to the `doctor_degree` table without a default value. This is not possible if the table is not empty.
  - Added the required column `doctor_id` to the `doctor_degree` table without a default value. This is not possible if the table is not empty.
  - Added the required column `doctor_id` to the `doctor_location` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location_id` to the `doctor_location` table without a default value. This is not possible if the table is not empty.
  - Added the required column `doctor_id` to the `doctor_specialization` table without a default value. This is not possible if the table is not empty.
  - Added the required column `specialization_id` to the `doctor_specialization` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `doctors` table without a default value. This is not possible if the table is not empty.
  - Added the required column `department_id` to the `hospital_department` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hospital_id` to the `hospital_department` table without a default value. This is not possible if the table is not empty.
  - Added the required column `doctor_id` to the `hospital_doctor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hospital_id` to the `hospital_doctor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hospital_id` to the `hospital_location` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location_id` to the `hospital_location` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hospital_id` to the `hospital_social` table without a default value. This is not possible if the table is not empty.
  - Added the required column `social_id` to the `hospital_social` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hospital_id` to the `hospital_treatment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `treatment_id` to the `hospital_treatment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role_id` to the `user_role` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `user_role` table without a default value. This is not possible if the table is not empty.
  - Added the required column `first_name` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `last_name` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `blog_category` DROP FOREIGN KEY `blog_category_blogId_fkey`;

-- DropForeignKey
ALTER TABLE `blog_category` DROP FOREIGN KEY `blog_category_categoryId_fkey`;

-- DropForeignKey
ALTER TABLE `doctor_award` DROP FOREIGN KEY `doctor_award_awardId_fkey`;

-- DropForeignKey
ALTER TABLE `doctor_award` DROP FOREIGN KEY `doctor_award_doctorId_fkey`;

-- DropForeignKey
ALTER TABLE `doctor_degree` DROP FOREIGN KEY `doctor_degree_degreeId_fkey`;

-- DropForeignKey
ALTER TABLE `doctor_degree` DROP FOREIGN KEY `doctor_degree_doctorId_fkey`;

-- DropForeignKey
ALTER TABLE `doctor_location` DROP FOREIGN KEY `doctor_location_doctorId_fkey`;

-- DropForeignKey
ALTER TABLE `doctor_location` DROP FOREIGN KEY `doctor_location_locationId_fkey`;

-- DropForeignKey
ALTER TABLE `doctor_specialization` DROP FOREIGN KEY `doctor_specialization_doctorId_fkey`;

-- DropForeignKey
ALTER TABLE `doctor_specialization` DROP FOREIGN KEY `doctor_specialization_specializationId_fkey`;

-- DropForeignKey
ALTER TABLE `hospital_department` DROP FOREIGN KEY `hospital_department_departmentId_fkey`;

-- DropForeignKey
ALTER TABLE `hospital_department` DROP FOREIGN KEY `hospital_department_hospitalId_fkey`;

-- DropForeignKey
ALTER TABLE `hospital_doctor` DROP FOREIGN KEY `hospital_doctor_doctorId_fkey`;

-- DropForeignKey
ALTER TABLE `hospital_doctor` DROP FOREIGN KEY `hospital_doctor_hospitalId_fkey`;

-- DropForeignKey
ALTER TABLE `hospital_location` DROP FOREIGN KEY `hospital_location_hospitalId_fkey`;

-- DropForeignKey
ALTER TABLE `hospital_location` DROP FOREIGN KEY `hospital_location_locationId_fkey`;

-- DropForeignKey
ALTER TABLE `hospital_social` DROP FOREIGN KEY `hospital_social_hospitalId_fkey`;

-- DropForeignKey
ALTER TABLE `hospital_social` DROP FOREIGN KEY `hospital_social_socialId_fkey`;

-- DropForeignKey
ALTER TABLE `hospital_treatment` DROP FOREIGN KEY `hospital_treatment_hospitalId_fkey`;

-- DropForeignKey
ALTER TABLE `hospital_treatment` DROP FOREIGN KEY `hospital_treatment_treatmentId_fkey`;

-- DropForeignKey
ALTER TABLE `user_role` DROP FOREIGN KEY `user_role_roleId_fkey`;

-- DropForeignKey
ALTER TABLE `user_role` DROP FOREIGN KEY `user_role_userId_fkey`;

-- DropForeignKey
ALTER TABLE `user_social` DROP FOREIGN KEY `user_social_socialId_fkey`;

-- DropForeignKey
ALTER TABLE `user_social` DROP FOREIGN KEY `user_social_userId_fkey`;

-- AlterTable
ALTER TABLE `blog_category` DROP PRIMARY KEY,
    DROP COLUMN `blogId`,
    DROP COLUMN `categoryId`,
    ADD COLUMN `blog_id` VARCHAR(191) NOT NULL,
    ADD COLUMN `category_id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`blog_id`, `category_id`);

-- AlterTable
ALTER TABLE `doctor_award` DROP PRIMARY KEY,
    DROP COLUMN `awardId`,
    DROP COLUMN `doctorId`,
    ADD COLUMN `award_id` VARCHAR(191) NOT NULL,
    ADD COLUMN `doctor_id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`doctor_id`, `award_id`);

-- AlterTable
ALTER TABLE `doctor_degree` DROP PRIMARY KEY,
    DROP COLUMN `degreeId`,
    DROP COLUMN `doctorId`,
    ADD COLUMN `degree_id` VARCHAR(191) NOT NULL,
    ADD COLUMN `doctor_id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`doctor_id`, `degree_id`);

-- AlterTable
ALTER TABLE `doctor_location` DROP PRIMARY KEY,
    DROP COLUMN `doctorId`,
    DROP COLUMN `locationId`,
    ADD COLUMN `doctor_id` VARCHAR(191) NOT NULL,
    ADD COLUMN `location_id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`doctor_id`, `location_id`);

-- AlterTable
ALTER TABLE `doctor_specialization` DROP PRIMARY KEY,
    DROP COLUMN `doctorId`,
    DROP COLUMN `specializationId`,
    ADD COLUMN `doctor_id` VARCHAR(191) NOT NULL,
    ADD COLUMN `specialization_id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`doctor_id`, `specialization_id`);

-- AlterTable
ALTER TABLE `doctors` DROP COLUMN `chamber_location`,
    ADD COLUMN `user_id` VARCHAR(191) NOT NULL,
    MODIFY `work_experience` JSON NULL;

-- AlterTable
ALTER TABLE `hospital_department` DROP PRIMARY KEY,
    DROP COLUMN `departmentId`,
    DROP COLUMN `hospitalId`,
    ADD COLUMN `department_id` VARCHAR(191) NOT NULL,
    ADD COLUMN `hospital_id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`hospital_id`, `department_id`);

-- AlterTable
ALTER TABLE `hospital_doctor` DROP PRIMARY KEY,
    DROP COLUMN `doctorId`,
    DROP COLUMN `hospitalId`,
    ADD COLUMN `doctor_id` VARCHAR(191) NOT NULL,
    ADD COLUMN `hospital_id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`hospital_id`, `doctor_id`);

-- AlterTable
ALTER TABLE `hospital_location` DROP PRIMARY KEY,
    DROP COLUMN `hospitalId`,
    DROP COLUMN `locationId`,
    ADD COLUMN `hospital_id` VARCHAR(191) NOT NULL,
    ADD COLUMN `location_id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`hospital_id`, `location_id`);

-- AlterTable
ALTER TABLE `hospital_social` DROP PRIMARY KEY,
    DROP COLUMN `hospitalId`,
    DROP COLUMN `socialId`,
    ADD COLUMN `hospital_id` VARCHAR(191) NOT NULL,
    ADD COLUMN `social_id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`hospital_id`, `social_id`);

-- AlterTable
ALTER TABLE `hospital_treatment` DROP PRIMARY KEY,
    DROP COLUMN `hospitalId`,
    DROP COLUMN `treatmentId`,
    ADD COLUMN `hospital_id` VARCHAR(191) NOT NULL,
    ADD COLUMN `treatment_id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`hospital_id`, `treatment_id`);

-- AlterTable
ALTER TABLE `hospitals` DROP COLUMN `phone`,
    ADD COLUMN `phone_number` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `user_role` DROP PRIMARY KEY,
    DROP COLUMN `roleId`,
    DROP COLUMN `userId`,
    ADD COLUMN `role_id` VARCHAR(191) NOT NULL,
    ADD COLUMN `user_id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`user_id`, `role_id`);

-- AlterTable
ALTER TABLE `users` DROP COLUMN `firstName`,
    DROP COLUMN `lastName`,
    DROP COLUMN `phone`,
    DROP COLUMN `userName`,
    ADD COLUMN `first_name` VARCHAR(191) NOT NULL,
    ADD COLUMN `last_name` VARCHAR(191) NOT NULL,
    ADD COLUMN `phone_number` VARCHAR(191) NULL,
    ADD COLUMN `username` VARCHAR(191) NOT NULL;







-- DropTable
DROP TABLE `socials`;

-- DropTable
DROP TABLE `user_social`;

-- AddForeignKey
ALTER TABLE `hospital_social` ADD CONSTRAINT `hospital_social_hospital_id_fkey` FOREIGN KEY (`hospital_id`) REFERENCES `hospitals`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_role` ADD CONSTRAINT `user_role_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_role` ADD CONSTRAINT `user_role_role_id_fkey` FOREIGN KEY (`role_id`) REFERENCES `roles`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `hospital_doctor` ADD CONSTRAINT `hospital_doctor_hospital_id_fkey` FOREIGN KEY (`hospital_id`) REFERENCES `hospitals`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `hospital_doctor` ADD CONSTRAINT `hospital_doctor_doctor_id_fkey` FOREIGN KEY (`doctor_id`) REFERENCES `doctors`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `blog_category` ADD CONSTRAINT `blog_category_blog_id_fkey` FOREIGN KEY (`blog_id`) REFERENCES `blogs`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `blog_category` ADD CONSTRAINT `blog_category_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `hospital_treatment` ADD CONSTRAINT `hospital_treatment_treatment_id_fkey` FOREIGN KEY (`treatment_id`) REFERENCES `treatments`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `hospital_treatment` ADD CONSTRAINT `hospital_treatment_hospital_id_fkey` FOREIGN KEY (`hospital_id`) REFERENCES `hospitals`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `hospital_department` ADD CONSTRAINT `hospital_department_department_id_fkey` FOREIGN KEY (`department_id`) REFERENCES `departments`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `hospital_department` ADD CONSTRAINT `hospital_department_hospital_id_fkey` FOREIGN KEY (`hospital_id`) REFERENCES `hospitals`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `doctor_location` ADD CONSTRAINT `doctor_location_doctor_id_fkey` FOREIGN KEY (`doctor_id`) REFERENCES `doctors`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `doctor_location` ADD CONSTRAINT `doctor_location_location_id_fkey` FOREIGN KEY (`location_id`) REFERENCES `locations`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `hospital_location` ADD CONSTRAINT `hospital_location_location_id_fkey` FOREIGN KEY (`location_id`) REFERENCES `locations`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `hospital_location` ADD CONSTRAINT `hospital_location_hospital_id_fkey` FOREIGN KEY (`hospital_id`) REFERENCES `hospitals`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `doctor_specialization` ADD CONSTRAINT `doctor_specialization_specialization_id_fkey` FOREIGN KEY (`specialization_id`) REFERENCES `specializations`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `doctor_specialization` ADD CONSTRAINT `doctor_specialization_doctor_id_fkey` FOREIGN KEY (`doctor_id`) REFERENCES `doctors`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `doctor_award` ADD CONSTRAINT `doctor_award_award_id_fkey` FOREIGN KEY (`award_id`) REFERENCES `awards`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `doctor_award` ADD CONSTRAINT `doctor_award_doctor_id_fkey` FOREIGN KEY (`doctor_id`) REFERENCES `doctors`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `doctor_degree` ADD CONSTRAINT `doctor_degree_degree_id_fkey` FOREIGN KEY (`degree_id`) REFERENCES `degrees`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `doctor_degree` ADD CONSTRAINT `doctor_degree_doctor_id_fkey` FOREIGN KEY (`doctor_id`) REFERENCES `doctors`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
