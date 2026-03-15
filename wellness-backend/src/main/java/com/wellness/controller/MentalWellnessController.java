package com.wellness.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.wellness.entity.MentalWellness;
import com.wellness.service.MentalWellnessService;

@RestController
@RequestMapping("/mental")
@CrossOrigin(origins = "http://localhost:5173")
public class MentalWellnessController {

    @Autowired
    private MentalWellnessService service;

    // ================= ADD ENTRY =================
    @PostMapping("/add/{userId}")
    public MentalWellness addEntry(
            @PathVariable Long userId,
            @RequestBody MentalWellness entry
    ) {
        return service.addEntry(userId, entry);
    }

    // ================= USER DATA =================
    @GetMapping("/{userId}")
    public List<MentalWellness> getEntries(@PathVariable Long userId) {
        return service.getUserEntries(userId);
    }

    // ================= ADMIN - GET ALL DATA =================
    @GetMapping("/all")
    public List<MentalWellness> getAllEntries() {
        return service.getAllEntries();
    }
}