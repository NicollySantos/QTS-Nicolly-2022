//execução dos testes usar deno test acrescente --help
//esse lembrete é pra mim, no terminal wsl2 execute o comando source ~/.bashrc


let a = 'oi'
let b = 'olá'

Deno.test("Teste do oi (NO API)", () => {
    if (a != "oi") {
        throw new Error(`${a} não é oi`);
    }
})

Deno.test("Não pode ser oi (NO API)", () => {
    if (b == "oi") {
        throw new Error(`${a}  é oi`);
    }
})
