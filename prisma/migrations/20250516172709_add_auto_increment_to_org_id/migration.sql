-- AlterTable
ALTER TABLE `employee` MODIFY `Employee_id` INTEGER NOT NULL AUTO_INCREMENT;

-- AlterTable
ALTER TABLE `mentor` MODIFY `Mentor_id` INTEGER NOT NULL AUTO_INCREMENT;

-- AlterTable
ALTER TABLE `organization` MODIFY `Org_id` INTEGER NOT NULL AUTO_INCREMENT;

-- AlterTable
ALTER TABLE `person` ADD COLUMN `HashedPassword` VARCHAR(255) NULL;

-- AlterTable
ALTER TABLE `student` MODIFY `Student_id` INTEGER NOT NULL AUTO_INCREMENT;
