package com.zenyoga.madhumitha.dto.request;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TrainerRequest {
    private String name;
    private String mobile;
    private String age;
    private String specialist;
}