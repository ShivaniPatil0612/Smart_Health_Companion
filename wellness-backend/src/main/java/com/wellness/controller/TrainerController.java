package com.wellness.controller;

import com.wellness.entity.User;
import com.wellness.repository.UserRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/trainer")
@CrossOrigin(origins = "http://localhost:5173")
public class TrainerController {

    private final UserRepository userRepository;

    // Constructor Injection
    public TrainerController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/dashboard")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
}