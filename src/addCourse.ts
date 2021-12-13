import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import courses from './db/courses';
import { Course } from './models/course'

exports.handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    let eventLogs = JSON.stringify(event);
    console.log(eventLogs);
    
    if (!event.body) {
        return {
            'statusCode': 400,
            'body': 'Bad Request'
        };
    }
    let id = 0;
    if (courses.length > 0) {
        id = courses[courses.length - 1].id + 1;
    }
    let courseToAdd: Pick<Course, 'name'> = JSON.parse(event.body)
    const course: Course = {
        id: id,
        name: courseToAdd.name
    }
    courses.push(course);
    return {
        'statusCode': 200,
        'body': JSON.stringify(course)
    }
}