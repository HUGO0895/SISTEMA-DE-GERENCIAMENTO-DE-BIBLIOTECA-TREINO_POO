import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialSchema1782439074636 implements MigrationInterface {
    name = 'InitialSchema1782439074636'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_b28332b192d90c0a1fa7cf892e\` ON \`exemplar\``);
        await queryRunner.query(`ALTER TABLE \`cliente\` ADD \`cep\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`cliente\` DROP COLUMN \`cep\``);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_b28332b192d90c0a1fa7cf892e\` ON \`exemplar\` (\`pedidoId\`)`);
    }

}
