package com.zenyoga.madhumitha.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.zenyoga.madhumitha.model.Trainerentity;

@Repository
public interface TrainerRepo extends JpaRepository<Trainerentity, Long> {
    Trainerentity findByName(String name);
    void deleteByName(String name);
    // Other methods...
}
