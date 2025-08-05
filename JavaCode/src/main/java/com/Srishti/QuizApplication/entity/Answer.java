package com.Srishti.QuizApplication.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Answer {

    @Id
    private long qid;
    private byte correctoption;
    private String explanation;


    public Answer(long qid, byte correctoption, String explanation) {
        this.qid = qid;
        this.explanation = explanation;
        this.correctoption = correctoption;
    }

    public Answer() {

    }

    public long getQid() {
        return qid;
    }

    public void setQid(long qid) {
        this.qid = qid;
    }

    public byte getCorrectoption() {
        return correctoption;
    }

    public void setCorrectoption(byte correctoption) {
        this.correctoption = correctoption;
    }

    public String getExplanation() {
        return explanation;
    }

    public void setExplanation(String explanation) {
        this.explanation = explanation;
    }

    public Answer getAnswer(){
        return this;
    }
}
