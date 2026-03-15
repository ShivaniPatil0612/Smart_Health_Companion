package com.wellness.dto;

import com.wellness.entity.NutritionData;
import java.util.List;

public class TrainerUserDataDTO {

    private String name;
    private String email;
    private String role;
    private List<NutritionData> nutritionTrackers;

    public TrainerUserDataDTO(String name, String email, String role,
                              List<NutritionData> nutritionTrackers) {
        this.name = name;
        this.email = email;
        this.role = role;
        this.nutritionTrackers = nutritionTrackers;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public String getRole() {
        return role;
    }

    public List<NutritionData> getNutritionTrackers() {
        return nutritionTrackers;
    }
}