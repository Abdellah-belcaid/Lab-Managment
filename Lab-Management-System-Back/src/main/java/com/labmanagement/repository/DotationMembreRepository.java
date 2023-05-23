package com.labmanagement.repository;

import com.labmanagement.model.entity.Dotation_Membre;
import com.labmanagement.model.entity.Dotation_Membre.DotationMembreId;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DotationMembreRepository extends JpaRepository<Dotation_Membre, DotationMembreId> {

	
}
