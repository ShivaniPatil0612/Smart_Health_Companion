package com.wellness.repository;

import com.wellness.entity.MentalWellness;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MentalWellnessRepository extends JpaRepository<MentalWellness, Long> {

    // Existing method
    List<MentalWellness> findByUserId(Long userId);

    // Weekly stress average
    @Query(value =
            "SELECT COALESCE(AVG(stress_level),0) FROM mental_wellness " +
            "WHERE user_id = ?1 " +
            "GROUP BY DATE(date) " +
            "ORDER BY DATE(date) DESC LIMIT 7",
            nativeQuery = true)
    List<Integer> getWeeklyStress(Long userId);
}