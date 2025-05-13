package com.crud.nails.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
	
	@GetMapping("/{id}")
	public ResponseEntity<ColecaoDTO> buscarPorId(@PathVariable Long id){
		ColecaoDTO dto = colecaoService.buscarPorId(id);
		return ResponseEntity.ok(dto);
	}
	
	@PostMapping("/criar")
	public ResponseEntity<ColecaoDTO> criarNovo (@RequestBody ColecaoDTO dto){
		dto = colecaoService.criarNovo(dto);
		return ResponseEntity.ok(dto);
	}
	
	@PutMapping("/editar/{id}")
	public ResponseEntity<ColecaoDTO> editar (@PathVariable Long id, @RequestBody ColecaoDTO dto){
		dto = colecaoService.editar(id,dto);
		return ResponseEntity.ok(dto);
	}
	

}
