package com.labmanagement.service.serviceimpl;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.labmanagement.model.entity.Dotation_Project;
import com.labmanagement.model.entity.Projet;
import com.labmanagement.repository.ProjetRepository;
import com.labmanagement.service.IProjetService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class ProjetService implements IProjetService {

	private final ProjetRepository projetRepository;

	public Projet addProjet(Projet projet) {
		// Perform any necessary validation or business logic before saving
		// ...

		// Save the projet
		return projetRepository.save(projet);
	}

	public List<Projet> findAllProjets() {
		return projetRepository.findAll();
	}

	public Projet findProjetById(Long id) {
		Optional<Projet> projetOptional = projetRepository.findById(id);
		return projetOptional.orElse(null);
	}

	public Projet updateProjet(Projet projet) {
		// Check if the projet exists
		Optional<Projet> existingProjetOptional = projetRepository.findById(projet.getId());
		if (existingProjetOptional.isEmpty()) {
			throw new IllegalArgumentException("Projet with ID " + projet.getId() + " does not exist.");
		}

		// Perform any necessary validation or business logic before updating
		// ...

		// Save the updated projet
		return projetRepository.save(projet);
	}

	public void deleteProjet(Long id) {
		// Check if the projet exists
		Optional<Projet> existingProjetOptional = projetRepository.findById(id);
		if (existingProjetOptional.isEmpty()) {
			throw new IllegalArgumentException("Projet with ID " + id + " does not exist.");
		}

		// Delete the projet
		projetRepository.deleteById(id);
	}

	public Collection<Dotation_Project> findDotationProjectsByProjetId(Long id) {
		Optional<Projet> projetOptional = projetRepository.findById(id);
		if (projetOptional.isPresent()) {
			Projet projet = projetOptional.get();
			return projet.getDotationProjects();
		}
		return null;
	}
}
