package com.crud.nails.dto;

import com.crud.nails.entities.Colecao;

public class ColecaoDTO {
	
	private Long id;
	private String nome;
	private String marca;
	private String cor;
	private String imgUrl;
	
	public ColecaoDTO() {
	}

	public ColecaoDTO(Long id, String nome, String marca, String cor, String imgUrl) {
		this.id = id;
		this.nome = nome;
		this.marca = marca;
		this.cor = cor;
		this.imgUrl = imgUrl;
	}
	
	public ColecaoDTO(Colecao entity) {
		this.id = entity.getId();
		this.nome = entity.getNome();
		this.marca = entity.getMarca();
		this.cor = entity.getCor();
		this.imgUrl = entity.getImgUrl();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getMarca() {
		return marca;
	}

	public void setMarca(String marca) {
		this.marca = marca;
	}

	public String getCor() {
		return cor;
	}

	public void setCor(String cor) {
		this.cor = cor;
	}

	public String getImgUrl() {
		return imgUrl;
	}

	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}
	
	
	
	

}
