package com.wellness.dto;

import java.util.List;

public class WeeklyAnalyticsDTO {

    private List<Integer> steps;
    private List<Integer> nutritionCalories;
    private List<Integer> workoutCalories;
    private List<Integer> stressLevels;

    public WeeklyAnalyticsDTO(List<Integer> steps,
                              List<Integer> nutritionCalories,
                              List<Integer> workoutCalories,
                              List<Integer> stressLevels) {
        this.steps = steps;
        this.nutritionCalories = nutritionCalories;
        this.workoutCalories = workoutCalories;
        this.stressLevels = stressLevels;
    }

    public List<Integer> getSteps() {
        return steps;
    }

    public List<Integer> getNutritionCalories() {
        return nutritionCalories;
    }

    public List<Integer> getWorkoutCalories() {
        return workoutCalories;
    }

    public List<Integer> getStressLevels() {
        return stressLevels;
    }
}