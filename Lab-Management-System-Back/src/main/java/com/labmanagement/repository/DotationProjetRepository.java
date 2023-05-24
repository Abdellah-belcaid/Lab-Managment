package com.labmanagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.labmanagement.model.entity.Dotation_Project;
import com.labmanagement.model.entity.Dotation_Project.DotationProjectId;;

public interface DotationProjetRepository extends JpaRepository<Dotation_Project, DotationProjectId> {

}
