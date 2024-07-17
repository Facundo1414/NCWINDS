package com.company;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class Streams_and_lamba {

        // strams & lamba
    public static void main(String[] args){

        List<String> cities = new ArrayList<>();
        cities.add("London");
        cities.add("New york");
        cities.add("Los Angeles");
        cities.add("Bs As");
        cities.add("Barcelona");
        cities.add("etc");

        // De esta forma podemos recorrer el array con stream

        // lamba
        cities.stream().forEach(city -> System.out.println(city));

        // reference to a method
        cities.stream().forEach(Streams_and_lamba::printCity);

        // More simple
        cities.forEach(System.out::println);

        // usamos parallel para ejecutar la siguiente funcion en asyncronico, no secuencial sino paralelo
        cities.stream().parallel().forEach(System.out::println);

        // filter city
        cities.stream()
                .filter(city -> city.startsWith("B"))
                .forEach(System.out::println);

        // filter city
        cities.stream().forEach(city -> filterCity(city));

        // save list with collect
        List<String> filteredCities = cities.stream()
                .filter(city -> filterCity(city))
                .collect(Collectors.toList());
    }

    public static void printCity (String city){
        System.out.println(city);
    }

    public static boolean filterCity (String city){
        return city.startsWith("B");
    }
}
