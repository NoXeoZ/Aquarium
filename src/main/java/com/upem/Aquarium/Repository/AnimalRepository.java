package com.upem.Aquarium.Repository;

import com.upem.Aquarium.Model.Animal;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AnimalRepository extends CrudRepository<Animal,Long> {
}
