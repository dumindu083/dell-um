package com.dell.model;

public class User {
	int idusers;
	String name;
	String gender;
	String age;
	String skills;
	String address;
	String role;
	
	public User(){
		
	}

	public User(int idusers, String name, String gender, String age, String skills, String address, String role) {
		super();
		this.idusers = idusers;
		this.name = name;
		this.gender = gender;
		this.age = age;
		this.skills = skills;
		this.address = address;
		this.role = role;
	}

	public int getIdusers() {
		return idusers;
	}

	public void setIdusers(int idusers) {
		this.idusers = idusers;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getAge() {
		return age;
	}

	public void setAge(String age) {
		this.age = age;
	}

	public String getSkills() {
		return skills;
	}

	public void setSkills(String skills) {
		this.skills = skills;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	
	
	
}
