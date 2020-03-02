package com.upem.Aquarium.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Collection;
import java.util.Date;
import java.util.Set;


@Entity
public class Employee implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @ManyToMany(mappedBy="employees",fetch = FetchType.EAGER)
    @JsonIgnoreProperties("employees")
    private Set<Sector> workingsectors = null;

    @OneToMany(mappedBy = "chief")
    @JsonIgnoreProperties("chief")
    private Collection<Pool> poolschief = null;

    @ManyToMany(fetch = FetchType.EAGER)
    @JsonIgnoreProperties("activities")
    private Set<Activity> activities = null;



    @PreRemove
    public void fixForeignKeys() {
        poolschief.forEach(a -> a.setChief(null));
        workingsectors.forEach( ws->ws.setEmployees(null));
    }

    private String firstname;
    private String lastname;
    private String address;
    private long socialsecuritynumber;
    private Date birthdate;

    public Employee(Set<Sector> workingsectors, String firstname, String lastname, String address, long socialsecuritynumber, Date birthdate) {
        this.workingsectors = workingsectors;
        this.firstname = firstname;
        this.lastname = lastname;
        this.address = address;
        this.birthdate = birthdate;
        this.socialsecuritynumber= socialsecuritynumber;

    }

    public Employee() {
    }


    public void setId(long id) {
        this.id = id;
    }

    public long getId() {
        return id;
    }

    public Collection<Pool> getPoolschief() {
        return poolschief;
    }

    public void setPoolschief(Collection<Pool> poolschief) {
        this.poolschief = poolschief;
    }

    public Collection<Sector> getWorkingsectors() {
        return workingsectors;
    }

    public void setWorkingsectors(Set<Sector> workingsectors) {
        this.workingsectors = workingsectors;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public long getSocialsecuritynumber() {
        return socialsecuritynumber;
    }

    public void setSocialsecuritynumber(long socialsecuritynumber) {
        this.socialsecuritynumber = socialsecuritynumber;
    }

    public Date getBirthdate() {
        return birthdate;
    }

    public void setBirthdate(Date birthdate) {
        this.birthdate = birthdate;
    }

    public Collection<Activity> getActivities() {
        return activities;
    }

    public void setActivities(Set<Activity> activities) {
        this.activities = activities;
    }


}
