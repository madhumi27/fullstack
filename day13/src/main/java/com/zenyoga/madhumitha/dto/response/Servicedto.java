package com.zenyoga.madhumitha.dto.response;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Servicedto {
    private Long id;
    private String name;
    private String email;
    private Long mobile;
    private String trainer;
    private String goal;

}