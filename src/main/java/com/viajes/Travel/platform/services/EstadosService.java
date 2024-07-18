package com.viajes.Travel.platform.services;

import com.viajes.Travel.platform.entity.EstadosModel;
import com.viajes.Travel.platform.respository.EstadosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
@Primary
public class EstadosService {

    @Autowired
    private EstadosRepository estadosRepository;


    public List<EstadosModel> listar(){

        return this.estadosRepository.findAll();
    }


    public void guardar(EstadosModel model){

        this.estadosRepository.save(model);
    }

    public EstadosModel buscarPorId(Long id){

        Optional<EstadosModel> optional =this.estadosRepository.findById(id);

        if (optional.isPresent()){

            return  optional.get();
        }

        return null;
    }

    public void eliminar(Long id){

        this.estadosRepository.deleteById(id);
    }
}
