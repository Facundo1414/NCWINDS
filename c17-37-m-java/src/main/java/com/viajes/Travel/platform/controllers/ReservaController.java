package com.viajes.Travel.platform.controllers;

import com.viajes.Travel.platform.entity.Reserva;
import com.viajes.Travel.platform.services.ReservaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/reserva")
public class ReservaController {
    @Autowired
   private ReservaService reservaService;



    @GetMapping

    public ResponseEntity<?>listar(){

        return ResponseEntity.status(HttpStatus.OK).body(this.reservaService.listar());
    }


    @PostMapping()
    public ResponseEntity<Reserva> crearReserva(@RequestBody Reserva res) {
      reservaService.guardar(res);
        return ResponseEntity.status(HttpStatus.CREATED).body(res);
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> borrarReserva(@PathVariable("id") Integer id) {
        this.reservaService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}
