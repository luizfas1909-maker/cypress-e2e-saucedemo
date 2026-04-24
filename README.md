# 🧪 Automação de Testes E2E com Cypress

Projeto de automação de testes End-to-End (E2E) utilizando Cypress, com foco na validação de fluxos críticos de um e-commerce.

## 📌 Objetivo

Este projeto foi desenvolvido como parte dos meus estudos em Qualidade de Software (QA), com o objetivo de praticar:

- Automação de testes E2E
- Validação de regras de negócio
- Estruturação de testes escaláveis
- Boas práticas de automação

---

## 🌐 Aplicação testada

https://www.saucedemo.com/

Aplicação web simulando um e-commerce, amplamente utilizada para prática de testes automatizados.

---

## 🚀 Tecnologias utilizadas

- JavaScript
- Cypress

---

## 🧱 Arquitetura do projeto

O projeto segue o padrão **Page Object Model (POM)**, promovendo:

- Reutilização de código
- Facilidade de manutenção
- Separação entre lógica de teste e elementos da interface

## 🔄 CI/CD

O projeto possui integração com GitHub Actions, executando automaticamente os testes E2E com Cypress a cada push ou pull request.

Em caso de falha, são gerados artefatos como screenshots e vídeos para análise.
