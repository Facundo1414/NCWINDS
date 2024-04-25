package com.viajes.Travel.platform.services;

import com.viajes.Travel.platform.entity.Viajes;


import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

public interface ViajesServicesImp {


    Iterable<Viajes> findByPrice(Double price);


    List<Viajes>listar();

   void guardar(Viajes via);


   Viajes buscarPorId(Integer id);


   List<Viajes> findByOrigin (String origin);

    List<Viajes> findByDestiny (String destiny);

    List<Viajes> findByOriginAndDestiny (String origin, String destiny);

    List<Viajes> findByOriginAndDestinyAndDateOfOrigin (String origin, String destiny, String dateOfOrigin);

    List<Viajes> findByOriginAndDestinyAndDateOfDestiny(String origin,String destiny,String DateOfDestiny);

    void delete (Viajes viajes);

    List<Viajes> findByOriginAndDestinyAndDateOfOriginAndDateOfDestiny(String origin, String destiny, String dateOfOrigin, String dateOfDestiny);
}
