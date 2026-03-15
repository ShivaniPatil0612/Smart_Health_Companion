package com.wellness.service;

import com.wellness.entity.NutritionData;
import com.wellness.entity.User;
import com.wellness.repository.NutritionDataRepository;
import com.wellness.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
public class NutritionService {

    @Autowired
    private NutritionDataRepository nutritionRepository;

    @Autowired
    private UserRepository userRepository;

    public NutritionData saveNutrition(NutritionData data, Long userId) {

        Optional<User> optionalUser = userRepository.findById(userId);

        if (optionalUser.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found");
        }

        data.setUser(optionalUser.get());
        return nutritionRepository.save(data);
    }

    // NEW METHOD (for admin + analytics)
    public List<NutritionData> getUserNutrition(Long userId) {
        return nutritionRepository.findByUserId(userId);
    }
    // In NutritionService
    public List<NutritionData> getAllNutrition() {
         return nutritionRepository.findAll();
        }

}