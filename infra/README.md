# CDK TypeScript project for infrastructure

This is a CDK project to provision CloudFront + S3 setup to host the web app.

The `cdk.json` file tells the CDK Toolkit how to execute the app.

**NOTE:** before using CDK on an account<>region pair, you need to bootstrap it first (via `cdk bootstrap`) with required permissions. One of the ways is to run `cdk bootstrap` from cloudshell with user with AdministratorAccess permissions). Then, for the service user itself (under which cicd will be run) you need to provide this policy:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "CdkAssumeRole",
      "Effect": "Allow",
      "Action": "sts:AssumeRole",
      "Resource": "arn:aws:iam::*:role/cdk-*"
    }
  ]
}
```

Also, it is required to have permissions to list/read/write S3 buckets (to be able to sync dist) and cloudfront list/read/write to be able to query cloudfront id and trigger invalidation

Again, cdk bootstrap should be run per each account<>region, therefore if you have run it for us-east-1 (for example), you still need to run it for eu-central-1 (if you need CDK in this region)

## Required Gitlab CI variables

To be able to connect to AWS and execute cdk/cli commands, it is needed to place this 3 variables into Settings -> CI/CD:

- `AWS_ACCESS_KEY_ID`
- `AWS_DEFAULT_REGION`
- `AWS_SECRET_ACCESS_KEY`

## Useful commands

- `pnpm cdk` - access to cdk command (you can pass argument for it, e.g. `pnpm cdk docs` which will evaluate to `cdk docs`)
- `pnpm infra:diff` - show difference between deployed infrastructure and the coded one (current state of bin/lib files)
- `pnpm infra:synth` - synthesize AWS Cloudformation templates from the existing CDK setup. Later, these templates can be used in Cloudformation itself.
- `pnpm infra:deploy` - deploy the infrastructure to AWS
- `pnpm infra:test` - run assertion tests for synthesized cdk. For more information what these tests are visit [official doc](https://docs.aws.amazon.com/cdk/v2/guide/testing.html).
