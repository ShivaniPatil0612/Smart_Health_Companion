// package com.wellness.config;

// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;
// import org.springframework.http.HttpMethod;
// import org.springframework.security.config.annotation.web.builders.HttpSecurity;
// import org.springframework.security.web.SecurityFilterChain;
// import org.springframework.security.crypto.password.PasswordEncoder;
// import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

// @Configuration
// public class SecurityConfig {

//     @Bean
//     public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

//         http
//             .csrf(csrf -> csrf.disable())
//             .cors(cors -> {})
//             .authorizeHttpRequests(auth -> auth

//                 // allow CORS preflight
//                 .requestMatchers(HttpMethod.OPTIONS, "/**").permitAll()

//                 // allow BMI POST
//                 .requestMatchers(HttpMethod.POST, "/api/bmi/**").permitAll()

//                 // allow auth
//                 .requestMatchers("/api/auth/**").permitAll()

//                 .anyRequest().authenticated()
//             );

//         return http.build();
//     }

//     @Bean
//     public PasswordEncoder passwordEncoder() {
//         return new BCryptPasswordEncoder();
//     }
// }

package com.wellness.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

        http
            .csrf(csrf -> csrf.disable())
            .authorizeHttpRequests(auth -> auth
                .anyRequest().permitAll()
            );

        return http.build();
    }
     // ✅ REQUIRED for UserService
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}