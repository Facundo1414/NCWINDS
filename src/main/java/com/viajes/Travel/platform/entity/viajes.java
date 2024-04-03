package com.viajes.Travel.platform.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.util.Date;

@Entity
@Data

public class viajes {

    @jakarta.persistence.Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
 private Integer Id;

 @NotEmpty
    private String Name;

 @NotNull
    private Double Price;

 @NotEmpty
    private String Destiny;

 @NotNull
    private Date Date;

 private String Description;
}
