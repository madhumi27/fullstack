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
@Table(name = "traineradd1")
public class Trainerentity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name",nullable = false)              
    private String name;

    @Column(name = "mobile",nullable = false)
    private String mobile ;

    @Column(name = "age",nullable = false)
    private String age;

    @Column(name = "specialist",nullable = false)
    private String specialist;

}