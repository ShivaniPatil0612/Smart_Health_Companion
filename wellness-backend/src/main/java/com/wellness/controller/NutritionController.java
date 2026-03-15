package com.wellness.controller;

import com.wellness.entity.NutritionData;
import com.wellness.service.NutritionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/nutrition")
@CrossOrigin(origins = "http://localhost:5173")
public class NutritionController {

    @Autowired
    private NutritionService nutritionService;

    // SAVE nutrition
    @PostMapping("/{userId}")
    public NutritionData saveNutrition(
            @RequestBody NutritionData data,
            @PathVariable Long userId) {

        return nutritionService.saveNutrition(data, userId);
    }

    // GET nutrition by user (needed for admin + analytics)
    @GetMapping("/user/{userId}")
    public List<NutritionData> getUserNutrition(@PathVariable Long userId) {
        return nutritionService.getUserNutrition(userId);
    }

    // ================= ADMIN - GET ALL NUTRITION DATA =================
    @GetMapping("/all")
    public List<NutritionData> getAllNutrition() {
        return nutritionService.getAllNutrition(); // you need to implement this in service
    }
}