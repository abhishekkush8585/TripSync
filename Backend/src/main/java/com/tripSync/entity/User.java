package com.tripSync.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "Users")
@Getter
@Setter
public class User {
    
	@Id
	@Column(name = "User Id", length = 20)
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long userId;
	
	@Column(name = "First Name", length = 20)
	private String firstName;
	
	@Column(name = "Last Name", length = 20)
	private String LastName;
	
	@Column(name = "Email", length = 20, nullable = false, unique = true)
	private String email;
	
	@Column(name = "Password", nullable = false)
	private String password;
	
	@Enumerated(EnumType.STRING)
	private Role role;
	
	@Column(name = "Created At", length = 20)
    LocalDateTime createdAt;
}
