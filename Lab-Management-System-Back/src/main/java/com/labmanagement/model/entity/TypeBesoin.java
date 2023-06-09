package com.labmanagement.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.labmanagement.model.enums.ExpressionBesoinType;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
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
public class TypeBesoin {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Enumerated(EnumType.STRING)
	private ExpressionBesoinType type;

	@ManyToOne
    @JoinColumn(name = "expression_besoin_id")
	@JsonIgnoreProperties("typeBesoins")
	private ExpressionBesoin expressionBesoin;
}
