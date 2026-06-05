# 🎨 Colorir Kids

App de colorir para crianças de 4 a 6 anos. Desenhos em SVG com regiões clicáveis — basta escolher uma cor e clicar para pintar!

## Tecnologias

- [React 18](https://react.dev/)
- [Vite 5](https://vitejs.dev/)
- CSS Modules

## Como rodar

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173` no navegador.

## Estrutura do projeto

```
src/
├── components/
│   ├── ColorPicker.jsx       # Paleta de cores
│   ├── ColorPicker.module.css
│   ├── DrawingCanvas.jsx     # Área do desenho SVG + lógica de pintura
│   └── DrawingCanvas.module.css
├── drawings/
│   └── sol.js                # Definição do desenho "Sol"
├── App.jsx                   # Componente raiz
├── App.module.css
├── index.css                 # Estilos globais
└── main.jsx                  # Entry point
```

## Como adicionar um novo desenho

1. Crie um arquivo em `src/drawings/meu-desenho.js` seguindo o formato de `sol.js`
2. Defina as `regions` (clicáveis) e `decorations` (fixas)
3. Importe e use em `App.jsx`

## Roadmap

- [ ] Múltiplos desenhos com navegação
- [ ] Modo de pintar arrastando (drag)
- [ ] Sons de feedback ao colorir
- [ ] Salvar/compartilhar a pintura
