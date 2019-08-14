package com.spet.rest.webservices.restfulwebservices.users;


import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class UserHardcoded {
	
	private static List<User> users = new ArrayList<>();
	
	static {
		users.add(new User("s3607407", "Tony", "Huang", 100, 12381324));
		users.add(new User("s3758650", "ZY", "Kee", 100, 48291234));
		users.add(new User("s3758733", "Jeff", "Foong", 100, 53723513));
		users.add(new User("33627881", "Tony", "Jiang", 100, 40126589));
		users.add(new User("s3694451", "Simon", "Hesjevik", 100, 12397893));	
	}
	
	public List<User> getUsers(){
		return users;
	}
	
}
