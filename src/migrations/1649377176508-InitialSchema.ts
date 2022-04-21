import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialSchema1649377176508 implements MigrationInterface {
    name = 'InitialSchema1649377176508'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "feedback" ("id" SERIAL NOT NULL, "category" character varying(50) NOT NULL, "actioned" boolean NOT NULL DEFAULT false, "createdAt" TIMESTAMP NOT NULL, "contentId" character varying NOT NULL, "userId" integer NOT NULL, CONSTRAINT "PK_8389f9e087a57689cd5be8b2b13" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "idx_actioned" ON "feedback" ("actioned") `);
        await queryRunner.query(`CREATE TABLE "feedback_comment" ("id" SERIAL NOT NULL, "comment" character varying(500) NOT NULL, "userId" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL, CONSTRAINT "PK_705cb106b7f40889573c2592228" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "feedback_comment"`);
        await queryRunner.query(`DROP INDEX "public"."idx_actioned"`);
        await queryRunner.query(`DROP TABLE "feedback"`);
    }

}
