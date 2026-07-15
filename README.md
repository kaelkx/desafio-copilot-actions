[![Testes Automatizados](https://github.com/kaelkx/desafio-copilot-actions/actions/workflows/tests.yml/badge.svg)](https://github.com/kaelkx/desafio-copilot-actions/actions/workflows/tests.yml)

# Desafio: Acelerando o Desenvolvimento com IA — GitHub Copilot + GitHub Actions

## 1. Contexto e Análise do Problema

Este projeto simula o cenário de uma equipe de desenvolvimento de uma ferramenta de colaboração online que está crescendo rápido. A equipe enfrenta um dilema clássico entre **velocidade** e **qualidade**:

- Quando o foco é entregar rápido, a cobertura de testes cai e bugs passam despercebidos até a produção.
- Quando o foco é qualidade (testes completos, revisão detalhada), os prazos do roadmap não são cumpridos.

Os principais gargalos identificados foram:
1. **Desenvolvimento lento**, com muito tempo gasto em código repetitivo (componentes, endpoints, estrutura de classes).
2. **Baixa cobertura de testes**, já que escrever testes é visto como algo que "atrasa" a entrega da funcionalidade.
3. **Ciclo de feedback lento**, com bugs descobertos tarde (QA manual ou até em produção).
4. **Inconsistência no código**, já que devs diferentes resolvem problemas parecidos de formas diferentes.

## 2. O Papel da IA no Ciclo de Desenvolvimento

Ferramentas de IA como o GitHub Copilot atuam diretamente nos dois primeiros gargalos: elas aceleram a escrita de código repetitivo (boilerplate) e reduzem a resistência a escrever testes, já que o Copilot consegue gerar testes de unidade a partir de um comentário descrevendo o comportamento esperado. Isso ataca o "custo emocional" de escrever testes, que é um dos motivos pelos quais a cobertura costuma ficar baixa.

Já o GitHub Actions ataca o terceiro gargalo (ciclo de feedback lento): ao rodar os testes automaticamente a cada `push`, os bugs são pegos em minutos, dentro do próprio pull request — muito antes de chegarem ao QA manual ou à produção, quando o custo de correção é muito maior.

Juntas, essas duas ferramentas formam um fluxo: o Copilot acelera a criação de código e testes, e o Actions garante que esses testes sejam executados de forma consistente, sem depender da disciplina manual de cada desenvolvedor — o que também ajuda a reduzir a inconsistência entre diferentes membros da equipe.

## 3. Caso Real: Zoominfo

Um exemplo real de adoção em larga escala é o da **Zoominfo**, plataforma de inteligência comercial (Go-To-Market) que implantou o GitHub Copilot para mais de 400 desenvolvedores distribuídos geograficamente, atuando com diferentes linguagens e disciplinas técnicas. No estudo publicado sobre essa implantação, a empresa registrou uma taxa média de aceitação de 33% das sugestões do Copilot (e 20% das linhas de código sugeridas), além de uma satisfação alta dos desenvolvedores, de 72%. Isso mostra que, mesmo em ambientes corporativos grandes e heterogêneos, o Copilot consegue gerar valor real e mensurável — não é só uma promessa de marketing.

## 4. Sobre o Projeto Neste Repositório

Este repositório contém:
- `pedidos.js`: função de negócio que calcula o total de um pedido com desconto aplicado, gerada com apoio do GitHub Copilot (o prompt usado está comentado no início do arquivo).
- `pedidos.test.js`: testes automatizados com Jest, também gerados com apoio do Copilot, cobrindo casos de desconto 0%, 50% e valores inválidos.
- `.github/workflows/tests.yml`: workflow do GitHub Actions que instala as dependências e roda os testes automaticamente a cada `push` ou `pull request` na branch `main`.

## 5. Como Rodar Localmente

\`\`\`
npm install
npx jest
\`\`\`

## 6. Considerações Finais

O uso combinado de Copilot e Actions demonstra, mesmo em um projeto pequeno como este, como a IA pode reduzir o atrito entre entregar rápido e entregar com qualidade — automatizando tanto a geração de código/testes quanto a verificação contínua deles.