package com.wellness.service;

import com.wellness.entity.BMIRecord;
import com.wellness.entity.User;
import com.wellness.repository.BMIRepository;
import com.wellness.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class BMIService {

    @Autowired
    private BMIRepository bmiRepository;

    @Autowired
    private UserRepository userRepository;

    // ADD BMI
    public BMIRecord addBMI(Long userId, double weight, double height) {

        double bmi = weight / ((height / 100) * (height / 100));

        String category;

        if (bmi < 18.5) category = "Underweight";
        else if (bmi < 25) category = "Normal";
        else if (bmi < 30) category = "Overweight";
        else category = "Obese";

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        BMIRecord record = new BMIRecord();
        record.setWeight(weight);
        record.setHeight(height);
        record.setBmi(bmi);
        record.setCategory(category);
        record.setCreatedAt(LocalDateTime.now());
        record.setUser(user);

        return bmiRepository.save(record);
    }

    // GET BMI BY USER
  // GET BMI BY USER
public List<BMIRecord> getUserBMI(Long userId) {
    return bmiRepository.findByUser_Id(userId);
}

    // ADMIN: GET ALL BMI
    public List<BMIRecord> getAllBMI() {
        return bmiRepository.findAll();
    }
}