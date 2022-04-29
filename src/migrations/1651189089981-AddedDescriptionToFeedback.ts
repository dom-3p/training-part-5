import {MigrationInterface, QueryRunner} from "typeorm";

export class AddedDescriptionToFeedback1651189089981 implements MigrationInterface {
    name = 'AddedDescriptionToFeedback1651189089981'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "feedback" ADD "description" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "feedback" DROP COLUMN "description"`);
    }

}
