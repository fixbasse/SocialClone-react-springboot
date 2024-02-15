package com.api.restApi;

import com.api.restApi.model.User;
import com.api.restApi.repository.AuthRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.annotation.Rollback;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Rollback(value = false)
public class AuthRepositoryTest {
    @Autowired
    private AuthRepository repo;

    @Autowired
    private TestEntityManager entityManager;

    @Test
    public void testCreatUser() {
        User user = new User();
        user.setEmail("fix@mail.com");
        user.setPassword("1234");
        user.setFirstname("Fix");
        user.setSurname("Lolo");

        repo.save(user);
    }
}
