package com.upem.Aquarium.Controller;

import com.upem.Aquarium.Model.Animal;
import com.upem.Aquarium.Model.Specie;
import com.upem.Aquarium.Repository.SpecieRepository;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@RestController
public class SpecieController {

    private SpecieRepository specieRepository;

    public SpecieController(SpecieRepository specieRepository){
        this.specieRepository = specieRepository;
    }

    @GetMapping("/species")
    public Iterable<Specie> getSpecie() {
        return (Iterable<Specie>) specieRepository.findAll();    }

    @PostMapping("/specie")
    public void addSpecie(@RequestBody Specie specie){
        specieRepository.save(specie);
    }


    /*
    @GetMapping("/specie/{id}/animals")
    public Optional<Iterable<Animal>> getAnimals(long id){
        Optional<Specie> specie = specieRepository.findById(id);
        if(specie.isPresent()){
            return  Optional.of(specie.get().getAnimals());
        }
        return Optional.empty();
    }*/



}
