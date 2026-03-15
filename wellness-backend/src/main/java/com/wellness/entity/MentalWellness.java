package com.wellness.entity;

import jakarta.persistence.*;
import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "mental_wellness")
public class MentalWellness {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String mood;
    private int stressLevel;
    private String notes;
    private LocalDate date;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    @JsonIgnoreProperties({
        "nutritionData",
        "workouts",
        "physicalHealthData",
        "mentalWellness",
        "bmiRecords"
    })
    private User user;

    public MentalWellness() {}

    public MentalWellness(String mood, int stressLevel, String notes, LocalDate date, User user) {
        this.mood = mood;
        this.stressLevel = stressLevel;
        this.notes = notes;
        this.date = date;
        this.user = user;
    }

    public Long getId() {
        return id;
    }

    public String getMood() {
        return mood;
    }

    public void setMood(String mood) {
        this.mood = mood;
    }

    public int getStressLevel() {
        return stressLevel;
    }

    public void setStressLevel(int stressLevel) {
        this.stressLevel = stressLevel;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}