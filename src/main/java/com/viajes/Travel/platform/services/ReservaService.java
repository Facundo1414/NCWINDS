package com.viajes.Travel.platform.services;

import com.viajes.Travel.platform.entity.Reserva;
import com.viajes.Travel.platform.respository.ReservaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class ReservaService implements  ReservaImp{

    @Autowired
    private ReservaRepository reservaRepository;


    public List<Reserva>listar(){

        return this.reservaRepository.findAll();}

    public void guardar(Reserva res){
        this.reservaRepository.save(res);
    }
    public void eliminar(Integer id){

        this.reservaRepository.deleteById(id);
    }



    
}
