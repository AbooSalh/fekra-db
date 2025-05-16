-- AlterTable
ALTER TABLE `coordinator` ADD COLUMN `Department` VARCHAR(150) NULL;

-- AlterTable
ALTER TABLE `enrollment` MODIFY `Enrollment_id` INTEGER NOT NULL AUTO_INCREMENT;

-- AddForeignKey
ALTER TABLE `coordinator` ADD CONSTRAINT `coordinator_Coordinator_id_fkey` FOREIGN KEY (`Coordinator_id`) REFERENCES `person`(`Person_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
