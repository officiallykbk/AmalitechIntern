-- CreateEnum
CREATE TYPE "priorities" AS ENUM ('low', 'medium', 'high');

-- CreateTable
CREATE TABLE "tasks" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "due_date" TIMESTAMP(3),
    "priority" "priorities",
    "completion_status" BOOLEAN DEFAULT false,

    CONSTRAINT "tasks_pkey" PRIMARY KEY ("id")
);

