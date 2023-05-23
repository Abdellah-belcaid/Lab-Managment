package com.labmanagement.model.entity;

import java.sql.Date;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ExpressionBesoin {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private double montant;
	private Date demandeDate;
	private Date validatDate;

	@ManyToOne
	@JsonBackReference
	private Membre membre;

	@ManyToOne
	@JsonBackReference
	private Responsable responsable;

	@ManyToOne
	@JsonBackReference
	private TypeBesoin typeBesoin;
}
