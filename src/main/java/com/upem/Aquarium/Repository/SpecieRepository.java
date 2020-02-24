package com.upem.Aquarium.Repository;

import com.upem.Aquarium.Model.Specie;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SpeciesRepository extends CrudRepository<Specie,Long> {
}
