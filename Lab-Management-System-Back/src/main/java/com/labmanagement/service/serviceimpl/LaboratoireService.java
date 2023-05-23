package com.labmanagement.service.serviceimpl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.labmanagement.model.entity.Laboratoire;
import com.labmanagement.service.ILaboratoireService;
import com.labmanagement.repository.LaboratoireRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class LaboratoireService implements ILaboratoireService {

	private final LaboratoireRepository laboratoireRepository;

	@Override
	public Laboratoire addLaboratoire(Laboratoire laboratoire) {
		// Perform validation or other operations here
		// ...

		return laboratoireRepository.save(laboratoire);
	}

	@Override
	public List<Laboratoire> findAllLaboratoire() {
		return laboratoireRepository.findAll();
	}

	@Override
	public Laboratoire findLaboratoireById(Long id) {
		Optional<Laboratoire> optionalLaboratoire = laboratoireRepository.findById(id);
		return optionalLaboratoire.orElse(null);
	}

	@Override
	public Laboratoire updateLaboratoire(Laboratoire laboratoire) {
		// Perform validation or other operations here
		// ...

		return laboratoireRepository.save(laboratoire);
	}

	@Override
	public void deleteLaboratoire(Long id) {
		laboratoireRepository.deleteById(id);
	}
}
