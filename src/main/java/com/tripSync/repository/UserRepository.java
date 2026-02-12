package com.tripSync.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tripSync.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {

	Boolean existsByEmail(String email);
	
	User findByEmail(String email);
}
