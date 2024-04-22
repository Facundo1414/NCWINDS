package com.viajes.Travel.platform.Dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UsuariosRequestDto {

	private String nombre;
	
	private String correo;
	
	private String password;
	
}
