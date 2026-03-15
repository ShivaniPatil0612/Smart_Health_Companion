package com.wellness.entity;

import jakarta.persistence.*;
import java.util.List;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "users")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Column(unique = true)
    private String email;

    private String password;

    private String role; // USER or ADMIN


    // ================= RELATIONSHIPS =================

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonIgnoreProperties("user")
    private List<PhysicalHealth> physicalHealthData;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonIgnoreProperties("user")
    private List<NutritionData> nutritionData;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonIgnoreProperties("user")
    private List<Workout> workouts;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonIgnoreProperties("user")
    private List<MentalWellness> mentalWellness;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonIgnoreProperties("user")
    private List<BMIRecord> bmiRecords;


    // ================= CONSTRUCTORS =================

    public User() {}

    public User(String name, String email, String password, String role) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
    }


    // ================= GETTERS =================

    public Long getId() { return id; }

    public String getName() { return name; }

    public String getEmail() { return email; }

    public String getPassword() { return password; }

    public String getRole() { return role; }

    public List<PhysicalHealth> getPhysicalHealthData() {
        return physicalHealthData;
    }

    public List<NutritionData> getNutritionData() {
        return nutritionData;
    }

    public List<Workout> getWorkouts() {
        return workouts;
    }

    public List<MentalWellness> getMentalWellness() {
        return mentalWellness;
    }

    public List<BMIRecord> getBmiRecords() {
        return bmiRecords;
    }


    // ================= SETTERS =================

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public void setPhysicalHealthData(List<PhysicalHealth> physicalHealthData) {
        this.physicalHealthData = physicalHealthData;
    }

    public void setNutritionData(List<NutritionData> nutritionData) {
        this.nutritionData = nutritionData;
    }

    public void setWorkouts(List<Workout> workouts) {
        this.workouts = workouts;
    }

    public void setMentalWellness(List<MentalWellness> mentalWellness) {
        this.mentalWellness = mentalWellness;
    }

    public void setBmiRecords(List<BMIRecord> bmiRecords) {
        this.bmiRecords = bmiRecords;
    }


    // ================= HELPER METHOD =================

    public boolean isAdmin() {
        return this.role != null && this.role.equalsIgnoreCase("ADMIN");
    }
}