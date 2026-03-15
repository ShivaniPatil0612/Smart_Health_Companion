package com.wellness.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    public void sendOTPEmail(String toEmail, String otp) {

        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("yourgmail@gmail.com");  // same as username
        message.setTo(toEmail);
        message.setSubject("Your WellNest OTP");
        message.setText("Your OTP is: " + otp);

        mailSender.send(message);
    }
}