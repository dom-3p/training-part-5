import {MigrationInterface, QueryRunner} from "typeorm";

export class UpdatedCreatedAtAddedUpdatedAt1651790568051 implements MigrationInterface {
    name = 'UpdatedCreatedAtAddedUpdatedAt1651790568051'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "feedback" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "feedback" ALTER COLUMN "createdAt" SET DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "feedback" ALTER COLUMN "createdAt" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "feedback" DROP COLUMN "updatedAt"`);
    }

}
