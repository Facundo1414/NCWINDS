package com.viajes.Travel.platform.Dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class JwtResponseDto {

    private Integer id;
    private String nombre;
    private String perfil;
    private Long perfil_id;
    private String token;


}