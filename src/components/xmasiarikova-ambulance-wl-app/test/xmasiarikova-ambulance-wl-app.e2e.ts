import { newE2EPage } from '@stencil/core/testing';

describe('xmasiarikova-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xmasiarikova-ambulance-wl-app></xmasiarikova-ambulance-wl-app>');

    const element = await page.find('xmasiarikova-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
