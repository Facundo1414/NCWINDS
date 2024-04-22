package com.viajes.Travel.platform.respository;


import com.viajes.Travel.platform.entity.Viajes;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDateTime;
import java.util.List;

public interface ViajesRepository extends JpaRepository<Viajes,Integer> {

    List<Viajes> findByPrice(Double price);
    
   List<Viajes> findByDestiny(String destiny);

   List<Viajes> findByOrigin(String origin);
   
   List<Viajes> findByOriginAndDestiny(String origin,String destiny);

   List<Viajes> findByOriginAndDestinyAndDateOfOrigin(String origin, String destiny, String DateOfOrigin);

   List<Viajes> findByOriginAndDestinyAndDateOfDestiny(String origin,String destiny,String DateOfDestiny);
   
   List<Viajes> findByOriginAndDestinyAndDateOfOriginAndDateOfDestiny(String origin, String destiny, String dateOfOrigin, String dateOfDestiny);
   
}
