LIGUE O XAMPP E INICIE O APACHE E O MYSQL
ABRA O PHPMYADMIN(é só clicar em ADMIN no XAMPP) E CRIE UM BANCO DE DADOS COM O NOME agendaidb


Rode este código para criar o banco de dados e a tabela de usuários

CREATE DATABASE IF NOT EXISTS `agendaidb`;

USE `agendaidb`;

CREATE TABLE IF NOT EXISTS `usuarios` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `nome` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `cor` VARCHAR(50),
    `senha` VARCHAR(255) NOT NULL
);


Rode este código para inserir alguns usuários na tabela

INSERT INTO usuarios (id, nome, email, cor, senha) VALUES
(1, 'Alice Silva', 'alice@example.com', 'azul', 'senha1'),
(2, 'Bruno Souza', 'bruno@example.com', 'verde', 'senha2'),
(3, 'Carla Pereira', 'carla@example.com', 'vermelho', 'senha3');
