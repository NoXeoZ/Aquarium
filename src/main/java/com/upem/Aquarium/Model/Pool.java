package com.upem.Aquarium.Model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Collection;


@Entity
public class Pool implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JsonIgnoreProperties("pools")
    private Sector sector = null;

    @OneToMany(mappedBy = "pool", cascade = CascadeType.ALL)
    @JsonIgnoreProperties("pool")
    private Collection<Specie> species = null;

    private long populationmax;
    private long volume;
    private boolean clean;
    private String name;

    public Pool() {
    }

    public Pool(String name) {
        this.name=name;
    }

    public Collection<Specie> getSpecies() {
        return species;
    }

    public void setSpecies(Collection<Specie> species) {
        this.species = species;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }



    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Sector getSector() {
        return sector;
    }

    public void setSector(Sector sector) {
        this.sector = sector;
    }

    public long getPopulationmax() {
        return populationmax;
    }

    public void setPopulationmax(long populationmax) {
        this.populationmax = populationmax;
    }

    public long getVolume() {
        return volume;
    }

    public void setVolume(long volume) {
        this.volume = volume;
    }

    public boolean isClean() {
        return clean;
    }

    public void setClean(boolean clean) {
        this.clean = clean;
    }
}