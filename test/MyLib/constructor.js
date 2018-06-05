import chai from 'chai'
import sinon from 'sinon'
import { describe, it } from 'mocha'
import { MyLib } from '../../dist/my-library.js'

const assert = chai.assert
sinon.assert.expose(assert, { prefix: '' })

describe('MyLib class', () => {
  describe('constructor', () => {
    it('should have foo name', () => {
      const myLib = new MyLib()

      assert.property(myLib, 'name')
      assert.propertyVal(myLib, 'name', 'foo')
    })
  })
})
