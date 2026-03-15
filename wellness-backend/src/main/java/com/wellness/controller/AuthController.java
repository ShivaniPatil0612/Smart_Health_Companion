package com.wellness.controller;

import com.wellness.dto.LoginResponse;
import com.wellness.entity.User;
import com.wellness.service.UserService;
import com.wellness.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtil jwtUtil;

    // ✅ REGISTER API
    @PostMapping("/register")
    public User register(@RequestBody User user) {
        return userService.registerUser(user);
    }

    // ✅ LOGIN API
    @PostMapping("/login")
    public LoginResponse login(@RequestBody User user) {

        User loggedInUser = userService.loginUser(
                user.getEmail(),
                user.getPassword()
        );

        String token = jwtUtil.generateToken(loggedInUser.getEmail());

        return new LoginResponse(
                loggedInUser.getId(),
                loggedInUser.getEmail(),
                loggedInUser.getRole(),
                token
        );
    }
}