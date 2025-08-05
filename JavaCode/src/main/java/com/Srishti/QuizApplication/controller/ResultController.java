package com.Srishti.QuizApplication.controller;

import com.Srishti.QuizApplication.dto.ResultMarksDTO;
import com.Srishti.QuizApplication.service.ResultService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/result")
@CrossOrigin(origins = "http://localhost:5173")
public class ResultController {
    private static final Logger log = LoggerFactory.getLogger(ResultController.class);
    @Autowired
    ResultService resultService;

    @GetMapping("/test")
    public ResponseEntity<String> apiTest() {
        return ResponseEntity.ok("Test in ResultController success");
    }

    @PostMapping("/show")
    public ResponseEntity<List<ResultMarksDTO>> showResults(@RequestBody List<ResultMarksDTO> submittedAnswersDTO) {
        return ResponseEntity.ok(resultService.validateAnswers(submittedAnswersDTO));
    }

}
