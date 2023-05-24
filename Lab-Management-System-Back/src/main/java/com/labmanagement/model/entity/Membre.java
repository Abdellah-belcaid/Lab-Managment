package com.labmanagement.model.entity;

import java.util.Collection;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

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
	@JsonProperty(access = Access.WRITE_ONLY)
	private Laboratoire laboratoire;

	@JsonProperty(access = Access.READ_ONLY)
	@OneToMany(mappedBy = "membre")
	private Collection<ExpressionBesoin> expressionBesoins;

	@JsonProperty(access = Access.READ_ONLY)
	@OneToMany(mappedBy = "membre")
	private Collection<Dotation_Project> dotationProjects;

	@JsonProperty(access = Access.READ_ONLY)	
	@OneToMany(mappedBy = "membre")
	private Collection<Dotation_Membre> dotation_Membres;

}
