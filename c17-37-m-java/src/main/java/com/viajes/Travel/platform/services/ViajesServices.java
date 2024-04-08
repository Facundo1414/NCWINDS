package com.viajes.Travel.platform.services;

import com.viajes.Travel.platform.entity.viajes;
import com.viajes.Travel.platform.respository.ViajesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class ViajesServices implements  ViajesServicesImp{

	

    @Autowired
    private ViajesRepository viajesRepository;

    public Iterable<viajes> listAllTrips() {
        return viajesRepository.findAll();
    }

    public Iterable<viajes> findByPrice(Double price){
        return viajesRepository.findByPrice(price);
    }

    public List<viajes>listar(){

        return  this.viajesRepository.findAll();
    }

    @Override
    public void guardar(viajes via) {
        this.viajesRepository.save(via);
    }


    @Override
    public viajes buscarPorId(Integer id) {

        Optional<viajes>optional= this.viajesRepository.findById(id);

        if (optional.isPresent()){

            return optional.get();
        }

        return null;
    }
}
