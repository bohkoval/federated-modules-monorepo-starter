import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import urlRewriteSpaHandler from '../functions/url-rewrite-single-page-apps';

export class InfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const { bucketName } = this.createParameters();

    const bucket = this.createBucket({ bucketName });
    const cloudfrontOAI = this.createCloudfrontOAI();

    bucket.addToResourcePolicy(
      this.getIamPolicyStatementForCloudfrontOAI({ bucket, cloudfrontOAI })
    );

    this.createCloudfrontDistribution({ bucket, cloudfrontOAI });
  }

  createBucket({ bucketName }: { bucketName: string }): cdk.aws_s3.Bucket {
    return new cdk.aws_s3.Bucket(this, 'Bucket', {
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      versioned: true,
      accessControl: cdk.aws_s3.BucketAccessControl.PRIVATE,
      objectOwnership: cdk.aws_s3.ObjectOwnership.BUCKET_OWNER_ENFORCED,
      publicReadAccess: false,
      blockPublicAccess: cdk.aws_s3.BlockPublicAccess.BLOCK_ALL,
      bucketName,
    });
  }

  createCloudfrontOAI(): cdk.aws_cloudfront.OriginAccessIdentity {
    return new cdk.aws_cloudfront.OriginAccessIdentity(this, 'BucketCfOAI', {
      comment: 'OAI for CloudFront to access S3 (created by CDK)',
    });
  }

  getIamPolicyStatementForCloudfrontOAI({
    bucket,
    cloudfrontOAI,
  }: {
    bucket: cdk.aws_s3.Bucket;
    cloudfrontOAI: cdk.aws_cloudfront.OriginAccessIdentity;
  }): cdk.aws_iam.PolicyStatement {
    return new cdk.aws_iam.PolicyStatement({
      actions: ['s3:GetObject'],
      resources: [bucket.arnForObjects('*')],
      principals: [
        new cdk.aws_iam.CanonicalUserPrincipal(
          cloudfrontOAI.cloudFrontOriginAccessIdentityS3CanonicalUserId
        ),
      ],
    });
  }

  createCloudfrontDistribution({
    bucket,
    cloudfrontOAI,
  }: {
    bucket: cdk.aws_s3.Bucket;
    cloudfrontOAI: cdk.aws_cloudfront.OriginAccessIdentity;
  }) {
    return new cdk.aws_cloudfront.Distribution(this, 'Distribution', {
      comment: 'Distribution for web app with federated modules',
      defaultRootObject: 'index.html',
      defaultBehavior: {
        origin: new cdk.aws_cloudfront_origins.S3Origin(bucket, {
          originAccessIdentity: cloudfrontOAI,
        }),
        functionAssociations: [
          {
            function: this.getUrlRewriteSpaFunction(),
            eventType: cdk.aws_cloudfront.FunctionEventType.VIEWER_REQUEST,
          },
        ],
        compress: true,
        allowedMethods: cdk.aws_cloudfront.AllowedMethods.ALLOW_GET_HEAD_OPTIONS,
        viewerProtocolPolicy: cdk.aws_cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        responseHeadersPolicy: this.getResponseHeaderPolicy(),
      },
    });
  }

  getUrlRewriteSpaFunction(): cdk.aws_cloudfront.Function {
    return new cdk.aws_cloudfront.Function(this, 'UrlRewriteFunction', {
      comment: 'Function to rewrite url for SPA apps (fallback to index.html)',
      code: cdk.aws_cloudfront.FunctionCode.fromInline(urlRewriteSpaHandler.toString()),
    });
  }

  getResponseHeaderPolicy(): cdk.aws_cloudfront.ResponseHeadersPolicy {
    return new cdk.aws_cloudfront.ResponseHeadersPolicy(this, 'SecurityHeaders', {
      comment: 'Security headers for response',
      securityHeadersBehavior: {
        contentTypeOptions: {
          override: true,
        },
        xssProtection: {
          override: true,
          protection: true,
          modeBlock: true,
        },
        strictTransportSecurity: {
          override: true,
          accessControlMaxAge: cdk.Duration.days(2 * 365),
          includeSubdomains: true,
          preload: true,
        },
      },
    });
  }

  createParameters(): { bucketName: string } {
    const bucketName = new cdk.CfnParameter(this, 'bucketName', { type: 'String' });
    return { bucketName: bucketName.valueAsString };
  }
}
