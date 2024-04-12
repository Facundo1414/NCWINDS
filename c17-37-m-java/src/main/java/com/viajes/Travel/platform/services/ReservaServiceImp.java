package com.viajes.Travel.platform.services;

import com.viajes.Travel.platform.entity.Reserva;

public interface ReservaServiceImp {
    
    void guardarReserva(Reserva res);
    
    void eliminarReserva(Integer id);
}
