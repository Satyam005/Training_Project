package com.ibm.diypopups.repository;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.ibm.diypopups.model.Advertisements;
//import com.ibm.diypopups.model.Post;
//@Repository
public interface AdvertisementRepository extends JpaRepository<Advertisements, Long>{
	//List<Advertisements> findByUidNotIn(List<Long> userIds);
	List<Advertisements> findByEidIn(List<Long> userIds);
	
	@Query("select distinct(categoryadd) from Advertisements")
	List<String> findAllCategory();
	
	@Query(value="Select * from advertisements adv where adv.categoryadd= :category",
			nativeQuery=true)
	public List<Advertisements> getByCategory(@Param("category") String category);
	
}