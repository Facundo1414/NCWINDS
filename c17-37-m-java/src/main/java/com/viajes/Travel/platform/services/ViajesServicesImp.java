package com.viajes.Travel.platform.services;

import com.viajes.Travel.platform.entity.viajes;

import java.util.List;
import java.util.Optional;

public interface ViajesServicesImp {

	
    Iterable<viajes> listAllTrips();
    Iterable<viajes> findByPrice(Double price);


    List<viajes>listar();

   void guardar(viajes via);


   viajes buscarPorId(Integer id);


}
