package com.Srishti.edu.controller;


import com.Srishti.edu.dto.Userdto;
import com.Srishti.edu.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class UserController {
    private static final Logger log = LoggerFactory.getLogger(UserController.class);
    @Autowired
    UserService userService;

    @PostMapping("/save")
    public ResponseEntity<String> createUser(@RequestBody Userdto userdto) {
        log.info("data {}", userdto);
        userService.createUser(userdto);
        return ResponseEntity.ok("inserted");
    }


}
