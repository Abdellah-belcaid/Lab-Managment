package com.labmanagement.service.serviceimpl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.labmanagement.model.entity.Director;
import com.labmanagement.model.entity.Laboratoire;
import com.labmanagement.repository.DirectorRepository;
import com.labmanagement.service.IDirectorService;
import com.labmanagement.service.ILaboratoireService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class DirectorService2 implements IDirectorService {
	private final DirectorRepository directorRepository;
	private final ILaboratoireService laboratoireService;

	@Override
	public List<Director> getAllDirectors() {
		return directorRepository.findAll();
	}

	@Override
	public Director getDirectorById(Long id) {
		return directorRepository.findById(id).orElse(null);
	}

	@Override
	public Director saveDirector(Director director) {

		Laboratoire lab = laboratoireService.findLaboratoireById(director.getLaboratoire().getId());
		Director savedDirector = directorRepository.save(director);
		lab.setDirector(savedDirector);
		laboratoireService.updateLaboratoire(lab);
		return savedDirector;
	}

	@Override
	public void deleteDirector(Long id) {
		Optional<Director> optionalDirector = directorRepository.findById(id);
		if (optionalDirector.isPresent()) {
			directorRepository.delete(optionalDirector.get());
		} else {
//            throw new NotFoundException("Director not found");
		}
	}

	@Override
	public Director updateDirector(Long id, Director director) {
		director.setId(id);

		return directorRepository.save(director);
	}

}
