package com.api.restApi.dto;

public class SignUpDto {
    private String email;
    private String password;

    public SignUpDto() {

    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
