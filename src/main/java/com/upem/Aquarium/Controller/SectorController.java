package com.upem.Aquarium.Controller;

import com.upem.Aquarium.Model.Sector;
import com.upem.Aquarium.Repository.SectorRepository;
import org.springframework.web.bind.annotation.*;


@RestController
public class SectorController {

    private SectorRepository sectorRepository;

    public SectorController(SectorRepository sectorRepository){
        this.sectorRepository = sectorRepository;
    }

    @GetMapping("/sectors")
    public Iterable<Sector> getSector() {
        return (Iterable<Sector>) sectorRepository.findAll();    }

    @PostMapping("/sector")
    public void addSector(@RequestBody Sector sector){
        sectorRepository.save(sector);
    }

    @DeleteMapping("/sector/{id}")
    public void delete(@PathVariable Long id) { sectorRepository.deleteById(id);  }

}
