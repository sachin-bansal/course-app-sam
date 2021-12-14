import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import courses from './db/courses';
import { Course, update } from './models/course'

exports.handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    let eventLogs = JSON.stringify(event);
    console.log(eventLogs);
    
    if (!event.pathParameters?.id) {
        return {
            'statusCode': 400,
            'body': 'Bad Request'
        };
    }
    let id = event.pathParameters.id;
    const course = courses.find(c => c.id === parseInt(id));
    if(!course){
        return {
            'statusCode': 404,
            'body': "A course with given id is not found"
        }
    }
    const index = courses.indexOf(course);
    courses.slice(index, 1);
    return {
        'statusCode': 200,
        'body': JSON.stringify(course)
    }
}