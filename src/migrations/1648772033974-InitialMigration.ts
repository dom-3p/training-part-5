import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialMigration1648772033974 implements MigrationInterface {
    name = 'InitialMigration1648772033974'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "feedback" ("id" SERIAL NOT NULL, "category" character varying(50) NOT NULL, "actioned" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_8389f9e087a57689cd5be8b2b13" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "feedback"`);
    }

}
