package com.viajes.Travel.platform.services;

import com.viajes.Travel.platform.entity.Reserva;

import java.util.List;

public interface ReservaImp {


    List<Reserva>listar();
    void guardar(Reserva res);

    void eliminar(Integer id);
}
