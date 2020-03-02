package com.upem.Aquarium.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;


@Entity
public class Animal implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JsonIgnoreProperties("animals")
    @JoinColumn(nullable = true)
    private Specie specie = null;

    private String name;
    private String genre;
    private Date arriving;
    private Date departure; // optional
    private String marks; // optional

    public void setId(long id) {
        this.id = id;
    }

    public Animal(Specie specie, String name, String genre, Date arriving, Date departure, String marks) {
        this.specie = specie;
        this.name = name;
        this.genre = genre;
        this.arriving = arriving;
        this.departure = departure;
        this.marks = marks;
    }

    public Animal() {
    }

    public long getId(){
        return id;
    }

    public Specie getSpecie() {
        return specie;
    }

    public void setSpecie(Specie specie) {
        this.specie = specie;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String sex) {
        this.genre = sex;
    }

    public Date getArriving() {
        return arriving;
    }

    public void setArriving(Date arriving) {
        this.arriving = arriving;
    }

    public Date getDeparture() {
        return departure;
    }

    public void setDeparture(Date departure) {
        this.departure = departure;
    }

    public String getMarks() {
        return marks;
    }

    public void setMarks(String marks) {
        this.marks = marks;
    }




}
