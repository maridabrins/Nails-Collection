package com.crud.nails.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.crud.nails.entities.Colecao;

@Repository
public interface ColecaoRepository extends JpaRepository <Colecao, Long>{
	

}
