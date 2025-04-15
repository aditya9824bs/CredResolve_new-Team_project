package com.credResolve.CredEasy.service;

import java.util.List;
import java.util.Optional;

import com.credResolve.CredEasy.models.User;

public interface  UserService {
    User saveUser(User user);

    Optional<User> getUserById(String id);
    Optional<User> updateUser(User user);
    void deleteUser(String id);
    boolean isUserExist(String userId);
    boolean isUserExistByEmail(String userId);
    List<User> getAllUsers();
    User getUserByEmail(String email);
    
}
