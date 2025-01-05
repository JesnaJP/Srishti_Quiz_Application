package com.srishti.edu.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Userdto {
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private int age;
    private long phnum;
    private String address;
    private List<String> skills;
    private String gender;

}
