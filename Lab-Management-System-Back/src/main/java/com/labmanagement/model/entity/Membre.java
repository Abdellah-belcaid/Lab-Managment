package com.labmanagement.model.entity;

import java.util.Collection;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Membre {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String name;	
	private String designation; // Designation or role of the member in the lab
	private String email;
	private String phoneNumber;
	private String department; // Department or academic unit the member belongs to
	private String researchArea; // Research area or specialization of the member
	private String qualification; // Qualification or highest degree obtained by the member

	@ManyToOne
	@JsonIgnoreProperties("membres")
	private Laboratoire laboratoire;

	@OneToMany(mappedBy = "membre")
	@JsonIgnoreProperties("membre")
	private Collection<ExpressionBesoin> expressionBesoins;

	@OneToMany(mappedBy = "membre")
	@JsonIgnoreProperties("membre")
	private Collection<Dotation_Project> dotationProjects;

	@OneToMany(mappedBy = "membre")
	@JsonIgnoreProperties("membre")
	private Collection<Dotation_Membre> dotation_Membres;

}
