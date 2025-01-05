package com.Srishti.edu.repository;

import com.Srishti.edu.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {

}
