package com.labmanagement.service;

import java.util.List;

import com.labmanagement.model.entity.Dotation_Project;

public interface IDotationProjectService {

    Dotation_Project saveDotationProject(Dotation_Project dotationProject);

    Dotation_Project getDotationProjectById(Long projetId, Long membreId);

    void deleteDotationProject(Long projetId, Long membreId);

	List<Dotation_Project> getAllDotationProjects();

    // Add more methods as needed for your application

}
