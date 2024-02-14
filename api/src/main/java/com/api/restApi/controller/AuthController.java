package com.api.restApi.controller;

import com.api.restApi.model.User;
import com.api.restApi.repository.AuthRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {

    @Autowired
    private AuthRepository authRepository;

    // @PostMapping("/register")
    // User newUser(@RequestBody User newUser)
}
