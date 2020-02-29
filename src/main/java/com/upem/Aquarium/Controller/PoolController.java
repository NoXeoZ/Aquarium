package com.upem.Aquarium.Controller;

import com.upem.Aquarium.Model.Pool;
import com.upem.Aquarium.Model.Specie;
import com.upem.Aquarium.Repository.PoolRepository;
import org.springframework.web.bind.annotation.*;

@RestController
public class PoolController {
    private PoolRepository poolRepository;

    public PoolController(PoolRepository poolRepository){
        this.poolRepository = poolRepository;
    }

    @GetMapping("/pools")
    public Iterable<Pool> getPools() {
        return (Iterable<Pool>) poolRepository.findAll();    }

    @PostMapping("/pool")
    public void addPool(@RequestBody Pool pool){
        poolRepository.save(pool);
    }

    @DeleteMapping("/pool/{id}")
    public void delete(@PathVariable Long id) { poolRepository.deleteById(id);  }
}
