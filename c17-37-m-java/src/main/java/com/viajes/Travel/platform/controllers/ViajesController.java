package com.viajes.Travel.platform.controllers;


import com.viajes.Travel.platform.services.ViajesServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


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

}
