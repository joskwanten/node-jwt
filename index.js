import * as jose from 'jose'
import express from 'express'
import fs from 'fs'
import cors from 'cors'
import * as oid from './openidConfiguration.mjs'

const app = express()
const port = 3000
app.options('*', cors())
app.use(cors())

function readFile(filename, options) {
  return new Promise((res, rej) => {
    fs.readFile(filename, options, (err, data) => {
      if (err) {
        rej(err)
      } else {
        res(data)
      }      
    });
  });
}

const crt = await readFile("example.crt", "ascii");
const key = await readFile("example.key", "ascii");
const algorithm = 'HS256';
const hsPublicKey = await jose.importX509(crt, algorithm)
const hsPrivateKey = await jose.importPKCS8(key, algorithm)
const publicJwk = await jose.exportJWK(hsPublicKey)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/.well-known/openid-configuration', (req, res) => {
  res.send(JSON.stringify(oid.openIdConfiguration))
});

app.get('/jwk', (req, res) => {
  res.send(JSON.stringify({keys: [publicJwk]}))
});

app.get('/token', async (req, res) => {
  const jwt = await new jose.SignJWT({ 'urn:example:claim': true })
  .setProtectedHeader({ alg: 'RS512' })
  .setIssuedAt()
  .setIssuer('http://localhost:3000')
  .setAudience('urn:example:audience')
  .setExpirationTime('2h')
  .sign(hsPrivateKey)

  res.send(jwt);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// OncePerRequestFilter jwt