package com.wellness.service;

import com.wellness.dto.TrainerUserDataDTO;
import com.wellness.entity.User;
import com.wellness.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TrainerService {

    private final UserRepository userRepository;

    public TrainerService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // Return all trainers in DTO format for dashboard
    public List<TrainerUserDataDTO> getAllUsersData() {
        List<User> trainers = userRepository.findByRole("ROLE_TRAINER");

        return trainers.stream()
                .map(user -> new TrainerUserDataDTO(
                        user.getName(),
                        user.getEmail(),
                        user.getRole(),
                        null // keep nutritionTrackers null for now, logic can be added later
                ))
                .collect(Collectors.toList());
    }
}