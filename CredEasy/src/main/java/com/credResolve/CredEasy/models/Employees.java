package com.credResolve.CredEasy.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity(name = "employee")
@Table(name = "employees")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Employees {
        @Id
    private String employeeId;
    @Column(name = "user_name", nullable = false)
    private String name;
    @Column(unique = true, nullable = false)
    private String email;
    @Column(nullable = false)
    private String password;
    @Column(length = 500)
    private String about;
    @Column(length = 500)
    private String profilePic;
    private String phoneNumber;



        @Builder.Default
    private boolean enabaled = false;
    @Builder.Default
    
    private boolean emailVerified = false;
    @Builder.Default
    private boolean phoneVerified = false;
}
