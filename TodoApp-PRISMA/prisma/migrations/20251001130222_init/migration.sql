/*
  Warnings:

  - Made the column `completion_status` on table `tasks` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "tasks" ALTER COLUMN "completion_status" SET NOT NULL;
