package com.upem.Aquarium.Controller;

import com.upem.Aquarium.Model.Specie;
import com.upem.Aquarium.Repository.AnimalRepository;
import com.upem.Aquarium.Repository.AnimalsRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AnimalsController {
    private AnimalRepository AnimalRepository;

    public AnimalsController(AnimalRepository AnimalRepository){
        this.AnimalRepository = AnimalRepository;
    }

    @GetMapping("/Animals")
    public Iterable<Specie> getAnimals() {
        return (Iterable<Specie>) AnimalsRepository.findAll();    }

    @PostMapping("/Animals")
    public void addSpecie(@RequestBody Specie specie){
        AnimalsRepository.save(specie);
    }
}
