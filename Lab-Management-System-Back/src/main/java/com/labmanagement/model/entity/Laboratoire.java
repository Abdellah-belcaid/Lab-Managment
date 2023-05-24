package com.labmanagement.model.entity;

import java.util.Collection;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
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
public class Laboratoire {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String nom;
	private String email;
	private String adresse;
	private String telephone;
	private String responsable; // Head/Principal Investigator of the lab
	private String domaine; // Research domain/focus area
	private String description; // Brief description of the lab's research activities

	@ManyToOne
	@JsonProperty(access = Access.WRITE_ONLY)
	@JoinColumn(nullable = false)
	private Etablissement etablissement;

	@JsonProperty(access = Access.READ_ONLY)
	@OneToMany(mappedBy = "laboratoire")
	private Collection<Membre> membres;

}
