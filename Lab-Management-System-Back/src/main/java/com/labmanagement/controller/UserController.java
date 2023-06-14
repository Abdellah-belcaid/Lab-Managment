package com.labmanagement.controller;

import com.labmanagement.model.entity.User;
import com.labmanagement.service.IUserService;

import lombok.AllArgsConstructor;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/users")
@AllArgsConstructor
public class UserController {

	private final IUserService userService;

	@PostMapping("/sign-in")
	public ResponseEntity<User> login(@RequestBody User userLoginDTO) throws Exception {
		User user = userService.login(userLoginDTO);
		return ResponseEntity.ok(user);
	}

	// Add other necessary endpoints here
}
