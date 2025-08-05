package com.Srishti.QuizApplication.controller;

import com.Srishti.QuizApplication.dto.UserDTO;
import com.Srishti.QuizApplication.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins="http://localhost:5173")
public class UserController {
    private static final Logger log = LoggerFactory.getLogger(UserController.class);
    @Autowired
    UserService userService;

    @GetMapping("/test")
    public ResponseEntity<String> apiTest() {
        return ResponseEntity.ok("Test in UserController success");
    }

    @PostMapping("/save")
    public ResponseEntity<String> createUser(@RequestBody UserDTO userdto) {
        log.info("data {}", userdto);
        userService.createUser(userdto);
        return ResponseEntity.ok("inserted");
    }
    @PostMapping("/userlogin")
    public ResponseEntity<String> loginUser(@RequestBody UserDTO userdto) {
        boolean isAuthenticated = userService.loginUser(userdto);
        if (isAuthenticated) {
            return ResponseEntity.ok("Matched");
        } else {
            return ResponseEntity.status(401).body("Not Matched");
        }
    }



}
