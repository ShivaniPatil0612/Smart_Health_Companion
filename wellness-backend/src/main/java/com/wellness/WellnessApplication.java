package com.wellness;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.wellness.entity.User;
import com.wellness.repository.UserRepository;

@SpringBootApplication
public class WellnessApplication {

    public static void main(String[] args) {
        SpringApplication.run(WellnessApplication.class, args);
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    CommandLineRunner createAdmin(UserRepository userRepo, PasswordEncoder encoder) {
        return args -> {
            if (!userRepo.existsByEmail("shivanikpatil126@gmail.com")) {
                userRepo.save(new User(
                    "shivanikpatil126@gmail.com",
                    encoder.encode("admin123"),
                    "ADMIN"
                ));
            }
        };
    }
}
