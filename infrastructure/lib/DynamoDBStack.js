import { CfnOutput } from '@aws-cdk/core';
import * as dynamodb from '@aws-cdk/aws-dynamodb';
import * as sst from '@serverless-stack/resources';

export default class DynamoDBStack extends sst.Stack {
  constructor(scope, id, props) {
    super(scope, id, props);
    const app = this.node.root;
    const table = new dynamodb.Table(this, 'Table', {
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
      sortKey: { name: 'noteId', type: dynamodb.AttributeType.STRING },
      partitionKey: { name: 'userId', type: dynamodb.AttributeType.STRING }
    });
    new CfnOutput(this, 'TableName', {
      value: table.tableName,
      exportName: app.logicalPrefixedName('TableName')
    });
    new CfnOutput(this, 'TableArn', {
      value: table.tableName,
      exportName: app.logicalPrefixedName('TableArn')
    });
  }
}