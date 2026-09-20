const fs = require('fs');
const path = require('path');

const targetPolyfill = path.join(__dirname, '..', 'node_modules', 'next', 'dist', 'build', 'polyfills', 'polyfill-nomodule.js');
const safeCopyDir = path.join(__dirname, '..', 'lib');
const safeCopyFile = path.join(safeCopyDir, 'safe-polyfill-nomodule.js');

const earlyGuard = `/* Early safeguard against non-writable fetch/Headers/Request/Response getters */
(function(){
  try {
    var targets = [
      typeof window !== 'undefined' ? window : null,
      typeof Window !== 'undefined' && Window.prototype ? Window.prototype : null,
      typeof self !== 'undefined' ? self : null,
      typeof globalThis !== 'undefined' ? globalThis : null
    ];
    var props = ['fetch', 'Headers', 'Request', 'Response'];
    targets.forEach(function(target) {
      if (!target) return;
      props.forEach(function(prop) {
        try {
          var desc = Object.getOwnPropertyDescriptor(target, prop);
          if (!desc || (desc.get && !desc.set) || (!desc.writable && desc.configurable)) {
            var orig = target[prop];
            try {
              Object.defineProperty(target, prop, {
                value: orig,
                writable: true,
                configurable: true,
                enumerable: desc ? desc.enumerable !== false : true
              });
            } catch(e1) {
              var customVal = orig;
              try {
                Object.defineProperty(target, prop, {
                  get: function() { return customVal; },
                  set: function(v) { customVal = v; },
                  configurable: true,
                  enumerable: desc ? desc.enumerable !== false : true
                });
              } catch(e2) {}
            }
          }
        } catch(e) {}
      });
    });
  } catch(e) {}
})();
`;

function patchContent(code) {
  let patched = code;

  // Patch 1: whatwg-fetch assignment
  const p1 = 'hb.polyfill=!0,self.fetch||(self.fetch=hb,self.Headers=tb,self.Request=ub,self.Response=cb)';
  const r1 = 'hb.polyfill=!0;try{self.fetch||(self.fetch=hb,self.Headers=tb,self.Request=ub,self.Response=cb)}catch(_err){}';
  if (patched.includes(p1)) {
    patched = patched.replace(p1, r1);
  }

  // Patch 2: core-js assignment
  const p2 = 'o?t[e]=r:et(e,r)';
  const r2 = '(function(){try{o?t[e]=r:et(e,r)}catch(_e){try{Object.defineProperty(t,e,{value:r,writable:!0,configurable:!0,enumerable:!!o})}catch(_e2){}}})()';
  if (patched.includes(p2)) {
    patched = patched.replace(p2, r2);
  }

  if (!patched.includes('Early safeguard against non-writable fetch')) {
    patched = earlyGuard + patched;
  }

  return patched;
}

if (fs.existsSync(targetPolyfill)) {
  const original = fs.readFileSync(targetPolyfill, 'utf8');
  const patched = patchContent(original);
  fs.writeFileSync(targetPolyfill, patched, 'utf8');
  console.log('Successfully patched node_modules polyfill-nomodule.js');

  if (!fs.existsSync(safeCopyDir)) {
    fs.mkdirSync(safeCopyDir, { recursive: true });
  }
  fs.writeFileSync(safeCopyFile, patched, 'utf8');
  console.log('Saved safe polyfill copy to lib/safe-polyfill-nomodule.js');
}

// Also check and patch any existing polyfills chunk in .next
const chunksDir = path.join(__dirname, '..', '.next', 'static', 'chunks');
if (fs.existsSync(chunksDir)) {
  const files = fs.readdirSync(chunksDir);
  for (const file of files) {
    if (file.startsWith('polyfills') && file.endsWith('.js')) {
      const p = path.join(chunksDir, file);
      const content = fs.readFileSync(p, 'utf8');
      const patched = patchContent(content);
      fs.writeFileSync(p, patched, 'utf8');
      console.log('Successfully patched chunk:', file);
    }
  }
}

// Patch whatwg-fetch in node_modules if present
const whatwgFiles = [
  path.join(__dirname, '..', 'node_modules', 'whatwg-fetch', 'fetch.js'),
  path.join(__dirname, '..', 'node_modules', 'whatwg-fetch', 'dist', 'fetch.umd.js'),
];
whatwgFiles.forEach(f => {
  if (fs.existsSync(f)) {
    let content = fs.readFileSync(f, 'utf8');
    if (content.includes('if (!g.fetch) {')) {
      content = content.replace(
        'if (!g.fetch) {\n  g.fetch = fetch\n  g.Headers = Headers\n  g.Request = Request\n  g.Response = Response\n}',
        'try {\n  if (!g.fetch) {\n    g.fetch = fetch\n    g.Headers = Headers\n    g.Request = Request\n    g.Response = Response\n  }\n} catch(e) {}'
      );
      content = content.replace(
        'if (!g.fetch) {\n    g.fetch = fetch;\n    g.Headers = Headers;\n    g.Request = Request;\n    g.Response = Response;\n  }',
        'try {\n    if (!g.fetch) {\n      g.fetch = fetch;\n      g.Headers = Headers;\n      g.Request = Request;\n      g.Response = Response;\n    }\n  } catch(e) {}'
      );
      fs.writeFileSync(f, content, 'utf8');
      console.log('Successfully patched whatwg-fetch in', f);
    }
  }
});
