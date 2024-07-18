package com.viajes.Travel.platform.entity;

import jakarta.persistence.*;
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
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "viaje_id")
    private Viajes viaje;


    @ManyToOne
    @JoinColumn(name = "usuario_id")
    private Usuario usuario;

    private Integer totalNumberOfSeats;
    
    
    private String name;
    
    
    private String lastName;
    
    
    private String residenceCountry;
    
    
    private String numberDocument;
    
    
    private String dateOfBirth;
    
    
    private String gender;
    
    

}
