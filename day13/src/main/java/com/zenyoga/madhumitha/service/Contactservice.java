package com.zenyoga.madhumitha.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zenyoga.madhumitha.model.Contactentity;
import com.zenyoga.madhumitha.repository.ContactRepo;

@Service
public class Contactservice {

    private final ContactRepo contactRepo;

    @Autowired
    public Contactservice(ContactRepo contactRepo) {
        this.contactRepo = contactRepo;
    }

    public List<Contactentity> getAllContacts() {
        return contactRepo.findAll();
    }

    public Contactentity getContactById(Long id) {
        return contactRepo.findById(id).orElse(null);
    }

    public Contactentity saveContact(Contactentity contact) {
        return contactRepo.save(contact);
    }

    public Contactentity updateContactById(Long id, Contactentity updatedContact) {
        Contactentity existingContact = contactRepo.findById(id).orElse(null);
        if (existingContact != null) {
            // Update the fields of the existing contact with the new values
            existingContact.setName(updatedContact.getName());
            existingContact.setEmail(updatedContact.getEmail());
            existingContact.setMessage(updatedContact.getMessage());
            existingContact.setRating(updatedContact.getRating());
            return contactRepo.save(existingContact);
        } else {
            return null;
        }
    }

    public void deleteContactById(Long id) {
        contactRepo.deleteById(id);
    }

    // You can add other service methods if needed
}
