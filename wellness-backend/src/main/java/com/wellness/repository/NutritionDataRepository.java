package com.wellness.repository;

import com.wellness.entity.NutritionData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface NutritionDataRepository extends JpaRepository<NutritionData, Long> {

    // Existing method
    List<NutritionData> findByUserId(Long userId);
    

    // Weekly calories
    @Query(value =
            "SELECT COALESCE(SUM(calories),0) FROM nutrition_data " +
            "WHERE user_id = ?1 " +
            "GROUP BY DATE(date) " +
            "ORDER BY DATE(date) DESC LIMIT 7",
            nativeQuery = true)
    List<Integer> getWeeklyCalories(Long userId);
}