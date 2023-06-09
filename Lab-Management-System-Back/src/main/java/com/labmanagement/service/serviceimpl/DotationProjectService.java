package com.labmanagement.service.serviceimpl;

import com.labmanagement.model.entity.Dotation_Project;
import com.labmanagement.repository.DotationProjetRepository;
import com.labmanagement.service.IDotationProjectService;

import lombok.RequiredArgsConstructor;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class DotationProjectService implements IDotationProjectService {

	private final DotationProjetRepository dotationProjetRepository;

	@Override
	public Dotation_Project saveDotationProject(Dotation_Project dotationProject) {
		return dotationProjetRepository.save(dotationProject);
	}

	@Override
	public List<Dotation_Project> getAllDotationProjects() {
		return dotationProjetRepository.findAll();
	}

	@Override
	public Dotation_Project getDotationProjectById(Long projetId, Long membreId) {
		return dotationProjetRepository.findById(new Dotation_Project.DotationProjectId(projetId, membreId))
				.orElse(null);
	}

	@Override
	public void deleteDotationProject(Long projetId, Long membreId) {
		dotationProjetRepository.deleteById(new Dotation_Project.DotationProjectId(projetId, membreId));
	}
	
	

	// Add more methods as needed for your application
	
	 @Override
    public List<Dotation_Project> getAllByProjetId(Long projetId) {
        return dotationProjetRepository.findAllById_ProjetId(projetId);
    }
    @Override
    public List<Dotation_Project> getAllByMembreId(Long membreId) {
        return dotationProjetRepository.findAllById_MembreId(membreId);
    }

}
