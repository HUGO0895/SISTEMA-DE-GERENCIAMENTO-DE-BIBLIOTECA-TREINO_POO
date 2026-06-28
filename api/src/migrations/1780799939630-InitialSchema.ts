import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialSchema1780799939630 implements MigrationInterface {
    name = 'InitialSchema1780799939630'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`cliente\` DROP COLUMN \`senha\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`cliente\` ADD \`senha\` varchar(255) NOT NULL`);
    }

}
