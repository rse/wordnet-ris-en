
WordNet-RIS-EN
==============

WordNet Reduced Information Set (RIS): English (EN)

<p/>
<img src="https://nodei.co/npm/wordnet-ris-en.png?downloads=true&stars=true" alt=""/>

<p/>
<img src="https://david-dm.org/rse/wordnet-ris-en.png" alt=""/>

About
-----

This is a [Node.js](https://nodejs.org/) module shipping the
[MIT-style](http://compling.hss.ntu.edu.sg/omw/wns/eng/LICENSE) licensed,
156K words containing, on-the-fly downloaded [WordNet LMF (XML)](https://github.com/globalwordnet/schemas)
data file of [Princeton WordNet 3.1 (PWN)](https://wordnet.princeton.edu/)
from [Open Multilingual Wordnet](http://compling.hss.ntu.edu.sg/omw/),
in the Reduced Information Set (RIS) format, as on-the-fly generated with the
[wordnet-ris](https://npmjs.com/wordnet-ris) module.

Installation
------------

```shell
$ npm install wordnet-ris wordnet-ris-en
```

Usage
-----

```js
(async () => {

    const RIS   = require("wordnet-ris")
    const RISen = require("wordnet-ris-en")

    console.log(RISen.name)

    let ris = new RIS(RISen.db)
    let results = await ris.lookup("speaker")
    console.log(results)

})().catch((err) => {
    console.log(`ERROR: ${err}`)
})
```

```
OMW Princeton WordNet 3.1 (2011-05-26) [MIT-style]
{ pos: 'n',
  syn:
   [ 'loudspeaker',
     'loudspeaker system',
     'speaker system',
     'speaker unit',
     'talker',
     'utterer',
     'verbaliser',
     'verbalizer' ] }
```

License
-------

Copyright (c) 2018-2019 Dr. Ralf S. Engelschall (http://engelschall.com/)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

