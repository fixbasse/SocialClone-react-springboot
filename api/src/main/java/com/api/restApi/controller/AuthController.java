//package com.api.restApi.controller;
//
//import ch.qos.logback.core.model.Model;
//import com.api.restApi.dto.SignUpDto;
//import com.api.restApi.model.User;
//import com.api.restApi.repository.AuthRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RestController;
//import org.springframework.web.context.request.WebRequest;
//
//@RestController
//public class AuthController {
//
//    @Autowired
//    private AuthRepository authRepository;
//
//
//    @PostMapping("/register")
//    public ResponseEntity<?> registerUser(@RequestBody SignUpDto signUpDto) {
//        if (authRepository.existsByEmail(signUpDto.getEmail())) {
//            return new ResponseEntity<>("The email is already exist!", HttpStatus.BAD_REQUEST);
//        }
//
//        User user = new User();
//        user.setEmail(signUpDto.getEmail());
//
//        user.setPassword();
//    }
//
//
//}
