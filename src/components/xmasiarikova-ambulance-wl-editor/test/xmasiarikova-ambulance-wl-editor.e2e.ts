import { newE2EPage } from '@stencil/core/testing';

describe('xmasiarikova-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xmasiarikova-ambulance-wl-editor></xmasiarikova-ambulance-wl-editor>');

    const element = await page.find('xmasiarikova-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
