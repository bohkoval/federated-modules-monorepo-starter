/* eslint-disable no-var */
// we need "var" because cloudfront functions can't work with const/let
import { CloudFrontFunctionsEvent } from 'aws-lambda';

function handler(event: CloudFrontFunctionsEvent) {
  var request = event.request;
  var uri = request.uri;

  // Check whether the URI is missing a file name.
  if (uri.endsWith('/')) {
    request.uri = '/index.html';
  }
  // Check whether the URI is missing a file extension.
  else if (!uri.includes('.')) {
    request.uri = '/index.html';
  }

  return request;
}

export default handler;
