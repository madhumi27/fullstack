package com.zenyoga.madhumitha.mapper;

import com.zenyoga.madhumitha.dto.response.Servicedto;
import com.zenyoga.madhumitha.model.Serviceentity;

public class Servicemapper {

    public static Servicedto maptoServicedto(Serviceentity serviceentity) {
        // Implement the mapping logic
        return new Servicedto(
                serviceentity.getId(),
                serviceentity.getName(),
                serviceentity.getEmail(),
                serviceentity.getMobile(),
                serviceentity.getTrainer(),
                serviceentity.getGoal()
        );
    }

    public static Serviceentity maptoServiceentity(Servicedto servicedto) {
        // Implement the mapping logic
        return new Serviceentity(
                servicedto.getId(),
                servicedto.getName(),
                servicedto.getEmail(),
                servicedto.getMobile(),
                servicedto.getTrainer(),
                servicedto.getGoal()
        );
    }
}

