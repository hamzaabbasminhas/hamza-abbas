package com.petstore.model;

import java.util.Arrays;
import java.util.List;

public class Pet {
    private Long id;
    private Category category;
    private String name;
    private List<String> photoUrls;
    private List<Tag> tags;
    private String status;

    public static Pet createTestPet() {
        Pet pet = new Pet();
        pet.setId(10L);
        pet.setName("doggie");
        
        Category category = new Category();
        category.setId(1L);
        category.setName("Dogs");
        pet.setCategory(category);
        
        pet.setPhotoUrls(Arrays.asList("string"));
        
        Tag tag = new Tag();
        tag.setId(0L);
        tag.setName("string");
        pet.setTags(Arrays.asList(tag));
        
        pet.setStatus("available");
        
        return pet;
    }

    public Pet() {}

    public Pet(Long id, Category category, String name, List<String> photoUrls, List<Tag> tags, String status) {
        this.id = id;
        this.category = category;
        this.name = name;
        this.photoUrls = photoUrls;
        this.tags = tags;
        this.status = status;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public Category getCategory() { return category; }
    public void setCategory(Category category) { this.category = category; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public List<String> getPhotoUrls() { return photoUrls; }
    public void setPhotoUrls(List<String> photoUrls) { this.photoUrls = photoUrls; }

    public List<Tag> getTags() { return tags; }
    public void setTags(List<Tag> tags) { this.tags = tags; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    @Override
    public String toString() {
        return "Pet{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", category=" + (category != null ? category.getName() : "null") +
                ", photoUrls=" + photoUrls +
                ", tags=" + (tags != null ? tags.stream().map(Tag::getName).toList() : "null") +
                ", status='" + status + '\'' +
                '}';
    }

    public static class Category {
        private Long id;
        private String name;

        public Category() {}
        public Category(Long id, String name) {
            this.id = id;
            this.name = name;
        }
        public Long getId() { return id; }
        public void setId(Long id) { this.id = id; }
        public String getName() { return name; }
        public void setName(String name) { this.name = name; }
    }

    public static class Tag {
        private Long id;
        private String name;

        public Tag() {}
        public Tag(Long id, String name) {
            this.id = id;
            this.name = name;
        }
        public Long getId() { return id; }
        public void setId(Long id) { this.id = id; }
        public String getName() { return name; }
        public void setName(String name) { this.name = name; }
    }
} 