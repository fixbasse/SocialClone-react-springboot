package com.api.restApi.repository;

import com.api.restApi.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AuthRepository extends MongoRepository<User, String> {
}
