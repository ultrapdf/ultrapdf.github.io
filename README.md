<div align="center">

<img src="https://ultrapdf.github.io/icon.svg" alt="Logo do UltraPDF" width="88" height="88" />

# UltraPDF

### `Gratuito` `Privado` `100% Offline` · `EN` `PT` `ES`

[![App](https://img.shields.io/badge/app-abrir_gratis-DC2626?style=for-the-badge )](https://ultrapdf.github.io/ )
[![Hub](https://img.shields.io/badge/hub-meus_aplicativos-0F172A?style=for-the-badge )](https://saulomgg.github.io/ )
[![Mercado Pago](https://img.shields.io/badge/apoie-mercado_pago-009EE3?style=for-the-badge&logo=mercadopago&logoColor=white )](https://link.mercadopago.com.br/saulomgg )
[![Stripe](https://img.shields.io/badge/apoie-stripe-635BFF?style=for-the-badge&logo=stripe&logoColor=white )](https://buy.stripe.com/test_3cI7sN6FT5Er2Xhean2Ji00 )

</div>

---

## `> whoami`

```bash
$ cat /dev/ultrapdf
Nome:      UltraPDF
Domínio:   https://ultrapdf.github.io/
Preço:     100% grátis · sem planos pagos · sem marca d'água
Foco:      editor inline · assinatura · formulários · 16 ferramentas em lote
Idiomas:   English (padrão) · Português · Español
Modo:      PWA instalável · 100% offline · processamento local · sem cadastro
```

O **UltraPDF** é um editor de PDF completo e uma suíte com **16 ferramentas gratuitas** que rodam diretamente no navegador e podem ser instaladas como aplicativo (**PWA**) no computador ou celular. Edite textos existentes no PDF, assine à mão, preencha formulários, faça anotações, censure dados sensíveis e processe um ou vários arquivos em lote — **100% offline, sem enviar nada para servidores**.

---

## `> ls ./recursos`

| Recurso | Detalhes |
|---------|----------|
| ✏️ **Editor inline de texto** | Clique em textos existentes do PDF para editar conteúdo, fonte, tamanho e cor, preservando o fundo |
| ✍️ **Assinar e anotar** | Desenhe assinaturas, salvas offline para reuso; destaque trechos, desenhe com caneta e aplique carimbos |
| 📝 **Formulários PDF** | Preencha campos nativos diretamente no navegador antes de exportar |
| 🛡️ **Apagar e censurar** | Oculte informações sensíveis com tarja branca ou preta diretamente sobre o documento |
| 🖼️ **Inserir imagens** | Adicione e redimensione imagens dentro das páginas do PDF |
| 📄 **Gerenciar páginas** | Reordene, gire, duplique, insira páginas em branco, extraia páginas ou una múltiplos PDFs |
| 🌍 **Multilíngue (EN · PT · ES)** | Inicia em inglês por padrão, com troca rápida para português e espanhol no cabeçalho |
| 📱 **PWA 100% offline** | Instalável em Android, iOS, Windows, macOS e Linux, com salvamento automático em `IndexedDB` |

---

## `> ls ./ferramentas`

Além do editor completo, o UltraPDF inclui **16 ferramentas dedicadas**, com suporte a múltiplos arquivos e download direto ou em `.zip`:

| # | Ferramenta | O que faz | Acesso direto |
|---|------------|-----------|---------------|
| `01` | **Unir PDFs** | Combina vários PDFs na ordem desejada | [Abrir](https://ultrapdf.github.io/?tool=merge ) |
| `02` | **Separar páginas** | Divide por página, intervalos ou faixas personalizadas | [Abrir](https://ultrapdf.github.io/?tool=split ) |
| `03` | **Comprimir PDF** | Reduz o tamanho mantendo a legibilidade | [Abrir](https://ultrapdf.github.io/?tool=compress ) |
| `04` | **Assinar PDF** | Aplica assinatura em um ou vários documentos | [Abrir](https://ultrapdf.github.io/?tool=sign ) |
| `05` | **Imagens para PDF** | Converte PNG, JPG e WebP para PDF (A4/Carta) | [Abrir](https://ultrapdf.github.io/?tool=imagesToPdf ) |
| `06` | **Marca d'água** | Adiciona texto diagonal, centralizado ou em mosaico, em lote | [Abrir](https://ultrapdf.github.io/?tool=watermark ) |
| `07` | **Numeração de páginas** | Numera páginas com formato e posição personalizáveis | [Abrir](https://ultrapdf.github.io/?tool=pageNumbers ) |
| `08` | **Girar páginas** | Rotaciona páginas em 90°, 180° ou 270° | [Abrir](https://ultrapdf.github.io/?tool=rotate ) |
| `09` | **Reordenar páginas** | Organiza a ordem visualmente por miniaturas | [Abrir](https://ultrapdf.github.io/?tool=reorder ) |
| `10` | **Excluir páginas** | Remove páginas indesejadas com prévia visual | [Abrir](https://ultrapdf.github.io/?tool=deletePages ) |
| `11` | **Extrair páginas** | Salva somente as páginas selecionadas em PDF ou ZIP | [Abrir](https://ultrapdf.github.io/?tool=extractPages ) |
| `12` | **Proteger com senha** | Criptografa PDFs localmente com senha e permissões | [Abrir](https://ultrapdf.github.io/?tool=protect ) |
| `13` | **Remover senha** | Desbloqueia PDFs protegidos com a senha atual | [Abrir](https://ultrapdf.github.io/?tool=unlock ) |
| `14` | **Texto para PDF** | Converte texto ou arquivos `.txt`, `.md` e `.csv` em PDF | [Abrir](https://ultrapdf.github.io/?tool=textToPdf ) |
| `15` | **PDF para imagens** | Exporta páginas em PNG ou JPEG de alta resolução | [Abrir](https://ultrapdf.github.io/?tool=pdfToImages ) |
| `16` | **Processamento em lote** | Comprime, gira, adiciona marca d'água, numera e protege vários PDFs juntos | [Abrir](https://ultrapdf.github.io/?tool=batch ) |

---

## `> cat ./privacidade`

```json
{
  "cadastro": false,
  "preço": "gratuito",
  "processamento": "100% local no dispositivo",
  "envio_de_arquivos": false,
  "offline": true,
  "armazenamento_local": "IndexedDB",
  "rastreamento_ou_anúncios": false
}
```

- **Sem cadastro e sem login** — abra o UltraPDF e comece a usar imediatamente.
- **Zero upload para servidores** — seus PDFs, imagens e assinaturas nunca saem do dispositivo.
- **Pronto para trabalhar offline** — Service Worker e cache local para uso sem internet.
- **Documentos salvos no aparelho** — o histórico recente e as assinaturas ficam salvos localmente via `IndexedDB` e `localStorage`.

> [!NOTE]
> Como tudo fica armazenado localmente no seu aparelho, limpar os dados ou o cache do navegador pode apagar os documentos salvos. Sempre exporte e guarde uma cópia dos arquivos importantes.

---

## `> ./iniciar`

```bash
1. Acesse   https://ultrapdf.github.io/
2. Abra     selecione um PDF do dispositivo, abra um modelo, crie um documento em branco ou escolha uma das 16 ferramentas
3. Edite    altere textos, assine, anote, comprima, proteja ou organize páginas
4. Instale  clique em "Install App" ou "Instalar App" para adicionar o UltraPDF à tela inicial
```

[▶ **Abrir o UltraPDF grátis**](https://ultrapdf.github.io/ ) · [🛠️ **Ver as 16 ferramentas**](https://ultrapdf.github.io/?page=tools ) · [🧭 **Roadmap**](https://ultrapdf.github.io/?page=roadmap )

---

## `> ls ./contato`

| Canal | Para quê | Link |
|-------|----------|------|
| 🧭 **Hub de aplicativos** | Conheça e acesse meus aplicativos | [saulomgg.github.io](https://saulomgg.github.io/ ) |
| 📸 **Instagram** | Novidades, contato e suporte para marcas | [@saulo_mgg](https://www.instagram.com/saulo_mgg/ ) |
| ✈️ **Telegram** | Contato e novidades dos projetos | [S0M9Net](https://t.me/S0M9Net ) |
| 💼 **LinkedIn** | Perfil profissional | [Saulo MGG](https://www.linkedin.com/in/saulomgg/ ) |

Para relatar um problema, sugerir uma ferramenta ou conversar sobre parcerias, entre em contato por um dos canais acima.

---

## `> ping apoio`

O **UltraPDF** é gratuito e mantido de forma independente. Se o aplicativo ajuda você no dia a dia, pode apoiar o desenvolvimento e a criação de novas ferramentas gratuitas:

> [!TIP]
> O apoio é totalmente voluntário. Todos os recursos estão disponíveis para todo mundo — sem assinatura, recursos bloqueados ou rastreadores.

<div align="center">

[![Apoiar via Mercado Pago](https://img.shields.io/badge/apoie-via_Mercado_Pago-009EE3?style=for-the-badge&logo=mercadopago&logoColor=white )](https://link.mercadopago.com.br/saulomgg )
[![Apoiar via Stripe](https://img.shields.io/badge/apoie-via_Stripe-635BFF?style=for-the-badge&logo=stripe&logoColor=white )](https://buy.stripe.com/test_3cI7sN6FT5Er2Xhean2Ji00 )

</div>

Empresas e projetos alinhados com ferramentas privadas e gratuitas também podem apoiar exibindo sua marca nos espaços de apoiadores. Consulte a [página de apoio do UltraPDF](https://ultrapdf.github.io/?page=support ).

---

## `> cat ./LICENSE`

<sub>© 2026 **Saulo (saulomgg)**. **Todos os direitos reservados.**</sub>

<sub>O código-fonte, os pacotes compilados ou ofuscados, o design, a identidade visual, os textos e a marca **UltraPDF** são de titularidade exclusiva do autor e protegidos pela **Lei nº 9.609/1998** (Lei do Software), pela **Lei nº 9.610/1998** (Lei de Direitos Autorais) e por tratados internacionais aplicáveis.</sub>

<sub>**Uso permitido:** acesso livre e gratuito para editar e processar seus próprios documentos por meio do aplicativo oficial.</sub>

<sub>**É proibido** copiar, redistribuir, revender, sublicenciar, hospedar cópias espelho, reempacotar ou publicar este projeto, no todo ou em parte, como se fosse de sua autoria, sem autorização prévia e por escrito do titular.</sub>

<sub>Consulte os termos completos no arquivo [`LICENSE`](./LICENSE).</sub>

---

<div align="center">

Feito por **[Saulo (saulomgg)](https://saulomgg.github.io/ )** · parte do hub de aplicativos **S0m9Net**

[UltraPDF](https://ultrapdf.github.io/ ) · [Hub de aplicativos](https://saulomgg.github.io/ ) · [Instagram](https://www.instagram.com/saulo_mgg/ ) · [Telegram](https://t.me/S0M9Net ) · [LinkedIn](https://www.linkedin.com/in/saulomgg/ )

```
+----------------------------------------------------------+
| [SYSTEM]  UltraPDF - Gratuito - EN / PT / ES             |
| [STATUS]  PWA 100% Offline - 16 ferramentas para PDF     |
| [PRIVACY] Sem upload - Seus arquivos ficam no dispositivo|
+----------------------------------------------------------+
```

</div>
