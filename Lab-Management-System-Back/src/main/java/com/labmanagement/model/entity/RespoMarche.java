package com.labmanagement.model.entity;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@DiscriminatorValue(value = "Marche")
@EqualsAndHashCode(callSuper = false)
public class RespoMarche extends Responsable {

	private String marketSegment;
	private int experienceYears;
}
