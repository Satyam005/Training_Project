package com.ibm.diypopups.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ibm.diypopups.model.perdayclicks;

public interface DateRepository extends JpaRepository<perdayclicks,Long> {
	
	@Query(value="Select Count(*) from perdayclicks pdc where pdc.eid= :eid and pdc.sysdate=(Select curdate())", nativeQuery=true)
	public int DailyClickLimit(@Param("eid") long eid);
	
	
	@Query(value="Select pdc.sl from perdayclicks pdc where pdc.eid= :eid and pdc.sysdate=(Select curdate())", nativeQuery=true)
	public long GetUserSl(@Param("eid") long eid);

	@Transactional
	@Query(value="Select pdc.clicklimit from perdayclicks pdc where pdc.eid= :eid and pdc.sysdate=(Select curdate())", nativeQuery=true)
	public long getClickLimit(@Param("eid") long eid);
	
}

