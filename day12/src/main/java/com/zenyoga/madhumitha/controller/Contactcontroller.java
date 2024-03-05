package com.zenyoga.madhumitha.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.zenyoga.madhumitha.model.Contactentity;
import com.zenyoga.madhumitha.service.Contactservice;

import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@Tag(name="Contact")
@RequestMapping("/contact")
public class Contactcontroller {

    private final Contactservice contactService;

    @Autowired
    public Contactcontroller(Contactservice contactService) {
        this.contactService = contactService;
    }

    @PostMapping
    public ResponseEntity<Contactentity> submitContactForm(@RequestBody Contactentity contact) {
        try {
            // Log the received contact object to check if it's received correctly
            System.out.println("Received Contact: " + contact);

            Contactentity savedContact = contactService.saveContact(contact);
            return new ResponseEntity<>(savedContact, HttpStatus.CREATED);
        } catch (Exception e) {
            // Log any exceptions that occur during processing
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping
    public ResponseEntity<List<Contactentity>> getAllContacts() {
        try {
            List<Contactentity> contacts = contactService.getAllContacts();
            return new ResponseEntity<>(contacts, HttpStatus.OK);
        } catch (Exception e) {
            // Log any exceptions that occur during processing
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
