package com.springapi.test.swagger;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


import com.google.common.base.Predicate;
import com.google.common.collect.Lists;

import springfox.documentation.builders.ApiInfoBuilder;


import static springfox.documentation.builders.PathSelectors.*;


import java.util.List;


import static com.google.common.base.Predicates.*;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.ApiKey;
import springfox.documentation.service.AuthorizationScope;
import springfox.documentation.service.SecurityReference;

import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spi.service.contexts.SecurityContext;
import springfox.documentation.spring.web.plugins.Docket;

import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
public class swaggerConfig {
    @Bean
    public Docket swaggerSpringfoxDocket() {
        return new Docket(DocumentationType.SWAGGER_2)
            .apiInfo(apiInfo())
            .securityContexts(Lists.newArrayList(securityContext()))
            .securitySchemes(Lists.newArrayList(apiKey()))
        	.select()
            .paths(paths())
            .build();
    }

    private ApiKey apiKey() {
        return new ApiKey("JWT", "Authorization", "header");
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

    private SecurityContext securityContext() {
        return SecurityContext.builder()
            .securityReferences(defaultAuth())
            .forPaths(paths())
            .build();
    }

    List<SecurityReference> defaultAuth() {
        AuthorizationScope authorizationScope
            = new AuthorizationScope("global", "accessEverything");
        AuthorizationScope[] authorizationScopes = new AuthorizationScope[1];
        authorizationScopes[0] = authorizationScope;
        return Lists.newArrayList(
            new SecurityReference("JWT", authorizationScopes));
    }
}
