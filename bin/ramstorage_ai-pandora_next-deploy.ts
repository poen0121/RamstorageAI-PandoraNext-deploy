#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { RamstorageAiPandoraNextDeployStack } from '../lib/ramstorage_ai-pandora_next-deploy-stack';

const app = new cdk.App();
new RamstorageAiPandoraNextDeployStack(app, 'RamstorageAiPandoraNextDeployStack', {
  env: {
    account: '752868108147',
    region: 'us-east-1',
  },
});
app.synth();