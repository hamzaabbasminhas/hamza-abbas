package com.petstore.tests;

import com.petstore.config.ConfigManager;
import com.petstore.model.Pet;
import com.petstore.reporting.ReportManager;
import com.petstore.service.PetService;
import org.testng.Assert;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

public class PetTests {
    private PetService petService;
    private ConfigManager configManager;
    private static final String PET_ENDPOINT = "/pet";
    private Long createdPetId;

    @BeforeClass
    public void setup() {
        configManager = new ConfigManager();
        petService = new PetService(configManager);
        ReportManager.addSystemInfo("Environment", "Pet Store API");
        ReportManager.addSystemInfo("Base URL", "https://petstore.swagger.io/v2");
    }

    @Test(priority = 1)
    public void testCreatePet() {
        ReportManager.startTest("Create Pet Test");
        Pet pet = Pet.createTestPet();
        ReportManager.getTest().info("Creating pet with name: " + pet.getName());
        
        Pet createdPet = petService.createPet(pet);
        createdPetId = createdPet.getId();
        
        ReportManager.getTest().info("Created pet with ID: " + createdPetId);
        Assert.assertNotNull(createdPetId, "Pet ID should not be null");
    }

    @Test(priority = 2)
    public void testGetPet() {
        ReportManager.startTest("Get Pet Test");
        ReportManager.getTest().info("Getting pet with ID: " + createdPetId);
        
        Pet retrievedPet = petService.getPetById(createdPetId);
        ReportManager.getTest().info("Retrieved pet: " + retrievedPet.toString());
        
        Assert.assertEquals(retrievedPet.getId(), createdPetId, "Retrieved pet ID should match created pet ID");
    }

    @Test(priority = 3)
    public void testUpdatePet() {
        ReportManager.startTest("Update Pet Test");
        Pet petToUpdate = Pet.createTestPet();
        petToUpdate.setId(createdPetId);
        petToUpdate.setName("Updated Pet Name");
        ReportManager.getTest().info("Updating pet with ID: " + createdPetId);
        
        Pet updatedPet = petService.updatePet(petToUpdate);
        ReportManager.getTest().info("Updated pet: " + updatedPet.toString());
        
        Assert.assertEquals(updatedPet.getName(), "Updated Pet Name", "Pet name should be updated");
    }

    @Test(priority = 4)
    public void testDeletePet() {
        ReportManager.startTest("Delete Pet Test");
        ReportManager.getTest().info("Deleting pet with ID: " + createdPetId);
        petService.deletePet(createdPetId);
        ReportManager.getTest().info("Pet delete operation completed successfully");
    }

    @AfterClass
    public void tearDown() {
        ReportManager.endTest();
    }
} 