package com.wellness.repository;

import com.wellness.entity.OTP;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OTPRepository extends JpaRepository<OTP, Long> {
    OTP findTopByEmailOrderByIdDesc(String email);
}