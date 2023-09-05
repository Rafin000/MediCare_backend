-- CreateTable
CREATE TABLE `users` (
    `id` VARCHAR(191) NOT NULL,
    `firstName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `userName` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NULL,
    `user_type` ENUM('user', 'doctor') NOT NULL DEFAULT 'user',
    `dob` VARCHAR(191) NULL,

    UNIQUE INDEX `users_id_key`(`id`),
    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `socials` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,

    UNIQUE INDEX `socials_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_social` (
    `userId` VARCHAR(191) NOT NULL,
    `socialId` VARCHAR(191) NOT NULL,
    `doctors_infosUser_id` VARCHAR(191) NULL,
    `doctors_infosDoctor_id` VARCHAR(191) NULL,

    PRIMARY KEY (`userId`, `socialId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `hospital_social` (
    `hospitalId` VARCHAR(191) NOT NULL,
    `socialId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`hospitalId`, `socialId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `roles` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,

    UNIQUE INDEX `roles_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_role` (
    `userId` VARCHAR(191) NOT NULL,
    `roleId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`userId`, `roleId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `hospitals` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NULL,
    `email` VARCHAR(191) NOT NULL,
    `fax` VARCHAR(191) NULL,
    `clinic_hour` VARCHAR(191) NULL,
    `lab_hour` VARCHAR(191) NULL,
    `description` VARCHAR(191) NULL,
    `registration_id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `hospitals_id_key`(`id`),
    UNIQUE INDEX `hospitals_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `hospital_doctor` (
    `hospitalId` VARCHAR(191) NOT NULL,
    `doctorId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`hospitalId`, `doctorId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `doctors` (
    `id` VARCHAR(191) NOT NULL,
    `phone_number` VARCHAR(191) NULL,
    `biography` VARCHAR(191) NULL,
    `chamber_location` VARCHAR(191) NULL,
    `is_active` BOOLEAN NOT NULL,
    `work_experience` VARCHAR(191) NULL,
    `registration_id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `doctors_id_key`(`id`),
    UNIQUE INDEX `doctors_registration_id_key`(`registration_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `blogs` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `Description` VARCHAR(191) NULL,

    UNIQUE INDEX `blogs_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `blog_category` (
    `blogId` VARCHAR(191) NOT NULL,
    `categoryId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`blogId`, `categoryId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `categories` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,

    UNIQUE INDEX `categories_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `treatments` (
    `id` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,

    UNIQUE INDEX `treatments_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `hospital_treatment` (
    `treatmentId` VARCHAR(191) NOT NULL,
    `hospitalId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`hospitalId`, `treatmentId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `departments` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,

    UNIQUE INDEX `departments_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `hospital_department` (
    `departmentId` VARCHAR(191) NOT NULL,
    `hospitalId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`hospitalId`, `departmentId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `locations` (
    `id` VARCHAR(191) NOT NULL,
    `longitude` VARCHAR(191) NOT NULL,
    `latitude` VARCHAR(191) NOT NULL,
    `street` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `country` VARCHAR(191) NULL,
    `division` VARCHAR(191) NULL,
    `district` VARCHAR(191) NULL,
    `thanan` VARCHAR(191) NULL,

    UNIQUE INDEX `locations_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `doctor_location` (
    `visiting_hour` VARCHAR(191) NOT NULL,
    `visiting_fee` VARCHAR(191) NOT NULL,
    `doctorId` VARCHAR(191) NOT NULL,
    `locationId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`doctorId`, `locationId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `hospital_location` (
    `locationId` VARCHAR(191) NOT NULL,
    `hospitalId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`hospitalId`, `locationId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `specializations` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,

    UNIQUE INDEX `specializations_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `doctor_specialization` (
    `specializationId` VARCHAR(191) NOT NULL,
    `doctorId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`doctorId`, `specializationId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `awards` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,

    UNIQUE INDEX `awards_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `doctor_award` (
    `awardId` VARCHAR(191) NOT NULL,
    `doctorId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`doctorId`, `awardId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `degrees` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,

    UNIQUE INDEX `degrees_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `doctor_degree` (
    `degreeId` VARCHAR(191) NOT NULL,
    `doctorId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`doctorId`, `degreeId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE VIEW `Doctors_infos` AS
SELECT
  u.id AS user_id,
  d.id AS doctor_id,
  u.firstName,
  u.lastName,
  u.userName,
  u.email,
  u.phone,
  u.dob,
  'doctor' AS user_type
FROM
  users u
JOIN
  doctors d ON u.id = d.id;


-- AddForeignKey
ALTER TABLE `user_social` ADD CONSTRAINT `user_social_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_social` ADD CONSTRAINT `user_social_socialId_fkey` FOREIGN KEY (`socialId`) REFERENCES `socials`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `hospital_social` ADD CONSTRAINT `hospital_social_hospitalId_fkey` FOREIGN KEY (`hospitalId`) REFERENCES `hospitals`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `hospital_social` ADD CONSTRAINT `hospital_social_socialId_fkey` FOREIGN KEY (`socialId`) REFERENCES `socials`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_role` ADD CONSTRAINT `user_role_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_role` ADD CONSTRAINT `user_role_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `roles`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `hospital_doctor` ADD CONSTRAINT `hospital_doctor_hospitalId_fkey` FOREIGN KEY (`hospitalId`) REFERENCES `hospitals`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `hospital_doctor` ADD CONSTRAINT `hospital_doctor_doctorId_fkey` FOREIGN KEY (`doctorId`) REFERENCES `doctors`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `blog_category` ADD CONSTRAINT `blog_category_blogId_fkey` FOREIGN KEY (`blogId`) REFERENCES `blogs`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `blog_category` ADD CONSTRAINT `blog_category_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `categories`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `hospital_treatment` ADD CONSTRAINT `hospital_treatment_treatmentId_fkey` FOREIGN KEY (`treatmentId`) REFERENCES `treatments`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `hospital_treatment` ADD CONSTRAINT `hospital_treatment_hospitalId_fkey` FOREIGN KEY (`hospitalId`) REFERENCES `hospitals`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `hospital_department` ADD CONSTRAINT `hospital_department_departmentId_fkey` FOREIGN KEY (`departmentId`) REFERENCES `departments`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `hospital_department` ADD CONSTRAINT `hospital_department_hospitalId_fkey` FOREIGN KEY (`hospitalId`) REFERENCES `hospitals`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `doctor_location` ADD CONSTRAINT `doctor_location_doctorId_fkey` FOREIGN KEY (`doctorId`) REFERENCES `doctors`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `doctor_location` ADD CONSTRAINT `doctor_location_locationId_fkey` FOREIGN KEY (`locationId`) REFERENCES `locations`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `hospital_location` ADD CONSTRAINT `hospital_location_locationId_fkey` FOREIGN KEY (`locationId`) REFERENCES `locations`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `hospital_location` ADD CONSTRAINT `hospital_location_hospitalId_fkey` FOREIGN KEY (`hospitalId`) REFERENCES `hospitals`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `doctor_specialization` ADD CONSTRAINT `doctor_specialization_specializationId_fkey` FOREIGN KEY (`specializationId`) REFERENCES `specializations`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `doctor_specialization` ADD CONSTRAINT `doctor_specialization_doctorId_fkey` FOREIGN KEY (`doctorId`) REFERENCES `doctors`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `doctor_award` ADD CONSTRAINT `doctor_award_awardId_fkey` FOREIGN KEY (`awardId`) REFERENCES `awards`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `doctor_award` ADD CONSTRAINT `doctor_award_doctorId_fkey` FOREIGN KEY (`doctorId`) REFERENCES `doctors`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `doctor_degree` ADD CONSTRAINT `doctor_degree_degreeId_fkey` FOREIGN KEY (`degreeId`) REFERENCES `degrees`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `doctor_degree` ADD CONSTRAINT `doctor_degree_doctorId_fkey` FOREIGN KEY (`doctorId`) REFERENCES `doctors`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
