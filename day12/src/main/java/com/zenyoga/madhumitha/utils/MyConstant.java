
package com.zenyoga.madhumitha.utils;

import static org.springframework.http.HttpHeaders.*;
import static org.springframework.http.HttpMethod.*;

import java.util.Arrays;
import java.util.List;

public class MyConstant {
    public static final String AUTH = "/api/v1/auth";
    public static final String DEMO = "/api/v1/demo";
    public static final String LOGIN = "/login";
    public static final String LOGOUT = "/logout";

    public static final String REGISTER = "/register";
    public static final List<String> ORIGINS = Arrays.asList("http://localhost:5173");
    public static final List<String> HEADERS = Arrays.asList(AUTHORIZATION, CONTENT_TYPE);
    public static final List<String> METHODS = Arrays.asList(GET.name(), POST.name(), PATCH.name(),
            PUT.name(), DELETE.name(), HEAD.name());
//websecurity
public static final String[] WHITELIST_URL = {
    "/api/v1/auth/**",
    "/swagger-ui/**",
    "/swagger-ui.html/",
    "/v3/api-docs/**"
};

       // Swagger Info
       public static final String SWAGGER_INFO_TITLE = "ZenYoga";
       public static final String SWAGGER_INFO_DESCRIPTION = "This is a YogaAcademy";
       public static final String SWAGGER_INFO_VERSION = "1.0.0";
       public static final String SWAGGER_INFO_CONTACT_NAME = "Madhumitha";
       public static final String SWAGGER_INFO_CONTACT_EMAIL = "madhuleo27@gmail.com";
       public static final String SWAGGER_INFO_CONTACT_URL = "https://example.com";
       public static final String SWAGGER_INFO_LISENCE_NAME = "Apache 2.0";
       public static final String SWAGGER_INFO_LISENCE_URL = "https://www.apache.org/licenses/LICENSE-2.0.html";

    

    // JsonWebToken
    public static final String JWT_LOCALHOST_URL = "http://localhost:8080";
    public static final String JWT_SECURITY_SCHEME_NAME = "bearerAuth";
    public static final String JWT_SCHEME = "bearer";
    public static final String JWT_DESCRIPTION = "Provide the JWT token.";
    public static final String JWT_BEARER_FORMAT = "JWT";
}