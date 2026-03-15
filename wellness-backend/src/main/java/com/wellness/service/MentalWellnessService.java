package com.wellness.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wellness.entity.MentalWellness;
import com.wellness.entity.User;
import com.wellness.repository.MentalWellnessRepository;
import com.wellness.repository.UserRepository;

@Service
public class MentalWellnessService {

    @Autowired
    private MentalWellnessRepository mentalRepo;

    @Autowired
    private UserRepository userRepo;

    // ================= ADD ENTRY =================
    public MentalWellness addEntry(Long userId, MentalWellness entry) {

        User user = userRepo.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        entry.setUser(user);
        entry.setDate(LocalDate.now());

        return mentalRepo.save(entry);
    }

    // ================= USER ENTRIES =================
    public List<MentalWellness> getUserEntries(Long userId) {
        return mentalRepo.findByUserId(userId);
    }

    // ================= ADMIN - ALL ENTRIES =================
    public List<MentalWellness> getAllEntries() {
        return mentalRepo.findAll();
    }
}