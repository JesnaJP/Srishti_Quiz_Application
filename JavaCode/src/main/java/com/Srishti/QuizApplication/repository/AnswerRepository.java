package com.Srishti.QuizApplication.repository;

import com.Srishti.QuizApplication.entity.Answer;
import com.Srishti.QuizApplication.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface AnswerRepository extends JpaRepository<Answer, Long> {

}

