package com.petstore.service;

import com.petstore.config.ConfigManager;
import com.petstore.model.Pet;
import io.restassured.response.Response;

import static io.restassured.RestAssured.given;

public class PetService {
    private static final String PET_ENDPOINT = "/pet";
    private final ConfigManager configManager;

    public PetService() {
        this.configManager = ConfigManager.getInstance();
    }

    public Pet createPet(Pet pet) {
        System.out.println("Creating pet with name: " + pet.getName());
        Response response = given()
                .spec(configManager.getRequestSpec())
                .body(pet)
                .when()
                .post(PET_ENDPOINT)
                .then()
                .spec(configManager.getResponseSpec())
                .extract()
                .response();
        return response.as(Pet.class);
    }

    public Pet getPetById(Long petId) {
        System.out.println("Getting pet with ID: " + petId);
        Response response = given()
                .spec(configManager.getRequestSpec())
                .when()
                .get(PET_ENDPOINT + "/{petId}", petId)
                .then()
                .spec(configManager.getResponseSpec())
                .extract()
                .response();
        return response.as(Pet.class);
    }

    public Pet updatePet(Pet pet) {
        System.out.println("Updating pet with ID: " + pet.getId());
        Response response = given()
                .spec(configManager.getRequestSpec())
                .body(pet)
                .when()
                .put(PET_ENDPOINT)
                .then()
                .spec(configManager.getResponseSpec())
                .extract()
                .response();
        return response.as(Pet.class);
    }

    public void deletePet(Long petId) {
        System.out.println("Deleting pet with ID: " + petId);
        given()
                .spec(configManager.getRequestSpec())
                .when()
                .delete(PET_ENDPOINT + "/{petId}", petId)
                .then()
                .spec(configManager.getResponseSpec());
    }
} 