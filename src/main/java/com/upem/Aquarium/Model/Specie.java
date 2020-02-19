package com.upem.Aquarium.Model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Species {



    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private long lifeSpan;
    private String name;


    public Species(){}

    public Species(long lifeSpan, String name) {
        this.lifeSpan = lifeSpan;
        this.name = name;
    }

    public long getId() {
        return id;
    }

    public void setLifeSpan(long lifeSpan) {
        this.lifeSpan = lifeSpan;
    }

    public void setName(String name) {
        this.name = name;
    }
}
