package com.Srishti.QuizApplication.service;


import com.Srishti.QuizApplication.dto.Userdto;
import com.Srishti.QuizApplication.entity.User;
import com.Srishti.QuizApplication.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private static final Logger log = LoggerFactory.getLogger(UserService.class);
    @Autowired
    UserRepository userRepository;
    User user = new User();

    public void createUser(Userdto userdto) {
        log.info("In service layer:{} is the created user", userdto.getEmail());
        user.setFirstName(userdto.getFirstName());
        user.setLastName(userdto.getLastName());
        user.setEmail(userdto.getEmail());
        user.setPassword(userdto.getPassword());
        user.setAge(userdto.getAge());
        user.setPhnum(userdto.getPhnum());
        user.setAddress(userdto.getAddress());
        user.setSkills(List.of(String.valueOf(userdto.getSkills())));
        user.setGender(userdto.getGender());
userRepository.save(user);
log.info("User saved:{}",user);
    }
}
