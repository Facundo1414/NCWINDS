package com.viajes.Travel.platform;

import com.viajes.Travel.platform.entity.viajes;
import com.viajes.Travel.platform.respository.ViajesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TravelPlatformApplication {

	public static void main(String[] args) {
		SpringApplication.run(TravelPlatformApplication.class, args);
	}

	@Autowired

	private ViajesRepository viajesRepository;

	public Iterable<viajes> listAllTrips() {
		return viajesRepository.findAll();
	}

	public Iterable<viajes> findByPrice(Double price){
		return viajesRepository.findByPrice(price);
	}

}
