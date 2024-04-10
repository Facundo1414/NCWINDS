package com.viajes.Travel.platform.services;

import com.viajes.Travel.platform.entity.Viajes;


import java.util.List;
import java.util.Optional;

public interface ViajesServicesImp {


    Iterable<Viajes> findByPrice(Double price);


    List<Viajes>listar();

   void guardar(Viajes via);


   Viajes buscarPorId(Integer id);


   Viajes findByOrigin (String origin);

    Viajes findByDestiny (String destiny);

    Viajes findByOriginAndDestiny (String origin, String destiny);


}
