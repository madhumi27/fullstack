package com.zenyoga.madhumitha.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.zenyoga.madhumitha.dto.response.Coursedto;
import com.zenyoga.madhumitha.service.Courseservice;

import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.transaction.Transactional;
@RequestMapping("/course")
@CrossOrigin(origins="*")
@Tag(name="Course",description="Course Details")
@RestController

public class Coursecontroller {

    private final Courseservice courseservice;

    public Coursecontroller(Courseservice courseservice) {
        this.courseservice = courseservice;
    }
    @Transactional
    @GetMapping
    public ResponseEntity<List<Coursedto>> getAllServices() {
        List<Coursedto> services = courseservice.getAllCourses();
        return new ResponseEntity<>(services, HttpStatus.OK);
    }
    // @Tag(name="Get ",description="Listing details by their name")
    @Transactional
    @GetMapping("/{name}")
    public ResponseEntity<Coursedto> getServiceByName(@PathVariable String name) {
        Coursedto service = courseservice.getCourseByName(name);
        if (service != null) {
            return new ResponseEntity<>(service, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    // @Tag(name="Post",description="Adding details")
    @Transactional
    @PostMapping
    public ResponseEntity<Coursedto> createService(@RequestBody Coursedto service) {
        Coursedto createdService = courseservice.createCourse(service);
        return new ResponseEntity<>(createdService, HttpStatus.CREATED);
    }
    // @Tag(name="Update",description="Updating details by name")
    @Transactional
    @PutMapping("/{name}")
    public ResponseEntity<Coursedto> updateServiceByName(@PathVariable String name, @RequestBody Coursedto updatedService) {
        Coursedto updatedServiceDto = courseservice.updateCourseByName(name, updatedService);
        if (updatedServiceDto != null) {
            return new ResponseEntity<>(updatedServiceDto, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    // @Tag(name="Delete",description="Deleting details by name")
    @Transactional
    @DeleteMapping("/{name}")
    public ResponseEntity<Void> deleteServiceByName(@PathVariable String name) {
        courseservice.deleteCourseByName(name);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
