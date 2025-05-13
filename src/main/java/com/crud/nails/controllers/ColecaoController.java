package com.crud.nails.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.crud.nails.dto.ColecaoDTO;
import com.crud.nails.services.ColecaoService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;

@RestController
@RequestMapping(value = "colecao")
public class ColecaoController {
	
	@Autowired
	ColecaoService colecaoService;
	
	@Operation(description = "Busca o Esmalte pelo id,nome, cor e marca")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "Retorna o esmalte"),
			@ApiResponse(responseCode = "400", description = "Não existe o esmalte com o id informado")
	})
	@GetMapping("/search")
    public ResponseEntity<List<ColecaoDTO>> search(
            @RequestParam("q") String termo) {

        List<ColecaoDTO> resultados = colecaoService.buscarPorTudo(termo);
        return ResponseEntity.ok(resultados);
    }
	
	@Operation(description = "Mostra todos os esmaltes")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "Retorna os esmaltes na coleção"),
			
	})
	
	@GetMapping
	public List<ColecaoDTO> buscarTodos(){
		return colecaoService.buscarTodos();
	}
	
	@Operation(description = "Busca o Esmalte pelo id")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "Retorna o esmalte"),
			@ApiResponse(responseCode = "400", description = "Não existe o esmalte com o id informado")
	})
	@GetMapping("/{id}")
	public ResponseEntity<ColecaoDTO> buscarPorId(@PathVariable Long id){
		ColecaoDTO dto = colecaoService.buscarPorId(id);
		return ResponseEntity.ok(dto);
	}
	
	
	@Operation(description = "Cria um esmalte novo na coleção")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "Retorna o esmalte criado"),
			@ApiResponse(responseCode = "400", description = "A requisição está incompleta ou malformada")
	})
	@PostMapping("/criar")
	public ResponseEntity<ColecaoDTO> criarNovo (@RequestBody ColecaoDTO dto){
		dto = colecaoService.criarNovo(dto);
		return ResponseEntity.ok(dto);
	}
	
	@Operation(description = "Edita o Esmalte pelo id")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "Retorna o esmalte editado"),
			@ApiResponse(responseCode = "400", description = "Não existe o esmalte com o id informado")
	})
	@PutMapping("/editar/{id}")
	public ResponseEntity<ColecaoDTO> editar (@PathVariable Long id, @RequestBody ColecaoDTO dto){
		dto = colecaoService.editar(id,dto);
		return ResponseEntity.ok(dto);
	}
	
	@Operation(description = "Deleta o Esmalte pelo id")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "Deleta o esmalte"),
			@ApiResponse(responseCode = "400", description = "Não existe o esmalte com o id informado")
	})
	@DeleteMapping("/excluir/{id}")
	public void delete(@PathVariable Long id) {
		colecaoService.deletar(id);
	}
	
	


}
