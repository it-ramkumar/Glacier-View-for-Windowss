#!/usr/bin/env node
/**
 * Glacier View Image Downloader
 * ─────────────────────────────
 * Downloads all Glacier View product images from Shopify CDN
 * and saves them with clean, descriptive names that match the
 * filenames the GlacierViewPage component expects.
 *
 * USAGE:
 *   1. Save this file at the root of your Next.js project (or anywhere).
 *   2. Run:  node download-glacier-images.js
 *   3. Images will be saved into ./public/images/glacier/
 *      Move that folder into your /public/images/ directory if it isn't already.
 *
 * No npm install needed — uses only built-in Node modules.
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const OUT_DIR = path.join(__dirname, 'public', 'images', 'glacier');

const PRODUCTS = {
  'flat-50x50': [
    'https://cdn.shopify.com/s/files/1/0803/4808/6514/files/5_747cf157-5608-41b0-98a8-3ec524a5b1d9.webp?v=1773175274',
    'https://cdn.shopify.com/s/files/1/0803/4808/6514/files/11_418847b4-0447-48ca-9450-6b2fc3f4d29f.webp?v=1773179728',
    'https://cdn.shopify.com/s/files/1/0803/4808/6514/files/12_63bf2e33-9a09-491b-be10-c490df2d94eb.webp?v=1773940579',
    'https://cdn.shopify.com/s/files/1/0803/4808/6514/files/1_096e236a-482c-486a-b953-ac22d9f9c16c.webp?v=1773940579',
    'https://cdn.shopify.com/s/files/1/0803/4808/6514/files/2_c555af5b-9482-4d5d-a445-0a55de2455f9.webp?v=1773179719',
    'https://cdn.shopify.com/s/files/1/0803/4808/6514/files/3_f1b03952-c4b9-4475-9287-4929f7c6adf0.webp?v=1773179719',
    'https://cdn.shopify.com/s/files/1/0803/4808/6514/files/6_6e637dc7-f505-473a-9d73-69dde05398d7.webp?v=1773179719',
    'https://cdn.shopify.com/s/files/1/0803/4808/6514/files/8_dc67378b-261e-4e3f-8fd3-ecb335d8ab5e.webp?v=1773179719',
    'https://cdn.shopify.com/s/files/1/0803/4808/6514/files/9_37f88742-d18c-4174-bd8d-25450311c1b6.webp?v=1773179719',
  ],
  'bubble-19': [
    'https://cdn.shopify.com/s/files/1/0803/4808/6514/files/9_b88ddbd9-16b5-4d4e-8a81-b1359db03679.webp?v=1768939059',
    'https://cdn.shopify.com/s/files/1/0803/4808/6514/files/6_c618d1d8-32b6-416e-8906-0869b20bb279.webp?v=1768939059',
  ],
  'flat-110x45': [
    'https://cdn.shopify.com/s/files/1/0803/4808/6514/files/4_74fcf9d1-2699-4ce4-ad42-761d094bc185.webp?v=1773175902',
    'https://cdn.shopify.com/s/files/1/0803/4808/6514/files/3_488a4b8e-0e8d-4592-9af7-32bdf9bef56f.webp?v=1773175902',
    'https://cdn.shopify.com/s/files/1/0803/4808/6514/files/7_eca3ff6f-20a4-4eb7-ad55-9454c581640e.webp?v=1773175902',
    'https://cdn.shopify.com/s/files/1/0803/4808/6514/files/1_d6f30151-7089-4e1a-99e4-b593ee0ff8d6.webp?v=1773175902',
    'https://cdn.shopify.com/s/files/1/0803/4808/6514/files/5_a8be0839-5583-488e-9c48-9be0be894a61.webp?v=1773175902',
    'https://cdn.shopify.com/s/files/1/0803/4808/6514/files/8_431835e9-daf4-4dbd-ad82-51382d9a3a7f.webp?v=1773175902',
    'https://cdn.shopify.com/s/files/1/0803/4808/6514/files/9_b46aaaf8-7ae8-4973-9f73-b001bc0cf4ad.webp?v=1773175902',
    'https://cdn.shopify.com/s/files/1/0803/4808/6514/files/6_5d26cbae-45fa-47a4-82fb-538355130a41.webp?v=1773175902',
  ],
  'flush-driver-front': [
    'https://cdn.shopify.com/s/files/1/0803/4808/6514/files/driversideflushwindows.webp?v=1777397863',
    'https://cdn.shopify.com/s/files/1/0803/4808/6514/files/driversideflushwindows_2.webp?v=1777397863',
    'https://cdn.shopify.com/s/files/1/0803/4808/6514/files/driversideflushwindows_3.webp?v=1777397863',
    'https://cdn.shopify.com/s/files/1/0803/4808/6514/files/driversideflushwindows_4.webp?v=1777397863',
    'https://cdn.shopify.com/s/files/1/0803/4808/6514/files/driversideflushwindows_5.webp?v=1777397863',
    'https://cdn.shopify.com/s/files/1/0803/4808/6514/files/driversideflushwindows_6.webp?v=1777397863',
  ],
  'flush-rear-driver': [
    'https://cdn.shopify.com/s/files/1/0803/4808/6514/files/7_68f52493-5d8a-4c81-b34d-66d283157827.webp?v=1777051204',
    'https://cdn.shopify.com/s/files/1/0803/4808/6514/files/6_2a06b323-5e8b-4f7e-b7e4-222289cf2b0f.webp?v=1777051204',
    'https://cdn.shopify.com/s/files/1/0803/4808/6514/files/1_d15d0fa6-5c75-4632-a853-6b23e93485b7.webp?v=1777051204',
    'https://cdn.shopify.com/s/files/1/0803/4808/6514/files/2_451d9a85-3908-4a48-8edf-7e6641912a78.webp?v=1777051204',
    'https://cdn.shopify.com/s/files/1/0803/4808/6514/files/3_861ff375-e4e5-471e-beaf-6a9154412227.webp?v=1777051204',
    'https://cdn.shopify.com/s/files/1/0803/4808/6514/files/4_7d757485-4956-4f4d-8dd4-8f490e5580b8.webp?v=1777051204',
    'https://cdn.shopify.com/s/files/1/0803/4808/6514/files/5_6b805463-fe13-4185-b262-5db7dfbb0a3c.webp?v=1777051204',
  ],
  'flush-rear-passenger': [
    'https://cdn.shopify.com/s/files/1/0803/4808/6514/files/RearPassengerSideFlushSlidingWindows-_3.webp?v=1777489528',
    'https://cdn.shopify.com/s/files/1/0803/4808/6514/files/RearPassengerSideFlushSlidingWindows-_6.webp?v=1777489528',
    'https://cdn.shopify.com/s/files/1/0803/4808/6514/files/RearPassengerSideFlushSlidingWindows-_5.webp?v=1777489528',
    'https://cdn.shopify.com/s/files/1/0803/4808/6514/files/RearPassengerSideFlushSlidingWindows-_1.webp?v=1777489528',
    'https://cdn.shopify.com/s/files/1/0803/4808/6514/files/RearPassengerSideFlushSlidingWindows-_2.webp?v=1777489528',
    'https://cdn.shopify.com/s/files/1/0803/4808/6514/files/RearPassengerSideFlushSlidingWindows-_4.webp?v=1777489528',
  ],
  'flush-sliding-door': [
    'https://cdn.shopify.com/s/files/1/0803/4808/6514/files/4_fa06e6e3-9e9d-4cce-8bf3-d8ce7c23888a.webp?v=1777486547',
    'https://cdn.shopify.com/s/files/1/0803/4808/6514/files/3_4b52101e-eb21-4898-b0e5-437b62bb79b7.webp?v=1777486547',
    'https://cdn.shopify.com/s/files/1/0803/4808/6514/files/2_173e3559-b418-4ce8-bc6a-19293d7eb768.webp?v=1777486547',
    'https://cdn.shopify.com/s/files/1/0803/4808/6514/files/5_c5d30e26-24e9-4487-8e4f-0e2acfdcf155.webp?v=1777486547',
    'https://cdn.shopify.com/s/files/1/0803/4808/6514/files/6_fb147f5e-2df6-42d2-a985-4d01fad60bbb.webp?v=1777486547',
    'https://cdn.shopify.com/s/files/1/0803/4808/6514/files/1_3b71cf23-c331-470c-9c9d-32426caac3c0.webp?v=1777486547',
  ],
  'solid-170-driver': [
    'https://cdn.shopify.com/s/files/1/0803/4808/6514/files/4_c7a24088-6e7c-463c-aa71-43b69f410abc.webp?v=1778146352',
    'https://cdn.shopify.com/s/files/1/0803/4808/6514/files/2_42951f5f-0907-43d2-9f96-e399bb3b2d06.webp?v=1778146351',
    'https://cdn.shopify.com/s/files/1/0803/4808/6514/files/3_eda93489-7199-42a7-9fba-22f78d4898af.webp?v=1778146351',
    'https://cdn.shopify.com/s/files/1/0803/4808/6514/files/5_9cf9a687-8bbf-433c-9435-28dc99ebcdd5.webp?v=1778146352',
    'https://cdn.shopify.com/s/files/1/0803/4808/6514/files/1_df3c684b-55a3-4bec-a89f-443f9d4f5041.webp?v=1778146351',
  ],
  'solid-170-passenger': [
    'https://cdn.shopify.com/s/files/1/0803/4808/6514/files/6_52127466-5951-4e07-b367-a0195bd19fce.webp?v=1778275162',
    'https://cdn.shopify.com/s/files/1/0803/4808/6514/files/3_a30a5593-dde3-44e2-86f4-6b29c582b8ee.webp?v=1778275162',
    'https://cdn.shopify.com/s/files/1/0803/4808/6514/files/5_ccfb306b-2bba-4919-b7b0-6e7d2d3d2064.webp?v=1778275163',
    'https://cdn.shopify.com/s/files/1/0803/4808/6514/files/2_508c550b-85a1-4d01-a87f-7ebe5fb359bf.webp?v=1778275163',
    'https://cdn.shopify.com/s/files/1/0803/4808/6514/files/4_c0bfa919-0f7a-4f5a-b212-2469bddf71c2.webp?v=1778275162',
  ],
  'solid-rear-passenger': [
    'https://cdn.shopify.com/s/files/1/0803/4808/6514/files/3_12cf4add-55fd-44af-abf5-a31142c69c78.webp?v=1778275400',
    'https://cdn.shopify.com/s/files/1/0803/4808/6514/files/4_6f4504c2-f108-49e5-a287-66fff663e9a7.webp?v=1778275399',
    'https://cdn.shopify.com/s/files/1/0803/4808/6514/files/5_9c0aa056-997f-447a-a459-f5aded0e5278.webp?v=1778275399',
    'https://cdn.shopify.com/s/files/1/0803/4808/6514/files/1_668a2cdb-fd1a-4fc0-8e97-03de3937f82c.webp?v=1778275400',
    'https://cdn.shopify.com/s/files/1/0803/4808/6514/files/2_a024e4f2-f04c-4617-a32a-d3bd01129a1a.webp?v=1778275399',
  ],
  'solid-passenger-door': [
    'https://cdn.shopify.com/s/files/1/0803/4808/6514/files/6_e2bebf0d-e311-4ef8-9f19-1c694b8e8f21.webp?v=1778275701',
    'https://cdn.shopify.com/s/files/1/0803/4808/6514/files/3_b4e811c9-3661-4bca-b9c5-408ba037a330.webp?v=1778275701',
    'https://cdn.shopify.com/s/files/1/0803/4808/6514/files/4_71a629a2-b128-4853-9591-915b4ee7b17e.webp?v=1778275701',
    'https://cdn.shopify.com/s/files/1/0803/4808/6514/files/1_ce80e962-d73f-4960-9aed-7e2eed6280f9.webp?v=1778275701',
    'https://cdn.shopify.com/s/files/1/0803/4808/6514/files/2_d2f2e8a6-2ebe-4a37-90db-681331d5ca46.webp?v=1778275701',
  ],
};

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https
      .get(url, (res) => {
        if (res.statusCode !== 200) {
          file.close();
          fs.unlink(dest, () => {});
          return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
        }
        res.pipe(file);
        file.on('finish', () => file.close(resolve));
      })
      .on('error', (err) => {
        fs.unlink(dest, () => {});
        reject(err);
      });
  });
}

(async () => {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  console.log(`\nDownloading Glacier View images → ${OUT_DIR}\n`);

  let total = 0;
  let failed = 0;

  for (const [prefix, urls] of Object.entries(PRODUCTS)) {
    for (let i = 0; i < urls.length; i++) {
      const filename = `${prefix}-${i + 1}.webp`;
      const dest = path.join(OUT_DIR, filename);
      try {
        await download(urls[i], dest);
        const kb = (fs.statSync(dest).size / 1024).toFixed(1);
        console.log(`  ✓  ${filename.padEnd(42)} ${kb.padStart(8)} KB`);
        total++;
      } catch (err) {
        console.log(`  ✗  ${filename}  →  ${err.message}`);
        failed++;
      }
    }
  }

  console.log(`\n✓ Done. ${total} images downloaded, ${failed} failed.\n`);
  console.log(`Reference these in your component as /images/glacier/<filename>.webp\n`);
})();
