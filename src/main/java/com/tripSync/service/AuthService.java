package com.tripSync.service;

import java.time.LocalDateTime;

import org.modelmapper.ModelMapper;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.tripSync.dtos.ApiResponse;
import com.tripSync.dtos.AuthRequest;
import com.tripSync.dtos.AuthResponse;
import com.tripSync.dtos.RegisterRequest;
import com.tripSync.entity.Role;
import com.tripSync.entity.User;
import com.tripSync.repository.UserRepository;
import com.tripSync.security.JwtUtils;
import com.tripSync.security.UserPrincipal;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional
public class AuthService {
      
	private final UserRepository repository;
	private final ModelMapper modelMapper;
	private final JwtUtils jwtUtils;
	private final AuthenticationManager authenticationManager;
	private final PasswordEncoder passwordEncoder;
	
	public ApiResponse register(RegisterRequest request) {
		
        User user = modelMapper.map(request,User.class);
        
        user.setRole(Role.ROLE_CUSTOMER);
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setCreatedAt(LocalDateTime.now());
        
        repository.save(user);
        
        return new ApiResponse("Success", "Successfully registered");
	}
	
	public AuthResponse login(AuthRequest request) {
		Authentication holder=new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword());
		Authentication fullyAuth = authenticationManager.authenticate(holder);
		
		UserPrincipal principal = (UserPrincipal) fullyAuth.getPrincipal();
		return new AuthResponse(jwtUtils.generateToken(principal),"successfully login");		
	}
}
