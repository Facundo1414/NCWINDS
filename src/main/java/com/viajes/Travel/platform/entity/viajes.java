package com.viajes.Travel.platform.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor

public class viajes {

   @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
 private Integer Id;

 @NotEmpty
    private String Name;

 @NotNull
    private Double price;

 @NotEmpty
    private String Destiny;

 @NotNull
    private Date Date;

 private String Description;


}
