package com.wellness.service;

import com.wellness.entity.User;
import com.wellness.entity.Workout;
import com.wellness.repository.UserRepository;
import com.wellness.repository.WorkoutRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WorkoutService {

    @Autowired
    private WorkoutRepository workoutRepository;

    @Autowired
    private UserRepository userRepository;

    // ================= ADD WORKOUT =================
    public Workout addWorkout(Long userId, Workout workout) {

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        workout.setUser(user);
        workout.setUserId(userId);

        return workoutRepository.save(workout);
    }

    // ================= USER WORKOUTS =================
    public List<Workout> getWorkoutsByUser(Long userId) {

        return workoutRepository.findByUserIdOrderByDateDesc(userId);
    }

    // ================= ADMIN ALL WORKOUTS =================
    public List<Workout> getAllWorkouts() {

        return workoutRepository.findAll();
    }

}