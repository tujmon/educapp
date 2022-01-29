<h2 align="center">EducApp</h2>

___




<p align="center">
  <a href="LICENSE">
    <img alt="License" src="https://img.shields.io/badge/license-MIT-%23F8952D">
  </a>
</p>

___
<!--
<h3 align="center">
  <a href="#information_source-sobre">Sobre</a>&nbsp;|&nbsp;
  <a href="#interrobang-motivo">Motivo</a>&nbsp;|&nbsp;
  <a href="#seedling-requisitos-mínimos">Requisitos</a>&nbsp;|&nbsp;
  <a href="#rocket-tecnologias-utilizadas">Tecnologias</a>&nbsp;|&nbsp;
  <a href="#link-como-contribuir">Como Contribuir</a>&nbsp;|&nbsp;
  <a href="#licença">Licença</a>&nbsp;|&nbsp;
  <a href="#colaboradores">Colaboradores</a>
</h3>
-->
___

# Plano do Projeto

### Introdução
O intuito deste projeto é o desenvolvimento de uma plataforma de comunicação entre alunos e professores, chamada de EducApp. O EducApp, além de facilitar o encontro entre as pessoas que buscam aprender um novo conteúdo e profissionais disponíveis para ofertar sobre esse assunto, também é planejado para ser um ambiente de agendamento, tanto para aulas únicas ou para combinar encontros frequentes. A proposta da execução deste trabalho visa suprir uma necessidade que se mostrou muito presente no contexto atual devido a pandemia.

### Escopo do projeto

- O propósito do projeto é facilitar o encontro entre pessoas que buscam aprender um novo conteúdo, seja com intuito profissional quanto por hobby, com instrutores disponíveis que ofertam do conteúdo desejado. Para tal, o projeto oferecerá um portal de cadastro das duas categorias de usuário para que esse contato posso ocorrer;
- Para fins de classificação, será possível realizar avaliação para ambos os usuários (profissionais e alunos);
- Oferecer um ambiente que facilicita o contato entre as duas partes, permitindo a comunicação na própria plataforma; 
- O projeto visa tanto auxiliar pessoas qualificadas que buscam uma renda extra quanto pessoas que buscam aprender um determinado conteúdo. Na plataforma, o instrutor registra o valor da sua hora/aula, ficando a critério do mesmo renegociar com os alunos interessados.
- O projeto tem como objetivo ser intuitivo e de fácil entendimento. As opções estarão claras e as informações tanto de busca dos alunos quanto de conhecimento dos professores estarão bem ilustradas e em destaque no perfil de ambos.
- Todo o contato entre o aluno e o professor será feito pela plataforma, e todas as conversas ficarão salvas. Haverá uma opção de reporte dos dois usuários após uma aula, podendo reportar cada ação indevida. As informações dos usuários ficarão privadas, sem acesso por parte de outros usuários. O pagamento também será feito automaticamente no formato de cartão. 

### Organização do projeto
- Descrição da estrutura organizacional do projeto:
    - Login - onde o usuário podera ter acesso a plataforma;
    - Cadastro - onde o usuário pode se cadastrar;
    - Recuperação de senha - para caso o usuário esqueça a senha;
    - Página principal - página de boas vindas e onde se tem acesso à maioria dos componentes da plataforma; 
    - Página de Perfil/Configuração - onde o usuário poderá alterar o nome, senha informações de usuário;
    - Página de busca - onde o usuário poderá procurar por cursos e professores da região ou de determinado assunto;
    - Chat - onde o usuário poderá se comunicar com os respectivos professores;
    - Dashboard - onde os alunos terão acesso a um calendário com as datas de aulas e outras funcionalidades para entrar em aulas.

<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAwMAAAE3CAYAAAD2Vp2xAAAAAXNSR0IArs4c6QAABwh0RVh0bXhmaWxlACUzQ214ZmlsZSUyMGhvc3QlM0QlMjJhcHAuZGlhZ3JhbXMubmV0JTIyJTIwbW9kaWZpZWQlM0QlMjIyMDIyLTAxLTIwVDAxJTNBNDUlM0ExNC40NDBaJTIyJTIwYWdlbnQlM0QlMjI1LjAlMjAoV2luZG93cyUyME5UJTIwMTAuMCUzQiUyMFdpbjY0JTNCJTIweDY0KSUyMEFwcGxlV2ViS2l0JTJGNTM3LjM2JTIwKEtIVE1MJTJDJTIwbGlrZSUyMEdlY2tvKSUyMENocm9tZSUyRjk3LjAuNDY5Mi43MSUyMFNhZmFyaSUyRjUzNy4zNiUyMEVkZyUyRjk3LjAuMTA3Mi42MiUyMiUyMGV0YWclM0QlMjJfV2N6RDMxUExKdVRSSm03Y2hrUyUyMiUyMHZlcnNpb24lM0QlMjIxNi40LjIlMjIlMjB0eXBlJTNEJTIyZGV2aWNlJTIyJTNFJTNDZGlhZ3JhbSUyMGlkJTNEJTIyQzVSQnM0M29EYS1LZHpaZU50dXklMjIlMjBuYW1lJTNEJTIyUGFnZS0xJTIyJTNFN1ZsYmw1b3dFUDQxUHJvSGlDQSUyQnJycHVMOXNlVzl2dTVhVW5Rb0Iwa2RBUXZQVFhONUZBUUZ6WFhZOHJwJTJGVkZtV0dTa1BtJTJCbWNsQUN3eG15MnNLNCUyQkFUY1ZIWU1qUjMyUUxEbG1Ib2xxN3hQNkZaWlJwYjYyUUtuMkpYR2luRkJQOUJVaW5IJTJCU2wyVVZJeFpJU0VETWRWcFVPaUNEbXNvb09Va2tYVnpDTmhkZFVZJTJCcWltbURnd3JHdHZzY3NDdVF1anElMkZUdkVQYURmR1hkNm1WM1pqQTNsanRKQXVpU1JVa0ZybHBnUUFsaDJkVnNPVUNoY0Y3dWw5djNxOXZ3NXRHNiUyRnZBbCUyQlEyJTJGOXo5JTJCJTJCJTJGeWpuVTAyZXNtUVlnc1VSZXpWVTElMkZhd3pGSTUlMkJ5aCUyQiUyRkd4JTJGWFA2TUJycDg3YVZUVDJIWVNyOUpmZktWcmtEa2N2OUtVVkNXVUI4RXNId1NtbjdsS1NSaThReUdwZVV6UTBoTVZmcVhQa0xNYmFTNUlBcEkxd1ZzRmtvNzJacmlvVTJNSHRtdzlJdUlTbDEwQTQ3SUhrSHFZJTJGWURtJTJCWUJhbzhIQkNaSVVaWGZCeEZJV1I0WG4wNEtIbnBGM2JLOSUyRnhDdXY4RlVOaG5LRXJlNko0U2l0TzRuanVZcnU3RSUyQkFzekYlMkIlMkZsZEd0aHVLeElLeWsxQlRMdGpTRGI5WkNsNkxraFBvNXFPQ3FVaE1zWEFXWm9Fc1AxJTJGaGU4QUZZUjhVakVKRnc2MzFyZkQyR1NTSzhuakpMSG9xUUk2NkklMkJpTnNlRHNNQkNRbGRMd3M4enpNY3B4aFd1dU5hVTh1MENoajNSVzJPS0VQTGtrJTJGcmppOUt1S3hmUlFIUHhJV3FobnBlNG9KU0pleG9SNG91clFiVkFMcFFPS1psV0NGZnZUJTJCbCUyRk1wbmhWTWFnSiUyRnRvTzM0VFcyelk2b3dyT0d5TDZSUDR0Zld0U3FBaG5acUJQVTZoQ2RKbUV2TTdrclg5eXAzY2tsbFN5RWNJVmslMkJmWVRZSTFuMkRreVc2NkdYbE1KVnlTQW1PR0pKYWVheFVDZ3FkWXdxazNKbWpmYTB6dyUyRjFpanZaRXlnbUZWczVnRnhHbzhpbFhmUTB1MFF3ZlNlOWhEQkdGSE1uSU5vd3l1bFA1SmtqYzY3VHEzSk9mNFp6RzludXBmYUc5UlljYlViZnBEaXFteFdPWG1qRzdqUzRqYWZxJTJGRms1ZmFyRDZQSFBuNGZ4JTJCOUQyN1ZYOEJtYVYzJTJCQXQlMkJKZnY0dDlwRmc5QzNqaTA5WGdkOG5ZMTg0Qm5NcFdsN2JRJTJGRGxQTUdsSEdyUUZvWGVxOE9ZSUNLNG9qQjhjd3JQSG4lMkZ6dHBnMDdET3FWdURieXZ5RWxqUkNGdmtMUUppZ0o0aHMwQVRXdVBldldZUTVUN1M4eTZmdEh0WVQlMkJsY0IySDNmVXY0SzJ2NW9xZk5FbXolMkJLUllpQ1JkeHlqeFVKSndoellFYkJjaTI5c0t0dVhZYU9vZEVXeHpBMjE5VzVDQ0xXaWJSMnVHNjdXNG1tSmRsR0hvQ016UENKb2JXYmFJdzlPOXpxZ1h5U0ZNZ2ltQjFEMERWZ01NbkJ5d2ZMSHlLOFFBOHFPV0JXY0NnV2lheEExNmVkZ2c3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" style="cursor:pointer;max-width:100%;" onclick="(function(img){if(img.wnd!=null&&!img.wnd.closed){img.wnd.focus();}else{var r=function(evt){if(evt.data=='ready'&&evt.source==img.wnd){img.wnd.postMessage(decodeURIComponent(img.getAttribute('src')),'*');window.removeEventListener('message',r);}};window.addEventListener('message',r);img.wnd=window.open('https://viewer.diagrams.net/?client=1&page=0&edit=_blank');}})(this);"/>

### Equipe e infra-estrutura

- Para o Front End será utilizado Typescript, React, NextJs e Styled Components. Os componentes responsáveis por esta etapa são:
    - Arthur Cavalcante Monici - Gerente de projeto/Desenvolvedor
    - Davi Matias Araújo - Desenvolvedor
- Para o Back End será utilizado NodeJs, Typescript, TypeORM, Postgres, NestJs, Redis, GraphQL e Docker. Os componentes responsáveis por esta etapa são:
    - Alexandre Abreu da Silva - Desenvolvedor
    - Luis Felipe Rocha Caixeta - Desenvolvedor

### Marcos

- Idealização da ideia do projeto - 24/11/2021
- Divisão de trabalhos dentro do projeto e definição de ferramentas - 25/11/2021
- Início do projeto - 15/01/2022
- (a definir)

### Gerência de risco

A fim de evitar possiveis e futuras alterações no escopo do projeto, um planejamento inicial a respeito das funcionalidades foi elaborado e bem definido no gerenciador de projeto ([Trello](https://trello.com/invite/b/EGUOVCaP/8a10b394e8653ac3e44956de35ef96b9/educapp)) entre os desenvolvedores integrantes. Desta maneira, caso haja a necessidade de modificações no corpo do projeto, estas serão mínimas.

### Qualidade do produto

- Imagens
    - Utilizaremos imagens no formato png, jpeg ou svg.
    - Compressão des arquivos usando o [Tiny PNG](https://tinypng.com/).
- Códigos
    - Utilizaremos Eslint e editorConfig para a padronização do projeto.
    - Scrum como metodologia de desenvolvimento.
    - Utilizaremos a estrutura de pastas indicada pelo NextJs para o desenvolvimento do front end.

### Testes do Produto

- Será utilizado o typescript para administrar os tipos e não se permitir o uso de tipos diferentes para os inputs dos usuários.
- Além de criação de testes do código para garantir que estão em conformidade com o relatório do projeto e que caso tenha futuras atualizações o código não tenha problemas.


## Colaboradores

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/alexandreIFB">
        <img src="https://avatars.githubusercontent.com/u/51518273?v=4?s=100" width="100px;" alt=""/>
        <br />
        <sub>
          <b>Alexandre Abreu</b>
        </sub>
      </a>
      <br />
    </td>
    <td align="center">
      <a href="https://github.com/tujmon">
        <img src="https://avatars.githubusercontent.com/u/61995846?v=4?s=100" width="100px;" alt=""/>
        <br />
        <sub>
          <b>Arthur Monici</b>
        </sub>
      </a>
      <br />
    </td>
    <td align="center">
      <a href="https://github.com/Luis-Felipe-Rocha">
        <img src=https://avatars.githubusercontent.com/u/97915661?v=4" width="100px;" alt=""/>
        <br />
        <sub>
          <b>Luis Felipe</b>
        </sub>
      </a>
      <br />
    </td>
    <td align="center">
      <a href="https://github.com/davi-araujo">
        <img src="https://avatars.githubusercontent.com/u/55163212?v=4?s=100" width="100px;" alt=""/>
        <br />
        <sub>
          <b>Davi Matias</b>
        </sub>
      </a>
      <br />
    </td>
  </tr>
</table>

## Licença 

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
                                                                                                                                                                                                    
