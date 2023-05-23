package com.labmanagement.service.serviceimpl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.labmanagement.model.entity.DotationUcaRech;
import com.labmanagement.service.IDotationUcaRechService;
import com.labmanagement.repository.DotationUcaRechRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class DotationUcaRechService implements IDotationUcaRechService {

	private final DotationUcaRechRepository DotationUcaRechRepository;

	@Override
	public DotationUcaRech addDotationUcaRech(DotationUcaRech dotationUcaRech) {
		// Perform validation or other operations here
		// ...

		return DotationUcaRechRepository.save(dotationUcaRech);
	}

	@Override
	public List<DotationUcaRech> findAllDotationUcaRech() {
		return DotationUcaRechRepository.findAll();
	}

	@Override
	public DotationUcaRech findDotationUcaRechById(Long id) {
		Optional<DotationUcaRech> optionalDotationUcaRech = DotationUcaRechRepository.findById(id);
		return optionalDotationUcaRech.orElse(null);
	}

	@Override
	public DotationUcaRech updateDotationUcaRech(DotationUcaRech dotationUcaRech) {
		// Perform validation or other operations here
		// ...

		return DotationUcaRechRepository.save(dotationUcaRech);
	}

	@Override
	public void deleteDotationUcaRech(Long id) {
		DotationUcaRechRepository.deleteById(id);
	}
}
