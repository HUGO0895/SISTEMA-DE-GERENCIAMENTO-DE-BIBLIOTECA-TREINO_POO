import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialSchema1782689301197 implements MigrationInterface {
    name = 'InitialSchema1782689301197'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`emprestimo\` DROP COLUMN \`data_extensao\``);
        await queryRunner.query(`ALTER TABLE \`exemplar\` DROP FOREIGN KEY \`FK_8cdf9a31cd18c216fa53dc17fca\``);
        await queryRunner.query(`ALTER TABLE \`exemplar\` CHANGE \`livroId\` \`livroId\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`pedido_exemplar\` DROP FOREIGN KEY \`FK_1fff2e977771d000b72e6d08590\``);
        await queryRunner.query(`ALTER TABLE \`pedido_exemplar\` DROP FOREIGN KEY \`FK_3552e7ecae46faf11703aa13134\``);
        await queryRunner.query(`ALTER TABLE \`pedido_exemplar\` DROP FOREIGN KEY \`FK_972e973910756bda398c1ef7951\``);
        await queryRunner.query(`ALTER TABLE \`pedido_exemplar\` CHANGE \`livroId\` \`livroId\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`pedido_exemplar\` CHANGE \`funcionarioId\` \`funcionarioId\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`pedido_exemplar\` CHANGE \`fornecedorId\` \`fornecedorId\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`emprestimo\` DROP FOREIGN KEY \`FK_06f5c498e0bc1d8235756b45aac\``);
        await queryRunner.query(`ALTER TABLE \`emprestimo\` DROP FOREIGN KEY \`FK_fd6f687851577156fe4988e2d32\``);
        await queryRunner.query(`ALTER TABLE \`emprestimo\` DROP FOREIGN KEY \`FK_a22abcfa5fe8050616e6f91f8d9\``);
        await queryRunner.query(`ALTER TABLE \`emprestimo\` CHANGE \`clienteId\` \`clienteId\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`emprestimo\` CHANGE \`funcionarioId\` \`funcionarioId\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`emprestimo\` CHANGE \`exemplarId\` \`exemplarId\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`exemplar\` ADD CONSTRAINT \`FK_8cdf9a31cd18c216fa53dc17fca\` FOREIGN KEY (\`livroId\`) REFERENCES \`livros\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`pedido_exemplar\` ADD CONSTRAINT \`FK_1fff2e977771d000b72e6d08590\` FOREIGN KEY (\`livroId\`) REFERENCES \`livros\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`pedido_exemplar\` ADD CONSTRAINT \`FK_3552e7ecae46faf11703aa13134\` FOREIGN KEY (\`funcionarioId\`) REFERENCES \`funcionario\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`pedido_exemplar\` ADD CONSTRAINT \`FK_972e973910756bda398c1ef7951\` FOREIGN KEY (\`fornecedorId\`) REFERENCES \`fornecedores\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`emprestimo\` ADD CONSTRAINT \`FK_06f5c498e0bc1d8235756b45aac\` FOREIGN KEY (\`clienteId\`) REFERENCES \`cliente\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`emprestimo\` ADD CONSTRAINT \`FK_fd6f687851577156fe4988e2d32\` FOREIGN KEY (\`funcionarioId\`) REFERENCES \`funcionario\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`emprestimo\` ADD CONSTRAINT \`FK_a22abcfa5fe8050616e6f91f8d9\` FOREIGN KEY (\`exemplarId\`) REFERENCES \`exemplar\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`emprestimo\` DROP FOREIGN KEY \`FK_a22abcfa5fe8050616e6f91f8d9\``);
        await queryRunner.query(`ALTER TABLE \`emprestimo\` DROP FOREIGN KEY \`FK_fd6f687851577156fe4988e2d32\``);
        await queryRunner.query(`ALTER TABLE \`emprestimo\` DROP FOREIGN KEY \`FK_06f5c498e0bc1d8235756b45aac\``);
        await queryRunner.query(`ALTER TABLE \`pedido_exemplar\` DROP FOREIGN KEY \`FK_972e973910756bda398c1ef7951\``);
        await queryRunner.query(`ALTER TABLE \`pedido_exemplar\` DROP FOREIGN KEY \`FK_3552e7ecae46faf11703aa13134\``);
        await queryRunner.query(`ALTER TABLE \`pedido_exemplar\` DROP FOREIGN KEY \`FK_1fff2e977771d000b72e6d08590\``);
        await queryRunner.query(`ALTER TABLE \`exemplar\` DROP FOREIGN KEY \`FK_8cdf9a31cd18c216fa53dc17fca\``);
        await queryRunner.query(`ALTER TABLE \`emprestimo\` CHANGE \`exemplarId\` \`exemplarId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`emprestimo\` CHANGE \`funcionarioId\` \`funcionarioId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`emprestimo\` CHANGE \`clienteId\` \`clienteId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`emprestimo\` ADD CONSTRAINT \`FK_a22abcfa5fe8050616e6f91f8d9\` FOREIGN KEY (\`exemplarId\`) REFERENCES \`exemplar\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`emprestimo\` ADD CONSTRAINT \`FK_fd6f687851577156fe4988e2d32\` FOREIGN KEY (\`funcionarioId\`) REFERENCES \`funcionario\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`emprestimo\` ADD CONSTRAINT \`FK_06f5c498e0bc1d8235756b45aac\` FOREIGN KEY (\`clienteId\`) REFERENCES \`cliente\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`pedido_exemplar\` CHANGE \`fornecedorId\` \`fornecedorId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`pedido_exemplar\` CHANGE \`funcionarioId\` \`funcionarioId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`pedido_exemplar\` CHANGE \`livroId\` \`livroId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`pedido_exemplar\` ADD CONSTRAINT \`FK_972e973910756bda398c1ef7951\` FOREIGN KEY (\`fornecedorId\`) REFERENCES \`fornecedores\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`pedido_exemplar\` ADD CONSTRAINT \`FK_3552e7ecae46faf11703aa13134\` FOREIGN KEY (\`funcionarioId\`) REFERENCES \`funcionario\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`pedido_exemplar\` ADD CONSTRAINT \`FK_1fff2e977771d000b72e6d08590\` FOREIGN KEY (\`livroId\`) REFERENCES \`livros\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`exemplar\` CHANGE \`livroId\` \`livroId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`exemplar\` ADD CONSTRAINT \`FK_8cdf9a31cd18c216fa53dc17fca\` FOREIGN KEY (\`livroId\`) REFERENCES \`livros\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`emprestimo\` ADD \`data_extensao\` datetime(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
    }

}
