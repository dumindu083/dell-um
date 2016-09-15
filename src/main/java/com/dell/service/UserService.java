package com.dell.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.dell.model.User;

@Service()
public interface UserService {
	
	public User getUserbyId(int id);
	public List<User> getAllUsers();
	public User insertUser(User user);
	public void deleteUser(int id);
	public void updateUser(User user);
	
}
