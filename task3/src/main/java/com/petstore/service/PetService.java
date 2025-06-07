package com.petstore.service;

import com.petstore.config.ConfigManager;
import com.petstore.model.Pet;
import io.qameta.allure.Allure;
import io.restassured.filter.log.RequestLoggingFilter;
import io.restassured.filter.log.ResponseLoggingFilter;
import io.restassured.response.Response;

import static io.restassured.RestAssured.given;

public class PetService {
    private final ConfigManager configManager;
    private static final String PET_ENDPOINT = "/pet";

    public PetService(ConfigManager configManager) {
        this.configManager = configManager;
    }

    public Pet createPet(Pet pet) {
        System.out.println("Creating pet with name: " + pet.getName());
        Response response = given()
                .spec(configManager.getRequestSpec())
                .filter(new RequestLoggingFilter())
                .filter(new ResponseLoggingFilter())
                .body(pet)
                .when()
                .post(PET_ENDPOINT)
                .then()
                .spec(configManager.getResponseSpec())
                .extract()
                .response();

        Allure.addAttachment("Create Pet Request", "application/json", pet.toString());
        Allure.addAttachment("Create Pet Response", "application/json", response.getBody().asString());
        
        return response.as(Pet.class);
    }

    public Pet getPetById(Long petId) {
        System.out.println("Getting pet with ID: " + petId);
        Response response = given()
                .spec(configManager.getRequestSpec())
                .filter(new RequestLoggingFilter())
                .filter(new ResponseLoggingFilter())
                .when()
                .get(PET_ENDPOINT + "/{petId}", petId)
                .then()
                .spec(configManager.getResponseSpec())
                .extract()
                .response();

        Allure.addAttachment("Get Pet Response", "application/json", response.getBody().asString());
        
        return response.as(Pet.class);
    }

    public Pet updatePet(Pet pet) {
        System.out.println("Updating pet with ID: " + pet.getId());
        Response response = given()
                .spec(configManager.getRequestSpec())
                .filter(new RequestLoggingFilter())
                .filter(new ResponseLoggingFilter())
                .body(pet)
                .when()
                .put(PET_ENDPOINT)
                .then()
                .spec(configManager.getResponseSpec())
                .extract()
                .response();

        Allure.addAttachment("Update Pet Request", "application/json", pet.toString());
        Allure.addAttachment("Update Pet Response", "application/json", response.getBody().asString());
        
        return response.as(Pet.class);
    }

    public void deletePet(Long petId) {
        System.out.println("Deleting pet with ID: " + petId);
        Response response = given()
                .spec(configManager.getRequestSpec())
                .filter(new RequestLoggingFilter())
                .filter(new ResponseLoggingFilter())
                .when()
                .delete(PET_ENDPOINT + "/{petId}", petId)
                .then()
                .statusCode(200)
                .extract()
                .response();

        Allure.addAttachment("Delete Pet Response", "application/json", response.getBody().asString());
    }
} 