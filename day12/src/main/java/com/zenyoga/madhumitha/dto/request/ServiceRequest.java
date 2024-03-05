package com.zenyoga.madhumitha.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ServiceRequest {
    private String name;
    private String email;
    private Long mobile;
    private String trainer;
    private String goal;
}