package com.wellness.service;

import com.wellness.entity.*;
import com.wellness.repository.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BlogRepository blogRepository;

    @Autowired
    private ArticleRepository articleRepository;

    @Autowired
    private BMIRepository bmiRepository;

    @Autowired
    private WorkoutRepository workoutRepository;

    @Autowired
    private NutritionDataRepository nutritionRepository;

    @Autowired
    private MentalWellnessRepository mentalRepository;

    @Autowired
    private PhysicalHealthRepository physicalRepository;

    // USERS
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    // BLOGS
    public List<Blog> getAllBlogs() {
        return blogRepository.findAll();
    }

    public void deleteBlog(Long id) {
        blogRepository.deleteById(id);
    }

    // ARTICLES
    public List<Article> getAllArticles() {
        return articleRepository.findAll();
    }

    public void deleteArticle(Long id) {
        articleRepository.deleteById(id);
    }

    // BMI
    public List<BMIRecord> getAllBMI() {
        return bmiRepository.findAll();
    }

    public void deleteBMI(Long id) {
        bmiRepository.deleteById(id);
    }

    // WORKOUT
    public List<Workout> getAllWorkouts() {
        return workoutRepository.findAll();
    }

    public void deleteWorkout(Long id) {
        workoutRepository.deleteById(id);
    }

    // NUTRITION
    public List<NutritionData> getAllNutrition() {
        return nutritionRepository.findAll();
    }

    public void deleteNutrition(Long id) {
        nutritionRepository.deleteById(id);
    }

    // MENTAL WELLNESS
    public List<MentalWellness> getAllMental() {
        return mentalRepository.findAll();
    }

    public void deleteMental(Long id) {
        mentalRepository.deleteById(id);
    }

    // PHYSICAL HEALTH
    public List<PhysicalHealth> getAllPhysical() {
        return physicalRepository.findAll();
    }

    public void deletePhysical(Long id) {
        physicalRepository.deleteById(id);
    }
}