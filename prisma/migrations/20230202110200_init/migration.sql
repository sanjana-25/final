-- DropForeignKey
ALTER TABLE "user_audit" DROP CONSTRAINT "user_audit_user_id_fkey";

-- AlterTable
ALTER TABLE "user_audit" ALTER COLUMN "user_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "user_audit" ADD CONSTRAINT "user_audit_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
