package com.viajes.Travel.platform.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Reserva {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idReserva;

    
    private Integer totalNumberOfSeats;
    
    
    private String name;
    
    
    private String lastName;
    
    
    private String residenceCountry;
    
    
    private String numberDocument;
    
    
    private String dateOfBirth;
    
    
    private String gender;
    
    
    private Integer idViaje;
    
    
    private Integer idUsuario;
}
