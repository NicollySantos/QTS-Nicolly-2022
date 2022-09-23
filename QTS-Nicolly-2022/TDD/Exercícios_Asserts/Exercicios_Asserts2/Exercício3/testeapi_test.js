import {
    assertEquals,
    assertStringIncludes,
    assertArrayIncludes,
} from "http://deno.land/std/testing/asserts.ts"

let emissora = 'REDE TV'
let programas = ['A Tarde É Sua', 'Encrenca', 'Leitura Dinâmica', 'Pânico na TV']

Deno.test("Teste de assertions (API)", () => {
    assertEquals(emissora, "REDE TV"); 
    assertStringIncludes(emissora, "TV");    
})

Deno.test("Testando array do professor (API)", ()=> {
    assertArrayIncludes(programas, 
        ["Encrenca", "Leitura Dinâmica", "João Kléber Show"],
        "Opa! Algo deu errado!");
})