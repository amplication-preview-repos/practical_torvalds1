import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ArgsType()
class ShiftCreateDto {
    @Field(() => Number)
    @ApiProperty({
        required: true,
        type: () => Number
    })
    @Type(() => Number)
    smKey!: number;

    @Field(() => Date)
    @Type(() => Date)
    dateTime!: Date;
}

export { ShiftCreateDto as ShiftCreateDto };