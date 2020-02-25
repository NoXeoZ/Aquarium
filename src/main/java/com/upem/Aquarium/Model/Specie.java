package com.upem.Aquarium.Model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Collection;
import java.util.List;

@Entity
//@Table(name="species")
public class Specie implements Serializable {
    public void setId(long id) {
        this.id = id;
    }

    public long getLifeSpan() {
        return lifeSpan;
    }

    public String getName() {
        return name;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    //@Column(name="lifespan",nullable=false)
    private long lifeSpan;

    //@Column(name="name",nullable=false)
    private String name;

    @OneToMany(mappedBy = "specie")
    @JsonIgnoreProperties("specie")
    private Collection<Animal> animals = null;

    public Specie(){}

    public Specie(long lifeSpan, String name) {
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

    @Override
    public String toString() {
        return "Specie{" +
                "id=" + id +
                ", lifeSpan=" + lifeSpan +
                ", name='" + name + '\'' +
                '}';
    }

    public void setAnimals(Collection<Animal> animals) {
        this.animals = animals;
    }

    public Iterable<Animal> getAnimals() {
        return this.animals;
    }

}
