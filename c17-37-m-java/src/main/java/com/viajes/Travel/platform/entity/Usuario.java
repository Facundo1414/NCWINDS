package com.viajes.Travel.platform.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Data

@AllArgsConstructor
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Email
    @NotBlank
    private String correo;

    @NotBlank
    private String nombre;

    @NotBlank
    private String password;


    private  String token;

    private Date fecha;

    @ManyToOne()
    @JoinColumn(name="perfil_id")

    private PerfilModel perfilId;


    @ManyToOne()
    @JoinColumn(name="estados_id")

    private EstadosModel estadosId;


	public Usuario(@Email @NotBlank String correo, @NotBlank String nombre, @NotBlank String password, String token,
			Date fecha, PerfilModel perfilId, EstadosModel estadosId) {
		super();
		this.correo = correo;
		this.nombre = nombre;
		this.password = password;
		this.token = token;
		this.fecha = fecha;
		this.perfilId = perfilId;
		this.estadosId = estadosId;
	}


	public Usuario() {
		super();
	}



    

}
