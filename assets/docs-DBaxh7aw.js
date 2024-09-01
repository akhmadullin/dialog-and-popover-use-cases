import{j as o}from"./index-CMu3Kjdk.js";import{useMDXComponents as s}from"./index-BB7QKzG5.js";import{M as t,C as r}from"./index-B1BasJzb.js";import{NonModalVsModal as d}from"./non-modal-vs-modal.stories-DmooPk2s.js";import{WhatWebPlatformProvides as c}from"./what-web-platform-provides.stories-Bh8xYSJ6.js";import{CloseOnEscapeNonModal as m}from"./close-on-escape-non-modal.stories-Cs1b55yu.js";import{CloseOnOutsideClick as l}from"./close-on-outside-click.stories-Dv9UlbNC.js";import{PageScrollLock as h}from"./blocking-page-scroll.stories-B83WE-kM.js";import{ConfirmStoryForDocs as p}from"./index.stories-8K2LEW77.js";import{PromptStoryForDocs as x}from"./index.stories-D6aWlG9u.js";import{BottomSheetStoryInIfame as j}from"./index.stories-D4Re8cyq.js";import"./index-DVXBtNgz.js";import"./iframe-BKJuJ9uu.js";import"../sb-preview/runtime.js";import"./index-Cbx7Fas8.js";import"./index-DXimoRZY.js";import"./index-CyJyzsoi.js";import"./index-DrFu-skq.js";import"./index-DgaVQ6HT.js";import"./index-DqfXHWeU.js";import"./index-xa7G255s.js";import"./index-C8DP56y-.js";import"./index-DX7BcFfT.js";import"./dialog-D3Br7OsT.js";import"./confirm-C75Bj9SZ.js";import"./prompt-f48VB63Y.js";import"./bottom-sheet-B6kZkjFk.js";function e(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",...s(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(t,{title:"Dialog Based/Docs"}),`
`,o.jsx(n.h1,{id:"компоненты-на-основе-элемента-dialog",children:"Компоненты на основе элемента dialog"}),`
`,o.jsx(n.h2,{id:"dialog",children:"Dialog"}),`
`,o.jsxs(n.p,{children:["Как ни странно, на основе элемента ",o.jsx(n.code,{children:"dialog"})," можно сделать компонент ",o.jsx(n.code,{children:"Dialog"}),"."]}),`
`,o.jsx(n.p,{children:"Он может иметь как встроенные фичи веб платформы, так и накрученный сверху кастом."}),`
`,o.jsx(n.p,{children:"Но обо всем по порядку!"}),`
`,o.jsx(n.h3,{id:"чем-отличается-немодальный-диалог-от-модального",children:"Чем отличается немодальный диалог от модального?"}),`
`,o.jsx(r,{of:d}),`
`,o.jsx(n.h3,{id:"что-элемент-dialog-умеет-делать-в-браузере-по-дефолту",children:"Что элемент dialog умеет делать в браузере по дефолту?"}),`
`,o.jsx(r,{of:c}),`
`,o.jsx(n.h3,{id:"закрытие-диалога-на-escape",children:"Закрытие диалога на Escape"}),`
`,o.jsx(n.p,{children:"По дефолту браузеры дают возможность закрывать по нажатию на Escape только модальные диалоги."}),`
`,o.jsx(n.p,{children:"Если эта фича необходима и для немодальных диалогов, то ее можно реализовать самим."}),`
`,o.jsx(r,{of:m}),`
`,o.jsx(n.h3,{id:"закрытие-диалога-по-клику-на-область-за-его-пределами",children:"Закрытие диалога по клику на область за его пределами"}),`
`,o.jsx(n.p,{children:"По дефолту браузеры не дают такую возможность. Но такое поведение часто хотят видеть дизайнеры и бизнес. Его можно добавить самостоятельно."}),`
`,o.jsx(r,{of:l}),`
`,o.jsx(n.h3,{id:"блокировка-скролла-страницы",children:"Блокировка скролла страницы"}),`
`,o.jsx(n.p,{children:"Иногда, бывает полезно блокировать скролл остальной страницы, пока открыт диалог."}),`
`,o.jsxs(n.p,{children:["Элемент ",o.jsx(n.code,{children:"dialog"})," не делает этого по дефолту. Но это можно исправить."]}),`
`,o.jsx(r,{of:h}),`
`,o.jsx(n.h2,{id:"confirm",children:"Confirm"}),`
`,o.jsxs(n.p,{children:["На основе диалога можно делать вспомогательные компоненты - например, кастомизированный аналог метода ",o.jsx(n.code,{children:"confirm()"}),"."]}),`
`,o.jsxs(n.p,{children:["Подобный компонент можно использовать там, где нужен свой кастомный дизайн и нет нужды блокировать исполнение основного потока во время показа ",o.jsx(n.code,{children:"confirm"}),"."]}),`
`,o.jsx(r,{of:p}),`
`,o.jsx(n.h2,{id:"prompt",children:"Prompt"}),`
`,o.jsxs(n.p,{children:["Аналогично ",o.jsx(n.code,{children:"confirm"}),", можно сделать аналог нативного ",o.jsx(n.code,{children:"prompt"}),"."]}),`
`,o.jsx(r,{of:x}),`
`,o.jsx(n.h2,{id:"bottom-sheet-aka-шторка",children:"Bottom sheet (aka шторка)"}),`
`,o.jsx(n.p,{children:"В мобильном вебе интерфейс часто подражает мобильным приложениям."}),`
`,o.jsxs(n.p,{children:["И чтобы создать ощущение единной системы, ",o.jsx(n.code,{children:"dialog"})," может эмитировать элемент из мобильных платформ – ",o.jsx(n.code,{children:"Bottom Sheet"}),"."]}),`
`,o.jsx(r,{of:j})]})}function z(i={}){const{wrapper:n}={...s(),...i.components};return n?o.jsx(n,{...i,children:o.jsx(e,{...i})}):e(i)}export{z as default};
