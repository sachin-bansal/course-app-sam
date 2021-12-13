export interface Course{
    readonly id: number;
    name: string;
}
 
export const update = (course : Course, update : Partial<Course>) => {
    if(update.name){
        course.name = update.name;
    }
};


