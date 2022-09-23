import {
    assertEquals,
    assertStringIncludes,
    assertArrayIncludes,
} from "http://deno.land/std/testing/asserts.ts"

let cores = 'Azul Turquesa'
let cores_selecionadas = ['Vermelho', 'Rosa', 'Roxo', 'Amarelo']

Deno.test("Teste de assertions (API)", () => {
    assertEquals(cores, "Azul Turquesa"); 
    assertStringIncludes(cores, "Azul");    
})

Deno.test("Testando array do professor (API)", ()=> {
    assertArrayIncludes(cores_selecionadas, 
        ["Rosa", "Roxo", 'Lilás'],
        "Opa! Algo deu errado!");
})