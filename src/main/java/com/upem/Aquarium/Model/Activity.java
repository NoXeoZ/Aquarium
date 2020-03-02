package com.upem.Aquarium.Model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Collection;
import java.util.Date;
import java.util.Set;

@Entity
public class Activity implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @ManyToMany(mappedBy="activities",fetch = FetchType.EAGER)
    @JsonIgnoreProperties("activities")
    private Set<Employee> workingemployees = null;

    @OneToOne(mappedBy="activity")
    @JsonIgnoreProperties("activity")
    private Pool poolactivity = null;

    @PreRemove
    public void fixForeignKeys() {
        workingemployees.forEach(we -> we.setActivities(null));
        poolactivity.setActivity(null);
    }

    private String name;
    private Boolean ispublic;
    private Date begin;
    private Date end;

    public Activity(){

    }

    public Activity(String name, Boolean ispublic, Date begin, Date end){
        this.name = name;
        this.ispublic = ispublic;
        this.begin = begin;
        this.end = end;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Collection<Employee> getWorkingemployees() {
        return workingemployees;
    }

    public void setWorkingemployees(Set<Employee> workingemployees) {
        this.workingemployees = workingemployees;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Boolean getIspublic() {
        return ispublic;
    }

    public void setIspublic(Boolean ispublic) {
        this.ispublic = ispublic;
    }

    public Date getBegin() {
        return begin;
    }

    public void setBegin(Date begin) {
        this.begin = begin;
    }

    public Date getEnd() {
        return end;
    }

    public void setEnd(Date end) {
        this.end = end;
    }

    public Pool getPool() {
        return poolactivity;
    }

    public void setPool(Pool pool) {
        this.poolactivity = pool;
    }

    public Pool getPoolactivity() {
        return poolactivity;
    }

    public void setPoolactivity(Pool poolactivity) {
        this.poolactivity = poolactivity;
    }
}
