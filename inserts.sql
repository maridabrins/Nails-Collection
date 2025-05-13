create database nails

select * from tb_colecao

INSERT INTO tb_colecao (nome, cor, marca, img_url)
VALUES
    ('Leo mandou flores', 'rosa escuro', 'RISQUÉ', 'https://images.tcdn.com.br/img/img_prod/696801/esmalte_risque_cremoso_leo_mandou_flores_4759_1_20190831092101.jpg'),
    ('Foi aqui que pediram fini?', 'laranja', 'COLORAMA', 'https://www.coloramaesmaltes.com.br/-/media/Project/Loreal/Brand-Sites/Essie/MASTER/DMI/products/2023/Colecao-Fini/Foi-ai-que-pediram-Fini/Imagem-Colecao-Fini-Foi-aqui-que-pediram-Fini-Packshot.jpg'),
    ('Multichorme Ocípite', 'holografico colorido', 'HITS', 'https://images.tcdn.com.br/img/img_prod/1138628/ocipite_esmalte_multichrome_hits_1849_1_48e2c7db21e8bccaa36f3e68d44de371.jpg'),
    ('Batida de coco', 'branco', 'COLORAMA', 'https://images.tcdn.com.br/img/img_prod/696801/esmalte_colorama_cremoso_batida_de_coco_5835_1_20190902130050.jpg'),
    ('Royal', 'azul royal', 'IMPALA', 'https://http2.mlstatic.com/D_884108-MLB83948996078_042025-C.jpg');
 
DROP PROCEDURE IF EXISTS buscar_esmalte_por_nome;
DELIMITER $$
CREATE PROCEDURE buscar_esmalte_por_nome(IN nome_esmalte VARCHAR(255))
BEGIN
    SELECT id, nome, cor, marca, img_url
    FROM tb_colecao
    WHERE nome LIKE CONCAT('%', nome_esmalte, '%');
END$$
DELIMITER ;
 
CALL buscar_esmalte_por_nome('Azul');

