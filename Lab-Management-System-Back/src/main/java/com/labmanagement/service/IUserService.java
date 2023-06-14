package com.labmanagement.service;

import com.labmanagement.model.entity.User;

public interface IUserService {

	User login(User userLogin) throws Exception;
	
}
