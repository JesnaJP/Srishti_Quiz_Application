package com.Srishti.QuizApplication.service;


import com.Srishti.QuizApplication.dto.ResultMarksDTO;
import com.Srishti.QuizApplication.entity.Answer;
import com.Srishti.QuizApplication.repository.AnswerRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class ResultService {
    private static final Logger log = LoggerFactory.getLogger(ResultService.class);

    @Autowired
    AnswerRepository answerRepository;

    public List<ResultMarksDTO> validateAnswers(List<ResultMarksDTO> submittedAnswersDTO) {
        List<Long> qIdsToFindTheAnswer = submittedAnswersDTO.stream().map(ResultMarksDTO::getQid).toList();
        List<Answer> correctAnswerList = answerRepository.findAllById(qIdsToFindTheAnswer);
        Map<Long,Answer> correctAnswerById = correctAnswerList.stream().collect(Collectors.toMap(Answer::getQid,Answer::getAnswer));
        submittedAnswersDTO.forEach(x->{
            Answer correctAnswer = correctAnswerById.get(x.getQid());
            x.setCorrectOption(correctAnswer.getCorrectoption());
            x.setExplanation(correctAnswer.getExplanation());
            x.setIsCorrectAnswer();
        });
        return submittedAnswersDTO;
    }
}
