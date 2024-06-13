import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StudentsService {
  constructor(private prisma: PrismaService){}
  create(createStudentDto: CreateStudentDto) {
    return this.prisma.studentOfHogwarts.create({
      data: createStudentDto,
    })
  }

  findAll() {
    return this.prisma.studentOfHogwarts.findMany();
  }

  findOne(id: number) {
    return this.prisma.studentOfHogwarts.findUnique({
      where: { id },
    })
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return this.prisma.studentOfHogwarts.update({
      where: { id },
      data: updateStudentDto,
    })
  }

  remove(id: number) {
    return this.prisma.studentOfHogwarts.delete({
      where: { id },
    })
  }
}
