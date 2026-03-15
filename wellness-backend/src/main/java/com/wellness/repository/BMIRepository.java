package com.wellness.repository;

import com.wellness.entity.BMIRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface BMIRepository extends JpaRepository<BMIRecord, Long> {
    
    List<BMIRecord> findByUser_Id(Long userId);
}
