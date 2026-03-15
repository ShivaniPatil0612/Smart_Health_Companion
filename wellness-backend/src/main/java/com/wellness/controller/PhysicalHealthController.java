package com.wellness.controller;

import com.wellness.entity.PhysicalHealth;
import com.wellness.service.PhysicalHealthService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/physical")
@CrossOrigin(origins = "http://localhost:3000")
public class PhysicalHealthController {

    @Autowired
    private PhysicalHealthService physicalService;

    @PostMapping("/save/{userId}")
    public PhysicalHealth saveData(
            @PathVariable Long userId,
            @RequestBody PhysicalHealth data
    ) {

        return physicalService.savePhysicalHealth(userId, data);
    }
}