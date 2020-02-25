package com.upem.Aquarium.Controller;

import com.upem.Aquarium.Model.Animal;
import com.upem.Aquarium.Model.Specie;
import com.upem.Aquarium.Repository.AnimalRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AnimalController {
    private AnimalRepository animalRepository;

    public AnimalController(AnimalRepository animalRepository){
        this.animalRepository = animalRepository;
    }

    @GetMapping("/animals")
    public Iterable<Animal> getAnimals() {
        return (Iterable<Animal>) animalRepository.findAll();    }

    @PostMapping("/animal")
    public void addAnimal(@RequestBody Animal animal){
        animalRepository.save(animal);
    }
}
