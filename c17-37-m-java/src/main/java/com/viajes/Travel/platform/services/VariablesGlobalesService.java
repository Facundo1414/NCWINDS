package com.viajes.Travel.platform.services;

import com.viajes.Travel.platform.entity.VariablesGlobales;
import com.viajes.Travel.platform.respository.VariablesGlobalesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Primary
public class VariablesGlobalesService {

    @Autowired
    private VariablesGlobalesRepository variablesGlobalesRepository;


    public List<VariablesGlobales> listar(){

        return this.variablesGlobalesRepository.findAll();
    }


    public void guardar(VariablesGlobales model){

        this.variablesGlobalesRepository.save(model);
    }

    public VariablesGlobales buscarPorId(Long id){

        Optional<VariablesGlobales> optional =this.variablesGlobalesRepository.findById(id);

        if (optional.isPresent()){

            return  optional.get();
        }

        return null;
    }

    public void eliminar(Long id){

        this.variablesGlobalesRepository.deleteById(id);
    }
}

