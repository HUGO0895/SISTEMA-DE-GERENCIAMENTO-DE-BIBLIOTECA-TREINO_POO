import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialSchema1780777376944 implements MigrationInterface {
    name = 'InitialSchema1780777376944'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`exemplar\` (\`id\` int NOT NULL AUTO_INCREMENT, \`livroId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`livros\` (\`id\` int NOT NULL AUTO_INCREMENT, \`titulo\` varchar(255) NOT NULL, \`autor\` varchar(255) NOT NULL, \`editora\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`fornecedores\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nome\` varchar(255) NOT NULL, \`estadoSigla\` varchar(255) NOT NULL, \`cnpj\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_cafd6e2a65a2345be70ad2b999\` (\`nome\`), UNIQUE INDEX \`IDX_67ef3c2468d94e0a19d4181932\` (\`cnpj\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`pedido_exemplar\` (\`id\` int NOT NULL AUTO_INCREMENT, \`status\` varchar(255) NOT NULL DEFAULT 'ANDAMENTO', \`emissaoPedido\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`dataEntrega\` date NULL, \`livroId\` int NULL, \`funcionarioId\` int NULL, \`fornecedorId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`funcionario\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nomeCompleto\` varchar(255) NOT NULL, \`cpf\` varchar(255) NOT NULL, \`cep\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`senha\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_a84346b7f338dec9a7eeae4993\` (\`cpf\`), UNIQUE INDEX \`IDX_f868493b618f6780e84ea266e5\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`emprestimo\` (\`id\` int NOT NULL AUTO_INCREMENT, \`data_emp\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`data_devolucao\` date NOT NULL, \`data_extensao\` datetime(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`status\` varchar(255) NOT NULL DEFAULT 'ANDAMENTO', \`clienteId\` int NULL, \`funcionarioId\` int NULL, \`exemplarId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`cliente\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nome\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`cpf\` varchar(255) NOT NULL, \`senha\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_503f81286c5e49acd6a832abf4\` (\`email\`), UNIQUE INDEX \`IDX_980ea33e938c719bbababe4352\` (\`cpf\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
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
        await queryRunner.query(`DROP INDEX \`IDX_980ea33e938c719bbababe4352\` ON \`cliente\``);
        await queryRunner.query(`DROP INDEX \`IDX_503f81286c5e49acd6a832abf4\` ON \`cliente\``);
        await queryRunner.query(`DROP TABLE \`cliente\``);
        await queryRunner.query(`DROP TABLE \`emprestimo\``);
        await queryRunner.query(`DROP INDEX \`IDX_f868493b618f6780e84ea266e5\` ON \`funcionario\``);
        await queryRunner.query(`DROP INDEX \`IDX_a84346b7f338dec9a7eeae4993\` ON \`funcionario\``);
        await queryRunner.query(`DROP TABLE \`funcionario\``);
        await queryRunner.query(`DROP TABLE \`pedido_exemplar\``);
        await queryRunner.query(`DROP INDEX \`IDX_67ef3c2468d94e0a19d4181932\` ON \`fornecedores\``);
        await queryRunner.query(`DROP INDEX \`IDX_cafd6e2a65a2345be70ad2b999\` ON \`fornecedores\``);
        await queryRunner.query(`DROP TABLE \`fornecedores\``);
        await queryRunner.query(`DROP TABLE \`livros\``);
        await queryRunner.query(`DROP TABLE \`exemplar\``);
    }

}
