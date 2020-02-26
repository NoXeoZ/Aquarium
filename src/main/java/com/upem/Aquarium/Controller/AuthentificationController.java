package com.upem.Aquarium.Controller;

import com.upem.Aquarium.Bean.AuthentificationBean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//@CrossOrigin(origins = "http://localhost:8080")
@RestController
//@RequestMapping("/api/v1")
public class AuthentificationController {

    @GetMapping(path = "/authentification")
    public AuthentificationBean authentification(){
        return new AuthentificationBean("You are connected");
    }
}
