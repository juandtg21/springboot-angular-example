package com.springapi.test.swagger;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.google.common.base.Predicate;

import springfox.documentation.builders.ApiInfoBuilder;
import static springfox.documentation.builders.PathSelectors.*;
import static com.google.common.base.Predicates.*;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
public class swaggerConfig {


	@Bean
	public Docket studentApi() {

		return new Docket(DocumentationType.SWAGGER_2)
				.apiInfo(apiInfo())
				.select()
				.paths(paths())
				.build();
	}
	private ApiInfo apiInfo() {

		return new ApiInfoBuilder()
				.title("Student REST API example")
				.description("RESTful Api for Students")
				.license("License")
				.version("1.0")
				.build();
	}
	
	
	@SuppressWarnings("unchecked")
	private Predicate<String> paths() {
	    return or(
	        regex("/api.*"));
	        /*regex("/contacts.*"),
	        regex("/pet.*"),
	        regex("/springsRestController.*"),
	        regex("/test.*"));*/
	  }
	

}