package com.crud.nails.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.crud.nails.entities.Colecao;

@Repository
public interface ColecaoRepository extends JpaRepository <Colecao, Long>{
	

    // busca exata ou parcial, ignorando caixa
    List<Colecao> findByNomeContainingIgnoreCase(String nome);
    List<Colecao> findByMarcaContainingIgnoreCase(String marca);
    List<Colecao> findByCorContainingIgnoreCase(String cor);

    // busca “tudo em um só” — nome, marca ou cor
    @Query("""
      SELECT c 
        FROM Colecao c 
       WHERE LOWER(c.nome)  LIKE LOWER(CONCAT('%', :termo, '%'))
          OR LOWER(c.marca) LIKE LOWER(CONCAT('%', :termo, '%'))
          OR LOWER(c.cor)   LIKE LOWER(CONCAT('%', :termo, '%'))
      """)
    List<Colecao> searchAllFields(@Param("termo") String termo);
}
