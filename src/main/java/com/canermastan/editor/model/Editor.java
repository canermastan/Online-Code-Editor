package com.canermastan.editor.model;

import org.springframework.stereotype.Component;

@Component
public class Editor {
    public Editor(){

    }

    public Editor(String language, String code) {
        this.language = language;
        this.code = code;
    }

    private String language;
    private String code;

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }
}
