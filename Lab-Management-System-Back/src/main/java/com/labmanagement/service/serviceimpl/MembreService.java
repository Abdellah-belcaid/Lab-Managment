package com.labmanagement.service.serviceimpl;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.labmanagement.model.entity.Dotation_Project;
import com.labmanagement.model.entity.ExpressionBesoin;
import com.labmanagement.model.entity.Laboratoire;
import com.labmanagement.model.entity.Membre;
import com.labmanagement.repository.MembreRepository;
import com.labmanagement.service.IMembreService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class MembreService implements IMembreService {

	private final MembreRepository membreRepository;

	/**
	 * Adds a new member.
	 *
	 * @param membre The member to add.
	 * @return The added member.
	 */
	public Membre addMembre(Membre membre) {
		// Perform any necessary validation or business logic before saving
		// ...

		// Save the member
		return membreRepository.save(membre);
	}

	/**
	 * Retrieves all members.
	 *
	 * @return A list of all members.
	 */
	public List<Membre> findAllMembres() {
		return membreRepository.findAll();
	}

	/**
	 * Retrieves a member by ID.
	 *
	 * @param id The ID of the member to retrieve.
	 * @return The retrieved member, or null if not found.
	 */
	public Membre findMembreById(Long id) {
		Optional<Membre> membreOptional = membreRepository.findById(id);
		return membreOptional.orElse(null);
	}

	/**
	 * Updates an existing member.
	 *
	 * @param membre The member to update.
	 * @return The updated member.
	 */
	public Membre updateMembre(Membre membre) {
		// Check if the member exists
		Optional<Membre> existingMembreOptional = membreRepository.findById(membre.getId());
		if (existingMembreOptional.isEmpty()) {
			throw new IllegalArgumentException("Member with ID " + membre.getId() + " does not exist.");
		}

		// Perform any necessary validation or business logic before updating
		// ...

		// Save the updated member
		return membreRepository.save(membre);
	}

	/**
	 * Deletes a member by ID.
	 *
	 * @param id The ID of the member to delete.
	 */
	public void deleteMembre(Long id) {
		// Check if the member exists
		Optional<Membre> existingMembreOptional = membreRepository.findById(id);
		if (existingMembreOptional.isEmpty()) {
			throw new IllegalArgumentException("Member with ID " + id + " does not exist.");
		}

		// Delete the member
		membreRepository.deleteById(id);
	}

	/**
	 * Retrieves the laboratoire associated with a member.
	 *
	 * @param id The ID of the member.
	 * @return The associated laboratoire, or null if not found.
	 */
	public Laboratoire findLaboratoireByMembreId(Long id) {
		Optional<Membre> membreOptional = membreRepository.findById(id);
		if (membreOptional.isPresent()) {
			Membre membre = membreOptional.get();
			return membre.getLaboratoire();
		}
		return null;
	}

	/**
	 * Retrieves the expression besoins associated with a member.
	 *
	 * @param id The ID of the member.
	 * @return The associated expression besoins.
	 */
	public Collection<ExpressionBesoin> findExpressionBesoinsByMembreId(Long id) {
		Optional<Membre> membreOptional = membreRepository.findById(id);
		if (membreOptional.isPresent()) {
			Membre membre = membreOptional.get();
			return membre.getExpressionBesoins();
		}
		return null;
	}

	/**
	 * Retrieves the dotation projects associated with a member.
	 *
	 * @param id The ID of the member.
	 * @return The associated dotation projects.
	 */
	public Collection<Dotation_Project> findDotationProjectsByMembreId(Long id) {
		Optional<Membre> membreOptional = membreRepository.findById(id);
		if (membreOptional.isPresent()) {
			Membre membre = membreOptional.get();
			return membre.getDotationProjects();
		}
		return null;
	}
}
