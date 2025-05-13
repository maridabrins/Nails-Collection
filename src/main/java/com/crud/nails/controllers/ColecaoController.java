package com.crud.nails.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.crud.nails.dto.ColecaoDTO;
import com.crud.nails.services.ColecaoService;

@RestController
@RequestMapping(value = "colecao")
public class ColecaoController {
	
	@Autowired
	ColecaoService colecaoService;
	
	@GetMapping
	public List<ColecaoDTO> buscarTodos(){
		return colecaoService.buscarTodos();
	}

}
