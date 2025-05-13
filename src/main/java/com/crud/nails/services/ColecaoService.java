package com.crud.nails.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crud.nails.dto.ColecaoDTO;
import com.crud.nails.entities.Colecao;
import com.crud.nails.repositories.ColecaoRepository;

@Service
public class ColecaoService {
	
	@Autowired
	ColecaoRepository colecaoRepository;
	
	public List<ColecaoDTO> buscarTodos(){
		List<Colecao> lista = colecaoRepository.findAll();
		return lista.stream().map(x-> new ColecaoDTO(x)).toList();
	}

	public ColecaoDTO buscarPorId(Long id) {
		Colecao entity = colecaoRepository.findById(id).get();
		return new ColecaoDTO(entity);
	}
	
	public ColecaoDTO criarNovo(ColecaoDTO dto) {
		Colecao entity = new Colecao();
		entity.setCor(dto.getCor());
		entity.setNome(dto.getNome());
		entity.setMarca(dto.getMarca());
		entity.setImgUrl(dto.getImgUrl());
		
		entity = colecaoRepository.save(entity);
		return new ColecaoDTO(entity);
		
	}
}
