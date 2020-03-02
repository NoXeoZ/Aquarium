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
    @JsonIgnoreProperties(value = {"poolsector","sectorpools"})
    private Sector poolsector = null;

    @ManyToOne(fetch = FetchType.EAGER)
    @JsonIgnoreProperties("poolschief")
    private Employee chief = null;

    @OneToOne
    @JsonIgnoreProperties("poolactivity")
    private Activity activity = null;

    @OneToMany(mappedBy = "pool")
    @JsonIgnoreProperties("pool")
    private Collection<Specie> species = null;

    private long populationmax;
    private long volume;
    private boolean clean;
    private String name;

    @PreRemove
    public void fixForeignKeys() {
        species.forEach(a -> a.setPool(null));
    }

    public Pool() {
    }

    public Pool(String name) {
        this.name=name;
    }

    public Employee getChief() {
        return chief;
    }

    public void setChief(Employee chief) {
        this.chief = chief;
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

    public Sector getPoolsector() {
        return poolsector;
    }

    public void setPoolsector(Sector sector) {
        this.poolsector = sector;
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
    public Activity getActivity() {
        return activity;
    }

    public void setActivity(Activity activity) {
        this.activity = activity;
    }

    public Collection<Specie> getSpecies() {
        return species;
    }

    public void setSpecies(Collection<Specie> species) {
        this.species = species;
    }

}