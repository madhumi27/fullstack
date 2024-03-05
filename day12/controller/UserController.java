package com.zenyoga.madhumitha.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.zenyoga.madhumitha.model.User;
import com.zenyoga.madhumitha.service.UserService;

import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@Tag(name="User" ,description="User details")
@CrossOrigin("*")
public class UserController {

    @Autowired
    UserService userService;

    // @PostMapping("user/post")
    // public boolean addUser(@RequestBody User ue) {
    //     return userService.addUser(ue);
    // }

    @GetMapping("user/get")
    public List<User> getAllUser() {
        return userService.getUser();
    }

    @GetMapping("user/get/{id}")
    public Optional<User> getbyId(@PathVariable Long id) {
        return userService.getById(id);
    }

    @PutMapping("user/update/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User updatedUser) {
        Optional<User> existingUserOptional = userService.getById(id);

        if (existingUserOptional.isPresent()) {
            User existingUser = existingUserOptional.get();

            // Update the existing user with the new data
            existingUser.setName(updatedUser.getName()); // Assuming 'name' is a property of User, replace it with the actual properties you want to update
            existingUser.setEmail(updatedUser.getEmail());
            // Add more properties as needed

            // Save the updated user
            User updatedUserEntity = userService.saveUser(existingUser);

            return ResponseEntity.ok().body(updatedUserEntity);
        } else {
            // User not found with the given id
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("user/delete/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return ResponseEntity.noContent().build();
    }
}
