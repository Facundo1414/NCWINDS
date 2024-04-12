package com.viajes.Travel.platform.services;

import com.viajes.Travel.platform.entity.Reserva;
import com.viajes.Travel.platform.respository.ReservaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReservaService implements ReservaServiceImp{

    @Autowired
    private ReservaRepository reservaRepository;
    
    @Override
    public void guardarReserva(Reserva res) {
        this.reservaRepository.save(res);
    }

    @Override
    public void eliminarReserva(Integer id) {
        reservaRepository.deleteById(id);
    }
    
}
