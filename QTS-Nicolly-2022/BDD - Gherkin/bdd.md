# Funcionalidade: Login
>Como um usuário do sistema
>
>Fulano quer completar o Login
>
>Para que ele tenha acesso as funcionalidades de um usuário logado
>
## Contexto:
>**Dado** que “Fulano” possui uma conta no sistema
### Cenário: Login válido
>**E** ele acessa a página de Login
>
>**E** preenche suas credenciais válidas
>
>**Quando** ele aciona o botão “logar”
>
>**Então** ele deve ser redirecionado para a página do usuário
>
### Cenário: Login com email ou senha incorretos
>**E** ele acessa a página de Login
>
>**E** preenche suas credenciais com o email ou a senha incorreta
>
>**Quando** ele aciona o botão “logar”
>
>**Então** uma mensagem “Email ou senha incorretos” deve ser exibida

# Funcionalidade: Cadastro
>Como um usuário do sistema 
>
>Fulano quer completar o Cadastro
>
>Para que ele tenha acesso as funcionalidades de um usuário cadastrado
>
## Contexto:
>**Dado** que “Fulano” deseja possuir uma conta no sistema
### Cenário: Cadastro válido
>**E** ele acessa a página de cadastro
>
>**E** preenche suas credenciais válidas
>
>**Quando** ele aciona o botão “cadastrar”
>
>**Então** ele deve ser redirecionado para a página do usuário
>
### Cenário: Cadastro com email incorreto
>**E** ele acessa a página de Cadastro
>
>**E** preenche suas credenciais com o email incorreto
>
>**Quando** ele aciona o botão “cadastrar”
>
>**Então** uma mensagem “Email incorreto” deve ser exibida
>
### Cenário: Cadastro com senha “fraca” ou “média”
>**E** ele acessa a página de Cadastro
>
>**E** preenche suas credenciais com a senha “fraca” ou “média”
>
>**Quando** ele aciona o botão “cadastrar”
>
>**Então** uma mensagem “A senha não é forte” deve ser exibida
>
### Cenário: Cadastro com tamanho de telefone incorreto 
>**E** ele acessa a página de Cadastro
>
>**E** preenche suas credenciais com o tamanho de telefone incorreto
>
>**Quando** ele aciona o botão “cadastrar”
>
>**Então** uma mensagem “Tamanho de telefone incorreto” deve ser exibida
>
### Cenário: Cadastro com confirmação de senha incorreta 
>**E** ele acessa a página de Cadastro
>
>**E** preenche suas credenciais com a confirmação de senha incorreta
>
>**Quando** ele aciona o botão “cadastrar”
>
>**Então** uma mensagem “Confirmação de senha incorreta” deve ser exibida
>
# Funcionalidade: Geração de Certificado
>Como um usuário do sistema
>
>Fulano quer gerar seu certificado 
>
>Para que ele tenha acesso as funcionalidades do certificado
>
## Contexto:
>**Dado** que o Fulano já possui uma conta no sistema
### Cenário: Geração de Certificado válida
>**E** ele acessa a página de geração de certificado
>
>**E** seleciona o tipo de certificado
>
>**E** preenche os dados do formulário corretamente
>
>**Quando** aciona o botão “gerar”
>
>**Então** o certificado é gerado e armazenado no sistema
>
### Cenário: Geração de Certificado com CPF e CNPJ inválido
>**E** ele acessa a página de geração de certificado
>
>**E** seleciona o tipo de certificado
>
>**E** preenche os dados do formulário incorretamente
>
>**Quando** aciona o botão “gerar”
>
>**Então** o sistema exibe um erro informando que o CPF/CNPJ está errado
>

# Funcionalidade: Assinatura de Arquivo
>Como um usuário do sistema
>
>Fulano quer assinar seu arquivo
>
>Para que ele tenha seu arquivo assinado
>
## Contexto:
>**Dado** que o Fulano já possui uma conta no sistema
### Cenário: Assinatura de Arquivo válida
>**E** ele acessa a página de assinatura de certificado 
>
>**E** ele seleciona o arquivo que deseja assinar
>
>**E** seleciona o certificado que ele deseja utilizar
>
>**E** seleciona a área da assinatura
>
>**Quando** aciona o botão “baixar”
>
>**Então** o arquivo assinado é gerado e armazenado no sistema
>
### Cenário: Assinatura de Arquivo inválida – arquivo com outra extensão que não seja .PDF
>**E** ele acessa a página de assinatura de certificado 
>
>**E** ele seleciona o arquivo que deseja assinar com uma extensão diferente
>
>**Quando** aciona o botão “assinar”
>
>**Então** o sistema exibe um erro informando que o o arquivo está com a extensão errada 
>

# Funcionalidade: Gerenciamento do Perfil
>Como um usuário do sistema
>
>Fulano quer gerenciar seu perfil
>
>Para que ele possa alterar seus dados
>
## Contexto:
>**Dado** que o Fulano já possui uma conta no sistema
### Cenário: Alteração dos dados válidas
>**E** ele acessa a página de gerenciamento de perfil
>
>**E** seleciona o dado que deseja alterar
>
>**E** altera seus dados corretamente 
>
>**Quando** aciona o botão “salvar”
>
>**Então** os dados são substituídos e salvos no sistema
>
### Cenário: Alteração dos dados inválidos – E-mail e Telefone
>**E** ele acessa a página de gerenciamento de perfil
>
>**E** seleciona o dado que deseja alterar
>
>**E** altera seus dados incorretamente 
>
>**Quando** aciona o botão “salvar”
>
>**Então** o sistema exibe um erro informando que o E-mail/Telefone está errado
>
### Cenário: Alteração da senha corretamente
>**E** ele acessa a página de gerenciamento de perfil
>
>**Quando** aciona o botão “alterar senha’
>
>**E** altera a senha corretamente
>
>**Quando** aciona o botão “salvar”
>
>**Então** os dados são substituídos e salvos no sistema
>
### Cenário: Alteração da senha incorretamente
>**E** ele acessa a página de gerenciamento de perfil
>
>**Quando** aciona o botão “alterar senha’
>
>**E** altera a senha incorretamente
>
>**Quando** aciona o botão “salvar”
>
>**Então** o sistema exibe um erro informando que a nova senha é inválida 
>

