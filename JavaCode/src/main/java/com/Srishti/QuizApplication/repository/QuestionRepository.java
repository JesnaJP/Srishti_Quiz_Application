package com.Srishti.QuizApplication.repository;

import com.Srishti.QuizApplication.entity.Question;
import com.Srishti.QuizApplication.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface QuestionRepository extends JpaRepository<Question, Long> {
    @Query("SELECT q FROM Question q where q.technology =:technology")
    List<Question> findByTechnology(@Param("technology") String technology);

}
