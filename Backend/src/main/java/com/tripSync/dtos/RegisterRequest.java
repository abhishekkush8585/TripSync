package com.tripSync.dtos;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class RegisterRequest {
	@NotBlank(message = "First Name is required")
	@Size(min = 3,max = 20,message = "Size should be less than 20 and greater than 3")
    private String firstName;
	
	@NotBlank(message = "Last Name is required")
	@Size(min = 3,max = 20,message = "Size should be less than 20 and greater than 3")
    private String lastName;
	
	@Email
	@NotBlank
	private String email;
	
	@NotBlank
    private String password;

}
