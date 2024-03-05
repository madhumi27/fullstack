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
@Table(name = "EnrollForm")
public class Enrollentity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "Name",nullable = false)              
    private String name;

    @Column(name = "Email address",nullable = false)
    private String email;

    @Column(name = "Mobile number",nullable = false)
    private Long mobile ;

    @Column(name = "Birth Date",nullable = false)
    private String date;
    @Column(name = "Gender",nullable = false)
    private String gender;

    @Column(name = "Address",nullable = false)
    private String address;

    @Column(name = "City",nullable = false)
    private String city;
    

    @Column(name = "Region",nullable = false)
    private String region;

    @Column(name = "Postal",nullable = false)
    private String postal;
}