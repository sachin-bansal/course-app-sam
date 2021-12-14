npm run build

sam package --template-file template.yaml --output-template-file output-template-file.yaml --s3-bucket sachin-aircall-sam

sam deploy --template-file output-template-file.yaml --stack-name course-app-rest-api --capabilities CAPABILITY_IAM