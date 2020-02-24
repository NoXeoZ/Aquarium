package com.upem.Aquarium.Controller;

import com.upem.Aquarium.Model.Specie;
import com.upem.Aquarium.Repository.SpecieRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class SpecieController {

    private SpecieRepository specieRepository;

    public SpecieController(SpecieRepository specieRepository){
        this.specieRepository = specieRepository;
    }

    @GetMapping("/specie")
    public Iterable<Specie> getSpecie() {
        return (Iterable<Specie>) specieRepository.findAll();    }

    @PostMapping("/specie")
    public void addSpecie(@RequestBody Specie specie){
        specieRepository.save(specie);
    }

}
