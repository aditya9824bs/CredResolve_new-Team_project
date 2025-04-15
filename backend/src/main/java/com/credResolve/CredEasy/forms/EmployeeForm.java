package com.credResolve.CredEasy.forms;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
public class EmployeeForm {

    
    @NotBlank(message = "Employee name is Required")
    @Size(min = 3, message = "Min 3 characters is required")
    private String name;

    @Email(message = "Invalid Email Address")
    @Pattern(regexp = "^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,6}$", message = "Invalid email format")
    private String email;

    @NotBlank(message = "password is required")
    @Size(min = 6, message = "Min 6 characters required")
    @Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{6,}$", message = "Password must contain at least one uppercase, one lowercase, one number, and one special character")
    private String password;

    @NotBlank(message =  "About is required")
    private String about;
   
    @Pattern(
        regexp = "^\\+?[0-9]{10}$",
        message = "Invalid phone number. Must be 10-15 digits and can start with +"
    )
    private String phoneNumber;

}

