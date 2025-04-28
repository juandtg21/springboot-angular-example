package com.springapi.test.util;

import java.util.List;

public class QueryResult {

    private List<Object> list;

	public void SetTotalRecords(int totalRecords) {
    }
	public List<Object> GetList() {
		return list;
	}
	public void SetList(List<Object> list) {
		this.list = list;
	}
}
