CREATE TABLE usuarios (
 id INT,
 nome VARCHAR(100)
);

CREATE TABLE vendedores (
 id INT,
 nome VARCHAR(100)
);

CREATE TABLE produtos (
 id INT,
 nome VARCHAR(100),
 preco DECIMAL(10,2)
);

CREATE TABLE movimentacoes (
 id INT,
 usuario_id INT,
 vendedor_id INT,
 produto_id INT,
 data DATE,
 hora TIME
);

INSERT INTO usuarios VALUES (1, 'João');
INSERT INTO vendedores VALUES (1, 'Maria');
INSERT INTO produtos VALUES (1, 'Notebook', 3500.00);

INSERT INTO movimentacoes VALUES
(1,1,1,1,'2026-03-10','14:30:00');
