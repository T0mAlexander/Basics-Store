# Basics Store

## Requisitos funcionais

- [ ] Cadastro de usuários e vendedores
- [ ] Cadastro usando serviços de terceiros (e.g Google, Facebook)
- [ ] Confirmação de endereço de e-mail
- [ ] Autenticação e inicialização de sessão
- [ ] Recuperação de senha via e-mail
- [ ] Bloqueio de contas após 3 tentativas falhas de sessão
- [ ] Alertas de múltiplas tentativas falhas no e-mail
- [ ] Gerenciamento e edição de perfil de vendedor ou usuário
- [ ] Cadastro de endereço para entregas
- [ ] Compras e métodos de pagamento
- [ ] Salvamento de produtos no carrinho ou lista de desejos
- [ ] Acesso ao perfil de um vendedor cadastrado
- [ ] Cadastrar produtos para venda

## Regras de negócio

- [ ] Expiramento de token de autenticação de sessão em 12 horas
- [ ] Prevenção de cadastro de endereços de email duplicados
- [ ] Cálculo de frete
- [ ] Rastreamento de encomenda
- [ ] Integração e validação de métodos de pagamentos (Pix, boleto, crédito e débito)
- [ ] Controle de estoque
- [ ] Prevenção de compras de produtos sem estoque disponível
- [ ] Confirmação de compra
- [ ] Direito ao arrependimento após 7 dias do recebimento
- [ ] Politícas de devolução por motivo plausível
- [ ] Avaliação de produtos pós recebimento
- [ ] Cálculo de avaliação de um vendedor
- [ ] Algoritmo de recomendação inteligente baseado no histórico e preferências do usuário
- [ ] Sistema de conexões sociais com vendedores
- [ ] Buscas de produtos com filtragem (e.g nome, cor, material)
- [ ] Notificações sobre compras, ofertas promocionais, produtos novos, reposição do estoque de itens favoritados

## Requisitos não funcionais

- [ ] Persistência de dados com PostgreSQL
- [ ] Disponibilização no idioma inglês do Reino Unido
- [ ] Criptografia de dados sensíveis
- [ ] Identificação de usuários com JSON Web Token (JWT)
- [ ] Performance e escalabilidade
- [ ] Segurança de dados
- [ ] Compartilhamento de lista de desejos
- [ ] Persistência da escolhe de tema, itens no carrinho e lista de desejos
- [ ] Ouvidoria para feedbacks, sugestões de funcionalidades e melhorias sistêmicas