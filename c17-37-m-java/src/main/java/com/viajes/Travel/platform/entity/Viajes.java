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

import java.sql.Date;
import java.time.Duration;
import java.time.LocalDateTime;


@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor

public class Viajes {

   @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
 private Integer id;

 @NotEmpty
    private String origin;

    @NotEmpty
    private String destiny;

 @NotNull
    private Double price;

 @NotNull
    private LocalDateTime dateOfOrigin;

 @NotNull
 private LocalDateTime dateOfDestiny;

 @NotNull
 private Integer scaleNumbers;

 @NotBlank
 private String description;

 @NotNull
 private String duration;


}
