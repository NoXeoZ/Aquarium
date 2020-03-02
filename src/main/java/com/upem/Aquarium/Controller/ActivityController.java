package com.upem.Aquarium.Controller;

import com.upem.Aquarium.Model.Activity;
import com.upem.Aquarium.Model.Specie;
import com.upem.Aquarium.Repository.ActivityRepository;
import org.springframework.web.bind.annotation.*;

@RestController
public class ActivityController {
    private ActivityRepository activityRepository;

    public ActivityController(ActivityRepository activityRepository){
        this.activityRepository = activityRepository;
    }

    @GetMapping("/activities")
    public Iterable<Activity> getActivities() {
        return (Iterable<Activity>) activityRepository.findAll();    }

    @PostMapping("/activity")
    public void addActivity(@RequestBody Activity activity){
        activityRepository.save(activity);
    }

    @DeleteMapping("/activity/{id}")
    public void delete(@PathVariable Long id) { activityRepository.deleteById(id);  }
}
