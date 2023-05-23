package com.labmanagement.service;

import java.util.Collection;
import java.util.List;

import com.labmanagement.model.entity.ExpressionBesoin;
import com.labmanagement.model.entity.Laboratoire;
import com.labmanagement.model.entity.Membre;
import com.labmanagement.model.entity.Dotation_Project;

public interface IMembreService {

	Membre addMembre(Membre membre);

	List<Membre> findAllMembres();

	Membre findMembreById(Long id);

	Membre updateMembre(Membre membre);

	void deleteMembre(Long id);

	Laboratoire findLaboratoireByMembreId(Long id);

	Collection<ExpressionBesoin> findExpressionBesoinsByMembreId(Long id);

	Collection<Dotation_Project> findDotationProjectsByMembreId(Long id);

}
