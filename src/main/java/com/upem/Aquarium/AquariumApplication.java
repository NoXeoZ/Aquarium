package com.upem.Aquarium;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.upem.Aquarium.Controller.SpecieController;
import com.upem.Aquarium.Model.Animal;
import com.upem.Aquarium.Model.Specie;
import com.upem.Aquarium.Repository.AnimalRepository;
import com.upem.Aquarium.Repository.SpecieRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.text.DateFormat;
import java.text.SimpleDateFormat;

@SpringBootApplication(scanBasePackages = "com.upem.Aquarium")
public class AquariumApplication {

	public static void main(String[] args) {
		SpringApplication.run(AquariumApplication.class, args);
	}

	@Bean
	CommandLineRunner init(SpecieRepository specieRepository, AnimalRepository animalRepository) {
		return args -> {
			/*
			Stream.of("Fish", "Cat", "Crocodile", "Girafe").forEach(name -> {
				Specie specie = new Specie(10,name);
				specieRepository.save(specie);
			});*/
			final DateFormat df = new SimpleDateFormat("HH:mm dd-MM-yyyy");

			Specie[] species = {
					new Specie(70,"Crocodile"),
					new Specie(20,"Shark"),
					new Specie(10,"Frog"),
					new Specie(100,"Turtle"),
					new Specie(90,"Whale"),
			};

			for(Specie s : species) {
				specieRepository.save(s);
			}

			Animal[] animals = {
					new Animal(species[0],"Octave","male",df.parse("12:08 02-11-2002"),null,null)
			};
			animalRepository.save(animals[0]);





			//SpeciesController sc = new SpeciesController(specieRepository);
			//sc.getSpecies().forEach(System.out::println);
			//specieRepository.findAll().forEach(System.out::println);
		};
	}

}
