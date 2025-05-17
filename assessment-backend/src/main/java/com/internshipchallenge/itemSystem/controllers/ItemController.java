package com.internshipchallenge.itemSystem.controllers;

import com.internshipchallenge.itemSystem.models.Item;
import com.internshipchallenge.itemSystem.services.ItemService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/items")
public class ItemController {

    private final ItemService itemService;

    @Autowired // Injects the service
    public ItemController(ItemService itemService) {
        this.itemService = itemService;
    }

    // GET /api/items
    @GetMapping
    public List<Item> getAllItems() {
        return itemService.getAllItems();
    }

    // POST /api/items
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Item createItem(@Valid @RequestBody Item item) {
        return itemService.createItem(item);
    }
}