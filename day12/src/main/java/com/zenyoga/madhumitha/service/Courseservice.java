package com.zenyoga.madhumitha.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.zenyoga.madhumitha.dto.response.Coursedto;
import com.zenyoga.madhumitha.mapper.Coursemapper;
import com.zenyoga.madhumitha.model.Courseentity;
import com.zenyoga.madhumitha.repository.CourseRepo;

@Service
public class Courseservice {

    private final CourseRepo courseRepo;

    public Courseservice(CourseRepo courseRepo) {
        this.courseRepo = courseRepo;
    }

    public List<Coursedto> getAllCourses() {
        List<Courseentity> courses = courseRepo.findAll();
        return courses.stream()
                .map(Coursemapper::mapToServiceDto)
                .collect(Collectors.toList());
    }

    public Coursedto getCourseByName(String name) {
        Courseentity courseEntity = courseRepo.findByName(name);
        return Coursemapper.mapToServiceDto(courseEntity);
    }

    public Coursedto createCourse(Coursedto courseDto) {
        Courseentity courseEntity = Coursemapper.mapToServiceEntity(courseDto);
        courseEntity = courseRepo.save(courseEntity);
        return Coursemapper.mapToServiceDto(courseEntity);
    }

    public Coursedto updateCourseByName(String name, Coursedto updatedCourseDto) {
        Courseentity existingCourse = courseRepo.findByName(name);

        if (existingCourse != null) {
            // Update the fields you want to allow updating
            existingCourse.setDuration(updatedCourseDto.getDuration());
            existingCourse.setTimings(updatedCourseDto.getTimings());
           
            existingCourse = courseRepo.save(existingCourse);
            return Coursemapper.mapToServiceDto(existingCourse);
        } else {
            // Handle not found scenario
            return null;
        }
    }

    public void deleteCourseByName(String name) {
        courseRepo.deleteByName(name);
    }

   
}
