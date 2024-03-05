package com.zenyoga.madhumitha.dto.response;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Trainerdto {
    private Long id;
    private String name;
   
    private String mobile;
    private String age;
    private String specialist;

}