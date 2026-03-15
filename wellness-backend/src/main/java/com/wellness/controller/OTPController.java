package com.wellness.controller;

import com.wellness.entity.User;
import com.wellness.service.EmailService;
import com.wellness.service.OTPService;
import com.wellness.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/otp")
@CrossOrigin(origins = "http://localhost:3000")
public class OTPController {

    @Autowired
    private UserService userService;

    @Autowired
    private OTPService otpService;

    @Autowired
    private EmailService emailService;

    // =========================
    // STEP 1: SEND OTP
    // =========================
    @PostMapping("/forgot-password")
    public ResponseEntity<?> forgotPassword(@RequestBody Map<String, String> request) {
        try {
            String email = request.get("email");
            if (email == null || email.isEmpty()) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                        .body(Map.of("error", "Email is required"));
            }

            User user = userService.findByEmail(email);
            if (user == null) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                        .body(Map.of("error", "Email not registered"));
            }

            String otp = otpService.generateOTP(email);
            emailService.sendOTPEmail(email, otp);

            return ResponseEntity.ok(Map.of("message", "OTP sent successfully to your email"));
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("error", "Failed to send OTP"));
        }
    }

    // =========================
    // STEP 2: RESET PASSWORD
    // =========================
    @PostMapping("/reset-password")
    public ResponseEntity<?> resetPassword(@RequestBody Map<String, String> request) {
        try {
            String email = request.get("email");
            String otp = request.get("otp");
            String newPassword = request.get("newPassword");

            if (email == null || otp == null || newPassword == null) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                        .body(Map.of("error", "All fields are required"));
            }

            boolean isValid = otpService.validateOTP(email, otp);
            if (!isValid) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                        .body(Map.of("error", "Invalid or expired OTP"));
            }

            User user = userService.findByEmail(email);
            if (user == null) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                        .body(Map.of("error", "User not found"));
            }

            user.setPassword(newPassword);
            userService.registerUser(user);

            return ResponseEntity.ok(Map.of("message", "Password reset successful"));
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("error", "Password reset failed"));
        }
    }
}