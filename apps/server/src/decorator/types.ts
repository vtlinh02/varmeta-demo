import { Type } from 'class-transformer'
import { IsNumber, IsOptional, IsString, Min } from 'class-validator'

export class Meta {
  page: number
  page_size: number
  total_pages: number
  total_items: number
}

export class Pagination {
  @IsNumber()
  @IsOptional()
  @Min(1)
  @Type(() => Number)
  page?: number

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  @Min(1)
  page_size?: number

  @IsOptional()
  @IsString()
  order?: string | Object

  @IsOptional()
  @IsString()
  search?: string
}
