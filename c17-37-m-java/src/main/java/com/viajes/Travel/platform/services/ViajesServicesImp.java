package com.viajes.Travel.platform.services;

import com.viajes.Travel.platform.entity.viajes;

import java.util.List;

public interface ViajesServicesImp {

	
    Iterable<viajes> listAllTrips();
    Iterable<viajes> findByPrice(Double price);


    List<viajes>listar();


}
