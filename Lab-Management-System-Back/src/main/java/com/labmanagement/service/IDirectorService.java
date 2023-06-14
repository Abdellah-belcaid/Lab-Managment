package com.labmanagement.service;

import com.labmanagement.model.entity.Director;

import java.util.List;

public interface IDirectorService {
    List<Director> getAllDirectors();

    Director getDirectorById(Long id);

    Director saveDirector(Director director);

    void deleteDirector(Long id);

	Director updateDirector(Long id, Director director);
}
