package com.tripSync.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tripSync.dtos.ApiResponse;
import com.tripSync.dtos.AuthRequest;
import com.tripSync.dtos.AuthResponse;
import com.tripSync.dtos.RegisterRequest;
import com.tripSync.service.AuthService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {
 
	private final AuthService authService;
	
	@PostMapping("/register")
	public ResponseEntity<ApiResponse> registerUser(@RequestBody @Valid RegisterRequest registerRequest){
		return ResponseEntity.status(HttpStatus.CREATED).body(authService.register(registerRequest));
	}
	
	@PostMapping("/login")
	public ResponseEntity<AuthResponse> login(@RequestBody @Valid AuthRequest authRequest){
		return ResponseEntity.ok(authService.login(authRequest));
	}
	
}
