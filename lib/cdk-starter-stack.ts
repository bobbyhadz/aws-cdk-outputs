import * as s3 from '@aws-cdk/aws-s3';
import * as cdk from '@aws-cdk/core';

export class MyCdkStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // 👇 define the bucket
    const s3Bucket = new s3.Bucket(this, 'avatars-bucket', {
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

    // 👇 create an Output and assign it to a variable
    const bucketNameOutput = new cdk.CfnOutput(this, 'bucketName', {
      value: s3Bucket.bucketName,
      description: 'The name of the s3 bucket',
      exportName: 'avatarsBucket',
    });

    console.log('bucketNameOutput 👉', bucketNameOutput.value);
  }
}
