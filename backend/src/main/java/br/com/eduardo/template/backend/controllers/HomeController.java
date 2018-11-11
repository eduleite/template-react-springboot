package br.com.eduardo.template.backend.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {

    @RequestMapping(value = {"/", "/paginaA/**", "/paginaB/**"})
    public String index() {
        return "/index.html";
    }

}
