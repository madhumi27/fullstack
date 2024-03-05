package com.zenyoga.madhumitha.service;

import com.zenyoga.madhumitha.dto.request.LoginRequest;
import com.zenyoga.madhumitha.dto.request.RegisterRequest;
import com.zenyoga.madhumitha.dto.response.LoginResponse;
import com.zenyoga.madhumitha.dto.response.RegisterResponse;

public interface AuthenticationService {
    RegisterResponse register(RegisterRequest request);

    LoginResponse login(LoginRequest request);
}