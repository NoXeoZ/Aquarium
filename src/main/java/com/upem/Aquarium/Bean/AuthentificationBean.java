package com.upem.Aquarium.Bean;

public class AuthentificationBean {

    private String message;

    public AuthentificationBean(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    @Override
    public String toString() {
        return String.format("[message=%s]", message);
    }
}
