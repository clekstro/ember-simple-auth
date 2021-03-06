import isSecureUrl from 'simple-auth/utils/is-secure-url';

describe('Utils.isSecureUrl', function() {
  it('is true for "https://example.com"', function() {
    expect(isSecureUrl("https://example.com")).to.be.true;
  });

  it('is false for "http://example.com"', function() {
    expect(isSecureUrl("http://example.com")).to.be.false;
  });
});
