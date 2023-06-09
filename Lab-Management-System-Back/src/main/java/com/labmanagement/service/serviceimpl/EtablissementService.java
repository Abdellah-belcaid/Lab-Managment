package com.labmanagement.service.serviceimpl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.labmanagement.model.entity.Etablissement;
import com.labmanagement.repository.EtablissementRepository;
import com.labmanagement.service.IEtablissementService;
import com.labmanagement.service.ILaboratoireService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class EtablissementService implements IEtablissementService {

	private final EtablissementRepository etablissementRepository;
	private final ILaboratoireService laboratoireService;

	@Override
	public Etablissement addEtablissement(Etablissement etablissement) {
		return etablissementRepository.save(etablissement);
	}

	@Override
	public List<Etablissement> findAllEtablissement() {
		return etablissementRepository.findAll();
	}

	@Override
	public Etablissement findEtablissementById(Long id) {
		return etablissementRepository.findById(id).orElseThrow(null);
	}

	@Override
	public Etablissement updateEtablissement(Long id, Etablissement etablissement) {
		etablissement.setId(id);
		return etablissementRepository.save(etablissement);
	}

	@Override
	public void deleteEtablissement(Long id) {

		Optional<Etablissement> etablissement = etablissementRepository.findById(id);
		if (etablissement.isPresent()) {
			etablissement.get().getLaboratoires().stream()
					.forEach(lab -> laboratoireService.deleteLaboratoire(lab.getId()));
			etablissementRepository.deleteById(id);
		}

	}

}
