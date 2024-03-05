package com.zenyoga.madhumitha.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.zenyoga.madhumitha.dto.response.Academydto;
import com.zenyoga.madhumitha.mapper.Academymapper;
import com.zenyoga.madhumitha.model.Academyentity;
import com.zenyoga.madhumitha.repository.AcademyRepo;

@Service
public class Academyservice {

    private final AcademyRepo academyRepo;

    public Academyservice(AcademyRepo academyRepo) {
        this.academyRepo = academyRepo;
    }

    public List<Academydto> getAllAcademies() {
        List<Academyentity> academies = academyRepo.findAll();
        return academies.stream()
                .map(Academymapper::mapToServiceDto)
                .collect(Collectors.toList());
    }

    public Academydto getAcademyByName(String name) {
        Academyentity academyEntity = academyRepo.findByName(name);
        return Academymapper.mapToServiceDto(academyEntity);
    }

    public Academydto createAcademy(Academydto academyDto) {
        Academyentity academyEntity = Academymapper.mapToServiceEntity(academyDto);
        academyEntity = academyRepo.save(academyEntity);
        return Academymapper.mapToServiceDto(academyEntity);
    }

    public Academydto updateAcademyById(Long id, Academydto updatedAcademyDto) {
        Optional<Academyentity> existingAcademyOptional = academyRepo.findById(id);
    
        if (existingAcademyOptional.isPresent()) {
            Academyentity existingAcademy = existingAcademyOptional.get();
            // Update the fields you want to allow updating
            existingAcademy.setName(updatedAcademyDto.getName());
            existingAcademy.setPlace(updatedAcademyDto.getPlace());
    
            existingAcademy = academyRepo.save(existingAcademy);
            return Academymapper.mapToServiceDto(existingAcademy);
        } else {
            // Handle not found scenario
            return null;
        }
    }
    
    
    public void deleteAcademyByName(String name) {
        academyRepo.deleteByName(name);
    }
}
