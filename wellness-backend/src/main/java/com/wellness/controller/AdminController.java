package com.wellness.controller;

import com.wellness.entity.*;
import com.wellness.service.AdminService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:5173")
public class AdminController {

    @Autowired
    private AdminService adminService;

    // ================= USERS =================

    @GetMapping("/users")
    public List<User> getAllUsers() {
        return adminService.getAllUsers();
    }

    @DeleteMapping("/users/{id}")
    public void deleteUser(@PathVariable Long id) {
        adminService.deleteUser(id);
    }

    // ================= BLOGS =================

    @GetMapping("/blogs")
    public List<Blog> getAllBlogs() {
        return adminService.getAllBlogs();
    }

    @DeleteMapping("/blogs/{id}")
    public void deleteBlog(@PathVariable Long id) {
        adminService.deleteBlog(id);
    }

    // ================= ARTICLES =================

    @GetMapping("/articles")
    public List<Article> getAllArticles() {
        return adminService.getAllArticles();
    }

    @DeleteMapping("/articles/{id}")
    public void deleteArticle(@PathVariable Long id) {
        adminService.deleteArticle(id);
    }

    // ================= BMI =================

    @GetMapping("/bmi")
    public List<BMIRecord> getAllBMI() {
        return adminService.getAllBMI();
    }

    @DeleteMapping("/bmi/{id}")
    public void deleteBMI(@PathVariable Long id) {
        adminService.deleteBMI(id);
    }

    // ================= WORKOUT =================

    @GetMapping("/workouts")
    public List<Workout> getAllWorkouts() {
        return adminService.getAllWorkouts();
    }

    @DeleteMapping("/workouts/{id}")
    public void deleteWorkout(@PathVariable Long id) {
        adminService.deleteWorkout(id);
    }

    // ================= NUTRITION =================

    @GetMapping("/nutrition")
    public List<NutritionData> getAllNutrition() {
        return adminService.getAllNutrition();
    }

    @DeleteMapping("/nutrition/{id}")
    public void deleteNutrition(@PathVariable Long id) {
        adminService.deleteNutrition(id);
    }

    // ================= MENTAL WELLNESS =================

    @GetMapping("/mental")
    public List<MentalWellness> getAllMental() {
        return adminService.getAllMental();
    }

    @DeleteMapping("/mental/{id}")
    public void deleteMental(@PathVariable Long id) {
        adminService.deleteMental(id);
    }

    // ================= PHYSICAL HEALTH =================

    @GetMapping("/physical")
    public List<PhysicalHealth> getAllPhysical() {
        return adminService.getAllPhysical();
    }

    @DeleteMapping("/physical/{id}")
    public void deletePhysical(@PathVariable Long id) {
        adminService.deletePhysical(id);
    }
}