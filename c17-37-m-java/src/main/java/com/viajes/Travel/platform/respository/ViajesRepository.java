package com.viajes.Travel.platform.respository;


import com.viajes.Travel.platform.entity.viajes;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ViajesRepository extends JpaRepository<viajes,Integer> {

    List<viajes> findByPrice(Double price);
    

}