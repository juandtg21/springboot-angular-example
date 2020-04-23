package com.springapi.test.util;

import java.util.List;

public class QueryResult {
	
	private int totalRecords;
	private List<Object> list;
	
	public int getTotalRecords() {
		return totalRecords;
	}
	public void SetTotalRecords(int totalRecords) {
		this.totalRecords = totalRecords;
	}
	public List<Object> GetList() {
		return list;
	}
	public void SetList(List<Object> list) {
		this.list = list;
	}
	

}
