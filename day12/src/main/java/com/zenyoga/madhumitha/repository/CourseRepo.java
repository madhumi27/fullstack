package com.zenyoga.madhumitha.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.zenyoga.madhumitha.model.Courseentity;

@Repository
public interface CourseRepo extends JpaRepository<Courseentity, Long> {
    Courseentity findByName(String name);
    void deleteByName(String name);
    // Other methods...
}
