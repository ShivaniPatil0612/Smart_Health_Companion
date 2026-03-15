package com.wellness.service;

import com.wellness.entity.User;
import com.wellness.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    // ================= REGISTER =================
    public User registerUser(User user) {
        // Encode password
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    // ================= LOGIN =================
    public User loginUser(String email, String password) {
        Optional<User> optionalUser = userRepository.findByEmail(email);

        if (optionalUser.isEmpty()) {
            throw new RuntimeException("User not found");
        }

        User user = optionalUser.get();

        if (!passwordEncoder.matches(password, user.getPassword())) {
            throw new RuntimeException("Invalid password");
        }

        return user;
    }

    // ================= FIND BY EMAIL =================
    public User findByEmail(String email) {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }

    // ================= GET USER BY EMAIL =================
    public User getUserByEmail(String email) {
        return findByEmail(email);
    }

    // ================= UPDATE USER =================
    public User updateUser(String email, User updatedUser) {
        User existingUser = findByEmail(email);

        existingUser.setName(updatedUser.getName());
        existingUser.setEmail(updatedUser.getEmail());

        if (updatedUser.getPassword() != null && !updatedUser.getPassword().isEmpty()) {
            existingUser.setPassword(passwordEncoder.encode(updatedUser.getPassword()));
        }

        return userRepository.save(existingUser);
    }

    // ================= GET ALL USERS =================
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // ================= DELETE USER BY ID =================
    public void deleteUserById(Long id) {
        if (!userRepository.existsById(id)) {
            throw new RuntimeException("User with id " + id + " not found");
        }
        userRepository.deleteById(id);
    }

    // ================= GET USERS BY ROLE =================
    public List<User> getUsersByRole(String role) {
        return userRepository.findByRole(role);
    }

    // ================= OPTIONAL: GET USERS AS MAP =================
    // Useful if some other file needs a Map of users (email -> User)
    public Map<String, User> getUsersMap() {
        return userRepository.findAll()
                .stream()
                .collect(Collectors.toMap(User::getEmail, user -> user));
    }
}