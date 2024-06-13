import { ApiProperty } from "@nestjs/swagger"

export class CreateStudentDto {
    @ApiProperty()
    firstName: string;

    @ApiProperty()
    lastName: string;

    @ApiProperty({required: false})
    age?: number;

    @ApiProperty()
    house: string;

    @ApiProperty()
    level: string;
}
