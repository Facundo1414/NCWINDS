package com.viajes.Travel.platform.services;

import com.viajes.Travel.platform.entity.Viajes;

import com.viajes.Travel.platform.respository.ViajesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class ViajesServices implements  ViajesServicesImp{

	

    @Autowired
    private ViajesRepository viajesRepository;


    public Iterable<Viajes> findByPrice(Double price){
        return viajesRepository.findByPrice(price);
    }

    public List<Viajes>listar(){

        return  this.viajesRepository.findAll();
    }

    @Override
    public void guardar(Viajes via) {
        this.viajesRepository.save(via);
    }


    @Override
    public Viajes buscarPorId(Integer id) {

        Optional<Viajes>optional= this.viajesRepository.findById(id);

        if (optional.isPresent()){

            return optional.get();
        }

        return null;
    }

    @Override
  public Viajes findByOrigin(String origin){
        return (Viajes) viajesRepository.findByOrigin(origin);
    }

    @Override
    public Viajes findByDestiny(String destiny){
       return (Viajes) viajesRepository.findByDestiny(destiny);
    }

    @Override
    public Viajes findByOriginAndDestiny(String origin, String destiny){
       return (Viajes) viajesRepository.findByOriginAndDestiny(origin, destiny);
   }
}
