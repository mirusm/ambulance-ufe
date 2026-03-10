import { newSpecPage } from '@stencil/core/testing';
import { XmasiarikovaAmbulanceWlApp } from '../xmasiarikova-ambulance-wl-app';

describe('xmasiarikova-ambulance-wl-app', () => {

  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [XmasiarikovaAmbulanceWlApp],
      html: `<xmasiarikova-ambulance-wl-app base-path="/"></xmasiarikova-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual ("xmasiarikova-ambulance-wl-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [XmasiarikovaAmbulanceWlApp],
      html: `<xmasiarikova-ambulance-wl-app base-path="/ambulance-wl/"></xmasiarikova-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("xmasiarikova-ambulance-wl-list");
  });

});
