package com.viajes.Travel.platform.controllers;


import com.viajes.Travel.platform.entity.Viajes;


import com.viajes.Travel.platform.services.ViajesServices;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;


@RestController
@RequestMapping("/viajes")
@CrossOrigin("*")
public class ViajesController {


    @Autowired
    private ViajesServices services;

    //endpoint de listar viajes
    @GetMapping()
    public ResponseEntity<?>listar(){

        return  ResponseEntity.status(HttpStatus.OK).body(this.services.listar());
    }
    
    @GetMapping("/price/{price}")
    
    public ResponseEntity<?>findByPrice(@PathVariable Double price){
    	
    	return ResponseEntity.status(HttpStatus.ACCEPTED).body(this.services.findByPrice(price));
    }

    @GetMapping("/origin/{origin}")
    public ResponseEntity<?>findByOrigin(@PathVariable String origin){

        return ResponseEntity.status(HttpStatus.ACCEPTED).body(this.services.findByOrigin(origin));
    }

    @GetMapping("/destiny/{destiny}")
    public ResponseEntity<?>findByDestiny(@PathVariable String destiny){

        return ResponseEntity.status(HttpStatus.ACCEPTED).body(this.services.findByDestiny(destiny));
    }

    @GetMapping("/originAndDestiny/{origin}/{destiny}")
    public ResponseEntity<?>findByOriginAndDestiny(@PathVariable String origin, @PathVariable String destiny){

        return ResponseEntity.status(HttpStatus.ACCEPTED).body(this.services.findByOriginAndDestiny(origin, destiny));
    }

    @GetMapping("/originAndDestinyAndDateOfOrigin/{origin}/{destiny}/{dateOfOrigin}")
    public ResponseEntity<?>findByOriginAndDestinyAndDateOfOrigin
            (@PathVariable String origin, @PathVariable String destiny, @PathVariable String dateOfOrigin){
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(this.services.findByOriginAndDestinyAndDateOfOrigin(origin, destiny, dateOfOrigin));
    }

@GetMapping("/findByOriginAndDestinyAndDateOfDestiny/{origin}/{destiny}/{DateOfDestiny}")

public  ResponseEntity<?>buscarPorDestinoAndFecha(@PathVariable String origin, @PathVariable String destiny, @PathVariable String DateOfDestiny){


        return ResponseEntity.status(HttpStatus.OK).body(this.services.findByOriginAndDestinyAndDateOfDestiny(origin,destiny,DateOfDestiny));
}


    @GetMapping("/{id}")

    public ResponseEntity<?>buscarPorId(@PathVariable Integer id){


        return ResponseEntity.status(HttpStatus.OK).body(this.services.buscarPorId(id));

    }

    @PostMapping()
    public ResponseEntity<?>crear(@Valid @RequestBody Viajes vi,BindingResult result){

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
