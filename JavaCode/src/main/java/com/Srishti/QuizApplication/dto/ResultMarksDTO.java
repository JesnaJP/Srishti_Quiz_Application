
package com.Srishti.QuizApplication.dto;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
public class ResultMarksDTO {

    private long qid;
    private byte submittedOption;
    private byte correctOption;
    private String explanation;
    private boolean isCorrectAnswer;

    public long getQid() {
        return qid;
    }

    public void setQid(long qid) {
        this.qid = qid;
    }

    public byte getSubmittedOption() {
        return submittedOption;
    }

    public void setSubmittedOption(byte submittedOption) {
        this.submittedOption = submittedOption;
    }

    public byte getCorrectOption() {
        return correctOption;
    }

    public void setCorrectOption(byte correctOption) {
        this.correctOption = correctOption;
    }

    public String getExplanation() {
        return explanation;
    }

    public void setExplanation(String explanation) {
        this.explanation = explanation;
    }

    public void setIsCorrectAnswer() {
        this.isCorrectAnswer = submittedOption == correctOption;
    }

    public boolean isCorrectAnswer() {
        return isCorrectAnswer;
    }

}
