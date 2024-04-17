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
@NoArgsConstructor
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




}
