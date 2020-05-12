var fs = require('fs');

var buf = fs.readFileSync(process.argv[2]);
var lines = buf.toString().split('\n').length;
if (lines > 0) lines -= 1;
console.log(lines);

Microsoft Windows [version 6.3.9600]
(c) 2013 Microsoft Corporation. Tous droits réservés.

C:\Users\JEMAI>cd..

C:\Users>cd..

C:\>cd Projects

C:\Projects>cd myweb3

C:\Projects\myweb3> node my-first-io
internal/fs/utils.js:525
    throw new ERR_INVALID_ARG_TYPE(propName, ['string', 'Buffer', 'URL'], path);
    ^

TypeError [ERR_INVALID_ARG_TYPE]: The "path" argument must be one of type string, Buffer, or URL. Received type undefined
←[90m    at Object.openSync (fs.js:432:10)←[39m
←[90m    at Object.readFileSync (fs.js:342:35)←[39m
    at Object.<anonymous> (C:\Projects\myweb3\my-first-io.js:3:19)
←[90m    at Module._compile (internal/modules/cjs/loader.js:955:30)←[39m
←[90m    at Object.Module._extensions..js (internal/modules/cjs/loader.js:991:10)←[39m
←[90m    at Module.load (internal/modules/cjs/loader.js:811:32)←[39m
←[90m    at Function.Module._load (internal/modules/cjs/loader.js:723:14)←[39m
←[90m    at Function.Module.runMain (internal/modules/cjs/loader.js:1043:10)←[39m
←[90m    at internal/main/run_main_module.js:17:11←[39m {
  code: ←[32m'ERR_INVALID_ARG_TYPE'←[39m
}

C:\Projects\myweb3>var fs = require('fs')
'var' n’est pas reconnu en tant que commande interne
ou externe, un programme exécutable ou un fichier de commandes.

C:\Projects\myweb3>
C:\Projects\myweb3>var contents = fs.readFileSync(process.argv[2])
'var' n’est pas reconnu en tant que commande interne
ou externe, un programme exécutable ou un fichier de commandes.

C:\Projects\myweb3>var lines = contents.toString().split('\n').length - 1
'var' n’est pas reconnu en tant que commande interne
ou externe, un programme exécutable ou un fichier de commandes.

C:\Projects\myweb3>console.log(lines)
'console.log' n’est pas reconnu en tant que commande interne
ou externe, un programme exécutable ou un fichier de commandes.

C:\Projects\myweb3>console.log(lines)
'console.log' n’est pas reconnu en tant que commande interne
ou externe, un programme exécutable ou un fichier de commandes.

C:\Projects\myweb3>console.log(lines)
'console.log' n’est pas reconnu en tant que commande interne
ou externe, un programme exécutable ou un fichier de commandes.

C:\Projects\myweb3> node my-first-io
internal/fs/utils.js:220
    throw err;
    ^

Error: ENOENT: no such file or directory, open 'process.argv[2]'
←[90m    at Object.openSync (fs.js:440:3)←[39m
←[90m    at Object.readFileSync (fs.js:342:35)←[39m
    at Object.<anonymous> (C:\Projects\myweb3\my-first-io.js:3:19)
←[90m    at Module._compile (internal/modules/cjs/loader.js:955:30)←[39m
←[90m    at Object.Module._extensions..js (internal/modules/cjs/loader.js:991:10)←[39m
←[90m    at Module.load (internal/modules/cjs/loader.js:811:32)←[39m
←[90m    at Function.Module._load (internal/modules/cjs/loader.js:723:14)←[39m
←[90m    at Function.Module.runMain (internal/modules/cjs/loader.js:1043:10)←[39m
←[90m    at internal/main/run_main_module.js:17:11←[39m {
  errno: ←[33m-4058←[39m,
  syscall: ←[32m'open'←[39m,
  code: ←[32m'ENOENT'←[39m,
  path: ←[32m'process.argv[2]'←[39m
}

C:\Projects\myweb3> node my-first-io
internal/fs/utils.js:525
    throw new ERR_INVALID_ARG_TYPE(propName, ['string', 'Buffer', 'URL'], path);
    ^

TypeError [ERR_INVALID_ARG_TYPE]: The "path" argument must be one of type string, Buffer, or URL. Received type undefined
←[90m    at Object.openSync (fs.js:432:10)←[39m
←[90m    at Object.readFileSync (fs.js:342:35)←[39m
    at Object.<anonymous> (C:\Projects\myweb3\my-first-io.js:3:19)
←[90m    at Module._compile (internal/modules/cjs/loader.js:955:30)←[39m
←[90m    at Object.Module._extensions..js (internal/modules/cjs/loader.js:991:10)←[39m
←[90m    at Module.load (internal/modules/cjs/loader.js:811:32)←[39m
←[90m    at Function.Module._load (internal/modules/cjs/loader.js:723:14)←[39m
←[90m    at Function.Module.runMain (internal/modules/cjs/loader.js:1043:10)←[39m
←[90m    at internal/main/run_main_module.js:17:11←[39m {
  code: ←[32m'ERR_INVALID_ARG_TYPE'←[39m
}

C:\Projects\myweb3> node my-first-io
internal/fs/utils.js:525
    throw new ERR_INVALID_ARG_TYPE(propName, ['string', 'Buffer', 'URL'], path);
    ^

TypeError [ERR_INVALID_ARG_TYPE]: The "path" argument must be one of type string, Buffer, or URL. Received type undefined
←[90m    at Object.openSync (fs.js:432:10)←[39m
←[90m    at Object.readFileSync (fs.js:342:35)←[39m
    at Object.<anonymous> (C:\Projects\myweb3\my-first-io.js:3:14)
←[90m    at Module._compile (internal/modules/cjs/loader.js:955:30)←[39m
←[90m    at Object.Module._extensions..js (internal/modules/cjs/loader.js:991:10)←[39m
←[90m    at Module.load (internal/modules/cjs/loader.js:811:32)←[39m
←[90m    at Function.Module._load (internal/modules/cjs/loader.js:723:14)←[39m
←[90m    at Function.Module.runMain (internal/modules/cjs/loader.js:1043:10)←[39m
←[90m    at internal/main/run_main_module.js:17:11←[39m {
  code: ←[32m'ERR_INVALID_ARG_TYPE'←[39m
}

C:\Projects\myweb3> node my-first-io
internal/fs/utils.js:525
    throw new ERR_INVALID_ARG_TYPE(propName, ['string', 'Buffer', 'URL'], path);
    ^

TypeError [ERR_INVALID_ARG_TYPE]: The "path" argument must be one of type string, Buffer, or URL. Received type undefined
←[90m    at Object.openSync (fs.js:432:10)←[39m
←[90m    at Object.readFileSync (fs.js:342:35)←[39m
    at Object.<anonymous> (C:\Projects\myweb3\my-first-io.js:3:14)
←[90m    at Module._compile (internal/modules/cjs/loader.js:955:30)←[39m
←[90m    at Object.Module._extensions..js (internal/modules/cjs/loader.js:991:10)←[39m
←[90m    at Module.load (internal/modules/cjs/loader.js:811:32)←[39m
←[90m    at Function.Module._load (internal/modules/cjs/loader.js:723:14)←[39m
←[90m    at Function.Module.runMain (internal/modules/cjs/loader.js:1043:10)←[39m
←[90m    at internal/main/run_main_module.js:17:11←[39m {
  code: ←[32m'ERR_INVALID_ARG_TYPE'←[39m
}

C:\Projects\myweb3>learnyounode verify my-first-io.js

# LEARN YOU THE NODE.JS FOR MUCH WIN!

## MY FIRST I/O! (Exercise 3 of 13)


Your submission results compared to the expected:

                 ACTUAL                                 EXPECTED                
────────────────────────────────────────────────────────────────────────────────

   "19"                                ==    "19"                               
   ""                                  ==    ""                                 

────────────────────────────────────────────────────────────────────────────────

 ✓ 

 Submission results match expected

 ✓ 

 Used synchronous method: fs.readFileSync()

 # PASS Your solution to MY FIRST I/O! passed!

 Here's the official solution in case you want to compare notes:

─────────────────────────────────────────────────────────────────────────────

    'use strict'
    const fs = require('fs')

    const contents = fs.readFileSync(process.argv[2])
    const lines = contents.toString().split('\n').length - 1
    console.log(lines)

    // note you can avoid the .toString() by passing 'utf8' as the
    // second argument to readFileSync, then you'll get a String!
    //
    // fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1

─────────────────────────────────────────────────────────────────────────────
 You have 10 challenges left.

 Type 'learnyounode' to show the menu.

─────────────────────────────────────────────────────────────────────────────

  » To print these instructions again, run: learnyounode print                
  » To execute your program in a test environment, run: learnyounode run
                             
    program.js                                                                
  » To verify your program, run: learnyounode verify program.js               
  » For help run: learnyounode help                                           


C:\Projects\myweb3>
