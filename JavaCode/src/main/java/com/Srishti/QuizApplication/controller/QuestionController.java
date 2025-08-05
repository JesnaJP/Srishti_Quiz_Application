package com.Srishti.QuizApplication.controller;

import com.Srishti.QuizApplication.dto.QuestionAnswerDTO;
import com.Srishti.QuizApplication.entity.Question;
import com.Srishti.QuizApplication.service.QuestionService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/question")
@CrossOrigin(origins = "http://localhost:5173")
public class QuestionController {
    private static final Logger log = LoggerFactory.getLogger(QuestionController.class);
    @Autowired
    QuestionService questionService;

    @GetMapping("/test")
    public ResponseEntity<String> apiTest() {
        return ResponseEntity.ok("Test in QuestionController success");
    }

    @PostMapping("/create")
    public ResponseEntity<String> createQuestion(@RequestBody QuestionAnswerDTO questiondto) {
        log.info("create data {}", questiondto.getQuestion());
        String response = questionService.createQuestion(questiondto);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/questionbyid/{qid}")
    public ResponseEntity<QuestionAnswerDTO> showQuestionById(@PathVariable long qid) {
        return ResponseEntity.ok(questionService.editQuestionById(qid));
    }

    @PutMapping("/edit/{qid}")
    public ResponseEntity<String> editQuestion(@PathVariable long qid, @RequestBody QuestionAnswerDTO questiondto) {
        log.info("edit data {}", qid);
        String response = questionService.editQuestion(qid, questiondto);
        return ResponseEntity.ok(response);
    }


    @GetMapping("/show/all")
    public ResponseEntity<List<Question>> showQuestion() {
        return ResponseEntity.ok(questionService.showQuestion());
    }

    @GetMapping("/show/{questionCount}")
    public ResponseEntity<List<Question>> showQuestion(@PathVariable Integer questionCount) {
        return ResponseEntity.ok(questionService.showQuestion(questionCount));
    }

    @GetMapping("/show/{technology}/all")
    public ResponseEntity<List<Question>> showQuestion(@PathVariable String technology) {
        return ResponseEntity.ok(questionService.showQuestion(technology));
    }

    @GetMapping("/show/{technology}/{questionCount}")
    public ResponseEntity<List<Question>> showQuestion(@PathVariable String technology, @PathVariable Integer questionCount) {
        return ResponseEntity.ok(questionService.showQuestion(technology, questionCount));
    }


}
