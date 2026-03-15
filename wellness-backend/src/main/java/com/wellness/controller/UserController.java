package com.wellness.controller;

import com.wellness.entity.User;
import com.wellness.service.UserService;
import java.util.List;
import java.util.HashMap;
import java.util.Map; 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/{email}")
    public User getUser(@PathVariable String email) {
        return userService.getUserByEmail(email);
    }

    @PutMapping("/{email}")
    public User updateUser(@PathVariable String email,
                           @RequestBody User user) {
        return userService.updateUser(email, user);
    }
    // UserController.java
@GetMapping("/api/admin/users")
public List<User> getAllUsers() {
    return userService.getAllUsers(); // returns all users with role USER, TRAINER, ADMIN
}

@DeleteMapping("/api/admin/users/{id}")
public void deleteUser(@PathVariable Long id) {
    userService.deleteUserById(id);
}

@GetMapping("/api/admin/dashboard")
public Map<String, Integer> getDashboardCounts() {
    Map<String, Integer> counts = new HashMap<>();
    counts.put("totalUsers", userService.getUsersByRole("USER").size());
    counts.put("totalTrainers", userService.getUsersByRole("TRAINER").size());
    counts.put("totalAdmins", userService.getUsersByRole("ADMIN").size());
    return counts;
}
}
