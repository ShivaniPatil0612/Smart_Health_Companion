package com.wellness.service;

import com.wellness.entity.PhysicalHealth;
import com.wellness.entity.User;
import com.wellness.repository.PhysicalHealthRepository;
import com.wellness.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class PhysicalHealthService {

    @Autowired
    private PhysicalHealthRepository physicalRepo;

    @Autowired
    private UserRepository userRepo;

    public PhysicalHealth savePhysicalHealth(Long userId, PhysicalHealth data) {

        User user = userRepo.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        data.setUser(user);
        data.setDate(LocalDateTime.now());

        return physicalRepo.save(data);
    }
}