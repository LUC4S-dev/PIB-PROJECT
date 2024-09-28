'use client';

import dynamic from 'next/dynamic';
import React, { useState } from 'react';

import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const Editor = dynamic(() => import('react-draft-wysiwyg').then((mod) => mod.Editor), { ssr: false });

import Container from "@/components/Container"
import Button from "@/components/Button"
import Label from "@/components/Label"

export default function Page() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  return (
    <div className="pt-16">
      <Container>
        <fieldset>
          <Label id="titulo">Título do Post:</Label>
          <input id="titulo" name="titulo" type="text" value="A mensagem de uma igreja quase centenária!" />
        </fieldset>
        <fieldset>
          <Label id="subtitulo">Subtítulo do Post:</Label>
          <textarea className="h-[120px]" id="subtitulo" name="subtitulo" value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec semper lorem. Donec et nulla purus. Nullam maximus neque enim. Phasellus finibus accumsan sapien sit amet convallis. Suspendisse vel malesuada mi. Nam a nisi eget massa ultricies finibus at in elit. Maecenas fermentum ullamcorper magna, nec placerat ligula interdum ac." />
        </fieldset>
        <div className="flex gap-10">
          <fieldset className="flex-1">
            <Label id="imagem">Imagem de fundo:</Label>
            <input id="imagem" name="imagem" type="file" />
          </fieldset>
          <fieldset className="flex-1">
            <Label id="tipo">Tipo de Post:</Label>
            <select id="tipo" name="tipo">
              <option value="Sermão Expositivo">Sermão Expositivo</option>
            </select>
          </fieldset>
        </div>
        <fieldset>
          <Label id="texto">Texto do Post:</Label>
          <Editor
            editorState={editorState}
            wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
            onEditorStateChange={onEditorStateChange}
          />
        </fieldset>
        <div className="flex justify-end gap-6">
          <Button red>Cancelar</Button>
          <Button green>Publicar</Button>
        </div>
      </Container>
    </div>
  )
}