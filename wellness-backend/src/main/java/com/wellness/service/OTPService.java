package com.wellness.service;

import com.wellness.entity.OTP;
import com.wellness.repository.OTPRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Random;

@Service
public class OTPService {

    @Autowired
    private OTPRepository otpRepository;

    private final int OTP_VALID_MINUTES = 10; // ✅ 10 minutes expiry

    public String generateOTP(String email) {
        String otp = String.valueOf(new Random().nextInt(900000) + 100000); // 6-digit OTP
        LocalDateTime expiry = LocalDateTime.now().plusMinutes(OTP_VALID_MINUTES);

        OTP otpEntity = new OTP(email, otp, expiry);
        otpRepository.save(otpEntity);
        return otp;
    }

    public boolean validateOTP(String email, String otp) {
        OTP latestOtp = otpRepository.findTopByEmailOrderByIdDesc(email);
        if (latestOtp == null) return false;

        boolean valid = latestOtp.getExpiryTime().isAfter(LocalDateTime.now()) &&
                        latestOtp.getCode().trim().equals(otp.trim());

        if (valid) otpRepository.delete(latestOtp); // single-use
        return valid;
    }
}