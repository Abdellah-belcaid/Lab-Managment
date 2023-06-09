package com.labmanagement.service.serviceimpl;

import java.util.Collection;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.labmanagement.model.entity.ExpressionBesoin;
import com.labmanagement.model.entity.TypeBesoin;
import com.labmanagement.repository.ExpressionBesoinRepository;
import com.labmanagement.repository.TypeBesoinRepository;
import com.labmanagement.service.IExpressionBesoinService;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class ExpressionBesoinService implements IExpressionBesoinService {

	private final ExpressionBesoinRepository expressionBesoinRepository;
	private final TypeBesoinRepository typeBesoinRepository;

	@Override
	public ExpressionBesoin findById(Long id) {
		Optional<ExpressionBesoin> optionalExpressionBesoin = expressionBesoinRepository.findById(id);
		return optionalExpressionBesoin.orElse(null);
	}

	@Override
	public List<ExpressionBesoin> findAll() {
		return expressionBesoinRepository.findAll();
	}

	@Override
	public List<ExpressionBesoin> findByMembreId(Long membreId) {
		return expressionBesoinRepository.findByMembreId(membreId);
	}

	@Override
	public List<ExpressionBesoin> findByResponsableId(Long responsableId) {
		return expressionBesoinRepository.findByResponsableId(responsableId);
	}

	@Override
	public ExpressionBesoin create(ExpressionBesoin expressionBesoin) {
		try {
			Collection<TypeBesoin> typeBesoins = expressionBesoin.getTypeBesoins();

			// Save the ExpressionBesoin entity
			ExpressionBesoin savedExpressionBesoin = expressionBesoinRepository.save(expressionBesoin);

			// Set the saved ExpressionBesoin entity to the TypeBesoin entities using
			// streams
			List<TypeBesoin> savedTypeBesoins = typeBesoins.stream()
					.peek(typeBesoin -> typeBesoin.setExpressionBesoin(savedExpressionBesoin))
					.collect(Collectors.toList());

			// Save the TypeBesoin entities
			savedTypeBesoins = typeBesoinRepository.saveAll(savedTypeBesoins);

			// Set the saved TypeBesoin entities to the ExpressionBesoin entity
			savedExpressionBesoin.setTypeBesoins(savedTypeBesoins);

			// Return the saved ExpressionBesoin entity
			return savedExpressionBesoin;
		} catch (Exception e) {
			// Handle any exceptions that occur during the save process
			throw new RuntimeException("Failed to create ExpressionBesoin: " + e.getMessage(), e);
		}
	}

	@Override
	public ExpressionBesoin update(ExpressionBesoin expressionBesoin) {
		try {
			Collection<TypeBesoin> typeBesoins = expressionBesoin.getTypeBesoins();

			// Check if the ExpressionBesoin entity exists
			if (!expressionBesoinRepository.existsById(expressionBesoin.getId())) {
				throw new RuntimeException("ExpressionBesoin not found with ID: " + expressionBesoin.getId());
			}

			// Save the ExpressionBesoin entity
			ExpressionBesoin updatedExpressionBesoin = expressionBesoinRepository.save(expressionBesoin);

			// Set the updated ExpressionBesoin entity to the TypeBesoin entities using
			// streams
			List<TypeBesoin> savedTypeBesoins = typeBesoins.stream()
					.peek(typeBesoin -> typeBesoin.setExpressionBesoin(updatedExpressionBesoin))
					.collect(Collectors.toList());

			// Save the TypeBesoin entities
			savedTypeBesoins = typeBesoinRepository.saveAll(savedTypeBesoins);

			// Set the saved TypeBesoin entities to the updated ExpressionBesoin entity
			updatedExpressionBesoin.setTypeBesoins(savedTypeBesoins);

			// Return the updated ExpressionBesoin entity
			return updatedExpressionBesoin;
		} catch (Exception e) {
			// Handle any exceptions that occur during the update process
			throw new RuntimeException("Failed to update ExpressionBesoin: " + e.getMessage(), e);
		}
	}

	@Override
	public void delete(Long id) {
		try {
			// Check if the ExpressionBesoin entity exists
			if (!expressionBesoinRepository.existsById(id)) {
				throw new RuntimeException("ExpressionBesoin not found with ID: " + id);
			}

			// Get the ExpressionBesoin entity
			ExpressionBesoin expressionBesoin = expressionBesoinRepository.findById(id).orElse(null);

			// Delete the associated TypeBesoin entities using streams
			expressionBesoin.getTypeBesoins().stream().peek(typeBesoin -> typeBesoin.setExpressionBesoin(null))
					.forEach(typeBesoinRepository::delete);

			// Delete the ExpressionBesoin entity
			expressionBesoinRepository.deleteById(id);
		} catch (Exception e) {
			// Handle any exceptions that occur during the delete process
			throw new RuntimeException("Failed to delete ExpressionBesoin with ID: " + id + ". " + e.getMessage(), e);
		}
	}

}
