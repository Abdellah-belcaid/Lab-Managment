package com.labmanagement.service.serviceimpl;

import com.labmanagement.model.entity.Dotation_Membre;
import com.labmanagement.model.entity.Dotation_Membre.DotationMembreId;
import com.labmanagement.service.IDotationMembreService;
import com.labmanagement.repository.DotationMembreRepository;

import lombok.AllArgsConstructor;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collection;

@Service
@Transactional
@AllArgsConstructor
public class DotationMembreService implements IDotationMembreService {

	private final DotationMembreRepository dotationMembreRepository;

	@Override
	public Dotation_Membre addDotationMembre(Dotation_Membre dotationMembre) {
		// Perform additional validation or business logic if needed

		return dotationMembreRepository.save(dotationMembre);
	}

	@Override
	public Dotation_Membre updateDotationMembre(Dotation_Membre dotationMembre) {
		// Perform additional validation or business logic if needed

		return dotationMembreRepository.save(dotationMembre);
	}

	@Override
	public void deleteDotationMembre(Long ucaRechId, Long membreId) {
		// Perform additional validation or business logic if needed

		dotationMembreRepository.deleteById(new DotationMembreId(ucaRechId, membreId));
	}

	@Override
	public Dotation_Membre getDotationMembreById(Long ucaRechId, Long membreId) {
		return dotationMembreRepository.findById(new DotationMembreId(ucaRechId, membreId)).orElse(null);
	}

	@Override
	public Collection<Dotation_Membre> getAllDotationMembres() {
		return dotationMembreRepository.findAll();
	}

	
	@Override
	public Collection<Dotation_Membre> getAllByUcaRechId(Long ucaRechId) {
        return dotationMembreRepository.findAllById_UcaRechId(ucaRechId);
    }
	@Override
    public Collection<Dotation_Membre> getAllByMembreId(Long membreId) {
        return dotationMembreRepository.findAllById_MembreId(membreId);
    }
}
