package com.labmanagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.labmanagement.model.entity.Etablissement;
import com.labmanagement.service.IEtablissementService;

@RestController
@RequestMapping("/api/v1/etablissements")
public class EtablissementController {

	private final IEtablissementService etablissementService;

	public EtablissementController(IEtablissementService etablissementService) {
		this.etablissementService = etablissementService;
	}

	@PostMapping
	public ResponseEntity<Etablissement> addEtablissement(@RequestBody Etablissement etablissement) {
		System.err.println(etablissement);
		Etablissement newEtablissement = etablissementService.addEtablissement(etablissement);
		return ResponseEntity.status(HttpStatus.CREATED).body(newEtablissement);
	}

	@GetMapping
	public ResponseEntity<List<Etablissement>> getAllEtablissements() {
		List<Etablissement> etablissements = etablissementService.findAllEtablissement();
		return ResponseEntity.ok(etablissements);
	}

	@GetMapping("/{id}")
	public ResponseEntity<Etablissement> getEtablissementById(@PathVariable Long id) {
		Etablissement etablissement = etablissementService.findEtablissementById(id);
		return ResponseEntity.ok(etablissement);
	}

	@PutMapping("/{id}")
	public ResponseEntity<Etablissement> updateEtablissement(@PathVariable Long id,
			@RequestBody Etablissement etablissement) {
		System.err.println(etablissement);
		Etablissement updatedEtablissement = etablissementService.updateEtablissement(etablissement);
		return ResponseEntity.ok(updatedEtablissement);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteEtablissement(@PathVariable Long id) {
		etablissementService.deleteEtablissement(id);
		return ResponseEntity.noContent().build();
	}
}
