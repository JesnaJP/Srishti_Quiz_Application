package com.srishti.edu.controller;


import com.srishti.edu.dto.Userdto;
import com.srishti.edu.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {
    private static final Logger log = LoggerFactory.getLogger(UserController.class);

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/save")
    public ResponseEntity<String> createUser(@RequestBody Userdto userdto) {
        log.info("data {}", userdto);
        userService.createUser(userdto);
        return ResponseEntity.ok("inserted");
    }


}
