import {
    assertEquals,
    assertStringIncludes,
    assertArrayIncludes,
} from "http://deno.land/std/testing/asserts.ts" 

let aluno = 'Janine Diniz'
let professores = ['José', 'Maria','Afonso', 'João']

Deno.test("Teste de assertions (API)", () => {
    assertEquals(aluno, "Janine Diniz");   
    assertStringIncludes(aluno, "Janine");    
})

Deno.test("Testando array do professor (API)", ()=> {
    assertArrayIncludes(professores, 
        ["Maria", "Afonso", "Josué"],
        "Opa! Algo deu errado!"); //mensagem  caso haja erro
})
