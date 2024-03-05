package com.zenyoga.madhumitha.model;


import jakarta.persistence.Column;
import jakarta.persistence.Table;
import jakarta.persistence.Id;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "trainerdetail")
public class Serviceentity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name",nullable = false)              
    private String name;

    @Column(name = "email",nullable = false)
    private String email;

    @Column(name = "mobile",nullable = false)
    private Long mobile ;

    @Column(name = "trainer",nullable = false)
    private String trainer;

    @Column(name = "goal",nullable = false)
    private String goal;

}