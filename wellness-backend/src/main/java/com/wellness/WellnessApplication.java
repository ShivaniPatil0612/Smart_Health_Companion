package com.wellness;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class WellnessApplication {

    public static void main(String[] args) {
        SpringApplication.run(WellnessApplication.class, args);
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
