import { newSpecPage } from '@stencil/core/testing';
import { XmasiarikovaAmbulanceWlList } from '../xmasiarikova-ambulance-wl-list';

describe('xmasiarikova-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XmasiarikovaAmbulanceWlList],
      html: `<xmasiarikova-ambulance-wl-list></xmasiarikova-ambulance-wl-list>`,
    });
    const wlList = page.rootInstance as XmasiarikovaAmbulanceWlList;
      const expectedPatients = wlList?.waitingPatients?.length

      const items = page.root.shadowRoot.querySelectorAll("md-list-item");
      expect(items.length).toEqual(expectedPatients);
  });
});
