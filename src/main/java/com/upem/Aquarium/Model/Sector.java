package com.upem.Aquarium.Model;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Collection;
import java.util.Set;

@Entity
public class Sector implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @GeneratedValue(strategy = GenerationType.AUTO)
    private long localisation;


    private String name;

    @ManyToMany(fetch = FetchType.EAGER)
    @JsonIgnoreProperties("workingsectors")
    private Set<Employee> employees = null;

    @OneToMany(mappedBy = "sector", cascade = CascadeType.ALL)
    @JsonIgnoreProperties("sector")
    private Collection<Pool> pools = null;

    public Sector(){}
    public Sector(String name){
        this.name = name;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getLocalisation() {
        return localisation;
    }

    public void setLocalisation(long localisation) {
        this.localisation = localisation;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Collection<Pool> getPools() {
        return pools;
    }

    public void setPools(Collection<Pool> pools) {
        this.pools = pools;
    }

    public Set<Employee> getEmployees() {
        return employees;
    }

    public void setEmployees(Set<Employee> employees) {
        this.employees = employees;
    }
}

