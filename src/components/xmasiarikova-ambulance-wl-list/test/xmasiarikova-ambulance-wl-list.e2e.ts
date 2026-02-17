import { newE2EPage } from '@stencil/core/testing';

describe('xmasiarikova-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xmasiarikova-ambulance-wl-list></xmasiarikova-ambulance-wl-list>');

    const element = await page.find('xmasiarikova-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
