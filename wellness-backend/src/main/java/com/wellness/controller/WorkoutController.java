package com.wellness.controller;

import com.wellness.entity.Workout;
import com.wellness.service.WorkoutService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/workout")
@CrossOrigin(origins = "http://localhost:5173")
public class WorkoutController {

    @Autowired
    private WorkoutService workoutService;

    // ================= ADD WORKOUT =================
    @PostMapping("/add")
    public Workout addWorkout(
            @RequestParam Long userId,
            @RequestBody Workout workout) {

        return workoutService.addWorkout(userId, workout);
    }

    // ================= GET USER WORKOUTS =================
    @GetMapping("/user/{userId}")
    public List<Workout> getUserWorkouts(@PathVariable Long userId) {
        return workoutService.getWorkoutsByUser(userId);
    }

    // ================= ADMIN - GET ALL WORKOUTS =================
    @GetMapping("/all")
    public List<Workout> getAllWorkouts() {
        return workoutService.getAllWorkouts(); // you need to implement this in service
    }
}