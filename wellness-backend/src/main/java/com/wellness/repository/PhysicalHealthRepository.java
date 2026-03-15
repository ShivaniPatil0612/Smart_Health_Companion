package com.wellness.repository;

import com.wellness.entity.PhysicalHealth;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PhysicalHealthRepository extends JpaRepository<PhysicalHealth, Long> {

    // Get all physical health data of a user
    List<PhysicalHealth> findByUserId(Long userId);

    // Weekly steps analytics (last 7 days)
    @Query(value =
            "SELECT COALESCE(SUM(steps),0) FROM physical_health " +
            "WHERE user_id = ?1 " +
            "GROUP BY DATE(date) " +
            "ORDER BY DATE(date) DESC LIMIT 7",
            nativeQuery = true)
    List<Integer> getWeeklySteps(Long userId);
}