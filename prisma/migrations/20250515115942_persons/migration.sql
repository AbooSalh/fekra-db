-- CreateTable
CREATE TABLE `coordinator` (
    `Coordinator_id` INTEGER NOT NULL,
    `Name` VARCHAR(155) NULL,

    PRIMARY KEY (`Coordinator_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `employee` (
    `Employee_id` INTEGER NOT NULL,
    `Salary` INTEGER NULL,
    `Position` VARCHAR(150) NOT NULL,

    PRIMARY KEY (`Employee_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `enroll` (
    `Student_id` INTEGER NOT NULL,
    `Course_id` VARCHAR(155) NOT NULL,

    INDEX `Course_id`(`Course_id`),
    PRIMARY KEY (`Student_id`, `Course_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `enrollment` (
    `Enrollment_id` INTEGER NOT NULL,
    `Student_id` INTEGER NULL,
    `Course_id` VARCHAR(155) NULL,
    `Semester` VARCHAR(155) NULL,
    `Final_grade` VARCHAR(2) NULL,
    `Coordinator_id` INTEGER NULL,

    INDEX `Coordinator_id`(`Coordinator_id`),
    INDEX `Course_id`(`Course_id`),
    UNIQUE INDEX `Student_id`(`Student_id`, `Course_id`, `Semester`),
    PRIMARY KEY (`Enrollment_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `evaluation` (
    `Evaluation_id` INTEGER NOT NULL,
    `Grade` VARCHAR(2) NULL,

    PRIMARY KEY (`Evaluation_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `external_mentor` (
    `Ext_Mentor_id` INTEGER NOT NULL,
    `Org_id` INTEGER NULL,

    INDEX `Org_id`(`Org_id`),
    PRIMARY KEY (`Ext_Mentor_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `fieldt_course` (
    `Course_id` VARCHAR(155) NOT NULL,
    `Name` VARCHAR(155) NOT NULL,
    `Duration` VARCHAR(150) NOT NULL,
    `Org_id` INTEGER NULL,

    INDEX `Org_id`(`Org_id`),
    PRIMARY KEY (`Course_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `internal_mentor` (
    `Int_Mentor_id` INTEGER NOT NULL,
    `Student_id` INTEGER NULL,

    INDEX `Student_id`(`Student_id`),
    PRIMARY KEY (`Int_Mentor_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mentor` (
    `Mentor_id` INTEGER NOT NULL,
    `Course_id` VARCHAR(155) NULL,

    INDEX `Course_id`(`Course_id`),
    PRIMARY KEY (`Mentor_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `organization` (
    `Org_id` INTEGER NOT NULL,
    `Name` VARCHAR(155) NOT NULL,
    `Contact_info` VARCHAR(150) NOT NULL,
    `Approval_Status` VARCHAR(10) NULL,
    `Coordinator_id` INTEGER NULL,

    INDEX `Coordinator_id`(`Coordinator_id`),
    PRIMARY KEY (`Org_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `person` (
    `Person_id` INTEGER NOT NULL AUTO_INCREMENT,
    `Name` VARCHAR(150) NOT NULL,
    `Email` VARCHAR(255) NULL,
    `Sex` CHAR(1) NULL,

    UNIQUE INDEX `Email`(`Email`),
    PRIMARY KEY (`Person_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `student` (
    `Student_id` INTEGER NOT NULL,
    `Level` CHAR(1) NULL,
    `Major_Dept` VARCHAR(150) NOT NULL,
    `Evaluation_id` INTEGER NULL,

    PRIMARY KEY (`Student_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `employee` ADD CONSTRAINT `employee_ibfk_1` FOREIGN KEY (`Employee_id`) REFERENCES `person`(`Person_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `enroll` ADD CONSTRAINT `enroll_ibfk_1` FOREIGN KEY (`Student_id`) REFERENCES `student`(`Student_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `enroll` ADD CONSTRAINT `enroll_ibfk_2` FOREIGN KEY (`Course_id`) REFERENCES `fieldt_course`(`Course_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `enrollment` ADD CONSTRAINT `enrollment_ibfk_1` FOREIGN KEY (`Student_id`) REFERENCES `student`(`Student_id`) ON DELETE SET NULL ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `enrollment` ADD CONSTRAINT `enrollment_ibfk_2` FOREIGN KEY (`Course_id`) REFERENCES `fieldt_course`(`Course_id`) ON DELETE SET NULL ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `enrollment` ADD CONSTRAINT `enrollment_ibfk_3` FOREIGN KEY (`Coordinator_id`) REFERENCES `coordinator`(`Coordinator_id`) ON DELETE SET NULL ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `external_mentor` ADD CONSTRAINT `external_mentor_ibfk_1` FOREIGN KEY (`Ext_Mentor_id`) REFERENCES `mentor`(`Mentor_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `external_mentor` ADD CONSTRAINT `external_mentor_ibfk_2` FOREIGN KEY (`Org_id`) REFERENCES `organization`(`Org_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `fieldt_course` ADD CONSTRAINT `fieldt_course_ibfk_1` FOREIGN KEY (`Org_id`) REFERENCES `organization`(`Org_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `internal_mentor` ADD CONSTRAINT `internal_mentor_ibfk_1` FOREIGN KEY (`Int_Mentor_id`) REFERENCES `mentor`(`Mentor_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `internal_mentor` ADD CONSTRAINT `internal_mentor_ibfk_2` FOREIGN KEY (`Student_id`) REFERENCES `student`(`Student_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `mentor` ADD CONSTRAINT `mentor_ibfk_1` FOREIGN KEY (`Mentor_id`) REFERENCES `person`(`Person_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `mentor` ADD CONSTRAINT `mentor_ibfk_2` FOREIGN KEY (`Course_id`) REFERENCES `fieldt_course`(`Course_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `organization` ADD CONSTRAINT `organization_ibfk_1` FOREIGN KEY (`Coordinator_id`) REFERENCES `coordinator`(`Coordinator_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `student` ADD CONSTRAINT `student_ibfk_1` FOREIGN KEY (`Student_id`) REFERENCES `person`(`Person_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
