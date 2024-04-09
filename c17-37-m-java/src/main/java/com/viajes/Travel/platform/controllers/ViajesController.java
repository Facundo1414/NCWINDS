package com.viajes.Travel.platform.controllers;


import com.viajes.Travel.platform.entity.viajes;
import com.viajes.Travel.platform.services.ViajesServices;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;


@RestController
@RequestMapping("/viajes")
public class ViajesController {


    @Autowired
    private ViajesServices services;

    //endpoint de listar viajes
    @GetMapping()

    public ResponseEntity<?>listar(){

        return  ResponseEntity.status(HttpStatus.OK).body(this.services.listar());
    }


    @GetMapping("/{id}")

    public ResponseEntity<?>buscarPorId(@PathVariable Integer id){


        return ResponseEntity.status(HttpStatus.OK).body(this.services.buscarPorId(id));

    }


    @PostMapping()
    public ResponseEntity<?>crear(@Valid @RequestBody viajes vi,BindingResult result){

        try {

            if (result.hasErrors()){
                return validation(result);
            }

            this.services.guardar(vi);

            return ResponseEntity.status(HttpStatus.CREATED).body(new HashMap<>(){
                {
                    put("mensaje","Creado con exito");

                }
            });
        }catch (Exception e){

            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new HashMap<>(){
                {
                    put("error","Ocurrio algun error inesperado");
                }
            });
        }

    }



    private ResponseEntity<?> validation(BindingResult result) {
        Map<String,String> errors = new HashMap<>();

        result.getFieldErrors().forEach(err->{
            errors.put(err.getField(),"El campo " + err.getField() + " " + err.getDefaultMessage());
        });

        return ResponseEntity.badRequest().body(errors);
    }
}
