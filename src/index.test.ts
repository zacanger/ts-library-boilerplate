/* eslint-env jest */

import { id } from './'

describe('id', (): void => {
  it('is the identity function', (): void => {
    expect(id(1)).toBe(1)
  })
})
