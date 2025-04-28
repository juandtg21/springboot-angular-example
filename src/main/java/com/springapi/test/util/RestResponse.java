package com.springapi.test.util;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class RestResponse {

	private Integer responseCode;
	private String message;

	public RestResponse(Integer responseCode) {
		super();
		this.responseCode = responseCode;
	}

	public RestResponse(Integer responseCode, String message) {
		super();
		this.responseCode = responseCode;
		this.message = message;
	}
}
