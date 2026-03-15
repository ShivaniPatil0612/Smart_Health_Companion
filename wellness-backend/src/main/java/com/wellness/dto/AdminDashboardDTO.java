package com.wellness.dto;

public class AdminDashboardDTO {

    private long totalUsers;
    private long totalTrainers;
    private long totalAdmins;
    private long totalBlogs;
    private long totalArticles;

    public AdminDashboardDTO(long totalUsers,
                             long totalTrainers,
                             long totalAdmins,
                             long totalBlogs,
                             long totalArticles) {

        this.totalUsers = totalUsers;
        this.totalTrainers = totalTrainers;
        this.totalAdmins = totalAdmins;
        this.totalBlogs = totalBlogs;
        this.totalArticles = totalArticles;
    }

    public long getTotalUsers() {
        return totalUsers;
    }

    public long getTotalTrainers() {
        return totalTrainers;
    }

    public long getTotalAdmins() {
        return totalAdmins;
    }

    public long getTotalBlogs() {
        return totalBlogs;
    }

    public long getTotalArticles() {
        return totalArticles;
    }
}