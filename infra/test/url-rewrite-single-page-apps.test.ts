import { CloudFrontFunctionsEvent } from 'aws-lambda';
import handler from '../functions/url-rewrite-single-page-apps';

describe('UrlRewriteSPA', () => {
  it('should redirect to index for uri ending with slash /', () => {
    const event = {
      request: {
        uri: '/smth/here/',
      },
    } as unknown as CloudFrontFunctionsEvent;
    const modifiedRequest = handler(event);
    expect(modifiedRequest).toEqual({ uri: '/index.html' });
  });

  it('should redirect to index for uri ending with no extension', () => {
    const event = {
      request: {
        uri: '/smth/here/and/there',
      },
    } as unknown as CloudFrontFunctionsEvent;
    const modifiedRequest = handler(event);
    expect(modifiedRequest).toEqual({ uri: '/index.html' });
  });

  it('should keep the original uri if uri has extension', () => {
    const event = {
      request: {
        uri: '/somefile.ext',
      },
    } as unknown as CloudFrontFunctionsEvent;
    const modifiedRequest = handler(event);
    expect(modifiedRequest).toEqual({ uri: event.request.uri });
  });
});
