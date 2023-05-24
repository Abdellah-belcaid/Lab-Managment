package com.labmanagement.model.entity;

import java.sql.Date;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

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
	@JsonProperty(access = Access.WRITE_ONLY)
	private Membre membre;

	@ManyToOne
	@JsonProperty(access = Access.WRITE_ONLY)
	private Responsable responsable;

	@ManyToOne
	@JsonProperty(access = Access.WRITE_ONLY)
	private TypeBesoin typeBesoin;
}
