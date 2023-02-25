/* eslint-disable prettier/prettier */
/* eslint-disable */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Plugin } from 'obsidian';
import { html, render } from 'htm/preact';
import HanjaRenderer from './HanjaRenderer';
import parseEventSpec from './utils/yaml-parser';

const ICON_NAME = 'languages';

const PLUGIN_TITLE = 'Hanja Block';

export default class HanjaBlockPlugin extends Plugin {
  private reactComponent: any;

  async onload(): Promise<void> {
    console.log('Loading Hanja Block Plugin');
    // this.addRibbonIcon(ICON_NAME, PLUGIN_TITLE, () => {
    // return new Notice('This is a test!');
    // });
    this.registerMarkdownCodeBlockProcessor('hanja-block', (source, el, __) => {
      const props = { id: 123, source: parseEventSpec(source) };
      render(html`<${HanjaRenderer} props=${props} />`, el);
    });
  }

  async onunload(): Promise<void> {
    console.log('Unloading Plugin');
    // this.app.workspace.detachLeavesOfType(VIEW_TYPE);
  }
}
