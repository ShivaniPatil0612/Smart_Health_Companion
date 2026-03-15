package com.wellness.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.wellness.entity.BMIRecord;
import com.wellness.service.BMIService;

import java.util.List;

@RestController
@RequestMapping("/api/bmi")
@CrossOrigin(origins = "http://localhost:5173")
public class BMIController {

    @Autowired
    private BMIService bmiService;

    // ================= ADD BMI =================
    @PostMapping("/add")
    public BMIRecord addBMI(
            @RequestParam Long userId,
            @RequestParam double weight,
            @RequestParam double height) {

        return bmiService.addBMI(userId, weight, height);
    }

    // ================= USER BMI HISTORY =================
    @GetMapping("/user/{userId}")
    public List<BMIRecord> getUserBMI(@PathVariable Long userId) {

        return bmiService.getUserBMI(userId);
    }

    // ================= ADMIN VIEW ALL BMI =================
    @GetMapping("/all")
    public List<BMIRecord> getAllBMI() {

        return bmiService.getAllBMI();
    }
}