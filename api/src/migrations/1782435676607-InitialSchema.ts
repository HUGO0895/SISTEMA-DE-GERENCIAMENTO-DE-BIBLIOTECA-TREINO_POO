import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialSchema1782435676607 implements MigrationInterface {
    name = 'InitialSchema1782435676607'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`exemplar\` ADD \`pedidoId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`exemplar\` ADD UNIQUE INDEX \`IDX_b28332b192d90c0a1fa7cf892e\` (\`pedidoId\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_b28332b192d90c0a1fa7cf892e\` ON \`exemplar\` (\`pedidoId\`)`);
        await queryRunner.query(`ALTER TABLE \`exemplar\` ADD CONSTRAINT \`FK_b28332b192d90c0a1fa7cf892e7\` FOREIGN KEY (\`pedidoId\`) REFERENCES \`pedido_exemplar\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`exemplar\` DROP FOREIGN KEY \`FK_b28332b192d90c0a1fa7cf892e7\``);
        await queryRunner.query(`DROP INDEX \`REL_b28332b192d90c0a1fa7cf892e\` ON \`exemplar\``);
        await queryRunner.query(`ALTER TABLE \`exemplar\` DROP INDEX \`IDX_b28332b192d90c0a1fa7cf892e\``);
        await queryRunner.query(`ALTER TABLE \`exemplar\` DROP COLUMN \`pedidoId\``);
    }

}
