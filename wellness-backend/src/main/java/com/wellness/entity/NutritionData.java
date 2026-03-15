package com.wellness.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "nutrition_data")
public class NutritionData {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String mealType;
    private String foodItem;
    private Integer quantity;
    private Integer calories;
    private LocalDate date;

   @ManyToOne
@JoinColumn(name = "user_id", nullable = false)
@JsonIgnoreProperties({
    "physicalHealthData",
    "nutritionData",
    "workouts",
    "mentalWellness",
    "bmiRecords"
})
private User user;
    public NutritionData() {}

    public Long getId() { return id; }

    public String getMealType() { return mealType; }
    public void setMealType(String mealType) { this.mealType = mealType; }

    public String getFoodItem() { return foodItem; }
    public void setFoodItem(String foodItem) { this.foodItem = foodItem; }

    public Integer getQuantity() { return quantity; }
    public void setQuantity(Integer quantity) { this.quantity = quantity; }

    public Integer getCalories() { return calories; }
    public void setCalories(Integer calories) { this.calories = calories; }

    public LocalDate getDate() { return date; }
    public void setDate(LocalDate date) { this.date = date; }

    public User getUser() { return user; }
    public void setUser(User user) { this.user = user; }
}