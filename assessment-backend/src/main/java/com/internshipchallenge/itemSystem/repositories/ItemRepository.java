package com.internshipchallenge.itemSystem.repositories;

import com.internshipchallenge.itemSystem.models.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemRepository extends JpaRepository<Item, Long> {
}
