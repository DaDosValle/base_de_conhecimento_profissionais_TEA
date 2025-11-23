# 🎗️ **Base de Profissionais para TEA**

<p align="center">
    <img src="./src/img/plano de fundo.png" alt="Captura de tela da Base de Profissionais TEA" width="100%">
</p>

---

# ⭐ **Uma solução simples para um dev, mas imprescindível para quem sofre com essa dor**

Uma ferramenta **simples**, **empática** e **prática**: este projeto nasceu do encontro entre a urgência de famílias que procuram atendimento especializado para o Transtorno do Espectro Autista (TEA) e a vontade de tornar essas informações mais **acessíveis** e **colaborativas**.

Imagine uma mãe ou um pai que pesquisa à noite, cansado, tentando encontrar um neuropediatra, um terapeuta ocupacional ou uma clínica com atendimento multidisciplinar perto de casa e não consegue.

> 🌟 **Este site é como um pequeno farol** — uma base centralizada, fácil de usar e pensada para que famílias encontrem profissionais e indiquem quem já conhecem.

<p align="center">
    <img src="./src/img/logo.png" alt="logo de meu projeto TEA" width="50%">
</p>

---

<div style="background:#e0f2fe; padding:4px; border-radius:8px;">
    
</div>

## 📖 **História curta (storytelling)**

Proponho este projeto movido pela experiência de ser e ver famílias passando pela dificuldade de achar profissionais confiáveis ou que simplesmente atendam autistas e informações organizadas.

O objetivo é que seja **colaborativa**, **leve** e **funcional** — um lugar onde quem conhece **indica** e quem busca **encontra rapidamente** opções por especialidade, localização e plano médico.

- **Status:** 🧪 *Projeto piloto* — dados de exemplo inclusos em `data.json`.
- **Aviso importante:** ⚠️ *algumas informações são fictícias ou de exemplo. Sempre confirme dados com os profissionais.*

---
<div style="background:#e0f2fe; padding:4px; border-radius:8px;">
    
</div>

## 📊 **Tabela rápida**

| Item | Descrição |
|------|-----------|
| **Projeto** | `base_de_conhecimento_profissionais_TEA` |
| **Arquivos principais** | `index.html`, `style.css`, `script.js`, `data.json` |
| **Funcionalidade principal** | Busca por profissionais + formulário de indicação |
| **Back-end** | Google Apps Script (envio via Web App) |

---
<div style="background:#e0f2fe; padding:4px; border-radius:8px;">
    
</div>

## 🧩 **O que o site faz**

### 🔍 **Busca centralizada**
O campo de busca no cabeçalho pesquisa por `nome` e `descricao` dentro de `data.json` usando JavaScript.

---

### 🗂️ **Cards dinâmicos**
Os resultados são exibidos como `<article>`s dentro de `.card-container`, contendo:

- Nome  
- Especialidade  
- Descrição  
- Plano médico  
- Endereço  
- Contato  

---

### 📬 **Formulário de indicação**
- Envio via Google Apps Script (`GOOGLE_SCRIPT_URL` em `script.js`);
- Modal com campo de concordância LGPD antes do envio.

---

### 📱 **Design leve e responsivo**
- Estilos gerenciados em `style.css`;
- Media queries para diferentes tamanhos de tela.

---
<div style="background:#e0f2fe; padding:4px; border-radius:8px;">
    
</div>

## ⚙️ **Como o projeto funciona por baixo dos panos**

- Ao clicar em **Buscar**, `script.js` carrega `data.json` e filtra resultados com `includes()` em minúsculas.
- O formulário envia dados com `fetch()` usando `mode: 'no-cors'`.

---

## 🧪 **Como testar localmente**

1. Abra `index.html` no navegador ou via Live Server.
2. Use a busca: pesquise por `neuropediatra`, `fonoaudióloga`, `ABA`, etc.
3. Para testar o formulário sem enviar ao Google Script, altere temporariamente a URL ou comente o bloco de envio.

---
<div style="background:#e0f2fe; padding:4px; border-radius:8px;">
    
</div>

## 📱 Breakpoints recomendados (responsividade)

- **Desktop:** > 1024px  
- **Tablet / laptop pequeno:** até 1024px  
- **Mobile:** até 768px  
- **Pequenos celulares:** até 480px  

---

## 🎨 **Dicas de ajustes visuais**

- Ajuste fontes, paddings e backgrounds nas media queries.
- Otimize o tamanho das imagens para mobile.

---

## 📂 **Estrutura do projeto**
````

├─ index.html # Entrada da aplicação (UI, modal de indicação)
├─ style.css # Estilos e media queries
├─ script.js # Lógica de busca, renderização e envio do formulário
├─ data.json # Lista de profissionais (JSON)
└─ src/ # Imagens e favicon
````

---
<div style="background:#e0f2fe; padding:4px; border-radius:8px;">
    
</div>

## 🤝 **Contribuindo**

- **Indique profissionais** usando o modal do site.  
- **Edite `data.json`** adicionando novas entradas.  
- **Sugira melhorias de UX/CSS**.

---

### 📝 Exemplo de entrada no `data.json`

```json
{
	"nome": "Dra. Exemplo",
	"descricao": "Especialista em intervenção precoce",
	"especialidade": "Neuropediatra",
	"contato": "(71) 90000-0000",
	"endereco": "Rua Exemplo, 123, Salvador - BA",
	"plano_medico": "Particular, Planserv"
}

```
<div style="background:#e0f2fe; padding:4px; border-radius:8px;">
    
</div>


## 📬 Contato

🔗 [Meu LinkedIn: Fernando do Valle](https://www.linkedin.com/in/fernandovalle/)

🛍️ [Minha lojinha no Instagram](https://www.instagram.com/azullaudo/)


---
<div style="background:#e0f2fe; padding:4px; border-radius:8px;">
    <p align="center">
        <img src="./src/img/logo.png" alt="logo de meu projeto TEA" width="50%">
    </p>
    <a href="https://www.linkedin.com/in/fernandovalle/" target="_blank>Meu Linkeding></a>

</div>


