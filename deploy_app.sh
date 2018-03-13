export AWS_PROFILE=jiangren
npm install
npm run build
aws s3 sync ./dist s3://royren-lms-static-file/dist --grants read=uri=http://acs.amazonaws.com/groups/global/AllUsers --storage-class REDUCED_REDUNDANCY
aws cloudformation package --template-file serverless.yml --s3-bucket royren-lms-artifacts --output-template-file cfn-template.yml
aws cloudformation deploy --template cfn-template.yml --stack-name my-cloud-app --region ap-southeast-2 --capabilities CAPABILITY_IAM
