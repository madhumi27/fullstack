package com.zenyoga.madhumitha.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.zenyoga.madhumitha.model.Contactentity;

@Repository
public interface ContactRepo extends JpaRepository<Contactentity, Long> {

}
