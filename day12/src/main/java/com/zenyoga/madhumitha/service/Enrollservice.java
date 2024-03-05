package com.zenyoga.madhumitha.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.zenyoga.madhumitha.dto.response.Enrolldto;
import com.zenyoga.madhumitha.mapper.Enrollmapper;
import com.zenyoga.madhumitha.model.Enrollentity;
import com.zenyoga.madhumitha.repository.EnrollRepo;

@Service
public class Enrollservice {

    private final EnrollRepo enrollRepo;

    public Enrollservice(EnrollRepo enrollRepo) {
        this.enrollRepo = enrollRepo;
    }

    public List<Enrolldto> getAllServices() {
        List<Enrollentity> services = enrollRepo.findAll(); // Corrected method call
        
        return services.stream()
                .map(Enrollmapper::maptoServicedto)
                .collect(Collectors.toList());
    }
    // public List<Enrolldto> getAllServices() {
    //     List<Enrollentity> services = enrollRepo.findAll();
    //     List<Enrolldto> enrolldtos = services.stream()
    //             .map(Enrollmapper::maptoServicedto)
    //             .collect(Collectors.toList());

    //     // Log the list to the console
    //     System.out.println("All Services: " + enrolldtos);

    //     return enrolldtos;
    // }

    public Enrolldto getServiceByName(String name) {
        Enrollentity enrollentity = EnrollRepo.findByName(name);
        return Enrollmapper.maptoServicedto(enrollentity);
    }

    public Enrolldto createService(Enrolldto enrolldto) {
        Enrollentity enrollentity = Enrollmapper.maptoServiceentity(enrolldto);
        enrollentity = enrollRepo.save(enrollentity);
        return Enrollmapper.maptoServicedto(enrollentity);
    }

    public Enrolldto updateServiceByName(String name,Enrolldto updatedServicedto) {
        Enrollentity existingService = EnrollRepo.findByName(name);

        if (existingService != null) {
            // Update the fields you want to allow updating
            existingService.setEmail(updatedServicedto.getEmail());
            existingService.setMobile(updatedServicedto.getMobile());
            existingService.setDate(updatedServicedto.getDate());
            existingService.setGender(updatedServicedto.getGender());
            existingService.setAddress(updatedServicedto.getAddress());
            existingService.setCity(updatedServicedto.getCity());
            existingService.setRegion(updatedServicedto.getRegion());
            existingService.setPostal(updatedServicedto.getPostal());
            existingService = enrollRepo.save(existingService);
            return Enrollmapper.maptoServicedto(existingService);
        } else {
            // Handle not found scenario
            return null;
        }
    }

    public void deleteServiceByName(String name) {
        enrollRepo.deleteByName(name);
    }
}

