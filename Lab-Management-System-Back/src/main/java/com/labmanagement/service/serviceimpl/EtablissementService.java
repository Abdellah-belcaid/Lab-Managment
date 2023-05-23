package com.labmanagement.service.serviceimpl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.labmanagement.model.entity.Etablissement;
import com.labmanagement.repository.EtablissementRepository;
import com.labmanagement.service.IEtablissementService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class EtablissementService implements IEtablissementService {

	private final EtablissementRepository etablissementRepository;

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
	public Etablissement updateEtablissement(Etablissement etablissement) {

		return etablissementRepository.save(etablissement);
	}

	@Override
	public void deleteEtablissement(Long id) {
		etablissementRepository.deleteById(id);
	}

}
