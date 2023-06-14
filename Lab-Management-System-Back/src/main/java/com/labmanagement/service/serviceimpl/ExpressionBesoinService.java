package com.labmanagement.service.serviceimpl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.labmanagement.model.entity.ExpressionBesoin;
import com.labmanagement.model.entity.TypeBesoin;
import com.labmanagement.model.enums.ExpressionBesoinType;
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
		TypeBesoin typeBesoin = typeBesoinRepository.save(expressionBesoin.getTypeBesoin());
		expressionBesoin.setTypeBesoin(typeBesoin);
		return expressionBesoinRepository.save(expressionBesoin);
	}

	@Override
	public ExpressionBesoin update(ExpressionBesoin expressionBesoin) {
		TypeBesoin type = expressionBesoinRepository.findById(expressionBesoin.getId()).get().getTypeBesoin();
		ExpressionBesoinType expressionBesoinType = expressionBesoin.getTypeBesoin().getType();

		type.setType(expressionBesoinType);

		expressionBesoin.setTypeBesoin(type);	
		return expressionBesoinRepository.save(expressionBesoin);
	}

	@Override
	public void delete(Long id) {
		expressionBesoinRepository.deleteById(id);
	}

}
