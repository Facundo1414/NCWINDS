package com.company;
import java.util.concurrent.*;

public class LiveLook {
    public static void main(String[] args) {
        // Create participants and resources
        Fox_live robin = new Fox_live();
        Fox_live miki = new Fox_live();
        Food food = new Food();
        Water water = new Water();
        // Process data
        ExecutorService service = null;
        try {
            service = Executors.newScheduledThreadPool(10);
            service.submit(() -> robin.eatAndDrink(food,water));
            service.submit(() -> miki.drinkAndEat(food,water));
        } finally {
            if(service != null) service.shutdown();
        }
    }
}



class Fox_live {
    public void eatAndDrink(Food food, Water water) {
        synchronized(food) {
            System.out.println("Got Food!");
            move();
        }
        drinkAndEat(food, water);
    }
    public void drinkAndEat(Food food, Water water) {
        synchronized(water) {
            System.out.println("Got Water!");
            move();
        }
        eatAndDrink(food, water);
    }
    public void move() {
        try {
            Thread.sleep(100);
        } catch (InterruptedException e) {
            // Handle exception
        }
    }
}