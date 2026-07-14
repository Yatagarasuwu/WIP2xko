/*
  Warnings:

  - The values [mp4] on the enum `VideoType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "VideoType_new" AS ENUM ('youtube', 'twitter');
ALTER TABLE "Video" ALTER COLUMN "type" TYPE "VideoType_new" USING ("type"::text::"VideoType_new");
ALTER TYPE "VideoType" RENAME TO "VideoType_old";
ALTER TYPE "VideoType_new" RENAME TO "VideoType";
DROP TYPE "public"."VideoType_old";
COMMIT;
