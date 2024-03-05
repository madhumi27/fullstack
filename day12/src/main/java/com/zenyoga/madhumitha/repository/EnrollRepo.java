package com.zenyoga.madhumitha.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.zenyoga.madhumitha.model.Enrollentity;

@Repository
public interface EnrollRepo extends JpaRepository<Enrollentity, Long> {
    static Enrollentity findByName(String name) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findByName'");
    }
    void deleteByName(String name);
    // Other methods...
}
