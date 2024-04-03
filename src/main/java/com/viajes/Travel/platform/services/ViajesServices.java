package com.viajes.Travel.platform.services;

import com.viajes.Travel.platform.entity.viajes;
import com.viajes.Travel.platform.respository.ViajesRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class ViajesServices {

    @Autowired

    private ViajesRepository viajesRepository;

    public Iterable<viajes> listAllTrips() {
        return viajesRepository.findAll();
    }

    public Iterable<viajes> findByPrice(Double price){
        return viajesRepository.findByPrice(price);
    }
}
