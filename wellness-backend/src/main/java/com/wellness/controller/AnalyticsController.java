package com.wellness.controller;

import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/analytics")
@CrossOrigin(origins = "http://localhost:5173")
public class AnalyticsController {

@GetMapping("/weekly")
public Map<String, Object> getWeeklyAnalytics() {

    Map<String, Object> data = new HashMap<>();

    data.put("workoutCalories", Arrays.asList(250,200,0,300,180,260,210));
    data.put("stressLevels", Arrays.asList(4,5,3,6,2,3,4));
    data.put("nutritionCalories", Arrays.asList(1800,2000,1900,2100,1700,2000,1950));
    data.put("steps", Arrays.asList(6000,7000,6500,8000,5000,7200,6800));

    // Mood tracking
    data.put("moods", Arrays.asList(3,4,2,5,3,4,4));

    return data;
}
}