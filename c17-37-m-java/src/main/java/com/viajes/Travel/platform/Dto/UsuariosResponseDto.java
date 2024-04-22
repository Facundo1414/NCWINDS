package com.viajes.Travel.platform.Dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UsuariosResponseDto {

	
	private Integer id;
	private String nombre;
	private String correo;
	private String perfil;
	private Long  perfil_id;
	private Long estado_id;
	private String estado;
	
	
	
	
}
