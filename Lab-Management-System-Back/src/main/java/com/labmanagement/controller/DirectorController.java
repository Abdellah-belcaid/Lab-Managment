package com.labmanagement.controller;

import com.labmanagement.model.entity.Director;
import com.labmanagement.service.IDirectorService;
import lombok.RequiredArgsConstructor;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/directors")
@RequiredArgsConstructor
public class DirectorController {
	private final IDirectorService directorService;

	@GetMapping
	public ResponseEntity<List<Director>> getAllDirectors() {
		List<Director> directors = directorService.getAllDirectors();
		return ResponseEntity.ok(directors);
	}

	@GetMapping("/{id}")
	public ResponseEntity<Director> getDirectorById(@PathVariable Long id) {
		Director director = directorService.getDirectorById(id);
		return ResponseEntity.ok(director);
	}

	@PostMapping
	public ResponseEntity<Director> createDirector(@RequestBody Director director) {
		Director savedDirector = directorService.saveDirector(director);
		return ResponseEntity.status(HttpStatus.CREATED).body(savedDirector);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteDirector(@PathVariable Long id) {
		directorService.deleteDirector(id);
		return ResponseEntity.noContent().build();
	}
}
