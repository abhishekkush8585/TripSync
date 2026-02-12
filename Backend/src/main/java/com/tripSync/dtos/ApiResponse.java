package com.tripSync.dtos;

import java.time.LocalDateTime;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ApiResponse {
	private LocalDateTime timeStamp;
	private String status;
	private String message;
	public ApiResponse(String status, String message) {
		super();
		this.status = status;
		this.message = message;
		this.timeStamp=LocalDateTime.now();
	}
}
