
(async () => {

    const RIS   = require("wordnet-ris")
    const RISen = require(".")

    console.log(RISen.name)

    let ris = new RIS(RISen.db)
    let results = await ris.lookup("speaker")
    console.log(results)

})().catch((err) => {
    console.log(`ERROR: ${err}`)
})

