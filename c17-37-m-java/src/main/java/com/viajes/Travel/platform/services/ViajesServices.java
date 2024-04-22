package com.viajes.Travel.platform.services;

import com.viajes.Travel.platform.entity.Viajes;

import com.viajes.Travel.platform.respository.ViajesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
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
  public List<Viajes> findByOrigin(String origin){
        return viajesRepository.findByOrigin(origin);
    }

    @Override
    public List<Viajes> findByDestiny(String destiny){
       return  viajesRepository.findByDestiny(destiny);
    }

    @Override
    public List<Viajes> findByOriginAndDestiny(String origin, String destiny){
       return viajesRepository.findByOriginAndDestiny(origin, destiny);
   }

    @Override
    public List<Viajes> findByOriginAndDestinyAndDateOfOrigin(String origin, String destiny, String dateOfOrigin){
        return viajesRepository.findByOriginAndDestinyAndDateOfOrigin(origin, destiny, dateOfOrigin);
    }

    @Override
    public List<Viajes> findByOriginAndDestinyAndDateOfDestiny(String origin, String destiny, String DateOfDestiny) {
        return this.viajesRepository.findByOriginAndDestinyAndDateOfDestiny(origin,destiny,DateOfDestiny);
    }

    @Override
    public void delete (Viajes viajes){

        viajesRepository.delete(viajes);
   }

	@Override
	public List<Viajes> findByOriginAndDestinyAndDateOfOriginAndDateOfDestiny(String origin, String destiny,
			String dateOfOrigin, String DateOfDestiny) {
		// TODO Auto-generated method stub
		return this.viajesRepository.findByOriginAndDestinyAndDateOfOriginAndDateOfDestiny
				(origin, destiny, dateOfOrigin, DateOfDestiny);
	}


}
