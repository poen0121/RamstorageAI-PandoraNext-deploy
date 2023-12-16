import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs'; // Import Construct from 'constructs'
import * as ecr from 'aws-cdk-lib/aws-ecr'; // Import ECR from aws-cdk-lib

export class RamstorageAiPandoraNextDeployStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new ecr.Repository(this, 'RamRepository', {
      // ECR repository configuration
    });
  }
}