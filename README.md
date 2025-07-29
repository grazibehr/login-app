![Node.js](https://img.shields.io/badge/Node.js-18.x-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-4.x-000000?style=for-the-badge&logo=express&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-8.x-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Ambiente%20Controlado%20para%20Testes-orange?style=for-the-badge)

# 🔐 Login Vulnerável – Ambiente Controlado para Estudos de Segurança

Este repositório contém um projeto **intencionalmente vulnerável** desenvolvido com **Node.js, Express e MySQL** para fins acadêmicos no meu **TCC**.  
Ele será utilizado para demonstrar ataques comuns, como **brute force**, além de servir como base para implementar correções.


## 📸 Preview

![Screenshot do Login](./preview.png)

## 🧱 Estrutura do repositório

📁 backend/ → Código do servidor (Node.js + Express + MySQL)  
📄 Login.html → Tela de login vulnerável  

> O projeto segue boas práticas de organização, mas mantém vulnerabilidades de propósito para estudo.

---

## 💻 Tecnologias usadas

- Node.js + Express
- MySQL
- HTML/CSS/JS
- Morgan (logs de requisições)

---

## 🎯 Objetivos do projeto

✅ Demonstrar vulnerabilidades comuns em aplicações web  
✅ Servir como base para estudo de técnicas de **ataque e defesa**  
✅ Melhorar a compreensão sobre segurança em sistemas reais

---

## 📌 Organização

- `backend/` → contém `routes`, `controllers`, `models`, `config` e `services`
- `.env` → variáveis de ambiente com credenciais do banco (não versionado)
- Logs de acesso são salvos em `access.log`

---

## 🚀 Como executar

```bash
# 1️⃣ Clonar o repositório
git clone https://github.com/grazibehr/login-app.git

# 2️⃣ Instalar dependências
npm install

# 3️⃣ Configurar variáveis de ambiente
cp .env.example .env

# 4️⃣ Rodar o servidor
node backend/app.js
```
---

## ✍️ Sobre mim

Desenvolvido por [@grazielabehrens](https://github.com/grazibehr)  
📍 Desenvolvedora FullStack JR• Graduada em Ciência da Computação  
🎓 Pós-graduanda em Desenvolvimento FullStack – PUC-Rio  
☕ Apaixonada por código limpo, boas práticas e evolução constante  
🔗 LinkedIn: [linkedin.com/in/grazielabehrens](https://www.linkedin.com/in/grazielabehrens/) 

---

