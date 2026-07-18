import { createWriteStream, mkdirSync } from "fs";
import { pipeline } from "stream/promises";
import { get } from "https";

mkdirSync("public/images", { recursive: true });

const images = [
  ["og-image.webp", "https://cdn.builder.io/api/v1/image/assets%2F710bca198b8e4d6fb8057e564be7974f%2Fc96d6dac02aa4fbe8c6d6cc4d20f8164?format=webp&width=1200&height=630"],
  ["logo-header.webp", "https://cdn.builder.io/api/v1/image/assets%2F37fe508629794307b44d873859aad7cf%2F2b1408065852494b93dd7445e38a5652?format=webp&width=800"],
  ["footer-logo.webp", "https://api.builder.io/api/v1/image/assets/TEMP/f6b0535e5973547e6cfe0dd5821532366a17ac51?width=416"],
  ["hero-avatar.webp", "https://api.builder.io/api/v1/image/assets/TEMP/ccf757ecc570bad21be86586be9ed913626543a9?width=164"],
  ["scroll-icon.webp", "https://api.builder.io/api/v1/image/assets/TEMP/606973b7a19e784fa309acebad1d2d62459e0d20?width=80"],
  ["intro-shape-1.webp", "https://api.builder.io/api/v1/image/assets/TEMP/146d714265786810fdd18a4fcf76b2fc19105251?width=200"],
  ["person.webp", "https://api.builder.io/api/v1/image/assets/TEMP/16fdf4661237be3a6f0753facd7aa91bfa13ef50?width=418"],
  ["group.webp", "https://api.builder.io/api/v1/image/assets/TEMP/9dcd1bb21880ba2e5bc600ed06cba837cc13bca1?width=500"],
  ["arrow-down.webp", "https://api.builder.io/api/v1/image/assets/TEMP/1685b8dc9de3e96d40e004a1cd5fa325c3f783d1?width=160"],
  ["thumb.webp", "https://api.builder.io/api/v1/image/assets/TEMP/74ad161ce9ae79bedd3125e55a7036ba67285e6e?width=320"],
  ["intro-shape.webp", "https://api.builder.io/api/v1/image/assets/TEMP/b1cd86f4ef199e2be3d9b85ebc88d5bf004fc2b8?width=820"],
  ["brand-corner.webp", "https://api.builder.io/api/v1/image/assets/TEMP/2f8efb74891ead64813feaafacd54fb4855ea528?width=312"],
  ["brand-logo-1.webp", "https://api.builder.io/api/v1/image/assets/TEMP/c879a0f5aebe016864bd1cd82e1d16c217116b3d?width=297"],
  ["brand-logo-2.webp", "https://api.builder.io/api/v1/image/assets/TEMP/957bf2587ffbe603681b88cad470b214d38cc216?width=344"],
  ["brand-logo-3.webp", "https://api.builder.io/api/v1/image/assets/TEMP/60abf8b538f518a80ab9a841924e64d10a9bf558?width=322"],
  ["brand-logo-4.webp", "https://api.builder.io/api/v1/image/assets/TEMP/2749008110e8a6883274172ecd2cd6d9176beffb?width=311"],
  ["brand-logo-5.webp", "https://api.builder.io/api/v1/image/assets/TEMP/01ab5c0799c8b4f3b758b1c8a878ec698c3fc843?width=344"],
  ["brand-logo-6.webp", "https://api.builder.io/api/v1/image/assets/TEMP/2df19b14c5298afc8c404d5f60b74c9c25a19679?width=336"],
  ["tech-wordpress.webp", "https://api.builder.io/api/v1/image/assets/TEMP/cff6b7ef129c522b03ad0aaf693172c53c4eeacf?width=200"],
  ["tech-react.webp", "https://api.builder.io/api/v1/image/assets/TEMP/c9918d860144666cf53a02a3c0a645deaf4ad1b1?width=200"],
  ["tech-node.webp", "https://api.builder.io/api/v1/image/assets/TEMP/69d15ec1de37aea7268ec7aa8ea08e7445728784?width=200"],
  ["tech-flutter.webp", "https://api.builder.io/api/v1/image/assets/TEMP/0d4faef2a9ab37ad34ad69931fee4bac497056ac?width=160"],
  ["avatar-1.webp", "https://cdn.builder.io/api/v1/image/assets%2Fc70ebb3e5225486399c19406cd27bb43%2F49cf2d55e7154c8e825da8cbaa58313f?format=webp&width=200&height=200"],
  ["avatar-2.webp", "https://cdn.builder.io/api/v1/image/assets%2Fc70ebb3e5225486399c19406cd27bb43%2F11ee54a04aaf4028b2d95687da7116be?format=webp&width=200&height=200"],
  ["avatar-3.webp", "https://cdn.builder.io/api/v1/image/assets%2Fc70ebb3e5225486399c19406cd27bb43%2Fa993cba5ba76428987452eaa14a075fd?format=webp&width=200&height=200"],
  ["avatar-4.webp", "https://cdn.builder.io/api/v1/image/assets%2Fc70ebb3e5225486399c19406cd27bb43%2Fadad46230e704738b7eacdefca5cc2d1?format=webp&width=200&height=200"],
  ["avatar-5.webp", "https://cdn.builder.io/api/v1/image/assets%2Fc70ebb3e5225486399c19406cd27bb43%2Fda8953551ec54f8f9815eb5d31176953?format=webp&width=200&height=200"],
  ["team-photo.webp", "https://cdn.builder.io/api/v1/image/assets/37fe508629794307b44d873859aad7cf/ec7816648020414088a761bd92dfb350?format=webp&width=800&height=1200"],
  ["team-member.webp", "https://cdn.builder.io/api/v1/image/assets/37fe508629794307b44d873859aad7cf/37ff1df5edad4ccc800ecabb937bd016?format=webp&width=800&height=1200"],
  ["accent-1.webp", "https://api.builder.io/api/v1/image/assets/TEMP/1804a4d3e15f8c2216251a890d0be577b72d7c89?width=284"],
  ["clients-img.webp", "https://api.builder.io/api/v1/image/assets/TEMP/2ac29ce1c1c25b4a7061cf388b087767fd7967d8?width=240"],
  ["team-working.webp", "https://api.builder.io/api/v1/image/assets/TEMP/cebf100cfa2f8b5cd61f8901babba182a2278871?width=660"],
  ["office.webp", "https://api.builder.io/api/v1/image/assets/TEMP/53a7e1e500fa7f5bf705363b6c052995e6bca45a?width=910"],
  ["process-icon.webp", "https://api.builder.io/api/v1/image/assets/TEMP/29d2818d5b277ff727f65d90516ef514b52db1c9?width=54"],
  ["star-icon.webp", "https://api.builder.io/api/v1/image/assets/TEMP/a03b2a33c768d1dfef5dfb6f28f1b06f4587f107?width=186"],
  ["dashboard-team.webp", "https://cdn.builder.io/api/v1/image/assets%2Feaa719c761d64fc58dbfe871f4fb5f8e%2Fe6c2f37c15ae41b5b4880182ef260f71?format=webp&width=800&height=1200"],
  ["team-alex.webp", "https://cdn.builder.io/api/v1/image/assets%2Fd262aa17ef624b1d94677905217b9bcb%2F14452e3d04e648af85a019469720ed5c?format=webp&width=400&height=400"],
  ["team-sarah.webp", "https://cdn.builder.io/api/v1/image/assets%2Fd262aa17ef624b1d94677905217b9bcb%2F4897094158eb40fbb8b283c78b40fed2?format=webp&width=400&height=400"],
  ["team-mike.webp", "https://cdn.builder.io/api/v1/image/assets%2Fd262aa17ef624b1d94677905217b9bcb%2Fff642e5bc08b45e0834a84d65c6771f9?format=webp&width=400&height=400"],
  ["blog-1.webp", "https://api.builder.io/api/v1/image/assets/TEMP/14f15595d9a4595dee97127a1990c57d87db0f6c?width=1480"],
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = createWriteStream(dest);
    function request(u) {
      get(u, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          request(res.headers.location);
          return;
        }
        if (res.statusCode !== 200) {
          reject(new Error(`HTTP ${res.statusCode} for ${u}`));
          return;
        }
        pipeline(res, file).then(resolve).catch(reject);
      }).on("error", reject);
    }
    request(url);
  });
}

let ok = 0, fail = 0;
for (const [name, url] of images) {
  try {
    await download(url, `public/images/${name}`);
    console.log(`OK  ${name}`);
    ok++;
  } catch (e) {
    console.log(`FAIL ${name}: ${e.message}`);
    fail++;
  }
}
console.log(`\nDone: ${ok} ok, ${fail} failed`);
