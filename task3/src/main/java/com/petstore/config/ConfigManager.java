package com.petstore.config;

import io.restassured.specification.RequestSpecification;
import io.restassured.specification.ResponseSpecification;
import io.restassured.builder.ResponseSpecBuilder;
import static io.restassured.RestAssured.given;
import static io.restassured.filter.log.LogDetail.ALL;
import static io.restassured.filter.log.LogDetail.STATUS;

public class ConfigManager {
    private static final String BASE_URL = "https://petstore.swagger.io/v2";
    private static ConfigManager instance;
    private final RequestSpecification requestSpec;
    private final ResponseSpecification responseSpec;

    public ConfigManager() {
        requestSpec = given()
                .baseUri(BASE_URL)
                .contentType("application/json")
                .log().all();

        responseSpec = new ResponseSpecBuilder()
                .expectContentType("application/json")
                .build();
    }

    public static synchronized ConfigManager getInstance() {
        if (instance == null) {
            instance = new ConfigManager();
        }
        return instance;
    }

    public RequestSpecification getRequestSpec() {
        return requestSpec;
    }

    public ResponseSpecification getResponseSpec() {
        return responseSpec;
    }
} 