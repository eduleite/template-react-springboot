package br.com.eduardo.template.backend.api;

import br.com.eduardo.template.backend.model.TesteModel;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Random;

@RestController
@RequestMapping("/api/teste")
public class Teste {

    @RequestMapping("get")
    public TesteModel getTesteModel() {
        TesteModel result = new TesteModel();
        result.setId(new Random().nextInt());
        result.setNome("Nome de alguem " + result.getId());
        return result;
    }

}
