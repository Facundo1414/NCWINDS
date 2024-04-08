package com.viajes.Travel.platform.entity;

import jakarta.persistence.Entity;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;



@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor

public class Viajes {

   @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
 private Integer id;

 @NotEmpty
    private String name;

 @NotNull
    private Double price;

 @NotEmpty
    private String destiny;

 @NotNull
    private String date;
 
 private String origins;
 

 @NotBlank
 private String description;



 
 

}
