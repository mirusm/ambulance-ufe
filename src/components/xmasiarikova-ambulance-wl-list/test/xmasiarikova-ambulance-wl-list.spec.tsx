import { newSpecPage } from '@stencil/core/testing';
import { XmasiarikovaAmbulanceWlList } from '../xmasiarikova-ambulance-wl-list';

describe('xmasiarikova-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XmasiarikovaAmbulanceWlList],
      html: `<xmasiarikova-ambulance-wl-list></xmasiarikova-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <xmasiarikova-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </xmasiarikova-ambulance-wl-list>
    `);
  });
});
