package com.studentmark.service;

import com.studentmark.model.Student;
import com.studentmark.repository.StudentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {
    private final StudentRepository repo;

    public StudentService(StudentRepository repo) {
        this.repo = repo;
    }

    public List<Student> getAll() {
        return repo.findAll();
    }

    public Student create(Student student) {
        return repo.save(student);
    }

    public Student update(Student student) {
        return repo.save(student);
    }

    public void delete(String id) {
        repo.deleteById(id);
    }
}
