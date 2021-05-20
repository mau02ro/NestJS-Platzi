import {MigrationInterface, QueryRunner} from "typeorm";

export class bugFix1621543763943 implements MigrationInterface {
    name = 'bugFix1621543763943'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_4f9524920143315afbbd3c7849f"`);
        await queryRunner.query(`ALTER TABLE "order" RENAME COLUMN "cuestomerId" TO "customerId"`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_124456e637cca7a415897dce659" FOREIGN KEY ("customerId") REFERENCES "customer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_124456e637cca7a415897dce659"`);
        await queryRunner.query(`ALTER TABLE "order" RENAME COLUMN "customerId" TO "cuestomerId"`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_4f9524920143315afbbd3c7849f" FOREIGN KEY ("cuestomerId") REFERENCES "customer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
