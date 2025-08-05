package com.Srishti.QuizApplication.service;

import com.Srishti.QuizApplication.dto.QuestionAnswerDTO;
import com.Srishti.QuizApplication.entity.Answer;
import com.Srishti.QuizApplication.entity.Question;
import com.Srishti.QuizApplication.repository.AnswerRepository;
import com.Srishti.QuizApplication.repository.QuestionRepository;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.TypedQuery;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class QuestionService {
    private static final Logger log = LoggerFactory.getLogger(QuestionService.class);

    @PersistenceContext
    private EntityManager entityManager;

    @Autowired
    QuestionRepository questionRepository;

    @Autowired
    AnswerRepository answerRepository;

    public String createQuestion(QuestionAnswerDTO questionAnswerDTO) {
        log.info("In service layer: {}? is the question to be created", questionAnswerDTO.getQuestion());
        Question question = new Question();
        question.setTechnology(questionAnswerDTO.getTechnology());
        question.setQuestion(questionAnswerDTO.getQuestion());
        question.setOption1(questionAnswerDTO.getOption1());
        question.setOption2(questionAnswerDTO.getOption2());
        question.setOption3(questionAnswerDTO.getOption3());
        question.setOption4(questionAnswerDTO.getOption4());
        long qId = questionRepository.save(question).getQid();
        log.info("Question saved:{}", question.getQid());
        Answer answer = new Answer(qId, questionAnswerDTO.getCorrectOption(), questionAnswerDTO.getExplanation());
        answerRepository.save(answer);
        log.info("Answer saved:{}", answer.getQid());
        return "Inserted question and answer";
    }

    public String editQuestion(long qid, QuestionAnswerDTO questionAnswerDTO) {
        log.info("In service layer: {}? is the question to be edited", questionAnswerDTO.getQuestion());
        Optional<Question> question = questionRepository.findById(qid);
        Optional<Answer> answer = answerRepository.findById(qid);
        if (question.isPresent() && answer.isPresent()) {
            question.get().setTechnology(questionAnswerDTO.getTechnology());
            question.get().setQuestion(questionAnswerDTO.getQuestion());
            question.get().setOption1(questionAnswerDTO.getOption1());
            question.get().setOption2(questionAnswerDTO.getOption2());
            question.get().setOption3(questionAnswerDTO.getOption3());
            question.get().setOption4(questionAnswerDTO.getOption4());
            questionRepository.save(question.get());
            log.info("Question edited:{}", question.get().getQid());
            answer.get().setCorrectoption(questionAnswerDTO.getCorrectOption());
            answer.get().setExplanation(questionAnswerDTO.getExplanation());
            answerRepository.save(answer.get());
            return "Edited the question/answer";
        } else {
            return "Question Id not found";
        }
    }

    public QuestionAnswerDTO editQuestionById(long qid) {
        Question qust = questionRepository.findById(qid).get();
        Answer ans = answerRepository.findById(qid).get();
        QuestionAnswerDTO qustAns =new QuestionAnswerDTO();
        qustAns.setQid(qust.getQid());
        qustAns.setTechnology(qust.getTechnology());
        qustAns.setQuestion(qust.getQuestion());
        qustAns.setOption1(qust.getOption1());
        qustAns.setOption2(qust.getOption2());
        qustAns.setOption3(qust.getOption3());
        qustAns.setOption4(qust.getOption4());
        qustAns.setCorrectOption(ans.getCorrectoption());
        qustAns.setExplanation(ans.getExplanation());
        return qustAns;

    }

    public List<Question> showQuestion() {
        return questionRepository.findAll();
    }

    public List<Question> showQuestion(Integer questionCount) {
        String jpql = "SELECT q FROM Question q";
        TypedQuery<Question> query = entityManager.createQuery(jpql, Question.class);
        query.setMaxResults(questionCount);
        return query.getResultList();
    }

    public List<Question> showQuestion(String technology) {
        return questionRepository.findByTechnology(technology);
    }

    public List<Question> showQuestion(String technology, Integer questionCount) {
        String jpql = "SELECT q FROM Question q where q.technology = :technology";
        TypedQuery<Question> query = entityManager.createQuery(jpql, Question.class);
        query.setParameter("technology", technology);
        query.setMaxResults(questionCount);
        return query.getResultList();
    }
}
