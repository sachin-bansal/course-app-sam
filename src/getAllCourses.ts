import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import courses from './db/courses';
import { Course } from './models/course'

exports.handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    let eventLogs = JSON.stringify(event);
    console.log(eventLogs);
    return {
        'statusCode': 200,
        'body': JSON.stringify(courses)
    }
}