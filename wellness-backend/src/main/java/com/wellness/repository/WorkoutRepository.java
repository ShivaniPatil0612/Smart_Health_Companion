package com.wellness.repository;

import com.wellness.entity.Workout;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface WorkoutRepository extends JpaRepository<Workout, Long> {

    // USER WORKOUTS
    List<Workout> findByUserIdOrderByDateDesc(Long userId);

    // WEEKLY CALORIES
    @Query(value =
            "SELECT COALESCE(SUM(calories_burned),0) FROM workouts " +
            "WHERE user_id = ?1 " +
            "GROUP BY DATE(date) " +
            "ORDER BY DATE(date) DESC LIMIT 7",
            nativeQuery = true)
    List<Integer> getWeeklyWorkoutCalories(Long userId);
}