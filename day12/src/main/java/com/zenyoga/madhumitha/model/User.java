// package com.recharge.mobilerecharge.model;

// import jakarta.persistence.*;
// import lombok.AllArgsConstructor;
// import lombok.Getter;
// import lombok.NoArgsConstructor;
// import lombok.Setter;

// @Getter
// @Setter
// @NoArgsConstructor
// @AllArgsConstructor
// @Entity
// @Table(name = "UserDetails")
// public class User {
//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long userId;

//     @Column(length = 50, nullable = false, unique = true)
//     private String email;

//     @Column(nullable = false)
//     private String password;

//     @Column(length = 50, nullable = false)
//     private String username;

//     @Column(length = 15, nullable = false)
//     private String mobileNumber;

//     @Column(length = 10, nullable = false)
//     private String userRole; 

// }

// package com.recharge.mobilerecharge.model;
// package com.recharge.mobilerecharge.model;

// import jakarta.persistence.Column;
// import jakarta.persistence.Entity;
// import jakarta.persistence.GeneratedValue;
// import jakarta.persistence.GenerationType;
// import jakarta.persistence.Id;
// import jakarta.persistence.Table;
// import lombok.AllArgsConstructor;
// import lombok.Builder;
// import lombok.Data;
// import lombok.Getter;
// import lombok.NoArgsConstructor;
// import lombok.Setter;

// @Data
// @Builder
// @NoArgsConstructor
// @AllArgsConstructor
// @Getter
// @Setter
// @Entity
// @Table(name="User_details")


// public class User
// {
//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long userId;

//     @Column(name="email")
//     private String email;

//     @Column(name="password")
//     private String password;

//     @Column(name="username")
//     private String username;

//     @Column(name="mobile_number")
//     private String mobileNumber;

//     @Column(name="user_role")
//     private String userRole;
// }

package com.zenyoga.madhumitha.model;

import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.zenyoga.madhumitha.enumerated.Role;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="user_")
public class User implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String password;

    // @Column(nullable = false)
    // private String mobileNumber;

    @Enumerated(EnumType.STRING)
    private Role role;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}

