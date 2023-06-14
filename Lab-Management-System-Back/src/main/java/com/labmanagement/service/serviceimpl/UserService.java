package com.labmanagement.service.serviceimpl;

import com.labmanagement.model.entity.User;
import com.labmanagement.repository.UserRepository;
import com.labmanagement.service.IUserService;

import lombok.AllArgsConstructor;

import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserService implements IUserService {

	private final UserRepository userRepository;

	@Override
	public User login(User userLogin) throws Exception {
		User user = userRepository.findByUsernameAndPassword(userLogin.getUsername(), userLogin.getPassword());
		if (user == null || !userLogin.getPassword().equals(user.getPassword())) {
			throw new Exception("Invalid username or password");
		}
		return user;
	}

	// Add other necessary methods here
}
